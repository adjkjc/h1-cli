# Zapora sieciowa

## Przeznaczenie

*Zapora sieciowa* może być używana jako sposób kontrolowania komunikacji w obu kierunkach (przychodzącej i wychodzącej) z *[Wirtualnej maszyny](/resource/compute/virtual-machine.md)* do przyłączonej *[Sieci](/resource/networking/network.md)*.

## Cykl życia

### Utworzenie

*Zapora sieciowa* może zostać utworzona po spełnieniu następujących warunków:

 * wszystkie *ogólne* warunki

### Usuwanie

*Zapora sieciowa* może zostać usunięta po spełnieniu następujących warunków:

 * nie jest przywiązany do żadnej *Sieci*
 * wszystkie *ogólne* warunki

## Zarządzanie

### Dedykowane operacje

Dostępne są następujące podstawowe operacje:

 * Przyłączenia zapory sieciowej do *[Sieci](/resource/networking/network.md)*
 * Odłączenia zapory sieciowej od *[Sieci](/resource/networking/network.md)*
 * Dodanie reguły zapory sieciowej kontrolującej ruch przychodzący albo wychodzący
 * Usunięcie reguły zapory sieciowej kontrolującej ruch przychodzący albo wychodzący

W przypadku usunięcia wszystkich reguł mają zastosowanie następujące zasady:

 * ruch przychodzący jest zablokowany
 * ruch wychodzący jest dozwolony, jednak serwer nie może uzyskać potwierdzenia odbioru pakietów, które nie zostały dopuszczone przez jakąkolwiek reguły wychodzącego.

#### Przyłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* poprawnie utworzona *Sieć*, [zgodnie z przewodnikiem](/guide/networking/network/creating.md)
* zasób znajduje się w stanie ```Rozłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

#### Odłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Przyłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

#### Dodanie reguły

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Rozłączony``` lub ```Przyłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

#### Usunięcie reguły

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Rozłączony``` lub ```Przyłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dostępne są następujące typowe operacje:

 * Możliwość zmiany wyświetlanej nazwy

## Ograniczone 

W przypadku ograniczonego użycia:

 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczonego-uzycia)*.

## Przekazanie

Przekazanie jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujące warunków:

 * stan jest ``Rozłączony``

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr                                      | Wartość 
--------------------------------------------- | ------:
Maksymalna liczba reguł ruchu przychodzącego  | 50
Maksymalna liczba reguł ruchu wychodzącego    | 50
Maksymalna liczba filtrów w regule            | 10 
Maksymalna liczba stref wewnętrznych w regule | 10
Maksymalna liczba stref zewnętrznych w regule | 10

[Napisz do nas](/about-us/contact.md) jeżeli masz duży projekt i potrzebujesz zwiększyć te parametry.

## Cennik

Wartość         | Okres  | Cena (PLN) | Uwagi
--------------- | :----: | ---------: | ----
zapora sieciowa |   -    |     0.0000 | <!-- TODO: Add service -->

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="guide/networking/firewall/"/>

## Powiązane produkty

* *[Sieć](/resource/networking/network.md)*
* *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*
