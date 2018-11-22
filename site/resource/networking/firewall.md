# Zapora sieciowa

## Przeznaczenie

*Zapora sieciowa* służy do kontrolowania komunikacji w obu kierunkach (przychodzącej i wychodzącej) z *[Adaptera sieciowego](/resource/networking/network-adapter.md)* w *[Sieci](/resource/networking/network.md)*.

Główne zalety:

 * niezależny od systemu operacyjnego w *Wirtualnej Maszynie*
 * centralnie zarządzany na poziomie *Sieci*
 * zwiększa skuteczność obowiązujących polityk sieciowych
 * możliwy także do wykorzystania do kontroli ruchu na publicznych *Adresach IP* powiązanych z *Adresami IP* w *Sieci*

Przykładowe zastosowania:

 * ograniczenie dostępu do usług
 * udostępnienie usług do wybranych zakresów sieciowych

## Cykl życia

### Utworzenie

*Zapora sieciowa* może zostać utworzona po spełnieniu następujących warunków:

 * wszystkie [ogólne warunki utworzenia *Zasobu*](/platform/resource.md#utworzenie)

### Usuwanie

*Zapora sieciowa* może zostać usunięta po spełnieniu następujących warunków:

 * nie jest przywiązana do żadnej *Sieci*
 * wszystkie [ogólne warunki usunięcia *Zasobu*](/platform/resource.md#usuniecie)

## Zarządzanie

Dla *Zapory sieciowej* charakterystyczne są następujące operacje:

 * przyłączenie zapory sieciowej do *[Sieci](/resource/networking/network.md)*
 * odłączenie zapory sieciowej od *[Sieci](/resource/networking/network.md)*
 * dodanie reguły zapory sieciowej kontrolującej ruch przychodzący albo wychodzący
 * usunięcie reguły zapory sieciowej kontrolującej ruch przychodzący albo wychodzący

## Reguły

Po utworzeniu *Zapora sieciowa* posiada następujące domyślne reguły dla ruchu przychodzącego:

Nazwa    | Priorytet | Akcja  | Filtr          | Strefa zewnętrzna  | Strefa wewnętrzna
-------- | :-------: | :----: | ---------------| ------------------ | ---
http(s)  | 101       | pozwól | tcp:80,tcp:443 | 0.0.0.0/0          | *
ssh      | 102       | pozwól | tcp:22         | 0.0.0.0/0          | *
rdp      | 103       | pozwól | tcp:3389       | 0.0.0.0/0          | *
icmp     | 104       | pozwól | icmp           | 0.0.0.0/0          | *

Po utworzenia *Zapora sieciowa* posiada następujące domyślne reguły dla ruchu wychodzącego:

Nazwa    | Priorytet | Akcja  | Filtr          | Strefa zewnętrzna  | Strefa wewnętrzna
-------: | :-------: | :----: | -------------- | ------------------ |
all      | 101       | pozwól | tcp,udp        | 0.0.0.0/0          | *

Strefa wewnętrzna określona jest poprzez *Tag* lub `*` dla każdego.

W przypadku usunięcia wszystkich reguł mają zastosowanie następujące zasady:

 * ruch przychodzący jest zablokowany
 * ruch wychodzący jest dozwolony, jednak serwer nie może uzyskać potwierdzenia odbioru pakietów, które nie zostały dopuszczone przez jakąkolwiek regułę wychodzącą.

Reguły *Zapory sieciowej* mają zastosowanie do wszystkich *Adapterów sieciowych* w *Sieci*, niezależnie czy *Adres IP* komunikacji jest prywatnym *Adresem IP*, czy jest publicznym *Adresem IP* powiązanym z *Adresem IP* w *Sieci*.

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

Wartość         | Okres                        | Cena (PLN)                  | Uwagi
--------------- | :--------------------------: | --------------------------: | ----
zapora sieciowa | [PERIOD="firewall:firewall"] | [PRICE="firewall:firewall"] |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Zapory sieciowej* mogą być przydatne następujące specjalne przewodniki:

<PageList path_re="guide/networking/firewall/"/>

Użyteczne mogą okazać się także następujące ogólne przewodniki:

<PageList path_re="guide/resource/"/>

## Powiązane produkty

 * *[Sieć](/resource/networking/network.md)*
 * *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*
