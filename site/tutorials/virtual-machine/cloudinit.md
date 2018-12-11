# Cloud-init w *Wirtualnych Maszynach*

Cloud-init stanowi rozwiązanie umożliwiające wstępne skonfigurowanie *[Wirtualnej Maszyny](/resource/compute/virtual-machine.md)* do pracy już w momencie jej uruchomienia. Dostępne jest w *Wirtualnych Maszynach* uruchomionych z *[Rekomendowanych Obrazów](/platform/recommended-images.md)* bazujących na systemie Linux.

Domyślna konfiguracja *Cloud-init* w *Rekomendowanych Obrazach* zapewnia po utworzeniu instancji z *Obrazu*:

* utworzenie pierwszego użytkownika, z wykorzystaniem hasła lub kluczy SSH,
* konfiguracje łączności sieciowej dla podłączonych *Adapterów sieciowych*,
* aktualizacje lokalnej nazwę hosta (```hostname```) na zgodną z nazwą *Wirtualnej Maszyny* w *Platformie*.

Jak również rozszerza ostatnią partycje dysku systemowego wraz z każdym restartem systemu.

*Cloud-init* przez *Użytkownika* może zostać przykładowo wykorzystany do początkowej konfiguracji oprogramowania w *Wirtualnych Maszyn* uruchomionych w celu obsłużenia krótkotrwałego wzrostu zużycia, albo wprowadzenia standardowych poprawek bezpieczeństwa odpowiadających polityce organizacji. W tym artykule zostanie przedstawione w jaki sposób wykorzystać ten mechanizm do instalacji serwera Apache2 oraz do ustawienia wybranej nazwy hosta przy utworzeniu *Wirtualnej Maszyny*.

W przypadku wykonania własnego *[Obraz](/resource/storage/image.md)* w oparciu o instancje utworzoną na podstawie *Rekomendowanego Obrazu* konfiguracja *Cloud-init* jest przeniesiona, zatem nastąpi aktualizacja nazwę hosta dla każdej nowej instancji, nawet utworzonej z własnego *Obrazu*. Przedstawione zostanie w jaki sposób wpłynąć na to zachowanie poprzez konfiguracje lokalnej konfiguracji cloud-init. 

W celu określenia konfiguracji *Użytkownika* wykorzystywane są *[Metadane](/resource/compute/virtual-machine.md#metadane)* *Użytkownika*. Cloud-init obsługuje [różne formaty wejściowe](https://cloudinit.readthedocs.io/en/latest/topics/format.html#user-data-formats) dla danych użytkownika. Warto wyróżnić w szczególności:

Format                    | Początek pliku                                                | Opis
------------------------- | ------------------------------------------------------------- | ---
Plik konfiguracyjny Cloud | ```#cloud-config``` lub ```Content-Type: text/cloud-config``` |	Ten plik zawiera dane konfiguracyjny Cloud-init, w tym [modułów](https://cloudinit.readthedocs.io/en/latest/topics/modules.html)
Skrypt Shell              |	```#!``` lub ```Content-Type: text/x-shellscript```           | Skrypt powłoki zostanie wykonany na poziomie ```rc.local``` podczas pierwszego uruchomienia.
Zadanie Upstart           | ```#upstart-job``` lub ```Content-Type: text/upstart-job```

Zarządzanie *Metadanymi* jest możliwe:

- podczas utworzenia *Wirtualnej Maszyny* [poprzez narzędzie CLI](/h1-cli/vm.md) z przełącznikiem ```--userdata-file```,
- poprzez [zmianę *Metadanych* *Użytkownika*](/guide/compute/virtual-machine/usermetadata-change.md)

Dziennik zawierający informacje o rezultacie wykonania skryptu zazwyczaj dostępny jest w ścieżce ```/var/log/cloud*```.

## Warunki wstępne

* zainstalowane [narzędzie CLI](/h1-cli/index.md)
* wykorzystanie *Rekomendowanych Obrazów* bazujących na systemie Linux

<!--
Utwórz lokalnie plik ```userdata.sh``` zawierający skrypt instalacyjny:

```#!/bin/bash
set -eux
apt-get update
apt-get install -y apache2
rm /var/www/html/*
echo '<html><body>Hello world!</body></html>' >> /var/www/html/index.html
echo 'Virtual machine setup completed.';
```

Utwórz *Wirtualną Maszynę* z wykorzystaniem *Metadanych* *Użytkownika* z pliku ```userdata.sh``:

```bash
h1 vm create --name test-apache --os-disk ssd,10 --type a1.nano --image ubuntu --ssh my-ssh --userdata-file ./userdata.sh
```

Zweryfikuj wykonanie operacji w dzienniku ```cloud-init```:

```bash
h1 vm ssh --vm test-apache --command 'cat /var/log/cloud*'
```

Zweryfikuj uruchomienie serwera WWW:

```bash
h1 vm ssh --vm test-apache --command 'sudo service apache2 status'
```

Zweryfikuj zapis strony:

```bash
h1 vm ssh --vm test-apache --command 'curl localhost:80'
```
-->

```yaml
# render=tutorial
- name: Utworzenie *Wirtualnej Maszyny* z Apache2
  block:
  - name: Utwórz lokalny, pomocniczy plik
    template:
      dest: userdata.sh
      content: |
        set -eux
        apt-get update
        apt-get install -y apache2
        rm /var/www/html/*
        echo '<html><body>Hello world!</body></html>' >> /var/www/html/index.html
        echo 'Virtual machine setup completed.';
  - name: Utwórz *Wirtualną Maszynę* z wykorzystaniem *Metadanych* *Użytkownika* z pliku ```userdata.sh```
    shell:
      cmd: h1 vm create --name test-apache --os-disk ssd,10 --type a1.nano --image ubuntu --ssh my-ssh --userdata-file ./userdata.sh
  - name: Zweryfikuj wykonanie operacji w dzienniku cloud-init
    shell:
      cmd: h1 vm ssh --vm test-apache --command 'cat /var/log/cloud*'
  - name: Zweryfikuj uruchomienie serwera WWW
    shell: 
      cmd: h1 vm ssh --vm test-apache --command 'sudo service apache2 status'
  - name: Zweryfikuj zapis strony
    shell:
      cmd: h1 vm ssh --vm test-apache --command 'curl localhost:80'
- name: Utworzenie *Wirtualnej Maszyny* z wybraną nazwą hosta
  block:
  - name: Utwórz lokalnie plik ```userdata.cloud``` zawierający skrypt instalacyjny
    template: 
      dest: userdata.cloud
      content: |
        #cloud-config
        preserve_hostname: true
        hostname: fqdn_example
  - name: Utwórz *Wirtualną Maszynę* z wykorzystaniem *Metadanych* *Użytkownika* z pliku ```userdata.sh```
    shell:
      cmd: h1 vm create --name test-hostname --os-disk ssd,10 --type a1.nano --image ubuntu --ssh my-ssh --userdata-file ./userdata.cloud
  - name: Zweryfikuj konfiguracje podstawowej nazwy hosta
    shell:
      cmd: h1 vm ssh --vm test-hostname --command 'hostname'
- name: Wyłączenie aktualizacji nazwy hosta w *Wirtualnej Maszyny*
  block: 
    - name: Utwórz *Wirtualną Maszynę*
      shell:
        cmd: h1 vm create --name test-cfg --os-disk ssd,10 --type a1.nano --image ubuntu --ssh my-ssh
    - name: Zweryfikuj konfiguracje Cloud-init
      shell:
        cmd: "h1 vm ssh --vm test-cfg --command 'sudo sed -i \"s/preserve_hostname: .*/preserve_hostname: true/g\" /etc/cloud/cloud.cfg'"
    - name: Wykonaj *Obraz* z *Wirtualnej Maszyny*
      shell:
        cmd: h1 image create  --name no-preserve-hostname --vm test-cfg
    - name: Utwórz nowy *Wirtualną Maszynę* z *Obrazu*
      shell:
        cmd: "h1 vm create --name test-preserve-hostname --os-disk ssd,10 --type a1.nano --image no-preserve-hostname --ssh my-ssh"
    - name: Zweryfikuj skuteczność wprowadzonych zmian w Cloud-init
      shell:
        cmd: h1 vm ssh --vm test-preserve-hostname --command 'hostname'
      after_event:
        text: Nazwa hosta nie powinna ulec zmianie.
```