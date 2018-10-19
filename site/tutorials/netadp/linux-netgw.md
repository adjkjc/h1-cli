# Konfiguracja bramy sieciowej opartej o system Linux

Przedstawimy w jaki sposób wykorzystać możliwość zarządzania adapterami sieciowymi *[Wirtualnej Maszyny](/resource/compute/virtual-machine.md)* w celu stworzenia własnej bramy sieciowej opartej o system Linux.

Dowiesz się:

- jak zarządzać konfiguracją DHCP w *[Sieci](/resource/networking/network.md)*,
- jak skierować wychodzący ruch sieciowy z *Sieci prywatnej* do Sieci Internet.

## Warunki wstępne

Przed przystąpieniem do konfiguracji powinieneś mieć:

- znajomość łączności SSH w sieci prywatnej, [zgodnie z samouczkiem](/tutorials/network/proxy-command.md)

```yaml
# render=tutorial
- name: Przygotowanie bramy sieciowej
  block:
    - name: Utwórz *Sieć* prywatną
      guide: 
        path: /guide/networking/network/creating.md
    
    - name: Utwórz nową *Wirtualną maszynę* z rekomendowanego obrazu Ubuntu przyłączoną do *Sieci* prywatnej
      guide: 
        path: /guide/compute/virtual-machine/creating.md#utworzenie-z-wykorzystaniem-rekomendowanego-obrazu

    - name: Dodaj *Adapter sieciowy* przyłączony do *Sieci* Internet 
      guide: 
        path: /guide/compute/virtual-machine/netadp-add.md        

- name: Skonfiguruj bramę sieciową
  block:
    - name: Włącz przekierowanie ruchu
      sysctl:
        name: net.ipv4.ip_forward
        value: 1
        state: applied
        
    - name: Zachowaj konfiguracje przekierowania ruchu
      sysctl:
        name: net.ipv4.ip_forward
        value: 1
        state: present

    - name: Skonfigurowanie zapory sieciowej
      shell:
        cmd: iptables -t nat -A POSTROUTING -o eth0 -j SNAT --to 62.181.8.31
    
    - name: Konfigurowanie automatycznego zachowania reguł zapory sieciowej
      apt:
        name: iptables-persistent netfilter-persistent
        state: present
        
    - name: Zachowanie zmian w konfiguracji sieciowej
      shell:
        cmd: netfilter-persistent save 

    - name: Skonfiguruj bramę sieciową w *Sieci*
      guide:
        path: /guide/networking/network/change-network-gateway.md

- name: Konfiguracje węzła sieci
  block:
    - name: Utwórz *Wirtualną maszynę* przyłączoną do *Sieci* prywatnej
      guide:
        path: /guide/storage/disk/creating.md
    
    - name: Zweryfikuj połączenie z Wirtualnej Maszyny pełniącej funkcje węzła sieci
      shell:
        cmd: ping 8.8.8.8
    
    - name: Konfiguracja sieciowa
      free_text:
        text: Jeżeli utworzysz nową Wirtualną Maszyny z wykorzystaniem [rekomendowanego obrazu](/platform/recommended-images.md) konfiguracja trasy do bramy zostanie odnaleziona automatycznie.
```