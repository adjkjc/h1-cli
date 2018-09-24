# Zapora sieciowa

## Przeznaczenie

*Zapora sieciowa* służy do kontrolowania komunikacji w obu kierunkach (przychodzącej i wychodzącej) z *[Wirtualnej maszyny](/resource/compute/virtual-machine.md)* do przyłączonej *[Sieci](/resource/networking/network.md)*.

## Cykl życia

### Utworzenie

*Zapora sieciowa* może zostać utworzona po spełnieniu następujących warunków:

 * wszystkie ogólne warunki *utworzenia zasobu*

### Usuwanie

*Zapora sieciowa* może zostać usunięta po spełnieniu następujących warunków:

 * nie jest przywiązana do żadnej *Sieci*
 * wszystkie ogólne warunki *usunięcia zasobu*

## Zarządzanie

Dla *Zapory sieciowej* charakterystyczne są następujące operacje:

 * przyłączenie zapory sieciowej do *[Sieci](/resource/networking/network.md)*
 * odłączenie zapory sieciowej od *[Sieci](/resource/networking/network.md)*
 * dodanie reguły zapory sieciowej kontrolującej ruch przychodzący albo wychodzący
 * usunięcie reguły zapory sieciowej kontrolującej ruch przychodzący albo wychodzący

W przypadku usunięcia wszystkich reguł mają zastosowanie następujące zasady:

 * ruch przychodzący jest zablokowany
 * ruch wychodzący jest dozwolony, jednak serwer nie może uzyskać potwierdzenia odbioru pakietów, które nie zostały dopuszczone przez jakąkolwiek regułę wychodzącą

#### Przyłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * poprawnie utworzona *Sieć*, [zgodnie z przewodnikiem](/guide/networking/network/creating.md)
 * *Zapora sieciowa* znajduje się w stanie ```Rozłączony```
 * *Zapora sieciowa* nie znajduje się w stanie *Ograniczonego użycia*

#### Odłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Zapora sieciowa* znajduje się w stanie ```Przyłączony```
 * *Zapora sieciowa* nie znajduje się w stanie *Ograniczonego użycia*

#### Dodanie reguły

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Zapora sieciowa* znajduje się w stanie ```Rozłączony``` lub ```Przyłączony```
 * *Zapora sieciowa* nie znajduje się w stanie *Ograniczonego użycia*

#### Usunięcie reguły

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Zapora sieciowa* znajduje się w stanie ```Rozłączony``` lub ```Przyłączony```
 * *Zapora sieciowa* nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dla *Zapory sieciowej* dostępne są następujące typowe operacje:

 * zmiana wyświetlanej nazwy

## Ograniczone użycie

W przypadku ograniczonego użycia:

 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczonego-uzycia)*

## Przekazanie

Przekazanie jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujące warunków:

 * stan jest ``Rozłączony``

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr                                      | Wartość 
--------------------------------------------- | ------:
maksymalna liczba reguł ruchu przychodzącego  | 50
maksymalna liczba reguł ruchu wychodzącego    | 50
maksymalna liczba filtrów w regule            | 10 
maksymalna liczba stref wewnętrznych w regule | 10
maksymalna liczba stref zewnętrznych w regule | 10

W razie potrzeby zwiększenia zaproponowanych parametrów [prosimy o kontakt](/about-us/contact.md).

## Cennik

Wartość         | Okres  | Cena (PLN) | Uwagi
--------------- | :----: | ---------: | ----
zapora sieciowa |   -    |     0.0000 | <!-- TODO: Add service -->

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Zapory sieciowej* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/networking/firewall/"/>

## Powiązane produkty

 * *[Sieć](/resource/networking/network.md)*
 * *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*
