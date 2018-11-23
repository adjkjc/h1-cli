# Zasób

*Zasób* stanowi obiekt w infrastrukturze Platformy, z którym *Użytkownik* może współdziałać i go modyfikować. Zwykle *Zasób* reprezentuje świadczoną usługę.

## Cykl życia

### Utworzenie

*Zasób* może zostać utworzony w przypadku spełnienia wszystkich następujących warunków:

 * *Projekt* posiada dostępne środki na okres wykorzystania *Zasobu* przez 24 godziny lub pierwszy okres rozliczeniowy, w zależności co jest dłuższe
 * limit zasobów *Projektu* pozwala na utworzenie danego *Zasobu*
 * zostały spełnione wymagania specyficzne dla *Zasobu*

### Usuwanie

*Zasób* może zostać usunięty jeżeli spełnione zostaną wszystkie następujące warunki:

 * nie posiada *Tagów* z grupy `chronione` zdefiniowanej dla *Projektu*
 * zostały spełnione wymagania specyficzne dla *Zasobu*

## Usługi

*Zasób* może mieć przypisane jedną lub wiele *Usług* określających:

 * cechy i funkcjonalności *Zasobu* np. wydajność dysku twardego, przepustowość łącza sieciowego,
 * sposób, wysokość naliczania opłat oraz ich cykl,
 * specjalne uprawnienie do wykorzystywania oprogramowania

*Usługi* mogą być ogólnodostępne lub dostępna na podstawie umów specjalnych.

## Zarządzanie

*Zasób* pozwala na wykonanie następujących typowych akcji, jeżeli nie określono inaczej:

* zarządzanie danymi dostępowymi, których typ określono dla *Zasobu*
* zarządzanie *Tagami* przypisanych do *Zasobu*
* zmiana nazwy *Zasobu*
* przekazanie do innego *Projektu*

### Dane dostępowe

Poszczególny *Zasób* może udostępniać następujące rodzaje danych dostępowych:

* hasło
* klucz SSH
* certyfikat x.509

Hasła są przechowywane wyłącznie w postaci funkcji skrótu.

W celu wykorzystania klucza SSH w celu uprawnienia dostępu do *Zasobu* konieczne jest jego uprzednie zaimportowanie jako klucz SSH *Użytkownika* lub *Projektu*.

*Zasób* umożliwia dla wspieranych rodzajów danych dostępowych następujące operacje:

* dodanie danych dostępowych
* usunięcie danych dostępowych
* zmiana nazwy danych dostępowych

### Zarządzanie *Tagami*

*Tagi* umożliwiają logiczne zgrupowanie w celu zbiorczego odwołania lub nadania im jednolitych właściwości.

*Tag* określony jest przez klucz i wartość.

*Tag* którego wartością klucza jest `protected` dodany do *Zasobu* uniemożliwia usunięcie *Zasobu* do momentu usunięcia tego *Tagu*.

### Przekazanie

Przekazanie wymaga spełnienia następujących warunków:

* Zasób nie jest w stanie *Ograniczonego użycia*
* spełnione są warunki usunięcia *Zasobu* w pierwotnym *Projekcie*
* *Użytkownik* posiada rolę ```owner``` w *Projekcie* przekazującym i w *Projekcie* docelowym
* docelowy *Projekt* posiada dostęp do wszystkich *Usług* *Zasobu*
* docelowy *Projekt* posiada środki wystarczające na pierwszy pełny okres rozliczeniowy *Zasobu*

W przypadku przekazania *Zasobu*:

* zdarzenia w historii zdarzeń dla niego są widoczne tylko dla zdarzeń generowanych przez bieżący *Projekt*, do którego przypisany jest *Zasób*.
* naliczana jest opłata za pierwszy pełny okres rozliczeniowy

Nie ulegają zmianie cykle rozliczeniowe, a standardowe opłaty za usługi są naliczane do czasu usunięcia *Zasobu*.

## Ograniczone użycie

### Zarządzanie

Ograniczone korzystanie z *Zasobu* umożliwia wykonywanie następujących operacji zarządzania:

* usunięcie *Zasobu*
* zarządzanie *Tagami*

### Opłaty

* Opłaty naliczane są w cyklach rozliczeniowych i w wysokości wyznaczonej przez charakterystykę *Usługi* od utworzenia *Zasobu* do jego usunięcia.

# Przewodniki

Do korzystania z *Zasobów* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/resource/"/>

Dostępne są [przewodniki](/guide/) dla poszczególnych *Zasobów*.