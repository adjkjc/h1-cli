# ISO

## Przeznaczenie

*ISO* służy do wykorzystania z *[Maszynami wirtualnymi]()*, gdzie można go zamontować/wysunąć w wirtualnym napędzie DVD. 

W *Wirtualnej maszynie* umożliwia bezpośrednie uruchomienie większości systemów operacyjnych, co ułatwia instalacja mniej popularnych systemów operacyjnych i stanowi wsparcie podczas prac administracyjnych. Możliwe jest także wykorzystanie go do świadczenia usług, które nie wymagają dysku.

## Cykl życia

### Utworzenie

Nowe *ISO* może być utworzone w następujący sposób:

* przekazanie lokalnego pliku z wykorzystaniem `CLI`
* ze zdalnego serwera, podając adres URL do zdalnego pliku ISO.

Wymagana jest, aby zdalny serwer obsługiwał nagłówek HTTP [`Range`](https://tools.ietf.org/html/rfc7233).

### Usuwanie

*ISO* może być usunięty w przypadku spełnienia następujących warunków:

* nie jest podłączony do żadnej *Wirtualnej maszyny*
* wszystkie *ogólne* warunki

## Zarządzanie

Dostępne są następujące dedykowane operacje:

 * opublikowanie
 * odpublikowanie
 
### Opublikowanie

Operacja może zostać wykonana, w przypadku spełnienia następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób nie jest opublikowany
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Odpublikowanie

Operacja może zostać wykonana, w przypadku spełnienia następujących warunków: 

* zasób znajduje się w stanie ```Online```
* zasób jest opublikowany
* zasób nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dostępne są następujące typowe operacje:

* możliwość zmiany wyświetlanej nazwy
* zarządzanie *Tagami*

## Płatność

* Opłaty są naliczane na podstawie rozmiaru danych i czasu

    * Wielkość danych w jednostkach GB
    * Czas w okresach rozliczeniowych jednej godziny

* Opłaty są obliczane dla każdego GB w danym okresie rozliczeniowym

## Ograniczone użycie

!!! include(standard-limited-usage.md) !!!

## Przekazanie

Przekazanie jest możliwe między *Projektami* tej samej lub innej *Organizacji*, w przypadku spełnienia następujące warunków:

* nie jest podłączony do żadnej *Wirtualnej maszyny*
* wszystkie *ogólne* warunki

## Udostępniania

Udostępnianie jest możliwe między *Projektami* tej samej lub różnej *Organizacji* zgodnie z *[Ogólnymi zasadami udostępnianie zasobów]()*.

!!! include(access.md) !!!

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr           | Wartość
------------------ | ---
Maksymalny rozmiar | 7 GB

## Cennik

Wariant | Cena (PLN) | Rozmiar | Cena (PLN)
------- | :--------: | :-----: | ---------:
ISO     |     1h     | 1GB     |     0.0002

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="guide/storage/iso/"/>

## Powiązane produkty

* *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*