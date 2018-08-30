# Sieć

## Przeznaczenie

*Sieć* może być używana jako sposób izolacji i segmentacji platformy w celu ograniczenia komunikacji zasobów.

## Cykl życia

### Utworzenie

*Sieć* może zostać utworzona, w przypadku spełnienia następujących warunków:

 * wszystkie *ogólne* warunki.

### Usuwanie

*Sieć* może zostać usunięta, w przypadku spełnienia następujących warunków:

 * nie istnieją przyłączone do niej *[Adaptery sieciowe](/resource/networking/network-adapter.md)*
 * wszystkie *ogólne* warunki

## Zarządzanie

Dostępne są następujące dedykowane operacje

* Ustawienie serwerów DNS w protokole DHCP
* Ustawienie bramy domyślnej w protokole DHCP

### Ustawienie serwera DNS

Operacja może zostać wykonana, w przypadku spełnienia następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Ustawienie bramy domyślnej DNS

Operacja może zostać wykonana, w przypadku spełnienia następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dostępne są następujące typowe operacje:

* Możliwość zmiany wyświetlanej nazwy

## Płatność

 * opłaty są naliczane na podstawie czasu.

## Lokalizacja

!!! include(regions.md) !!!

## Cennik

Nazwa              | Okres  | Cena (PLN) | Uwagi
------------------ | :----: | ---------: | :----:
Sieć               |   1h   |    0.08260 | 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

<PageList path_re="guide/networking/network/"/>

## Powiązane produkty

 * *[Wirtualna maszyna]()*