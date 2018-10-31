# Uruchomienie FreeBSD na Wirtualnej maszynie

Przedstawimy w jaki sposób uruchomić FreeBSD w [Wirtualnej maszynie](/resource/compute/virtual-machine.md).

W przypadku wykorzystania *[Sieci](/resource/networking/network.md)* prywatnych platforma udostępnia protokół DHCP, co znacząco upraszcza konfiguracje sieciową, zo zostanie wykorzystane.

```yaml
# render=tutorial
- name: Konfiguracja
  block:
    - name: Utwórz *Sieć*
      guide:
        path: /guide/networking/network/creating.md
    - name: Utwórz *Bramę sieciową*
      guide:
        path: /guide/networking/network-gateway/creating.md
    - name: Przyłącz *Bramę sieciową* do *Sieci*
      guide:
        path: /guide/networking/network-gateway/assign-to-network.md
      after_event: Natychmiast po przyłączeniu *Bramy sieciowej* łączność do internetu winna być możliwa.
    - name: Pobieranie obrazu dysku 
      free_text:
        text: Przejdź do sekcji "Installer Images" dla amd64 na [strony internetowej produktu](https://www.freebsd.org/where.html). Odszukaj obraz w formacie ``*.iso``
    - name: Utwórz nową *Wirtualną maszynę* bez obrazu, z *Dyskiem* wybranego rozmiaru i przyłączoną do *Sieci*
      guide: 
        path: /guide/compute/virtual-machine/creating.md#utworzenie-wirtualnej-maszyny-bez-zadnego-obrazu-użytkownika
    - name: Wsuń *ISO* do *Wirtualnej Maszyny*
      guide: 
        path: /guide/compute/virtual-machine/dvd-inject.md
    - name: Zresetartuj *Wirtualną Maszynę*
      guide: 
        path: guide/compute/virtual-machine/restart.md
    - name: Przeprowadź instalacje
      free_text: 
        text: W celu bezpiecznej instalacji skorzystaj z [dokumentacji FreeBSD](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/bsdinstall-start.html). Wszelkie etapy przeprowadź wedle uznania i dokumentacji. Konfiguracje sieci IPv4 uruchom w oparciu o DHCP.
    - name: Wysuń ISO z *Wirtualnej Maszyny*
      guide: 
        path: /guide/compute/virtual-machine/dvd-eject.md
    - name: Zresetartuj *Wirtualną Maszynę*
      guide: 
        path: guide/compute/virtual-machine/restart.md
```