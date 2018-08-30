# Obraz

## Przeznaczenie

*Obraz* to uchwycony w momencie czasu stan *Dysków* dołączonych do *Wirtualnej maszyny* z których został utworzony. Może być wykorzystywany jako podstawa do nowej *[Wirtualnej maszyny](/resource/compute/virtual-machine.md)* lub pełnej kopii danych.

## Cykl życia

### Utworzenie

*Obraz* może zostać utworzony, w przypadku spełnienia następujących warunków: 

* *Wirtual machine* jest w stanie `Pracująca` lub `Wyłączona`
* wszystkie *ogólne* warunki

*Obraz* tworzony jest na podstawie istniejącej *Wirtualnej maszyny*.

Chociaż utworzenie *Obrazu* kiedy *Wirtualna maszyna* jest w stanie `Pracująca` możliwe to ze względu na spójność danych zalecane jest tworzenie *Obrazu*, gdy *Wirtualna maszyna* jest w stanie `Wyłączona`.

### Usuwanie

Obraz może zostać usunięty, w przypadku spełnienia następujących warunków: 

* wszystkie *ogólne* warunki

## Zarządzanie

### Typowe operacje

Dostępne są następujące typowe operacje:

* możliwość zmiany wyświetlanej nazwy
* zarządzanie *Tagami*

## Opłaty

* Opłaty są naliczane na podstawie rozmiaru danych i czasu

    * Wielkość danych w jednostkach GB
    * Czas w okresach rozliczeniowych jednej godziny

* Opłaty są obliczane dla każdego GB w danym okresie rozliczeniowym

## Ograniczone użycie

!!! include(standard-limited-usage.md) !!!

## Przekazanie

Przekazanie jest możliwe między *Projektami* tej samej lub innej *Organizacji*, w przypadku spełnienia następujących warunków:

* wszystkie *ogólne* warunki

## Udostępnianie

Udostępnianie jest możliwe między *Projektami* tej samej lub różnej *Organizacji* zgodnie z *[Ogólnymi zasadami udostępnianie zasobów]()*.

!!! include(access.md) !!!

## Lokalizacje

!!! include(regions.md) !!!

## Cennik

Nazwa              | Okres  | Cena (PLN) | Uwagi
------------------ | :----: | ---------: | :----:
obraz              |   1h   |     0.0002 | 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

<PageList path_re="guide/storage/image/"/>

## Powiązane produkty

* *[Wirtualna maszyna]()*
* *[Dysk]()*
