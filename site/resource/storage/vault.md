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

 * wszystkie [ogólne warunki utworzenia *Zasobu*](/platform/resource.md#utworzenie)

Nowy *Vault* może być utworzony w następujący sposób:

 * jako pusty *Vault*
 * na podstawie istniejącej *[Migawki](/resource/storage/snapshot.md)*

### Usuwanie

*Vault* może zostać usunięty po spełnieniu następujących warunków:

 * nie istnieje żadna utworzona na jego bazie *[Migawka](/resource/storage/snapshot.md)*
 * wszystkie [ogólne warunki usunięcia *Zasobu*](/platform/resource.md#usuniecie)

## Zarządzanie

Dla *Vaulta* charakterystyczne są następujące operacje:

 * włączenie dostępu
 * wyłączanie dostępu
 * zwiększenie rozmiaru
 * dostęp do konsoli

Wykorzystywana przestrzeń *Vault* stanowi rozmiar zgromadzonych plików i wszystkich *Migawek*.

### Włączenie dostępu

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Vault* znajduje się w stanie ```Wyłączony```
 * *Vault* nie znajduje się w stanie *Ograniczonego użycia*

### Wyłączenie dostępu

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Vault* znajduje się w stanie ```Online```
 * *Vault* nie znajduje się w stanie *Ograniczonego użycia*

Wykonanie operacji może ograniczyć funkcjonowanie *Kontenera* wykorzystującego dany *Vault*.

### Zwiększenie rozmiaru

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Vault* znajduje się w stanie ```Online``` lub ```Wyłączony```
 * *Vault* nie znajduje się w stanie *Ograniczonego użycia*

### Dostęp do konsoli

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Vault* znajduje się w stanie ```Online```
 * *Vault* nie znajduje się w stanie *Ograniczonego użycia*

### Dostęp

Dostęp do *Vault* umożliwiają następujące narzędzia:

 * ssh
 * sftp
 * scp
 * git
 * rsync

Dostęp do *Vault* umożliwiają następujące dane dostępowe:

 * hasło
 * klucze SSH

Zarządzanie dostępami zostało wyjaśnione w [ogólnym omówieniu zarządzania danymi dostępowymi](/platform/resource.html#dane-dostepowe).

### Typowe operacje

Dla *Vault* dostępne są następujące typowe operacje:

 * możliwość zmiany wyświetlanej nazwy
 * zarządzanie danymi dostępowymi

## Opłaty

Opłaty naliczane są za przechowywanie i ruch sieciowy.

 * Opłaty za przechowywanie są naliczane w zależności od rozmiaru *Vault* i czasu jego wykorzystania:

    * rozmiar w jednostkach GB
    * czas wykorzystania liczony w okresach rozliczeniowych jednej godziny

 * Opłaty za ruch sieciowy naliczane są w zależności od rozmiaru ruchu w GB

Opłaty naliczane są za każdy GB przestrzeni dyskowej dostępnej w okresie rozliczeniowym.

## Ograniczone użycie

W przypadku ograniczonego użycia znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*.

<!-- partial-regions.md -->

## Parametry techniczne

Parametr              | Wartość | Uwagi
--------------------- | ------: | ---
Minimalny rozmiar     | 1       |
Maksymalny rozmiar    | 1000    |

W razie potrzeby zwiększenia tych limitów [prosimy o kontakt](/about-us/contact.md).

## Cennik

Nazwa               | Okres                                     | Cena (PLN)                               | Uwagi
------------------- | :---------------------------------------: | ---------------------------------------: | :----
vault 1GB           | [PERIOD="vault:vault"]                    | [PRICE="vault:vault"]                    |
ruch przychodzący   | 1 godzina                                 | 0.0000                                   |
ruch wychodzący 1GB | [PERIOD="vault:metric traffic Outbound"]  | [PRICE="vault:metric traffic Outbound"]  |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

<!--
Transfer is not availabe due following reason:
- we don't have information where the vault is attached eg. container
- vault is composite of multiple resources eg. snapshots
-->

## Przewodniki

Do korzystania z *Vaulta* mogą być przydatne następujące specjalne przewodniki:

<PageList path_re="guide/storage/vault/"/>

Użyteczne mogą okazać się także następujące ogólne przewodniki:

<PageList path_re="guide/resource/"/>

## Powiązane produkty

 * *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*
 * *[Sieć](/resource/networking/network.md)*
