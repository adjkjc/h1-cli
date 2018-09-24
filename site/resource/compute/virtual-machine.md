# Wirtualna maszyna

## Przeznaczenie

*Wirtualna maszyna* dostarcza skalowalną moc obliczeniową w chmurze. Platformę zaprojektowano tak, aby zapewnić przewidywalną i stałą wydajność dla długotrwałych zadań, a wielość możliwych konfiguracji pozwala sprostać wymaganiom nawet najbardziej wymagających środowisk.

*Wirtualna maszyna* obsługuje wiodące systemy operacyjne, takie jak MS Windows Server i popularne dystrybucje Linuksa, np. Ubuntu, Debian, a także inne systemy operacyjne, w tym FreeBSD, Mikrotik RouterOS.

Główne zalety:

 * pełna izolacja *Wirtualnej maszyny*  zapewniająca najwyższy poziom bezpieczeństwa
 * możliwość podłączenia i odłączenia *Dysków* w czasie pracy *Wirtualnej maszyny*
 * podłączenie aż do 16 dysków  do jednej *Wirtualnej maszyny*
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

### Usuwanie

*Wirtualna maszyna* może zostać usunięta po spełnieniu następujących warunków:

 * wszystkie ogólne warunki *usunięcia zasobu*

## Warianty

Warianty *Wirtualnych maszyn* są pogrupowane na podstawie zależności między rozmiarem pamięci, mocą obliczeniową i innymi głównymi funkcjami.

### Podstawowego przeznaczenia

To grupa wariantów *Wirtualnych maszyn* do podstawowego programowania i testowania, w której wydajność przetwarzania vCPU jest dzielona pomiędzy grupę *Maszyn wirtualnych* opartych na równym współudziale podstawie mocy obliczeniowej.

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
 * zatrzymanie, co powoduje bezpiecznie zamknięcie systemu operacyjnego
 * wyłączenie, co powoduje działanie podobnie do odcięcia napięcia
 * zrestartowanie

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
 * przyłączenie *Dysku* nie spowoduje przekroczenie liczby dopuszczalnych interfejsów wynikających z wariantu *Wirtualnej Maszyny*
 * *Wirtualna Maszyna* nie znajduje się w stanie *Ograniczonego użycia*

##### Odłączenie Dysku

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Wirtualna Maszyna* znajduje się w stanie ```Wyłączony```, w przypadku pierwszego dołączonego *Dysku*
 * *Wirtualna Maszyna* znajduje się w stanie ```Pracujący``` lub ```Wyłączony```
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

 * poprawnie utworzone *ISO*, [zgodnie z przewodnikiem](/guide/networking/iso/creating.md)
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

Dostęp sieciowy do systemu operacyjnego działającego w ramach *Wirtualnej maszyny* różni się i zależy m.in. od wykorzystanego *[Rekomendowanego Obrazu](/platform/recommended-images.md)*. Obsługiwane protokoły to m. in.:

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

Wariant    | PLN    | Okres 
---------- | -----: | :--:
a1.nano    | 0.0153 | 1 h
a1.micro   | 0.0263 | 1 h
a1.small   | 0.0481 | 1 h
a1.medium  | 0.0962 | 1 h
a1.large   | 0.1706 | 1 h

#### Ogólne użycie

Wariant    | PLN    | Okres 
---------- | -----: | :--:
m2.tiny    | 0.0393 | 1 h
m2.small   | 0.0612 | 1 h
m2.medium  | 0.1224 | 1 h
m2.large   | 0.1880 | 1 h
m2.xlarge  | 0.3978 | 1 h
m2.xxlarge | 0.5946 | 1 h

#### Intensywne wykorzystanie procesora

Wariant    | PLN    | Okres 
---------- | -----: | :--:
c3.light   | 0.8002 | 1 h
c3.small   | 1.0849 | 1 h
c3.medium  | 2.1698 | 1 h
c3.large   | 3.2546 | 1 h
c3.xlarge  | 4.3395 | 1 h

#### Intensywne wykorzystanie pamięci

Wariant    | PLN    | Okres 
---------- | -----: | :--:
r4.small   | 1.2143 | 1 h
r4.medium  | 1.8128 | 1 h
r4.large   | 2.4287 | 1 h
r4.xlarge  | 4.9814 | 1 h
r4.xxlarge | 9.7303 | 1 h 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

<!-- 
Transfer is not availabe due following reason:
- required validation of licensing or any other requirements
- vm is composite of multiple resources
-->

## Przewodniki

Do korzystania z *Wirtualnej maszyny* mogą być przydatne następujące przewodniki:
 
<PageList path_re="guide/compute/virtual-machine/"/>

## Powiązane produkty

 * *[Dysk](/resource/storage/disk.md)*
 * *[Sieć](/resource/networking/network.md)*
 * *[Obraz](/resource/storage/image.md)*