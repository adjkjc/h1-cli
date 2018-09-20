# Brama sieciowa

## Przeznaczenie

*Brama sieciowa* zapewnia łączność z *Sieci* do internetu.

## Utworzenie

*Brama sieciowa* może zostać utworzona po spełnieniu następujących warunków:

 * posiadanie w projekcie niewykorzystywanego adresu IP,
 * wszystkie ogólne warunki *utworzenia zasobu*

Utworzenie *Bramy sieciowej* wymaga wskazania *Adresu IP* wcześniej przydzielonego do projektu.

## Usuwanie

*Brama sieciowa* może zostać usunięta po spełnieniu następujących warunków:

 * zasób nie jest przywiązany do żadnej *Sieci*
 * wszystkie ogólne warunki *usunięcia zasobu*

## Zarządzanie

Dla *Bramy sieciowej* charakterystyczne są następujące operacje:

* przyłączenie *Bramy sieciowej* do określonej *Sieci*
* odłączenie *Bramy sieciowej* od określonej *Sieci*

### Przyłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Rozłączony```
* *Projekt* zawiera *Sieć*, która nie ma przyłączonej żadnej bramy domyślnej
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Odłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* znajduje się w stanie ```Przyłączony```
* nie znajduje się w stanie *Ograniczonego użycia*

## Lokalizacja

!!! include(regions.md) !!!

## Cennik

Nazwa           | Okres  | Cena (PLN) | Uwagi
--------------- | :----: | ---------: | :----:
Brama sieciowa  |   -    |     0.0000 | 

<!-- TODO: Service need to be created. -->

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Bramy sieciowej* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/networking/network-gateway/"/>

## Powiązane produkty

* *[Sieć](/resource/networking/network-gateway.md)*