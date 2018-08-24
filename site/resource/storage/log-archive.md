# Dziennik

## Przeznaczenie

*Dziennik* służy do przechowywania i udostępniania wpisów dzienników zdarzeń (logów). Może być wykorzystane do analizy rozwiązań problemów w czasie rzeczywistym lub długoterminowego ich przechowywania zabezpieczając przed nadpisaniem i przypadkowym uszkodzeniem.

## Cykl życia

### Utworzenie

*Dziennik* może zostać utworzony, w przypadku spełnienia następujących warunków: 

* wszystkie *ogólne warunki*.

### Usuwanie

*Dziennik* może zostać usunięty, w przypadku spełnienia następujących warunków:

* wszystkie *ogólne warunki*.

## Zarządzanie 

### Typowe operacje

Dostępne są następujące dedykowane operacje na *Dzienniku*:

* wstrzymanie zapisów
* wznowienie zapisów
* odczytywanie wpisów za wybrany okres lub bieżących w czasu rzeczywistego

### Typowe operacje

Dostępne są następujące typowe operacje dla *Dziennika*:

* zmiana nazwy
* zarządzanie *Tagami*

### Dostęp

Wpisy do *Dziennika* mogą zostać wprowadzone z użyciem protokołu Syslog opisanym w [RFC 5424](https://tools.ietf.org/html/rfc5424).

Zapisywanie do *Dziennika* jest możliwe za pomocą następujących typów danych dostępowych:

* hasło przekazane w elemencie SD-ID w postaci ``[[identyfikator_zasobu]]:[[haslo]]@HyperOne``

Zarządzanie danymi dostępowymi wyjaśnione jest w [ogólnym omówieniu zarządzania danymi dostępowymi](/resource/general.html#dane-dostepowe).

## Płatność

* Opłaty są naliczane na podstawie czasu wykorzystania.

* Czas wykorzystania jest liczony w okresach rozliczeniowych jednego miesiąca.

## Ograniczonego użycia

W przypadku ograniczonego użycia:
 
 * zapis jest wstrzymany
 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/resource/general.md#ograniczone-uzycie)*.

## Polityka danych

Gdy *Dane Organizacji* osiągną zdefiniowany okres przechowywania, nowe żądanie usunięcia zostanie wygenerowane dla tych danych w ciągu 24 godzin.

<!-- partial-regions.md -->

## Parametr techniczny

Parametr           | Wartość
------------------ | ------
Protokół wejściowy | syslog

## Cennik

Nazwa        | Okres  | Cena (PLN) |  Uwagi
-----------: | -----: | ---------: | :----:
Dziennik     |  1M    |     1.0000 |

* Podane ceny są cenami netto i nie zawierają podatku VAT*

## Powiązane produkty

* *[Kontenery](/resource/compute/container.md)*
