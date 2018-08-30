# Dysk

## Przeznaczenie

*Dysk* przeznaczony jest do przechowywania danych dowolnego rodzaju. Pomyśl o nim jak o dysku twardym. Możesz zapisywać / odczytywać dowolne obszary w dowolny sposób.
 
*Dysk* jest dostarczany w różnych wariantach, różniących się rozmiarem, wydajnością i ceną, aby spełnić wymagania nawet najbardziej wymagających środowiskach.

Rozmiar *Dysku* można zmieniać nawet podczas działania wykorzystującego go *[Wirtualnej maszyny](/resource/compute/virtual-machine.md)*.

## Cykl życia

### Utworzenie

*Dysk* może zostać utworzony, w przypadku spełnienia następujących warunków: 

 * wszystkie *ogólne warunki*.

Nowy *Dysk* może być utworzony w następujący sposób:

* jako pusty *Dysk*
* poprzez przekazanie lokalnego pliku z wykorzystaniem `CLI`

W przypadku utworzenia *Dysku* na podstawie przesłanego pliku należy spełnić następujące kryteria:

* format pliku *Dysku* to `.vhdx`
* typ vhd *Dysku* to `dynamic`

### Usuwanie

*Dysk* może zostać usunięty, w przypadku spełnienia następujących warunków: 

* stan to ```Rozłączony```
* wszystkie *ogólne warunki*

## Warianty

Dyski są dostępne w następujących wariantach:

Typ     | Dostępny rozmiar | IOPS
------- | ---------------: | ----:
archive |       100 - 1000 | 1000
volume  |       100 - 1000 | 3000
ssd     |          1 - 500 | 50 iops 8k / GB

## Zarządzanie

Dostępne są następujące dedykowane operacje dla *Dysku*:

* pobranie jako plik `.vhdx`
* zwiększenie rozmiaru
* zmniejszenie rozmiaru

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

W przypadku ograniczonego użycia znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/resource/general.md#ograniczone-uzycie)*.

## Przekazanie

Przekazanie *Dysku* jest możliwe między *Projektami* tej samej lub innej *Organizacji*, w przypadku spełnienia następujących warunków:

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

<PageList path_re="guide/storage/disk/"/>
 
## Powiązane produkty

* *[Maszyny wirtualne](/resource/compute/virtual-machine.md)*
* *[Vault](/resource/storage/vault.md)*
