# Rekomendowane obrazy

// TODO: Move recommended image filter to validation on VM create

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
* połączenie SSH z wykorzystaniem kluczy SSH i hasła wskazanego podczas utworzenia wirtualnej maszyny
* połączenie sieciowe

// TODO: cloud-init - co konfiguruje

cloud-init

* konfiguruje hasła


// TODO: Add example cloud.json file in "Image" article?

## Obrazy Windows

// TODO: google-agent - co konfiguruje

Dostępne są następujące rekomendowane obrazy dla systemów z rodziny Windows:

* MS Windows Server 2016 Standard Desktop Experience
* MS Windows Server 2016 Standard Core
* MS Windows Server 2016 DataCenter Desktop Experience
* MS Windows Server 2016 DataCenter Core

W tych obrazach skonfigurowane jest m.in. :

* agent HyperOne, który zapewnia możliwość resetu hasła poprzez panel
* połączenie sieciowe
