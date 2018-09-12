# Replika

## Przeznaczenie

*Replika* jest rozwiązaniem umożliwiającym niemal w czasie rzeczywistym kopiowanie danych zmodyfikowanych w maszynach wirtualnych działających w lokalnym środowisku Hyper-V *Użytkownika*. Umożliwia to  w razie potrzeby odtworzenia wirtualnej maszyny w chmurze. Stanowi to łatwe w użyciu rozwiązanie, które może zredukować czas powrotu organizacji do funkcjonowania po awarii (RTO) i skrócić moment powrotu (RPO).

## Cykl życia

### Utworzenia

*Replika* może zostać utworzona, w przypadku spełnienia następujących warunków:

* lokalny serwer Hyper-V ma skonfigurowane połączenie replikacji,
* lokalny dyski spełniają parametry techniczne dla zasobu *Dysk*,
* wszystkie *ogólne* warunki.

Utworzenie repliki odbywa się poprzez zlecenie replikacji w lokalnym serwerze Hyper-V poprzez skonfigurowane połączenie replikacji. W momencie utworzenia repliki tworzone są *Dyski* w wariancie ```replica``` dla każdego lokalnego dysku replikowanej wirtualnej maszyny.

W celu skonfigurowania połączenia replikacji możesz wykorzystać polecenie ```CLI```: ```h1 replica create```.

Na początku wykonywana jest pełna replikacja. Czas pierwszej replikacji zależy ściśle od wielkości dysku i przepustowości sieci. Kolejne replikacje są wydajne, ponieważ zawierają tylko zmienione dane.

### Usuwanie

*Replika* może zostać usunięta, w przypadku spełnienia następujących warunków:

* proces replikacji został przerwany w lokalnym serwerze Hyper-V
* wszystkie *ogólne* warunki

## Zarządzanie

### Dedykowane operacje

Dostępne są następujące dedykowane operacje dla *Repliki*:

* wstrzymanie replikacji
* wznowienie replikacji
* wykonanie *Obrazu*

### Typowe operacje

Dostępne są następujące typowe operacje dla *Repliki*:

* zmiana nazwy
* zarządzanie *Tagami*

## Płatność

* Opłaty są naliczone na podstawie czasu wykorzystania
* Czas wykorzystania jest liczony w okresach rozliczeniowych jednej godziny
* Występują dodatkowe opłaty dotyczące wykorzystywanego *Zasobu*: *Dysk*

## Ograniczone użycie

W przypadku ograniczonego użycia:
 
 * *Replikacja* ulega wstrzymaniu,
 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/resource/general.md#ograniczone-uzycie)*.

## Lokalizacja

!!! include(regions.md) !!!

<!-- 
## Parametry techniczne

Parametry techniczne            | Wartość
--------------------------------| ---
minimum Hyper-V version         | ???

// TODO: minimum version of hyper-v host
-->

## Cennik

Nazwa       | Okres  | Cena (PLN)
----------- | :----: | ---------:
Replica     |   1M   |       250

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

<PageList path_re="guide/compute/replica/"/>

## Powiązane produkty

* *[Dysk]()*
