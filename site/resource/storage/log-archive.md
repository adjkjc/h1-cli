# Dziennik <Badge text="wkrótce"/>

## Przeznaczenie

*Dziennik* służy do przechowywania i udostępniania wpisów dzienników zdarzeń (logów). 

Główne zalety:

 * długoterminowe przechowywanie
 * zabezpieczenie przed nadpisaniem i przypadkowym uszkodzeniem

Przykładowe zastosowanie:

 * analiza problemów w czasie rzeczywistym i w przeszłości
 * długoterminowa archiwizacja zdarzeń

## Cykl życia

### Utworzenie

*Dziennik* może zostać utworzony po spełnieniu następujących warunków:

 * wszystkie ogólne warunki *utworzenia zasobu*

### Usuwanie

*Dziennik* może zostać usunięty po spełnieniu następujących warunków:

 * wszystkie ogólne warunki *usunięcia zasobu*

## Zarządzanie 

Dla *Dziennika* charakterystyczne są następujące operacje:

 * wyłączenie
 * włączenie
 * odczytywanie wpisów za wybrany okres lub bieżących w czasie rzeczywistym

### Wyłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Dziennik* znajduje się w stanie ```Działający```
 * *Dziennik* nie znajduje się w stanie *Ograniczonego użycia*

### Wyłączenie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Dziennik* znajduje się w stanie ```Wyłączony```
 * *Dziennik* nie znajduje się w stanie *Ograniczonego użycia*

### Odczytanie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Dziennik* znajduje się w stanie ```Wyłączony``` lub ```Działający```
 * *Dziennik* nie znajduje się w stanie *Ograniczonego użycia*

## Typowe operacje

Dla *Dziennika* dostępne są następujące typowe operacje:

 * zmiana nazwy
 * zarządzanie *Tagami*

## Dostęp

Wpisy do *Dziennika* mogą zostać wprowadzone z użyciem protokołu Syslog opisanego w [RFC 5424](https://tools.ietf.org/html/rfc5424).

Zapisywanie do *Dziennika* jest możliwe za pomocą następujących typów danych dostępowych:

 * hasło przekazane w elemencie SD-ID w postaci ``[[identyfikator_zasobu]]:[[haslo]]@HyperOne``

Zarządzanie danymi dostępowymi wyjaśnione jest w [ogólnym omówieniu zarządzania danymi dostępowymi](/platform/resource.html#dane-dostepowe).

## Opłaty

Opłaty są naliczane na podstawie czasu wykorzystania.

Czas wykorzystania jest liczony w okresach rozliczeniowych jednego miesiąca.

## Ograniczone użycie

W przypadku ograniczonego użycia:
 
 * zapis jest wstrzymany
 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*.

## Polityka danych

Gdy *Dane Organizacji* osiągną zdefiniowany okres przechowywania, nowe żądanie usunięcia zostanie wygenerowane dla tych danych w ciągu 24 godzin.

<!-- partial-regions.md -->

## Przekazanie

Przekazanie *Dziennika* jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujących warunków:

 * wszystkie *ogólne warunki*

## Parametry techniczne

Parametr           | Wartość
------------------ | ------
Protokół wejściowy | syslog

## Cennik

Nazwa        | Okres    | Cena (PLN) |  Uwagi
-----------: | -----:   | ---------: | :----:
Dziennik     |  1 ms    | [PRICE="logArchive:logArchive"] |

 * Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Dziennika* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/storage/log-archive/"/>

## Powiązane produkty

 * *[Kontenery](/resource/compute/container.md)*
