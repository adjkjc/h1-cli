# Migracja fizycznego serwera Windows

Przedstawimy w jaki sposób przenieść istniejący fizyczny serwer Windows do *[Wirtualnej Maszyny](/resource/compute/virtual-machine.md)* wraz z całym systemem operacyjnym i działającymi aplikacjami.

W tym celu wykorzystamy program [Disk2vhd](https://docs.microsoft.com/en-us/sysinternals/downloads/disk2vhd), który umożliwi nam wykonanie obrazu dysku w formacie ```*.vhdx```. Na podstawie obrazu dysku zostanie utworzony *[Dysk](/resource/storage/disk.md)* w celu wykorzystania go z *Wirtualną Maszyną*.

## Warunki wstępne

Przed przystąpieniem do operacji powinieneś mieć:

* serwer fizyczny z Microsoft Windows Server 2016
* zainstalowane [CLI](/h1-cli)

```yaml
# render=tutorial
- name: Konfiguracja
  block:
    - name: Pobierz program Disk2vhd
      free_text:
        text: Przejdź do strony [producenta programu Disk2vhd](https://docs.microsoft.com/en-us/sysinternals/downloads/disk2vhd). Pobierz najnowszą wersje narzędzia na migrowany serwer.
    - name: Wykonaj obraz programem Disk2vhdd
      free_text:
        text: >
          Uruchom program. Wybierz partycje, które chcesz zmigrować. Pamiętaj, aby przenieść partycje systemu operacyjnego.
          Koniecznie zaznacz "Use vhdx". Po wykonaniu operacji nie próbuj montować pliku obrazu, gdyż możesz go uszkodzić.
    - name: Utwórz nowy *Dysk* poprzez import powstałego pliku obrazu
      guide:
        path: /guide/storage/disk/creating.md#utworzenie-dysku-poprzez-import
    - name: Utwórz nową *Wirtualną maszynę* bez *Obrazu*
      guide:
        path: /guide/compute/virtual-machine/creating.md#utworzenie-wirtualnej-maszyny-bez-zadnego-obrazu-użytkownika
    - name: Dołącz *Dysk* do *Wirtualnej Maszyny*
      guide:
        path: /guide/compute/virtual-machine/disk-attach.md
- name: Weryfikacja
  block:
    - name: Uzyskaj dostęp do konsoli *Wirtualnej maszyny*
      guide:
        path: /guide/compute/virtual-machine/console.md
```