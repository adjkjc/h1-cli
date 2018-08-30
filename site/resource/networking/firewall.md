# Zapora sieciowa

## Przeznaczenie

*Zapora sieciowa* może być używana jako sposób kontrolowania komunikacji w obu kierunkach (przychodzącej i wychodzącej) z *[Wirtualnej maszyny]()* do przyłączonej *[Sieci]()*.

## Cykl życia

### Utworzenie

*Zapora sieciowa* może zostać utworzona, w przypadku spełnienia następujących warunków:

 * wszystkie *ogólne* warunki

### Usuwanie

*Zapora sieciowa* może zostać usunięta, w przypadku spełnienia następujących warunków:

 * nie jest przywiązany do żadnej *Sieci*
 * wszystkie *ogólne* warunki

## Zarządzanie

### Dedykowane operacje

Dostępne są następujące dedykowane operacje:

 * Przyłączenia zapory sieciowej do *[Sieci](/resource/networking/network.md)*
 * Odłączenia zapory sieciowej od *[Sieci](/resource/networking/network.md)*
 * Dodanie reguły zapory sieciowej kontrolującej ruch przychodzący albo wychodzący
 * Usunięcie reguły zapory sieciowej kontrolującej ruch przychodzący albo wychodzący

W przypadku usunięcia wszystkich reguł mają zastosowanie następujące zasady:

 * ruch przychodzący jest zablokowany
 * ruch wychodzący jest dozwolony, jednak serwer nie może uzyskać potwierdzenia odbioru pakietów, które nie zostały dopuszczone przez jakąkolwiek reguły wychodzącego.

#### Przyłączenie

Operacja może zostać wykonana, w przypadku spełnienia następujących warunków: 

* zasób znajduje się w stanie ```Rozłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

#### Odłączenie

Operacja może zostać wykonana, w przypadku spełnienia następujących warunków: 

* zasób znajduje się w stanie ```Przyłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

#### Dodanie reguły

Operacja może zostać wykonana, w przypadku spełnienia następujących warunków: 

* zasób znajduje się w stanie ```Rozłączony``` lub ```Przyłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

#### Usunięcie reguły

Operacja może zostać wykonana, w przypadku spełnienia następujących warunków: 

* zasób znajduje się w stanie ```Rozłączony``` lub ```Przyłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dostępne są następujące typowe operacje:

 * Możliwość zmiany wyświetlanej nazwy

## Ograniczone 

W przypadku ograniczonego użycia:

 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/resource/general.md)*.

## Przekazanie

Przekazanie jest możliwe między *Projektami* tej samej lub innej *Organizacji*, w przypadku spełnienia następujące warunków:

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

[Napisz do nas](/TODO) jeżeli masz duży projekt i potrzebujesz zwiększyć te parametry.

## Cennik

Wartość         | Okres  | Cena (PLN) | Uwagi
--------------- | :----: | ---------: | ----
zapora sieciowa |   -    |     0.0000 | TODO: Add service

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

<PageList path_re="guide/networking/firewall/"/>

## Powiązane produkty

* *[Sieci]()*
* *[Wirtualne maszyny]()*