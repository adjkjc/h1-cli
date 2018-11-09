# Rekomendowane obrazy

Rekomendowane *Obrazy* stanowią ułatwienie w tworzeniu *Wirtualnych maszyn* z konfiguracją zapewniającą optymalne wykorzystanie właściwości platformy np. w zakresie łączności sieciowej, możliwości resetu hasła. Dzięki nim możesz znacząco skrócić czas do rozpoczęcia pracy. Każdy obraz jest codziennie odświeżany, aby zawsze zawierał najnowsze aktualizacje bezpieczeństwa.

Rekomendowane obrazy są zapewniane dla systemów operacyjnych z następujących rodzin:

* Linux
* Windows

## Obrazy Linux

Dostępne są następujące rekomendowane obrazy dla systemów z rodziny Linux:

<ImageList name_re="^((?!Windows).)*$"/>

W tych obrazach skonfigurowane jest m.in.:

* zainstalowane wszystkie aktualizacje
* skonfigurowany bootloader
* zainstalowany dostosowany ```cloud-init```, który wykorzystując [Metadane](/resource/compute/virtual-machine.md#Metadane):
    * utworzy pierwszego użytkownika
    * zapiszę hasła lub kluczy SSH pierwszego użytkownika
    * konfiguruje łączność sieciową
    * ustawia nazwę hosta na nazwę instancji
    * rozszerza ostatnią partycji dysku systemowego wraz z każdym restartem systemu

Zdalny dostęp możliwy jest z wykorzystaniem protokołu SSH (Secure Shell).

## Obrazy Windows

Dostępne są następujące rekomendowane obrazy dla systemów z rodziny Windows:

<ImageList name_re="Windows"/>

W tych obrazach skonfigurowane są następujące elementy:

* zainstalowane wszystkie aktualizacje i skonfigurowane automatyczne aktualizacje systemu
* skonfigurowany bootloader
* ustawiona strefa czasowa CET
* wyłączona obsługę IPv6
* zainstalowany menadżer pakietów [GooGet](https://github.com/google/googet) i skonfigurowany z repozytorium HyperOne
* w celu dostarczenia dostosowanego [agenta HyperOne](https://github.com/hyperonecom/compute-image-windows) zainstalowane następujące pakiety GooGet:
    * google-compute-engine-windows, który odpowiada za możliwość utworzenia konta użytkownika
    * google-compute-engine-sysprep, który odpowiada za następujące operacje:
        * aktywacja systemu w Microsoft Windows Key Management Service
    * google-compute-engine-auto-updater
* agent HyperOne, który:
    * ustawia nazwę hosta na nazwę instancji.
    * uruchamia dostarczony przez użytkownika skrypt startowy z [Metadanych](/resource/compute/virtual-machine.md#Metadane) użytkownika.
    * aktywuje system Windows przy użyciu serwera KMS.
    * konfiguruje RDP i WinRM, aby umożliwić zdalne logowanie.

Do ich poprawne działania wymagane jest wykorzystanie [Sieci](/resource/networking/network.md) prywatnej, lecz możliwe jest uzyskanie dostępu do Internetu np. poprzez [bramę sieciową](/resource/networking/network-gateway.md), albo odrębny [Adapter sieciowy](/resource/networking/network-adapter.md).

Zdalny dostęp możliwy jest z wykorzystaniem protokołu RDP (Remote Desktop Protocol).