# Adapter sieciowy

## Przeznaczenie

*Adapter sieciowy* zapewnia łączność określonemu *Zasobowi*. Stanowi odpowiednik karty sieciowej.

Główne zalety:

 * może wykorzystywać równocześnie wiele [adresów IP](/resource/networking/ip-address.md)
 * wysoka przepustowość sieciowa - do 1000 Mbps

Przykładowe zastosowania:
 
 * świadczenie usług sieciowych
 * utworzenie bramy sieciowej pomiędzy [Sieciami](/resource/networking/network.md)
 
## Cykl życia

### Utworzenie

*Adapter sieciowy* może zostać utworzony wyłącznie podczas przyłączenia do innego *Zasobu*.

*Adapter sieciowy* musi mieć przypisany *Adres IP* z *Sieci*, do której jest przyłączony.

### Usuwanie

*Adapter sieciowy* jest usuwany podczas odłączenia od innego *Zasobu*.

## Zarządzanie

Dla *Adapteru sieciowego" charakterystyczne są następujące operacje:

 * dodanie *Adresu IP*
 * zastąpienie *Adresu IP*
 * odłączenie *Adresu IP*

#### Dodanie adresu IP

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Adapter sieciowy* znajduje się w stanie ```Online```
 * *Adapter sieciowy* nie znajduje się w stanie *Ograniczonego użycia*

#### Zastąpienie adresu IP

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Adapter sieciowy* znajduje się w stanie ```Online```
 * *Adapter sieciowy* nie znajduje się w stanie *Ograniczonego użycia*

#### Odłączenie adresu IP

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Adapter sieciowy* znajduje się w stanie ```Online```
 * *Adapter sieciowy* nie znajduje się w stanie *Ograniczonego użycia*

## Opłaty

Opłaty naliczane są za ruch sieciowy - w zależności od rozmiaru ruchu w GB.

## Lokalizacja

!!! include(regions.md) !!!

<!-- 
Transfer is not availabe due following reason:
- netadp is included in virtual-machine as composite resource
-->

## Parametry techniczne

Parametr            | Wartość   | Uwagi
------------------- | --------: | ---
Minimalna prędkość  |   10 Mbps |
Maksymalna prędkość | 1000 Mbps |

W razie potrzeby zwiększenia zaproponowanych parametrów [prosimy o kontakt](/about-us/contact.md).

### Cennik

Nazwa                       | Okres  | Cena (PLN) | Uwagi
--------------------------- | :----: | ---------: | :----:
ruch przychodzący           |  1 h   |     0.0200 | 
ruch wychodzący             |   -    |     0.0000 | 
adapter sieciowy            |   -    |     0.0000 | 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Adaptera sieciowego* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/networking/network-adapter/"/>

### Powiązane produkty

 * *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*
 * *[Sieć](/resource/networking/network.md)*
