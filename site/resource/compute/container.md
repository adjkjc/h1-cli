# Kontener

## Przeznaczenie

*Kontener* możesz wykorzystać do uruchamiania aplikacji na podstawie obrazów kontenerów. 

Pozwala to świadczyć usługi bez konieczności zarządzania całym serwerem.

## Cykl życia

### Utworzenie

*Kontener* może zostać utworzony po spełnieniu następujących warunków:

* wszystkie *ogólne* warunki.

Możliwe jest określenie następujących parametrów podczas utworzenia;

* nazwa
* wariant
* obraz dostępny w ogólnodostępnym repozytorium np. na [Docker Hub](https://hub.docker.com/)
* punkty montowania danych w *[Vault](/resource/storage/vault.md)*
* zmienne środowiskowe

### Usuwanie

*Kontener* może zostać utworzony po spełnieniu następujących warunków:

* wszystkie *ogólne* warunki.

## Warianty

Kontenery dostępne są w wariantach, które różnią się dostępną mocą obliczeniową i pamięcią:

Nazwa                  |  vCPU  | Pamięć  |
:--------------------  | :----: | ------: |
playground             |   1    |  128 MB |
standard               |   2    |  256 MB |
standard x2            |   2    |  512 MB |
performance            |   3    |  512 MB |
performance x2         |   6    | 1024 MB |

## Zarządzanie

Dostępne są następujące podstawowe operacje:

* Zatrzymanie kontenera
* Uruchomienie kontenera
* Odczyt dziennika zdarzeń
* Restartowanie kontenera

### Dostęp

Dostęp do kontenera możliwy jest poprzez wskazany przez użytkownika port aplikacji z wykorzystaniem:

* protokołu HTTP
* wolnego portu TCP/UDP wybranego przez platformę

### Typowe operacje

Dostępne są następujące typowe operacje:

* możliwość zmiany wyświetlanej nazwy
* zarządzanie danymi dostępowymi
* zarządzanie *Tagami*

## Płatność

* opłaty naliczane są w zależności od wybranego wariantu i ruchu sieciowego

* opłaty za wariant są naliczane w zależności od wybranego wariantu i czasu jego wykorzystania

    * czas wykorzystania jest liczony w okresach rozliczeniowych jednej godziny

* opłaty za dostęp do danych są naliczane w zależności od rozmiaru ruchu sieciowego w GB

## Ograniczone użycie

W przypadku ograniczonego użycia:

 * kontener ulega zatrzymaniu
 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*.

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr              | Wartość | Uwagi
:-------------------- | ------: | ---
System operacyjny     |   Linux |

## Cennik

Nazwa              | Okres  | Cena (PLN) | Uwagi
------------------ | :----: | ---------: | :----:
ruch przychodzący  |   1h   |     0.0000 | 
ruch wychodzący    |   1h   |     0.0200 | 
hobby              |   1h   |    10.0000 | 
standard           |   1h   |    20.0000 |
standard x2        |   1h   |    40.0000 |
performance        |   1h   |    80.0000 |
performance x2     |   1h   |   160.0000 |

<!-- //TODO: Add service for traffic -->
<!-- //TODO: Add service for traffic -->

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="guide/compute/container/"/>

## Powiązane produkty

* *[Vault](/resource/storage/vault.md)*
<!-- TODO: * *[Repozytorium](/resource/storage/repository.md)* -->

