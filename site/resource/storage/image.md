# Obraz

## Przeznaczenie

*Obraz* to uchwycony w danym momencie stan *Dysków* dołączonych do *Wirtualnej maszyny*.

Główne zalety:

 * przechowywanie w chmurze na odrębnych nośnikach zwiększających bezpieczeństwo danych
 * brak konieczności wyłączania *Wirtualnej maszyny* do utworzenia obrazu
 * szeroki wachlarz dostępnych rekomendowanych obrazów umożliwiających szybkie uruchomienie *Wirtualnej maszyny*

Przykładowe zastosowania:

 * baza do utworzenia nowej *[Wirtualnej maszyny](/resource/compute/virtual-machine.md)*
 * pełna kopia danych

## Cykl życia

### Utworzenie

*Obraz* może zostać utworzony po spełnieniu następujących warunków:

 * *Wirtualna maszyna* jest w stanie `Pracująca` lub `Wyłączona`
 * wszystkie ogólne warunki *utworzenia zasobu*

*Obraz* tworzony jest na podstawie istniejącej *Wirtualnej maszyny*.

Chociaż istnieje możliwość utworzenia *Obrazu*, gdy *Wirtualna maszyna* jest w stanie `Pracująca`, to ze względu na spójność danych zalecamy wykonywanie tej operacji po przełączeniu *Wirtualnej maszyny*  w stan `Wyłączona`.

### Usuwanie

*Obraz* może zostać usunięty po spełnieniu następujących warunków:

 * wszystkie ogólne warunki *usunięcia zasobu*

## Zarządzanie

### Typowe operacje

Dla *Obrazu* dostępne są następujące typowe operacje:

 * możliwość zmiany wyświetlanej nazwy
 * zarządzanie *Tagami*

## Opłaty

Opłaty naliczane są na podstawie rozmiaru danych i czasu:

 * wielkość danych w jednostkach GB
 * czas w okresach rozliczeniowych jednej godziny

Opłaty naliczane są za każdy GB przestrzeni dyskowej zajmowanej przez *Obraz* w okresie rozliczeniowym.

## Ograniczone użycie

!!! include(standard-limited-usage.md) !!!

## Przekazanie

Przekazanie jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujących warunków:

 * wszystkie ogólne warunki przekazania zasobu

## Udostępnianie

Udostępnianie jest możliwe między *Projektami* tej samej lub innej *Organizacji* zgodnie z *[Ogólnymi zasadami udostępnianie zasobów](/platform/resource.md)*.

!!! include(access.md) !!!

## Lokalizacje

!!! include(regions.md) !!!

## Cennik

Nazwa              | Okres  | Cena (PLN) | Uwagi
------------------ | :----: | ---------: | :----:
obraz              |  1 h   | [PRICE="image:image standard"] | 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Obrazu* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/storage/image/"/>

## Powiązane produkty

 * *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*
 * *[Dysk](/resource/storage/disk.md)*
