# Adapter sieciowy

## Przeznaczenie

*Adapter sieciowy* zapewnia łączność dla określonego *Zasobu*. Stanowi odpowiednik karty sieciowej.

*Adapter sieciowy* musi mieć przypisany *Adres IP* z *Sieci* do której jest przyłączony.

## Cykl życia

### Utworzenie

*Adapter sieciowy* może zostać utworzona wyłącznie podczas przyłączenia do innego *Zasobu*.

### Usuwanie

*Adapter sieciowy* jest usuwany podczas odłączenia od innego *Zasobu*.

## Zarządzanie

### Dedykowane operacje

Dostępne są następujące podstawowe operacje:

 * dodanie *Adresu IP*
 * zastąpienie *Adresu IP*
 * odłączenie *Adresu IP*

#### Dodanie adresu IP

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

#### Zastąpienie adresu IP

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

#### Odłączenie adresu IP

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

## Płatność

 * opłaty są naliczane za ruch sieciowy
 * opłaty za ruch sieciowy są naliczane w zależności od rozmiaru ruchu w GB

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr            | Wartość   | Uwagi
------------------- | --------: | ---
Minimalna prędkość  |   10 Mbps |
Maksymalna prędkość | 1000 Mbps |

[Napisz do nas](/about-us/contact.md) jeżeli masz duży projekt i potrzebujesz zwiększyć te parametry.

### Cennik

Nazwa                       | Okres  | Cena (PLN) | Uwagi
--------------------------- | :----: | ---------: | :----:
ruch przychodzący           |   1h   |     0.0200 | 
ruch wychodząc              |   -    |     0.0000 | 
adapter sieciowy            |   -    |     0.0000 | 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="guide/networking/network-adapter/"/>

### Powiązane produkty

* *[Wirtualna maszyna]()*
* *[Sieć]()*
