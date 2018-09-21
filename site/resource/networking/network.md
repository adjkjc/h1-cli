# Sieć

## Przeznaczenie

*Sieć* może być używana jako sposób izolacji i segmentacji platformy w celu ograniczenia komunikacji zasobów.

## Cykl życia

### Utworzenie

*Sieć* może zostać utworzona po spełnieniu następujących warunków:

 * wszystkie *ogólne* warunki.

### Usuwanie

*Sieć* może zostać usunięta po spełnieniu następujących warunków:

 * nie istnieją przyłączone do niej *[Adaptery sieciowe](/resource/networking/network-adapter.md)*
 * wszystkie *ogólne* warunki

## Zarządzanie

Dostępne są następujące podstawowe operacje

* Ustawienie serwerów DNS w protokole DHCP i [metadanych](/resource/compute/virtual-machine.md#metadane)
* Ustawienie bramy domyślnej w protokole DHCP i [metadanych](/resource/compute/virtual-machine.md#metadane)

### Ustawienie serwera DNS

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Ustawienie bramy domyślnej DNS

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dostępne są następujące typowe operacje:

* Możliwość zmiany wyświetlanej nazwy

## Opłaty

 * opłaty są naliczane na podstawie czasu.

## Przekazanie

Przekazanie jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujące warunków:

 * nie istnieją przyłączone do niej *Adaptery sieciowe*
 * wszystkie *ogólne warunki*

## Lokalizacja

!!! include(regions.md) !!!

## Cennik

Nazwa              | Okres  | Cena (PLN) | Uwagi
------------------ | :----: | ---------: | :----:
sieć               |   1h   |    0.08260 | 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="guide/networking/network/"/>

## Powiązane produkty

 * *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*