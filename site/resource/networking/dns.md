# DNS

## Przeznaczenie

*DNS* dostarcza usługę do tłumaczenie publicznych nazw domen na numeryczne adresy IP, takie jak 62.181.3.92, które komputery wykorzystują do łączenia się ze sobą lub do odpowiednich wartości.

## Cykl życia

### Utworzenie

*DNS* może zostać utworzony, jeśli spełnione są wszystkie następujące warunki:

 * nazwa strefy jest unikalna w obrębie platformy,
 * wszystkie *ogólne* warunki

### Usuwanie

*DNS* może zostać usunięty, jeśli spełnione są wszystkie następujące warunki:

 * wszystkie *ogólne* warunki

## Zarządzanie

Zarządzanie usługą opiera się poprzez modyfikowanie zestawu rekordów (ang.*record-set*):

 * utworzenie zestawu rekordów określonego typu
 * usuwanie zestawu rekordów
 * dodawanie rekordu w zestawie rekordów
 * usuwanie rekordu w zestawie rekordów

Zarządzanie usługą jest możliwe po spełnieniu następujących warunków: 

* znajduje się w stanie ```Online```
* nie znajduje się w stanie *Ograniczonego użycia*

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parameter                |                                Wartość |Uwagi
------------------------ | -------------------------------------: | ---
Typy rekordów            | A, CNAME, MX, TXT, SRV, NS, CAA,  AAAA |
Rozmiar zestawu rekordów |                                     20 |

[Napisz do nas](/about-us/contact.md) jeżeli masz duży projekt i potrzebujesz zwiększyć te parametry.

## Cennik

Nazwa  | Okres  | Cena (PLN) | Uwagi
------ | :----: | ---------: | :----:
DNS    |   -    |     0.0000 | 

<!-- TODO: Create a service "dns" -->

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="guide/networking/dns/"/>

## Powiązane produkty

* *[Adres IP](/resource/networking/ip-address.md)*