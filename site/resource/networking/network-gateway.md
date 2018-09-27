# Brama sieciowa

## Przeznaczenie

*Brama sieciowa* zapewnia łączność z *Sieci* do internetu.

Główne zalety:

* prostsze niż utworzenie i utrzymanie własnej [Wirtualnej maszyny](/resource/compute/virtual-machine.md)
* zachowuje izolacje od zagrożeń sieci internet

Przykładowe zastosowania:

* możliwość komunikacji do internetu z [Wirtualnych maszynych](/resource/networking/network-adapter.md) w [Sieci](/resource/networking/network.md)
* pobieranie oprogramowania na [Wirtualne maszyny](/resource/networking/network-adapter.md) w [Sieci](/resource/networking/network.md)
* ukrycie liczby komputerów nawiązujących komunikacje - wszystkie są widoczne pod adresem bramy sieciowej

## Cykl życia

*Brama sieciowa* może zostać utworzona po spełnieniu następujących warunków:

 * *Brama sieciowa* nie jest przywiązany do żadnej *Sieci*
 * wszystkie ogólne warunki *usunięcia zasobu*
 * wszystkie ogólne warunki *utworzenia zasobu*

## Zarządzanie

Dla *Bramy sieciowej* charakterystyczne są następujące operacje:

 * przyłączenie *Bramy sieciowej* do określonej *Sieci*
 * odłączenie *Bramy sieciowej* od określonej *Sieci*

### Przyłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Brama sieciowa* znajduje się w stanie ```Online```
 * *Brama sieciowa* nie znajduje się w stanie *Ograniczonego użycia*

### Odłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Brama sieciowa* znajduje się w stanie ```Online```
 * *Brama sieciowa* nie znajduje się w stanie *Ograniczonego użycia*

## Opłaty

Opłaty naliczane są za ruch sieciowy - w zależności od rozmiaru ruchu w GB.

## Lokalizacja

!!! include(regions.md) !!!

<!--
Transfer is not availabe due following reason:
- required validation of licensing
- vm is composite of multiple resources
-->

## Parametry techniczne

Parametr            | Wartość   | Uwagi
------------------- | --------: | ---
Minimalna prędkość  |   10 Mbps |
Maksymalna prędkość | 1000 Mbps |

W razie potrzeby zwiększenia zaproponowanych parametrów [prosimy o kontakt](/about-us/contact.md).

## Cennik

Nazwa           | Okres                  | Cena (PLN)            | Uwagi
--------------- | :--------------------: | --------------------: | :----:
brama sieciowa  | [PERIOD="netgw:netgw"] | [PRICE="netgw:netgw"] |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Bramy sieciowej* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/networking/network-adapter/"/>

### Powiązane produkty

 * *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*
 * *[Sieć](/resource/networking/network.md)*