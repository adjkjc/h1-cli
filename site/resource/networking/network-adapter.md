# Adapter sieciowy

## Przeznaczenie

*Adapter sieciowy* zapewnia łączność określonemu *Zasobowi*. Stanowi odpowiednik karty sieciowej. *Adapter sieciowy* musi mieć przypisany *Adres IP* z *Sieci*, do której jest przyłączony.

Główne zalety:

Przykładowe zastosowania:

## Cykl życia

### Utworzenie

*Adapter sieciowy* może zostać utworzony wyłącznie podczas przyłączenia do innego *Zasobu*.

### Usuwanie

*Adapter sieciowy* jest usuwany podczas odłączenia od innego *Zasobu*.

## Zarządzanie

Dla *Adapteru sieciowego" charakterystyczne są następujące operacje:

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

## Opłaty

Opłaty naliczane są za ruch sieciowy - w zależności od rozmiaru ruchu w GB.

## Lokalizacja

!!! include(regions.md) !!!

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
ruch wychodzący              |   -    |     0.0000 | 
adapter sieciowy            |   -    |     0.0000 | 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Adaptera sieciowego* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/networking/network-adapter/"/>

### Powiązane produkty

* *[Wirtualna maszyna]()*
* *[Sieć]()*