# ISO

## Przeznaczenie

*ISO* stanowi wirtualny obraz płyty, można go użyć w wirtualnym napędzie DVD. Wykorzystuje się go z *[Maszynami wirtualnymi](/resource/compute/virtual-machine.md)*.

Główne zalety:

* ułatwia instalację mniej popularnych systemów operacyjnych
* stanowi wsparcie podczas prac administracyjnych

Przykładowe zastosowania:

* bezpośrednie uruchomienie większości systemów operacyjnych
* świadczenie usług, które nie wymagają dysku

## Cykl życia

### Utworzenie

*ISO* może zostać utworzone po spełnieniu następujących warunków:

* zdalny serwer obsługuje nagłówek HTTP [`Range`](https://tools.ietf.org/html/rfc7233)

Nowe *ISO* może być utworzone w następujący sposób:

* przekazanie lokalnego pliku z wykorzystaniem `CLI`
* ze zdalnego serwera, poprzez podanie adresu URL do zdalnego pliku ISO

### Usuwanie

*ISO* może być usunięte po spełnieniu następujących warunków:

* nie jest podłączone do żadnej *Wirtualnej maszyny*
* wszystkie ogólne warunki *usunięcia zasobu*

## Zarządzanie

Dla *ISO* charakterystyczne są następujące operacje:

 * opublikowanie
 * odpublikowanie
 
### Opublikowanie

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie jest opublikowany
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Odpublikowanie

Operacja może zostać wykonana po spełnieniu następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób jest opublikowany
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dla *ISO* dostępne są następujące typowe operacje:

* możliwość zmiany wyświetlanej nazwy
* zarządzanie *Tagami*

## Opłaty

Opłaty naliczane są na podstawie rozmiaru danych i czasu:

    * wielkość danych w jednostkach GB
    * czas w okresach rozliczeniowych jednej godziny

Opłaty naliczane są dla każdego GB w danym okresie rozliczeniowym.

## Ograniczone użycie

!!! include(standard-limited-usage.md) !!!

## Przekazanie

Przekazanie *ISO* jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujących warunków:

* nie jest podłączone do żadnej *Wirtualnej maszyny*
* wszystkie ogólne warunki *przekazania zasobu*

## Udostępnianie

Udostępnianie jest możliwe między *Projektami* tej samej lub innej *Organizacji* zgodnie z *[Ogólnymi zasadami udostępnianie zasobów](link)*.

<!-- TODO: brak linka-->

!!! include(access.md) !!!

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr           | Wartość
------------------ | ---
Maksymalny rozmiar | 7 GB

## Cennik

Wariant | Okres      | Rozmiar | Cena (PLN)
------- | :--------: | :-----: | ---------:
ISO     | 1 h        | 1 GB    |     0.0002

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *ISO* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/storage/iso/"/>

## Powiązane produkty

* *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*