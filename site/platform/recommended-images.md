# Rekomendowane obrazy

Rekomendowane *Obrazy* stanowią ułatwienie w tworzeniu *Wirtualnych maszyn* z konfiguracją zapewniającą optymalne wykorzystanie właściwości platformy np. w zakresie łączności sieciowej, możliwości resetu hasła. Dzięki nim możesz znacząco skrócić czas do rozpoczęcia pracy. Każdy obraz jest codziennie odświeżany, aby zawsze zawierał najnowsze aktualizacje bezpieczeństwa. 

Rekomendowane obrazy są zapewniane dla systemów operacyjnych z następujących rodzin:

* Linux
* Windows

## Obrazy Linux

Dostępne są następujące rekomendowane obrazy dla systemów z rodziny Linux:

* Debian GNU/Linux 8 (jessie)
* Debian GNU/Linux 9 (stretch)
* Ubuntu 16.04 (xenial xerus)
* Ubuntu 16.04 Desktop (xenial xerus)
* Ubuntu 17.04 (zesty zapus)
* Ubuntu 17.10 (artful aardvark)
* Ubuntu 18.04 (bionic beaver)
* Ubuntu 18.04 Desktop (bionic beaver)
* CentOS 6
* CentOS 7
* Fedora 27

W tych obrazach skonfigurowane jest m.in.:

* zainstalowane wszystkie aktualizacje
* skonfigurowany bootloader
* zainstalowany dostosowany ```cloud-init```, co umożliwia wykorzystanie [Metadanych](/resource/compute/virtual-machine.md#Metadane) w celu:
    * utworzenie pierwszego użytkownika
    * zapisania hasła lub kluczy SSH pierwszego użytkownika
    * konfiguracja łączności sieciowej

Zdalny dostęp możliwy jest z wykorzystaniem protokołu SSH (Secure Shell).

## Obrazy Windows

Dostępne są następujące rekomendowane obrazy dla systemów z rodziny Windows:

* MS Windows Server 2016 Standard Desktop Experience
* MS Windows Server 2016 Standard Core
* MS Windows Server 2016 DataCenter Desktop Experience
* MS Windows Server 2016 DataCenter Core

W tych obrazach skonfigurowane są następujące elementy:

* zainstalowane wszystkie aktualizacje i skonfigurowane automatyczne aktualizacje systemu
* skonfigurowany bootloader
* ustawiona strefa czasowa CET
* zainstalowany menadżer pakietów [GooGet](https://github.com/google/googet) i skonfigurowany z repozytorium HyperOne
* w celu dostarczenia dostosowanego [https://github.com/hyperonecom/compute-image-windows](GCEWindowsAgent) zainstalowane następujące pakiety GooGet:
    * google-compute-engine-windows, który odpowiada za możliwość utworzenia konta użytkownika
    * google-compute-engine-sysprep, który odpowiada za następujące operacje:
        * aktywacja systemu w Microsoft Windows Key Management Service
    * google-compute-engine-auto-updater
* wyłączona obsługę IPv6
* agent HyperOne, który zapewnia możliwość resetu hasła poprzez panel

Zdalny dostęp możliwy jest z wykorzystaniem protokołu RDP (Remote Desktop Protocol).