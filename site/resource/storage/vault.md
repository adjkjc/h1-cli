# Vault

## Przeznaczenie

*Vault* możesz wykorzystać do długoterminowego przechowywania danych i dostępu do nich z wykorzystaniem popularnych narzędzi takich jak  ssh, sftp, scp, git i rsync.

## Cykl życia

### Utworzenie

*Vault* może zostać utworzony, w przypadku spełnienia następujących warunków: 

* wszystkie *ogólne* warunki.

Nowy *Vault* może być utworzony w następujący sposób:

* jako pusty *Vault*
* na podstawie istniejącej *[Migawki]()*

### Usuwanie

*Vault* może zostać usunięty, w przypadku spełnienia następujących warunków: 

 * nie istnieją utworzone na jego bazie żadna *[Migawka](/resource/storage/snapshot.md)*
 * wszystkie ogólne warunki

## Zarządzanie

Dostępne są następujące dedykowane operacje:

* Włącza dostęp
* Wyłącza dostęp
* Zwiększa rozmiar

Rozmiar danych *Vault* stanowi rozmiar zgromadzonych plików i wszystkich *Migawek*.

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

Zarządzanie dostępami zostało wyjaśnione w [ogólnym omówieniu zarządzania danymi dostępowymi](/resource/general.html#dane-dostepowe).

### Typowe operacje

Dostępne są następujące typowe operacje:

* Możliwość zmiany wyświetlanej nazwy
* Zarządzanie danymi dostępowymi

## Płatność

* opłaty naliczane są za przechowywania i ruch sieciowy

* opłaty za przechowywanie są naliczane w zależności od rozmiaru *Vault* i czasu jego wykorzystania

    * rozmiar w jednostkach GB
    * czas wykorzystania jest liczony w okresach rozliczeniowych jednej godziny

* opłaty są naliczane za każdy GB przestrzeni dyskowej dostępnej w okresie rozliczeniowym

* opłaty za ruch sieciowy są naliczane w zależności od rozmiaru ruchu w GB

## Ograniczone użycie

W przypadku ograniczonego użycia znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/resource/general.md#ograniczone-uzycie)*.

<!-- partial-regions.md -->

## Technical parameters

Parametr              | Wartość | Uwagi
--------------------- | ------: | ---
Minimalny rozmiar     | 1       |
Maksymalny rozmiar    | 1000    |

[Napisz do nas](/about-us/contact.md) jeżeli potrzebujesz zwiększyć te limity.

## Cennik

Nazwa              | Okres  | Cena (PLN) | Uwagi
------------------ | :----: | ---------: | :----:
vault              |   1h   |     0.0004 | 
ruch przychodzący  |   1h   |     0.0000 | 
ruch wychodzący    |   1h   |     0.0200 |

<!-- //TODO: Add service for traffic -->
*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Powiązane produkty

* *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*
* *[Sieć](/resource/networking/network.md)*
