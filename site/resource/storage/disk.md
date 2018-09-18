# Dysk

## Przeznaczenie

*Dysk* służy do przechowywania każdego rodzaju danych. Pomyśl o nim jak o dysku twardym. Możesz swobodnie zapisywać i odczytywać dowolne obszary.
 
*Dysk* występuje w wariantach różniących się rozmiarem i wydajnością, aby spełnić wymagania w nawet najbardziej wymagających środowiskach.

Rozmiar *Dysku* można zmieniać nawet podczas pracy wykorzystującej go *[Wirtualnej maszyny](/resource/compute/virtual-machine.md)*.

Główne zalety:

* łatwa skalowalność rozmiaru, wydajności i liczby dysków
* małe opóźnienia w działaniu
* duża przepustowość 
* maksymalne bezpieczeństwo danych w długim czasie użytkowania
* elastyczny dobór parametrów gwarantujący odpowiadające potrzebom budżetowanie

Przykładowe zastosowania:

* serwery bazodanowe i aplikacyjne
* przechowywanie multimediów w długim czasie

## Cykl życia

### Utworzenie

*Dysk* może zostać utworzony po spełnieniu następujących warunków: 

 * wszystkie *ogólne warunki*

Nowy *Dysk* może być utworzony w następujący sposób:

* jako pusty *Dysk*
* poprzez zaimportowanie lokalnego pliku z wykorzystaniem `CLI`

W przypadku utworzenia *Dysku* na podstawie przesłanego pliku należy spełnić następujące kryteria:

* format pliku *Dysku* to `.vhdx`
* typ vhd *Dysku* to `dynamic`

### Usuwanie

*Dysk* może zostać usunięty po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Rozłączony```
* wszystkie *ogólne warunki*

## Warianty

Dyski są dostępne w następujących wariantach:

Typ     | Dostępny rozmiar | IOPS
------- | ---------------: | ----:
archive |       100 - 1000 | 1000
volume  |       100 - 1000 | 3000
ssd     |          1 - 500 | 50 iops 8k / GB

## Zarządzanie

Dostępne są następujące podstawowe operacje dla *Dysku*:

* pobranie dysku jako plik `.vhdx`
* zwiększenie rozmiaru
* zmniejszenie rozmiaru

### Pobranie dysku

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Przyłączony``` lub ```Rozłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Zwiększenie rozmiaru

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* żądany rozmiar nie przekracza dopuszczalnego rozmiaru dla wybranego wariantu dysku
* zasób znajduje się w stanie ```Przyłączony``` lub ```Rozłączony```
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Zmniejszenie rozmiaru

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Przyłączony``` lub ```Rozłączony```
* na końcu obszaru *Dysku* znajduje się wystarczająca ilość przestrzeni nie przydzielonej do żadnej partycji
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dostępne są następujące typowe operacje dla *Dysku*:

* zmiana nazwy
* zarządzanie *Tagami*

## Dostęp

*Dysk* przeznaczony jest do wykorzystania z *Wirtualną maszyną*. Po przyłączeniu do niej dostępny jest w systemie operacyjnym tak jak zwykły twardy dysk.

## Płatność

* opłaty za przechowywanie są naliczane w zależności od wariantu *Dysku*, jego rozmiaru i czasu wykorzystania

   * rozmiar w jednostkach GB
   * czas wykorzystania jest liczony w okresach rozliczeniowych jednej godziny

* opłaty są naliczane za każdy GB przestrzeni dyskowej używanej w okresie rozliczeniowym

## Ograniczone użycie

W przypadku ograniczonego użycia znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*.

## Przekazanie

Przekazanie *Dysku* jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujących warunków:

* stan to "Rozłączony"

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr                        | Wartość
------------------------------- | -------
Format pliku podczas pobierania | vhdx
Format pliku do przesłania      | vhdx

## Cennik

Wariant   | Okres  | Stawka (PLN) | Uwagi
--------- | :----: | -----------: | :----:
ssd       |   1h   |       0.0020 | 
volume    |   1h   |       0.0004 | 
archive   |   1h   |       0.0002 | 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="guide/storage/disk/"/>
 
## Powiązane produkty

* *[Maszyny wirtualne](/resource/compute/virtual-machine.md)*
* *[Vault](/resource/storage/vault.md)*
