# Uruchomienie Wirtualnej Maszyny z Windows i dostępem do Internetu

Przedstawimy w jaki sposób uruchomić [Wirtualnej maszynę](/resource/compute/virtual-machine.md) w [Sieci](/resource/networking/network.md) z zachowaniem możliwości nawiązywnia wychodzących połączeń do *[Sieci](/resource/networking/network.md)* internet.

Na platformie podczas wykorzystywania [rekomendowanych obrazów](/platform/recommended-images.md) z systemami z rodziny Windows wymagane jest wykorzystanie *Sieci* prywatnej. *Wirtualna Maszyna* przyłączona do takiej *Sieci* może posiadać dostęp do Internetu wówczas poprzez wykorzystanie m. in.:

- *[Bramy sieciowej](/resource/networking/network-gateway.md)* w *Sieci*
- *Wirtualnej Maszyny* pełniącej funkcje bramy sieciowej, [zgodnie z samouczkiem](/tutorials/netadp/linux-netgw.md)
- odrębnego *[Adaptera sieciowego](/resource/networking/network-adapter.md)* przyłączonego do *Sieci* Internet
- prywatnego *[Adresu IP](/resource/networking/ip-address.md)* powiązanego z publicznym *Adresem IP*

Teraz poznasz pierwszy z wymienionych sposobów.

```yaml
# render=tutorial
- name: Konfiguracja
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
      after_event: Natychmiast po przyłączeniu *Bramy sieciowej* łączność do internetu winna być możliwa.

- name: Weryfikacja
  block:
    - name: Próba komunikacji sieciowej
      shell:
        cmd: ping 8.8.8.8
```

<!-- Network: https://app.asana.com/0/836013051111576/836509326193072 -->