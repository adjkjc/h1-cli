# Replika

## Przeznaczenie

*Replika* umożliwia kopiowanie niemal w czasie rzeczywistym danych zmodyfikowanych w wirtualnych maszynach działających w lokalnym środowisku Hyper-V *Użytkownika*. Umożliwia to w razie potrzeby odtworzenie *[Wirtualnej maszyny](/resource/compute/virtual-machine.md)*.

Główne zalety:

 * łatwe w użyciu rozwiązanie do zabezpieczenia danych
 * pomaga zredukować czas powrotu organizacji do funkcjonowania po awarii (RTO) i skrócić moment powrotu (RPO)

Przykładowe zastosowania:

 * istotna składowa procesu odbudowy organizacji po krytycznym zdarzeniu
 * migracja usług do platformy z zredukowanym czasem przestoju 

## Cykl życia

### Utworzenie

*Replika* może zostać utworzona po spełnieniu następujących warunków:

 * lokalny serwer Hyper-V ma skonfigurowane połączenie replikacji
 * lokalne dyski spełniają parametry techniczne dla zasobu *Dysk*
 * wszystkie ogólne warunki *utworzenia zasobu*

Utworzenie repliki odbywa się poprzez zlecenie replikacji w lokalnym serwerze Hyper-V poprzez skonfigurowane połączenie replikacji. W momencie utworzenia repliki uruchamiane są *Dyski* w wariancie ```replica``` dla każdego lokalnego dysku replikowanej wirtualnej maszyny.

W celu skonfigurowania połączenia replikacji możesz wykorzystać polecenie ```CLI```: ```h1 replica create```.

Na początku wykonywana jest pełna replikacja. Czas pierwszej replikacji zależy ściśle od wielkości dysku i przepustowości sieci. Kolejne replikacje zawierają tylko zmienione dane.

### Usuwanie

*Replika* może zostać usunięta po spełnieniu następujących warunków:

 * proces replikacji został przerwany w lokalnym serwerze Hyper-V
 * wszystkie ogólne warunki *usunięcia zasobu*

## Zarządzanie

Dla *Repliki* charakterystyczne są następujące operacje:

 * wstrzymanie replikacji
 * wznowienie replikacji
 * wykonanie *Obrazu*

### Typowe operacje

Dla *Repliki* dostępne są następujące typowe operacje:

 * zmiana nazwy
 * zarządzanie *Tagami*

## Opłaty

Opłaty naliczane są na podstawie czasu wykorzystania. Czas wykorzystania jest liczony w okresach rozliczeniowych jednej godziny.

Dodatkowe opłaty wiążą się z wykorzystaniem *Dysku* w czasie procesu replikacji.

## Ograniczone użycie

W przypadku ograniczonego użycia:

 * *Replikacja* ulega wstrzymaniu
 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*

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

Nazwa       | Okres                      | Cena (PLN)                | Uwagi
----------- | :------------------------: | ------------------------: | :----
replika     | [PERIOD="replica:replica"] | [PRICE="replica:replica"] |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

<!--
Transfer is not availabe due following reason:
- replica includes disk as composite of multiple resources
-->

## Przewodniki

Do korzystania z *Repliki* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/compute/replica/"/>

## Powiązane produkty

 * *[Dysk](/resource/storage/disk.md)*
