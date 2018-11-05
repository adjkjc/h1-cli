# Ograniczenie dostępu SSH dla wybranych adresów IP

Przedstawimy w jaki sposób ograniczyć dostęp do SSH działającego w *[Wirtualnej Maszynie](/resource/compute/virtual-machine.md)* do wybranych adresów IP z wykorzystaniem *[Zapory sieciowej](/resource/networking/firewall.md)*. 

Dowiesz się także w jaki sposób zmodernizować obecne środowisko, abyś mógł wykorzystywać *Zaporę sieciową* niezależnie od obecnej konfiguracji sieciowej.

*Zapora sieciowa* służy do kontrolowania komunikacji w obu kierunkach (przychodzącej i wychodzącej) z *[Adaptera sieciowego](/resource/networking/network-adapter.md)* w *[Sieci](/resource/networking/network.md)*. Może być przyłączona wyłącznie do *Sieci* prywatnej. Reguły *Zapory sieciowej* mają zastosowanie do wszystkich *Adapterów sieciowych* w *Sieci*, niezależnie czy *Adres IP* komunikacji jest prywatnym *Adresem IP*, czy jest publicznym *Adresem IP* powiązanym z *Adresem IP* w *Sieci*.
 
 To otwiera możliwość wykorzystania *Zapory sieciowej* także do kontroli ruchu z siecią *Internet*.

Między innymi z tego względu rekomendujemy wykorzystywanie *Wirtualnych Maszyn* w *Sieci* prywatnej, także jeżeli mają mieć dostęp do Internet, a nawet same być bezpośrednio osiągalne z *Sieci* Internet.

Jeżeli tworzysz nowe środowisko - w miarę możliwości rekomendujemy wykorzystanie *[Bramy sieciowej](/resource/networking/network-gateway.md)*, która zachowuje izolacje od zagrożeń sieci Internet, a jednocześnie jest łatwiejsza w [utworzenia](/tutorials/netadp/linux-netgw.md) i utrzymaniu od własnej *Wirtualnej maszyny* pełniącą funkcje *Bramy sieciowej*. Wówczas utworzenie *Zapory sieciowej*, przyłączenia jej do *Sieci* oraz prawidłowa konfiguracja reguł pozwoli na sprawną kontrolę ruchu.

Jeżeli posiadasz istniejące środowisko, które dotąd nie wykorzystywało *Sieci* możesz rozpocząć stopniowo z niej korzystać, a od razu samego początku korzystać z możliwości jaką daje *Zapora sieciowa*. Konieczne będzie jedynie wykorzystanie powiązania prywatnego *Adresu IP* z dotychczasowym publicznym *Adresem IP*. Taka operacja nie powinna zakłócić funkcjonowania większości aplikacji sieciowych. Pozwoli natomiast na czerpanie z możliwości *Zapory sieciowej*.

```yaml
# render=tutorial
- name: Przygotowanie środowiska nowego
  block:
    - name: Utwórz *Sieć*
      guide:
        path: /guide/networking/network/creating.md
    - name: Utwórz *Wirtualną Maszynę* przyłączoną do *Sieci*
      guide:
        path: /guide/compute/virtual-machine/creating.md
    - name: Utwórz *Bramę sieciową*
      guide:
        path: /guide/networking/network-gateway/creating.md
    - name: Przyłącz *Bramę sieciową* do *Sieci*
      guide:
        path: /guide/networking/network-gateway/assign-to-network.md
    - name: Utwórz *Wirtualną Maszynę* przyłączoną do *Sieci*
      guide:
        path: /guide/compute/virtual-machine/creating.md

- name: Modyfikacja środowiska dotychczasowego
  block:
    - name: Utrwal wykorzystywany *Adres IP*
      guide:
        path: /guide/networking/ip-address/make-ip-address-persistent.md
      free_text: Operacje powtórz dla każdego *Adresu IP* i każdej *Wirtualnej Maszyny* w której ruch sieciowy chcesz filtrować. 
    - name: Wyłącz *Wirtualną Maszynę*
      guide:
        path: /guide/compute/virtual-machine/turnoff.md
    - name: Usuń *Adapteru sieciowego* z *Wirtualnej Maszyny*
      guide:
        path: /guide/compute/virtual-machine/netadp-remove.md
    - name: Dodaj *Adapter sieciowy* przyłączony do *Sieci*
      guide:
        path: /guide/compute/virtual-machine/netadp-add.md
    - name: Uruchom ponownie *Wirtualną Maszynę*
      guide:
        path: /guide/compute/virtual-machine/turnoff.md
- name: Wprowadzenie kontroli sieciowej
  block:
    - name: Utwórz nową *Zaporę sieciową*
      guide:
        path: /guide/networking/firewall/creating.md
    - name: Przyłącz *Zaporę sieciową* do *Sieci*
      guide:
        path: /guide/networking/firewall/network-attach.md
    - name: Usuń domyślną regułę ruchu przychodzącego dla "SSH"
      guide:
        path: /guide/networking/firewall/rule-delete.md
    - name: Dodaj nową regułę, która dopuści ruch z np. podstawowego biura
      guide_firewall_rule:
        cmd: rule_add
        type: ingress
        action: allow
        priority: 300
        filter: tcp:22
        external: '{external_ip}'
        internal: '*'   
        name: Allow SSH from Primary Office
        variables:
          external_ip: adres IP, który wykorzystujesz do połączenia
    - name: Dodaj nową regułę, która zablokuje pozostały ruch
      guide_firewall_rule:
        cmd: rule_add
        type: ingress
        action: deny
        priority: 250
        filter: tcp:22
        external: 0.0.0.0\0
        internal: '*'
        name: Deny SSH traffic
```
