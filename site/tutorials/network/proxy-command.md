# Połączenie przez jedną *Wirtualną Maszynę* do innej *Wirtualnej Maszyny*

W celu zapewnienia izolacji i ochrony usług krytycznych warto zapewnić ich izolacje od *Sieci* Internet. Jednakże całkowita izolacja usług może poważnie utrudnić administracje. Na pomoc w takim przypadku może przyjść połączenie poprzez wybrany serwer przyłączony do *Sieci* pełniący funkcje bramy. 

Dowiesz się:

- jak skonfigurować automatycznie połączenie do serwera SSH poprzez inny serwer SSH

## Warunki wstępne

Przed przystąpieniem do przewodnika powinieneś mieć:

* utworzoną *Sieć*, [zgodnie z instrukcją](/guide/networking/network/creating.md)
* utworzoną *Wirtualną Maszynę*, [zgodnie z instrukcją](/guide/compute/virtual-machine/creating.md):
    * przyłączoną do *Sieć* prywatnej i *Sieci* publicznej
    * z działającą usługą SSH.
* utworzoną *Wirtualną Maszynę*:
    * przyłączoną do *Sieci* prywatnej,
    * z działającą usługą SSH.
* stacje z klientem SSH

```yaml
# render=tutorial
- name: Zapoznaj się z możliwościami połączenia
  block:
    - name: Uzyskaj połączenie poprzez inny serwer SSH
      shell:
        cmd: ssh gateway-host ssh target-host hostname
    
    - name: Uzyskaj połączenie poprzez serwer SSH wraz z przekazaniem klucza SSH
      shell:
        cmd: ssh -A gateway-host ssh target-host hostname
  
    - name: Uzyskaj połączenie z wykorzystaniem ProxyCommand
      shell:
        cmd: ssh -o ProxyCommand='ssh gateway-host nc targeth-host 22' target-host hostname

- name: Utrwalenie konfiguracji
  block:
    - name: Zmodyfikuj konfiguracje klienta SSH
      template: 
        dest: ~/.ssh/config
        content: |
          Host {name}
            HostName {target_host}
            ForwardAgent
            ProxyCommand ssh {gateway_host} nc %h %p
        variables:
          name: przyjazna nazwa serwera
          target_host: docelowy serwer
          gateway_host: serwer pełniący funkcje bramy
    - name: Zweryfikuj połączeneie
      shell:
        cmd: ssh {name}
```