# Vault

## Przeznaczenie

*Vault* stanowi rodzaj przestrzeni do długoterminowego przechowywania danych, zapewnieniającej stały dostęp do nich bez konieczności administrowania systemem operacyjnym. 

Główne zalety:
* dostęp z wykorzystaniem popularnych narzędzi takich jak ssh, sftp, scp, git i rsync
* możliwość wykonania *[Migawek](/resource/storage/snapshot.md)*

Przykładowe zastosowania:
* podstawowy serwer plików
* źródło danych dla *[Konteneru](/resource/compute/container.md)*

## Cykl życia

### Utworzenie

*Vault* może zostać utworzony po spełnieniu następujących warunków: 

* wszystkie *ogólne* warunki.

Nowy *Vault* może być utworzony w następujący sposób:

* jako pusty *Vault*
* na podstawie istniejącej *[Migawki]()*

### Usuwanie

*Vault* może zostać usunięty po spełnieniu następujących warunków: 

 * nie istnieją utworzone na jego bazie żadna *[Migawka](/resource/storage/snapshot.md)*
 * wszystkie ogólne warunki

## Zarządzanie

Dostępne są następujące podstawowe operacje:

* Włączenie dostępu
* Wyłączanie dostęp
* Zwiększenie rozmiaru

Wykorzystywana przestrzeń *Vault* stanowi rozmiar zgromadzonych plików i wszystkich *Migawek*.

### Włączenie dostępu

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Wyłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Wyłączenie dostępu

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

Wykonanie operacji może ograniczyć funkcjonowanie *Kontenera* wykorzystującego dany *Vault*.

### Zwiększenie rozmiaru

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Online``` lub ```Wyłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Dostęp

Dostęp do Vault możliwe jest z wykorzystaniem m. in. następujących narzędzi:

* ssh
* sftp
* scp
* git
* rsync

Dostęp do *Vault* możliwe jest z wykorzystaniem następujących danych dostępowych:

* hasło
* klucze SSH

Zarządzanie dostępami zostało wyjaśnione w [ogólnym omówieniu zarządzania danymi dostępowymi](/platform/resource.html#dane-dostepowe).

### Typowe operacje

Dostępne są następujące typowe operacje:

* Możliwość zmiany wyświetlanej nazwy
* Zarządzanie danymi dostępowymi

## Opłaty

* opłaty naliczane są za przechowywania i ruch sieciowy

* opłaty za przechowywanie są naliczane w zależności od rozmiaru *Vault* i czasu jego wykorzystania

    * rozmiar w jednostkach GB
    * czas wykorzystania jest liczony w okresach rozliczeniowych jednej godziny

* opłaty są naliczane za każdy GB przestrzeni dyskowej dostępnej w okresie rozliczeniowym

* opłaty za ruch sieciowy są naliczane w zależności od rozmiaru ruchu w GB

## Ograniczone użycie

W przypadku ograniczonego użycia znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*.

<!-- partial-regions.md -->

## Parametry techniczne

Parametr              | Wartość | Uwagi
--------------------- | ------: | ---
Minimalny rozmiar     | 1       |
Maksymalny rozmiar    | 1000    |

[Napisz do nas](/about-us/contact.md) jeżeli potrzebujesz zwiększyć te limity.

## Cennik

Nazwa              | Okres  | Cena (PLN) | Uwagi
------------------ | :----: | ---------: | :----:
Vault              |   1h   |     0.0004 | 
Ruch przychodzący  |   1h   |     0.0000 | 
Ruch wychodzący    |   1h   |     0.0200 |

<!-- //TODO: Add service for traffic -->
*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="guide/storage/vault/"/>

## Powiązane produkty

* *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*
* *[Sieć](/resource/networking/network.md)*
