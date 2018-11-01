# Uruchomienie FreeBSD na Wirtualnej maszynie

Przedstawimy w jaki sposób uruchomić FreeBSD w [Wirtualnej maszynie](/resource/compute/virtual-machine.md).

W przypadku wykorzystania *[Sieci](/resource/networking/network.md)* dostępny jest protokół DHCP, co znacząco upraszcza konfiguracje sieciową, co zostanie wykorzystane.

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
    - name: Ustal adres URL dla *ISO*
      free_text:
        text: Przejdź [strony internetowej produktu](https://www.freebsd.org/where.html). W sekcji "Installer Images" wybierz ```amd64```. Odszukaj obraz DVD w formacie ``*.iso`` i go skopiuj, gdyż będzie konieczny w kolejnym etapie.
    - name: Utwórz nowe *ISO* na podstawie URL
      guide:
        path: /guide/storage/iso/creating.md
    - name: Utwórz nową *Wirtualną maszynę* z dowolnym *Obrazem*, z *Dyskiem* wybranego rozmiaru i przyłączoną do *Sieci*
      guide:
        path: /guide/compute/virtual-machine/creating.md
    - name: Wsuń *ISO* do *Wirtualnej Maszyny*
      guide: 
        path: /guide/compute/virtual-machine/dvd-inject.md
    - name: Zresetartuj *Wirtualną Maszynę*
      guide:
        path: /guide/compute/virtual-machine/restart.md
    - name: Przeprowadź instalacje
      free_text: 
        text: W celu bezpiecznej instalacji skorzystaj z [dokumentacji FreeBSD](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/bsdinstall-start.html). Wszelkie etapy przeprowadź wedle uznania i dokumentacji. Skonfiguruj sieć IPv4 w oparciu o DHCP.
    - name: Wysuń ISO z *Wirtualnej Maszyny*
      guide: 
        path: /guide/compute/virtual-machine/dvd-eject.md
    - name: Zresetartuj *Wirtualną Maszynę*
      guide:
        path: /guide/compute/virtual-machine/restart.md
```