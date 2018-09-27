# Dysk

## Przeznaczenie

*Dysk* służy do przechowywania każdego rodzaju danych, podobnie jak dysk twardy, ale dostępny z każdego miejsca za pośrednictwem internetu. Umożliwia swobodny zapis i odczyt jego dowolnych obszarów. Występuje w wariantach różniących się rozmiarem i wydajnością, aby spełnić wymagania w nawet najbardziej wymagających środowiskach.

Główne zalety:

 * łatwa skalowalność rozmiaru, wydajności i liczby dysków: możliwość zmiany rozmiaru nawet podczas pracy wykorzystującej go *[Wirtualnej maszyny](/resource/compute/virtual-machine.md)*
 * możliwość zaimportowania dysku na platformę i pobrania dysku z platformy wykluczająca uzależnienie od dostawcy (vendor lock-in)
 * małe opóźnienia w działaniu
 * duża przepustowość
 * maksymalne bezpieczeństwo danych w długim czasie użytkowania
 * elastyczny dobór parametrów gwarantujący odpowiadające potrzebom budżetowanie

Przykładowe zastosowania:

 * serwery bazodanowe i aplikacyjne
 * przechowywanie dużych plików multimedialnych przez długi czas

<!--
*Dysk* służy do przechowywania każdego rodzaju danych, podobnie jak dysk twardy, ale dostępny z każdego miejsca za pośrednictwem internetu. Umożliwia swobodny zapis i odczyt jego dowolnych obszarów. Występuje w wariantach różniących się rozmiarem i wydajnością, aby spełnić wymagania w nawet najbardziej wymagających środowiskach.

Cechuje się łatwą skalowalnością rozmiaru i wydajności, równie łatwo można dostosować liczbę używanych dysków. Elastyczny dobór parametrów gwarantuje odpowiadające potrzebom budżetowanie. HyperOne zapewnia możliwość zaimportowania dysku na platformę i pobrania dysku z platformy, co wyklucza praktyki uzależnienia od dostawcy (vendor lock-in).

Oferowane dyski charakteryzują się małymi opóźnieniami w działaniu i dużą przepustowością. Zapewniają maksymalne bezpieczeństwo danych w długim czasie użytkowania. Znajdują zastosowanie w serwerach bazodanowych i aplikacyjnych oraz służą do długoterminowego przechowywania dużych plików multimedialnych.
-->

## Cykl życia

### Utworzenie

*Dysk* może zostać utworzony po spełnieniu następujących warunków:

 * wszystkie ogólne warunki *utworzenia zasobu*

Nowy *Dysk* może być utworzony w następujący sposób:

 * jako pusty *Dysk*
 * poprzez zaimportowanie lokalnego pliku z wykorzystaniem `CLI`

W przypadku utworzenia *Dysku* na podstawie importowanego pliku należy spełnić następujące kryteria:

 * format pliku *Dysku* to `.vhdx`
 * typ vhd *Dysku* to `dynamic`

### Usuwanie

*Dysk* może zostać usunięty po spełnieniu następujących warunków:

 * *Dziennik* znajduje się w stanie ```Rozłączony```
 * wszystkie ogólne warunki *usunięcia zasobu*

## Warianty

Dyski są dostępne w następujących wariantach:

Typ     | Dostępny rozmiar | IOPS
------- | ---------------: | ----:
archive |       100 - 1000 | 1000
volume  |       100 - 1000 | 3000
ssd     |          1 - 500 | 50 iops 8k / GB

## Zarządzanie

Dla *Dysku* charakterystyczne są następujące operacje:

 * pobranie dysku jako plik `.vhdx`
 * zwiększenie rozmiaru
 * zmniejszenie rozmiaru

### Pobranie dysku

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Dziennik* znajduje się w stanie ```Przyłączony``` lub ```Rozłączony```
 * *Dziennik* nie znajduje się w stanie *Ograniczonego użycia*

### Zwiększenie rozmiaru

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * żądany rozmiar nie przekracza dopuszczalnego rozmiaru dla aktualnego wariantu *Dysku*
 * *Dysk* nie jest podłączony albo jest kolejnym dyskiem podłączonym do [Wirtualnej maszyny](/resource/compute/virtual-machine.md).
 * *Dysk* nie znajduje się w stanie *Ograniczonego użycia*

### Zmniejszenie rozmiaru

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * żądany rozmiar nie przekracza dopuszczalnego rozmiaru dla aktualnego wariantu *Dysku*
 * *Dysk* znajduje się w stanie ```Przyłączony``` lub ```Rozłączony```
 * na końcu obszaru *Dysku* znajduje się wystarczająca ilość przestrzeni nieprzydzielonej do żadnej partycji
 * *Dysk* nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dla *Dysku* dostępne są następujące typowe operacje:

 * zmiana nazwy
 * zarządzanie *Tagami*

## Dostęp

*Dysk* przeznaczony jest do wykorzystania z *Wirtualną maszyną*. Po przyłączeniu do niej dostępny jest w systemie operacyjnym tak jak zwykły twardy dysk.

## Opłaty

Opłaty za przechowywanie danych naliczane są w zależności od wariantu *Dysku*, jego rozmiaru i czasu wykorzystania:

 * rozmiar w jednostkach GB
 * czas wykorzystania liczony w okresach rozliczeniowych jednej godziny

Opłaty naliczane są za każdy GB przestrzeni dyskowej używanej w okresie rozliczeniowym.

## Ograniczone użycie

W przypadku ograniczonego użycia znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*.

## Przekazanie

Przekazanie *Dysku* jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujących warunków:

 * stan to ```Rozłączony```
 * wszystkie *ogólne warunki*

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr                        | Wartość
------------------------------- | -------
Format pliku podczas pobierania | vhdx
Format pliku do importu         | vhdx

## Cennik

Wariant   | Okres                  | Cena (PLN)             | Uwagi
--------- | :--------------------: | ---------------------: | :----:
ssd       | [PERIOD="disk:ssd"]    | [PRICE="disk:ssd"]     |
volume    | [PRICE="disk:volume"]  | [PRICE="disk:volume"]  |
archive   | [PRICE="disk:archive"] | [PRICE="disk:archive"] |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Dysku* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/storage/disk/"/>

## Powiązane produkty

 * *[Maszyny wirtualne](/resource/compute/virtual-machine.md)*
 * *[Vault](/resource/storage/vault.md)*
