# DNS

## Przeznaczenie

*DNS* to usługa służąca do tłumaczenia publicznych nazw domen na numeryczne adresy IP, takie jak 62.181.3.92, które komputery wykorzystują do łączenia się ze sobą, lub na odpowiednie wartości.

Główne zalety:

 * wysokodostępna architektura
 * dostępne liczne typy rekordów
 * nie wymaga od użytkownika instalacji i utrzymania oprogramowania
 * zarządzanie także poprzez API i CLI w celu automatyzacji zmian
 * możliwość importu i eksportu konfiguracji w formacie BIND

Przykładowe zastosowania:

 * wykorzystanie przystępnej nazwy domeny dla strony WWW
 * identyfikacja serwera świadczącego usługę pod zmiennym adresem IP

## Cykl życia

### Utworzenie

*DNS* może zostać utworzony po spełnieniu następujących warunków:

 * nazwa strefy jest unikalna w obrębie platformy
 * wszystkie ogólne warunki *utworzenia zasobu*

### Usuwanie

*DNS* może zostać usunięty po spełnieniu następujących warunków:

 * wszystkie ogólne warunki *usunięcia zasobu*

## Zarządzanie

Zarządzanie *DNS-em* polega na modyfikowaniu zestawu rekordów (ang.*record-set*):

 * utworzenie zestawu rekordów określonego typu
 * usuwanie zestawu rekordów
 * dodawanie rekordu w zestawie rekordów
 * usuwanie rekordu w zestawie rekordów

Zarządzanie *DNS-em* odbywa się po spełnieniu następujących warunków:

 * *DNS* znajduje się w stanie ```Online```
 * *DNS* nie znajduje się w stanie *Ograniczonego użycia*

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parameter                | Wartość
------------------------ | -------------------------------------:
Typy rekordów            |  A, CNAME, MX, TXT, SRV, NS, CAA, AAAA
Rozmiar zestawu rekordów |                                     20

W razie potrzeby zwiększenia zaproponowanych parametrów [prosimy o kontakt](/about-us/contact.md).

## Cennik

Nazwa         | Okres                | Cena (PLN)            | Uwagi
------------- | :------------------: | --------------------: | :------
Strefa DNS    | [PERIOD="zone:zone"] | [PRICE="zone:zone"]   |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

<!--
Transfer is not availabe due following reason:
- security restriction of creating subzones
-->

## Przewodniki

Do korzystania z *DNS* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/networking/dns/"/>

## Powiązane produkty

 * *[Adres IP](/resource/networking/ip-address.md)*