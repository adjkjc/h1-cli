# Kontener

## Przeznaczenie

*Kontener* wykorzystuje się do uruchamiania aplikacji na podstawie obrazów kontenerów.

Główne zalety:

 * świadczenie usług bez konieczności zarządzania całym serwerem
 * zapewnienie spójności środowiska deweloperskiego i platformy
 * możliwość uruchomienia aplikacji wykonanych w większości popularnych języków, np. Java, PHP, Python, C++, NodeJS

Przykładowe zastosowania:

 * aplikacje webowe: strony, portale i sklepy internetowe
 * bazy danych

## Cykl życia

### Utworzenie

*Kontener* może zostać utworzony po spełnieniu następujących warunków:

 * istnieje rekord TXT ```_h1_project.{adres specyficzny}``` zawierający identyfikator aktywnego *Projektu* (jeżeli wykorzystano specyficzny adres)
 * wszystkie [ogólne warunki utworzenia *Zasobu*](/platform/resource.md#utworzenie)

Podczas tworzenia można określić następujące parametry:

 * nazwa
 * wariant
 * obraz dostępny w ogólnodostępnym repozytorium, np. na [Docker Hub](https://hub.docker.com/)
 * punkty montowania danych w *[Vault](/resource/storage/vault.md)*
 * zmienne środowiskowe
 * specyficzny adres domenowy

### Usuwanie

*Kontener* może zostać usunięty po spełnieniu następujących warunków:

 * wszystkie [ogólne warunki usunięcia *Zasobu*](/platform/resource.md#usuniecie)

## Warianty

Kontenery dostępne są w wariantach, które różnią się dostępną mocą obliczeniową i pamięcią:

Nazwa                  |  vCPU  | Pamięć  | Uwagi
:--------------------  | :----: | ------: | :----
playground             |   1    |  128 MB |
standard               |   2    |  256 MB |
standard x2            |   2    |  512 MB |
performance            |   3    |  512 MB |
performance x2         |   6    | 1024 MB |

## Zarządzanie

Dla *Kontenera* charakterystyczne są następujące operacje:

 * zatrzymanie kontenera
 * uruchomienie kontenera
 * odczyt dziennika zdarzeń
 * restartowanie kontenera

### Dostęp

Dostęp do *Kontenera* możliwy jest poprzez wskazany przez użytkownika port aplikacji z wykorzystaniem:

 * protokołu HTTP
 * wolnego portu TCP/UDP wybranego przez platformę

### Typowe operacje

Dla *Kontenera* dostępne są następujące typowe operacje:

 * możliwość zmiany wyświetlanej nazwy
 * zarządzanie *Tagami*

## Dostęp

Podstawowy dostęp do kontenera odbywa się poprzez sieć. Ruch sieciowy do *Kontenera* może pochodzić z sieci *Internet* lub z innego *Kontenera* *Projektu*.

Ruch przychodzący z sieci *Internet* do aplikacji działającej w ramach *Kontenera* odbywa się poprzez:

 * protokół HTTP
 * protokół HTTPS zakończony przed skierowaniem żądania do aplikacji

Ruch sieciowy przychodzący z innego *Kontenera* *Projektu* może wykorzystywać dowolny protokół.

Przekazane do aplikacji żądanie HTTP z sieci *Internet* zawiera dodatkowe nagłówki na temat połączenia:

- ```X-Real-Ip```, ```X-Forwarded-For``` - źródłowy adres IP połączenia
- ```X-Forwarded-Host``` - adres kontenera oparty o identyfikator
- ```X-Forwarded-Port``` - port kontenera
- ```X-Forwarded-Server``` - wewnętrzny identyfikator węzła platformy
- ```X-Forwarded-Proto``` - wykorzystywany protokół

Ruch wychodzący do *Sieci* Internet nie jest ograniczony.

Żądanie musi wykorzystywać adres domenowy następującego rodzaju i postaci:

* adres oparty o identyfikator - ```{id kontenera}-container-{region}.pl-waw-1.hyperone.cloud```
* adres oparty o nazwę - ```{nazwa kontenera}-container-{region}.pl-waw-1.hyperone.cloud```
* adres oparty o *Tag* - ```{nazwa kontenera}-container-{region}.pl-waw-1.hyperone.cloud```
* adres specyficzny - wskazany poprzez ```--expose-host``` podczas utworzenia.

Adres domenowy powinien być zawarty bezpośrednio w żądaniu lub zostać wskazany w rekordzie DNS CNAME adresu wykorzystanego w żądaniu.

## Opłaty

Opłaty naliczane są w zależności od wybranego wariantu i ruchu sieciowego:

 * opłaty za wariant są naliczane w zależności od jego rodzaju i czasu jego wykorzystania - czas liczony jest w okresach rozliczeniowych jednej godziny
 * opłaty za ruch sieciowy są naliczane w zależności od jego rozmiaru w GB

## Ograniczone użycie

W przypadku ograniczonego użycia:

 * kontener ulega zatrzymaniu
 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*.

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr              | Wartość | Uwagi
:-------------------- | ------: | ---
system operacyjny     | Linux   |

## Cennik

Nazwa               | Okres         | Cena (PLN) | Uwagi
------------------- | :-----------: | ---------: | :----:
ruch przychodzący   |   1 godzina   |     0.0000 |
ruch wychodzący 1GB | [PERIOD="container:metric traffic Outbound"] | [PRICE="container:metric traffic Outbound"]
hobby               |   1 godzina   |    10.0000 |
standard            |   1 godzina   |    20.0000 |
standard x2         |   1 godzina   |    40.0000 |
performance         |   1 godzina   |    80.0000 |
performance x2      |   1 godzina   |   160.0000 |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

<!--
Transfer is not availabe due following reason:
- required validation of licensing
- container can use vault as composite of multiple resources
-->

## Przewodniki

Do korzystania z *Kontenera* mogą być przydatne następujące specjalne przewodniki:

<PageList path_re="guide/compute/container/"/>

Użyteczne mogą okazać się także następujące ogólne przewodniki:

<PageList path_re="guide/resource/"/>

## Powiązane produkty

 * *[Vault](/resource/storage/vault.md)*
