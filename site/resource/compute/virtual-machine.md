# Wirtualna maszyna

## Przeznaczenie

*Wirtualna maszyna* dostarcza skalowalną moc obliczeniową w chmurze. Platformę zaprojektowano tak, aby zapewnić przewidywalną i stałą wydajność dla długotrwałych zadań, a wielość możliwych konfiguracji pozwala sprostać wymaganiom nawet najbardziej wymagających środowisk.

*Wirtualna maszyna* obsługuje wiodące systemy operacyjne, takie jak MS Windows Server i popularne dystrybucje Linuksa, np. Ubuntu, Debian, a także inne systemy operacyjne, w tym FreeBSD, Mikrotik RouterOS.

Główne zalety:

 * pełna izolacja *Wirtualnej maszyny* zapewniająca najwyższy poziom bezpieczeństwa
 * podłączenia i odłączenia *[Dysków](/resource/storage/disk.md)* w czasie pracy *Wirtualnej maszyny*
 * wykorzystanie aż do 16 dysków przez jedną *Wirtualną maszyne*
 * obsługa wielu *[Adapterów sieciowych](/resource/networking/network-adapter.md)*
 * możliwość uzyskania systemu operacyjnego przez *[ISO](/resource/storage/iso)* lub *[Obraz](/resource/storage/image.md)*

Przykładowe zastosowania:

 * strony, portale i sklepy internetowe
 * systemy księgowe, sprzedażowe, magazynowe
 * usługi internetowe

## Cykl życia

### Utworzenie

*Wirtualna maszyna* może zostać utworzona po spełnieniu następujących warunków:

 * dostępna przestrzeń adresowa w *[Sieci](/resource/networking/network.md)* (jeśli zamierzasz dołączyć do *Sieci*)
 * wszystkie ogólne warunki *utworzenia zasobu*
 * warunki wykorzystania *Obrazu*, w przypadku *Rekomendowanego Obrazu*

### Usuwanie

*Wirtualna maszyna* może zostać usunięta po spełnieniu następujących warunków:

 * wszystkie ogólne warunki *usunięcia zasobu*

## Warianty

Warianty *Wirtualnych maszyn* są pogrupowane na podstawie zależności między rozmiarem pamięci, mocą obliczeniową i innymi głównymi funkcjami.

### Podstawowego przeznaczenia

To grupa wariantów *Wirtualnych maszyn* do podstawowego programowania i testowania, w której wydajność przetwarzania vCPU jest dzielona pomiędzy grupę *Maszyn wirtualnych* opartych na sprawiedliwym podziale mocy obliczeniowej.

<!--TODO: nie rozumiem-->

Nazwa      | vCPU | Pamięć (GB) | Liczba IPv4 | Liczba dysków | Liczba interfejsy sieciowych
---------- | :--: | :---------: | :---------: | :-----------: | :--------------------:
a1.nano    | 1    |         0.5 | 1           | 2             | 1
a1.micro   | 1    |           1 | 1           | 2             | 1
a1.small   | 1    |           2 | 1           | 2             | 1
a1.medium  | 2    |           4 | 1           | 2             | 1
a1.large   | 4    |           7 | 1           | 2             | 1

### Ogólnego przeznaczenia

Nazwa      | vCPU | Pamięć (GB) | Liczba IPv4 | Liczba dysków  | Liczba interfejsów sieciowych
---------- | :--: | :---------: | :---------: | :-----------: | :--------------------:
m2.tiny    | 1    |           1 | 32          | 64            | 8
m2.small   | 1    |           2 | 32          | 64            | 8
m2.medium  | 2    |           4 | 32          | 64            | 8
m2.large   | 2    |           7 | 32          | 64            | 8
m2.xlarge  | 4    |          15 | 32          | 64            | 8
m2.xxlarge | 4    |          24 | 32          | 64            | 8

### Intensywne wykorzystanie procesora

Nazwa      | vCPU | Pamięć (GB) | Liczba IPv4 | Liczba dysków | Liczba interfejsów sieciowych
---------- | :--: | :---------: | :---------: | :-----------: | :--------------------:
c3.light   | 6    |          22 | 32          | 64            | 8
c3.small   | 8    |          30 | 32          | 64            | 8
c3.medium  | 16   |          60 | 32          | 64            | 8
c3.large   | 24   |          90 | 32          | 64            | 8
c3.xlarge  | 32   |         120 | 32          | 64            | 8

### Intensywne wykorzystanie pamięci

Nazwa      | vCPU | Pamięć (GB) | Liczba IPv4 | Liczba dysków | Liczba interfejsów sieciowych
---------- | :--: | :---------: | :---------: | :-----------: | :--------------------:
r4.small   | 6    |          60 | 32          | 64            | 8
r4.medium  | 8    |          90 | 32          | 64            | 8
r4.large   | 12   |         120 | 32          | 64            | 8
r4.xlarge  | 16   |         250 | 32          | 64            | 8
r4.xxlarge | 32   |         488 | 32          | 64            | 8

W szczególnych przypadkach (np. licencjonowania) możliwe jest obniżenie ilości vCPU lub wielkości pamięci dla danego wariantu. Nie ma to jednak wpływu na fakturowanie i standardowe opłaty wariantowe przed modyfikacją.

<!-- ### Sharing (Access Rights) -->

## Zarządzanie

Dla *Wirtualnej maszyny* charakterystyczne są następujące operacje:

 * uruchomienie
 * zatrzymanie
 * wyłączenie
 * zrestartowanie
 * zmiana wariantu

### Uruchomienie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie ```Wyłączony```
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

### Zatrzymanie

Operacja powoduje bezpiecznie zamknięcie systemu operacyjnego.

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie ```Pracujący```
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

### Wyłączenie

Operacja powoduje zakończenie pracy *Wirtualnej maszyny* w sposób zbliżony do odcięcia napięcia.

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie ```Pracujący```
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

### Zresetowanie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie ```Pracujący```
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

### Zmiana wariantu

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie ```Wyłączony```
 * liczba wykorzystywanych *Adapterów sieciowych* nie spowoduje przekroczenia specyfiki nowego wariantu
 * liczba wykorzystywanych *Dysków* nie spowoduje przekroczenia specyfiki nowego wariantu
 * liczba wykorzystywanych *Adresów IP* nie spowoduje przekroczenia specyfiki nowego wariantu
 * limit *Zasobów* *Projektu* pozwala na zmianę
 * *Projekt* posiada dostępne środki na okres wykorzystania *Zasobu* przez 24 godziny
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

### Powiązane zasoby

#### Dysk

Zarządzanie dyskami *Wirtualnej maszyny* może być wykonywane w stanie `Pracujący` lub `Wyłączony`.

Pierwszy dołączony *Dysk* jest przeznaczany na system operacyjny i ma następujące cechy:

 * używany do rozruchu *Wirtualnej maszyny*
 * dołączony do kontrolera dysku IDE
 * można zarządzać nim tylko, gdy *Wirtualna maszyna* jest w stanie `Wyłączony`

Dodatkowe *Dyski* mają następujące cechy:

 * dołączone do kontrolera dysku SCSI
 * można zarządzać nimi, gdy *Wirtualna maszyna* jest w stanie `Pracujący` lub `Wyłączony`

Do zarządzania *Dyskami* *Wirtualnej maszyn* służą następujące operacje:

 * przyłączenie *Dysku* do *Wirtualnej maszyny*
 * odłączenie *Dysku* od *Wirtualnej maszyny*
 * zmiana rozmiaru *Dysku*

##### Przyłączenie Dysku

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * poprawnie utworzony *Dysk* [zgodnie z przewodnikiem](/guide/storage/disk/creating.md)
 * *Wirtualna Maszyna* znajduje się w stanie ```Pracujący``` lub ```Wyłączony```
 * *Dysk* znajduje się w stanie ```Rozłączony```
 * przyłączenie *Dysku* nie spowoduje przekroczenie liczby dopuszczalnych *Dysków* wynikających z wariantu *Wirtualnej Maszyny*
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

##### Odłączenie Dysku

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie ```Wyłączony```, w przypadku pierwszego dołączonego *Dysku*
 * *Wirtualna Maszyna* znajduje się w stanie ```Pracujący``` lub ```Wyłączony```, w przypadku pozostałych *Dysków*
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

##### Metadane

Metadane chmury i użytkownika są wstrzykiwane podczas uruchamiania *Wirtualnej maszyny*.
Proces wstrzykiwania metadanych wymaga, aby pierwszy *Dysk* miał jedną partycję z następującymi cechami:

 * etykieta "CLOUDMD"
 * system plików `fat32`

Jeżeli taka partycja zostanie znaleziona, zostaną na nią skopiowane następujące pliki:

 * ```cloud.json``` - plik zawierający metadane chmury w postaci JSON
 * ```user.json``` - plik zawierający metadane użytkownika wprowadzone podczas utworzenia *Wirtualnej maszyny* przez użytkownika

Metadane chmury obejmują wszystkie informacje dotyczące konfiguracji *Wirtualnej maszyny*, które mogą być przydatne podczas konfiguracji systemu operacyjnego, m.in. *Adresy IP* przypisane do *Interfejsów sieciowych*, a także dane uwierzytelniające (hasła lub klucze ssh).

Jeśli plik `user.data` zawiera na początku pliku `shebang` (`#!`), to zostanie wykonany, jeśli zostanie znaleziony odpowiedni interpreter (zdefiniowany przez `shebang`).

#### Interfejsy sieciowe

Zarządzanie *Interfejsami sieciowymi* *Wirtualnej maszyny* może być wykonywane w stanie `Wyłączony`.

Do zarządzania *Interfejsami sieciowymi* *Wirtualnej maszyny* w stanie `Wyłączony` służą następujące operacje:

 * dodanie nowego interfejsu
 * usunięcie wybranego interfejsu

##### Dodanie interfejsu sieciowego

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie ```Wyłączony```
 * dodanie interfejsu nie spowoduje przekroczenie liczby dopuszczalnych interfejsów wynikających z wariantu *Wirtualnej Maszyny*
 * *Wirtualna Maszyna* nie posiada aktualnie przyłączonej *Sieci* Internet, jeżeli przyłączana jest *Sieć* Internet,
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

##### Usunięcie interfejsu sieciowego

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie ```Wyłaczony```
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

#### Napęd DVD

Każda *Wirtualna maszyna* posiada domyślnie 1 napęd DVD *Wirtualnej maszyny*.

Do zarządzania napędem DVD służą następujące operacje:

 * wsunięcie *ISO*
 * wysunięcie *ISO*

##### Wsunięcie ISO

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * poprawnie utworzone *ISO*, [zgodnie z przewodnikiem](/guide/storage/iso/creating.md)
 * *Wirtualna Maszyna* znajduje się w stanie `Pracujący` lub `Wyłączony`
 * do *Wirtualnej Maszyny* nie jest aktualnie wsunięte żadne *ISO*
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

##### Wysunięcie ISO

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie `Pracujący` lub `Wyłączony`
 * *Wirtualna Maszyna* znajduje się w stanie ```Wyłaczony```
 * *Wirtualna Maszyna*nie znajduje się w stanie *Ograniczonego użycia*

### Dodatkowe operacje

Do zarządzania *Wirtualną maszyną* są przeznaczone następujące dodatkowe operacje:

 * dostęp do konsoli poprzez port szeregowy
 * dostęp do graficznej konsoli
 * zarządzanie metadanymi użytkownika
 * reset hasła
 * podgląd parametrów pracy *Dysków*, *Interfejsów sieciowych* i CPU

#### Dostęp do konsoli poprzez port szeregowy

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie `Pracujący`

#### Dostęp do graficznej konsoli

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie `Pracujący`

#### Zarządzanie metadanymi użytkownika

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna*  nie znajduje się w stanie *Ograniczonego użycia*

#### Podgląd parametrów pracy

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie `Pracujący`
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

## Dostęp

Podstawowy dostęp do *Wirtualnej Maszyny* odbywa się poprzez sieć. Dostęp do systemu operacyjnego działającego w ramach *Wirtualnej maszyny* różni się i zależy m.in. od wykorzystanego *[Rekomendowanego Obrazu](/platform/recommended-images.md)*. Obsługiwane protokoły to m. in.:

 * SSH (Secure Shell) dla dystrybucji opartych na systemie Linux
 * RDP (Remote Desktop Protocol) dla MS Windows Server

Platforma oferuje także dostęp poprzez:

 * konsolę z wykorzystaniem portu szeregowego
 * graficzną konsolę

Dostęp do *Wirtualnej maszyny* zależy od wykorzystanego systemu operacyjnego i jest możliwy za pomocą następujących danych dostępowych:

 * hasło
 * klucze SSH

Zarządzanie danymi dostępowymi wyjaśnione jest w [Ogólnym omówieniu zarządzania danymi dostępowymi](/platform/resource.html#dane-dostepowe).

### Typowe operacje

Dla *Wirtualnej maszyny* dostępne są następujące typowe operacje:

 * zmiana nazwy
 * zarządzanie *Tagami*

## Opłaty

Opłaty naliczane są na podstawie wariantu i czasu.

Możliwe są dodatkowe opłaty dotyczące opcjonalnych *Zasobów* używanych przez *Maszynę wirtualną*. W większości przypadków należą do nich: *Dysk*, trwały *Adres IP* i ruch sieciowy poprzez *Interfejs sieciowy*.

## Ograniczone użycie

W przypadku ograniczonego użycia:

 * *Wirtualna maszyna* ulega wyłączeniu
 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr                              | Wartość
------------------------------------- | -----------
Hipernadzorca (ang. _hypervisor_)     | Hyper-V
Typ wirtualizacji                     | Typ 1

## Cennik

### Na żądanie

#### Podstawowe użycie

Wariant    | Okres                   | Cena (PLN)             | Uwagi
---------- | :---------------------: | :--------------------- | :---
a1.nano    | [PERIOD="vm:a1.nano"]   | [PRICE="vm:a1.nano"]   |
a1.micro   | [PERIOD="vm:a1.micro"]  | [PRICE="vm:a1.micro"]  |
a1.small   | [PERIOD="vm:a1.small"]  | [PRICE="vm:a1.small"]  |
a1.medium  | [PERIOD="vm:a1.medium"] | [PRICE="vm:a1.medium"] |
a1.large   | [PERIOD="vm:a1.large"]  | [PRICE="vm:a1.large"]  |

#### Ogólne użycie

Wariant    | Okres                    | PLN                     | Uwagi
---------- | :----------------------: | :---------------------- | :----
m2.tiny    | [PERIOD="vm:m2.tiny"]    | [PRICE="vm:m2.tiny"]    |
m2.small   | [PERIOD="vm:m2.small"]   | [PRICE="vm:m2.small"]   |
m2.medium  | [PERIOD="vm:m2.medium"]  | [PRICE="vm:m2.medium"]  |
m2.large   | [PERIOD="vm:m2.large"]   | [PRICE="vm:m2.large"]   |
m2.xlarge  | [PERIOD="vm:m2.xlarge"]  | [PRICE="vm:m2.xlarge"]  |
m2.xxlarge | [PERIOD="vm:m2.xxlarge"] | [PRICE="vm:m2.xxlarge"] |

#### Intensywne wykorzystanie procesora

Wariant    | Okres                   | PLN                    | Uwagi
---------- | :---------------------: | :--------------------- | :---
c3.light   | [PERIOD="vm:c3.light"]  | [PRICE="vm:c3.light"]  |
c3.small   | [PERIOD="vm:c3.small"]  | [PRICE="vm:c3.small"]  |
c3.medium  | [PERIOD="vm:c3.medium"] | [PRICE="vm:c3.medium"] |
c3.large   | [PERIOD="vm:c3.large"]  | [PRICE="vm:c3.large"]  |
c3.xlarge  | [PERIOD="vm:c3.xlarge"] | [PRICE="vm:c3.xlarge"] |

#### Intensywne wykorzystanie pamięci

Wariant    | Okres                    | PLN                     | Uwagi
---------- | :----------------------: | :---------------------- | :----
r4.small   | [PERIOD="vm:r4.small"]   | [PRICE="vm:r4.small"]   |
r4.medium  | [PERIOD="vm:r4.medium"]  | [PRICE="vm:r4.medium"]  |
r4.large   | [PERIOD="vm:r4.small"]   | [PRICE="vm:r4.small"]   |
r4.xlarge  | [PERIOD="vm:r4.xlarge"]  | [PRICE="vm:r4.xlarge"]  |
r4.xxlarge | [PERIOD="vm:r4.xxlarge"] | [PRICE="vm:r4.xxlarge"] |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

<!--
Transfer is not availabe due following reason:
- required validation of licensing or any other requirements
- vm is composite of multiple resources
-->

## Przewodniki

Do korzystania z *Wirtualnej maszyny* mogą być przydatne następujące specjalne przewodniki:

<PageList path_re="guide/compute/virtual-machine/"/>

Użyteczne mogą okazać się także następujące ogólne przewodniki:

<PageList path_re="guide/resource/"/>

## Powiązane produkty

 * *[Dysk](/resource/storage/disk.md)*
 * *[Sieć](/resource/networking/network.md)*
 * *[Obraz](/resource/storage/image.md)*