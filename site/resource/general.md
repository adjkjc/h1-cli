# Uwagi ogólne

## Płatność

### Opłaty

Opłaty na podstawie czasu są naliczane od otworzenia *Zasobu* do usunięcia *Zasobu*.

### Ogólne warunki opłat

* czas jest zaokrąglany w górę do najbliższego okresu rozliczeniowego.
* rozmiar jest zaokrąglany w górę do najbliższej jednostki rozliczeniowej.

### Brak dostępnych środków

Jeśli *Projekt* nie ma dostępnych środków, wówczas *Ograniczone użycie* zostanie zastosowane do *Zasobu*.

## Cykl życia

### Utworzenie

*Zasób* może zostać utworzony w przypadku spełnienia wszystkich następujących warunków:

* *Projekt* posiada dostępne środki na okres wykorzystania *Zasobu* rzez 24 godziny lub pierwszy okres rozliczeniowy, 
w zależności co jest dłuższe

### Usuwanie

*Zasób* może zostać usunięty jeżeli spełnione zostaną wszystkie następujące warunki:

* nie posiada *Tagów* z grupy `chronione` zdefiniowanej dla *Projektu&

## Zarządzanie

*Zasób* pozwala na wykonanie następujących typowych akcji, jeżeli nie określono inaczej:

* zarządzanie danymi dostępowymi, których typ określono dla *Zasobu*
* zarządzanie *Tagami*
* zmiana nazwy

### Dane dostępowe

Poszczególny *Zasób* może udostępniać następujące rodzaje danych dostępowych:

* hasło
* klucz SSH
* certyfikat x.509

Hasła są przechowywane wyłącznie w postaci funkcji skrótu.

W celu wykorzystania klucza SSH w celu uprawnienia dostępu do *Zasobu* konieczne jest jego uprzednie wczytanie jako 
klucz SSH *Użytkownika* lub *Projektu*.

*Zasób* umożliwia dla wspieranych rodzajów danych dostępowych następujące operacje:

* dodanie danych dostępowych
* usunięcie danych dostępowych
* zmiana nazwy danych dostępowych

## Ograniczone użycie

### Zarządzanie

Ograniczone korzystanie z *Zasobu* umożliwia wykonywanie następujących operacji zarządzania:

* usunięcie *Zasobu*
* zarządzanie *Tagami*

### Płatność

Nie ulegają zmianie cykle rozliczeniowe, a standardowe opłaty za usługi są naliczane do czasu usunięcia *Zasobu*.

## Przekazanie

Przekazanie wymaga spełnienia następujących warunków:

* Zasób nie jest w stanie *Ograniczonego użycia*
* docelowy *Projekt* ma środki na pierwszy pełny okres rozliczeniowy

Przekazanie zasobu składa się z  następujących etapów:

* żądanie przekazania przez *Właściciela* *Projektu* do docelowego *Projektu*
* akceptacja lub odrzucenia przez *Właściciela* docelowego *Projektu*

Po zakończeniu przesyłania zasobów:

* wszystkie *Prawa dostępu* są resetowane do wartości domyślnych
* zdarzenia w historii zdarzeń dla zasobu są widoczne tylko dla zdarzeń generowanych przez bieżący *Projekt*, do którego przypisany jest zasób
* opłata jest naliczana za pierwszy pełny okres rozliczeniowy

## Specjalne regiony

Istnieją specjalne regiony stworzone dla wymagających klientów o określonych wymaganiach branżowych:

* administracja samorządowa
* administracja rządowa i instytucje publiczne
* organizacje pozarządowe
* organizacje opieki zdrowotnej
* organizacje akademickie i edukacyjne

*Specjalne regiony dostępne tylko dla wybranych organizacji na życzenie.*

## Polityka danych

W krótkim czasie od zgłoszenia usunięcia *Dane klienta* zostaną trwale usunięte, jednak nie później niż w ciągu 30 dni.