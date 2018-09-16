# Wirtualna maszyna

## Przeznaczenie

*Wirtualna maszyna* zapewnia skalowalną moc obliczeniową w chmurze. Środowisko zostało zaprojektowane tak, aby zapewnić przewidywalną i stałą wydajności dla długotrwałych zadań. Mnogość konfiguracji pozwala spełnić spełnić wymaganiom nawet najbardziej wymagających środowisk.

*Wirtualna maszyna* obsługuje wszystkie wiodące systemy operacyjne, takie jak MS Windows Server, każdą popularną dystrybucję Linuksa, taką jak Ubuntu, Debian lub inne systemy operacyjne, w tym FreeBSD, Mikrotik RouterOS - możesz je uzyskać przez *[ISO](/resource/storage/iso)* lub *[Obraz](/resource/storage/image.md)*. 

## Cykl życia

### Utworzenie

*Maszyna wirtualna* może zostać utworzona, w przypadku spełnienia następujących warunków:

 * dostępna przestrzeń adresowa w *[Sieć](/resource/networking/network.md)* (jeśli zamierzasz dołączyć do *Sieci*)
 * wszystkie *ogólne* warunki.

### Usuwanie

*Wirtualna maszyna* może zostać usunięta, jeśli spełnione są wszystkie następujące warunki:

 * wszystkie *ogólne* warunki.

## Warianty

Warianty *Wirtualnych maszyn* są pogrupowane na podstawie zależności między rozmiarem pamięci, mocą obliczeniową i innymi głównymi funkcjami.

### Podstawowego przeznaczenie

Jest to grupa wariantów *Wirtualnych maszyn* do podstawowego programowania i testowania, w których wydajność przetwarzania vCPU jest dzielona pomiędzy grupę *Maszyn wirtualnych* opartych na równym współudziale podstawie mocy obliczeniowej.

Nazwa      | vCPU | Pamięć (GB) | Liczba IPv4 | Liczba dysków | Liczba interfejsy sieciowych
---------- | :--: | :---------: | :---------: | :-----------: | :--------------------:  
a1.nano    | 1    |         0.5 | 1           | 2             | 1                       
a1.micro   | 1    |           1 | 1           | 2             | 1                       
a1.small   | 1    |           2 | 1           | 2             | 1                       
a1.medium  | 2    |           4 | 1           | 2             | 1                       
a1.large   | 4    |           7 | 1           | 2             | 1                       

### Ogólnego przeznaczenie

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

Na życzenie w celu zaspokojenia potrzeb szczególnych przypadków (np. licencjonowania) możliwe jest obniżenie ilości vCPU lub wielkości pamięci dla danego wariantu. Nie ma to jednak wpływu na fakturowanie i standardowe opłaty wariantowe przed modyfikacją.

<!-- ### Sharing (Access Rights) -->

## Zarządzanie

### Dedykowane operacje

Dostępne są następujące dedykowane operacje

 * Uruchomienie 
 * Zatrzymanie, co powoduje bezpiecznie zamknięcie systemu operacyjnego
 * Wyłączenie, co powoduje działanie podobnie do odcięcia napięcia
 * Zrestartowanie

### Powiązane zasoby

#### Dysk

Zarządzanie dyskami *Wirtualnej maszyny* może być wykonywane w stanie `Pracujący` lub `Wyłączony`.

Pierwszy dołączony *Dysk* jest dyskiem systemu operacyjnego i ma następujące cechy:

 * używane do rozruchu *Wirtualnej maszyny*
 * dołączony do kontrolera dysku IDE
 * można zarządzać nim tylko w stanie `Wyłączony` *Wirtualnej maszyny*

Dodatkowe *Dyski* mają następujące cechy:

 * dołączony do kontrolera dysku SCSI
 * można zarządzać nimi w stanie `Pracujący` lub `Wyłączony` *Wirtualnej maszyny*

Następujące operacje przeznaczone do zarządzania *Dyskami* *Wirtualnej maszyn* są dostępne:

 * dołączenie *Dysku* do *Wirtualnej maszyny*
 * odłączenie *Dysku* od *Wirtualnej maszyny*
 * zmiana rozmiaru *Dysku*

##### Metadane

Metadane chmury i użytkownika są wstrzykiwane podczas uruchamiania *Wirtualnej maszyny*.
Proces wstrzykiwania metadanych wymaga, aby pierwszy *Dysk* miał jedną partycję z następującymi cechami:

 * etykieta "CLOUDMD"
 * system plików `fat32`

Jeżeli taka partycja zostanie znaleziona, następujące pliki zostaną na nią skopiowane

 * ```cloud.json``` - plik zawierający metadane chmury w postaci JSON
 * ```user.json``` - plik zawierający metadane użytkownika wprowadzone podczas utworzenia *Wirtualnej maszyny* przez 
użytkownika

Metadane chmury obejmują wszystkie informacje dotyczące konfiguracji *Wirtualnej maszyny*, które mogą być przydatne
podczas konfiguracji systemu operacyjnego. Między innymi *Adresy IP* przypisane do *Interfejsów sieciowych*, a także 
dane uwierzytelniające (hasła lub klucze ssh).

Jeśli plik `user.data` zawiera na początku pliku `shebang` (`#!`), to zostanie wykonany, jeśli zostanie znaleziony 
odpowiedni interpreter (zdefiniowany przez `shebang`).

#### Interfejsy sieciowe

Zarządzanie *Interfejsami sieciowymi* *Wirtualnej maszyny* może być wykonywane `Wyłączony`.

Następujące operacje przeznaczone do zarządzania *Interfejsami sieciowymi* *Wirtualnej maszyn* w stanie `Wyłączony` są 
dostępne:

* Dodanie nowego
* Usunięcie wybranego

#### Napęd DVD

Każda *Wirtualna maszyna* posiada domyślnie 1 napęd DVD *Wirtualnej maszyny*.

Następujące operacje przeznaczone do zarządzania napędem DVD są dostępne:

* wsunięcie *ISO*
* wysunięcie *ISO*

### Dodatkowe operacje

Następujące dodatkowe operacje przeznaczone do zarządzania *Wirtualną maszyną* są dostępne:

* Dostęp do konsoli poprzez port szeregowy
* Dostęp do graficznej konsoli
* Zarządzanie metadanymi użytkownika
* Reset hasła 
* Podgląd parametrów pracy *Dysków*, *Interfejsów sieciowych* i CPU

## Dostęp

Dostęp sieciowy do systemu operacyjnego działającego w ramach *Wirtualnej maszyny* różni się i zależy m. in. od wykorzystanego *Rekomendowanego Obrazu*. Obsługiwane protokoły:

* SSH (Secure Shell) dla dystrybucji opartych na systemie Linux
* RDP (Remote Desktop Protocol) dla MS Windows Server

<!-- Add link to recommended images -->

Platforma udostępnia także dostęp poprzez:

* konsolę poprzez port szeregowy
* graficzną konsolę

Dostęp do *Wirtualnej maszyny* w zależności od wykorzystanego systemu operacyjnego możliwy jest z wykorzystaniem następujących danych dostępowych:

* hasło
* klucze SSH

Zarządzanie danymi dostępowymi wyjaśnione jest w [ogólnym omówieniu zarządzania danymi dostępowymi](/platform/resource.html#dane-dostepowe).

### Typowe operacje

Dostępne są następujące typowe operacje dla *Dziennika*:

* zmiana nazwy
* zarządzanie *Tagami*

## Płatność

* Opłaty są naliczane na podstawie wariantu i czasu.

* Możliwe są dodatkowe opłaty dotyczące opcjonalnych *Zasobów* używanych przez *Maszynę wirtualną*. Większości przypadków są to: *Dysk*, trwały *Adres IP* i ruch sieciowy poprzez *Interfejs sieciowy*.

## Ograniczonego użycia

W przypadku ograniczonego użycia:
 
 * *Wirtualna maszyna* ulega wyłączeniu
 * znajdują zastosowanie ogólne warunki *[Ograniczonego użycia](/platform/resource.md#ograniczone-uzycie)*.

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr                              | Wartość
------------------------------------- | -----------
Hipernadzorca (ang. _hypervisor_)     | Hyper-V
Typ wirtualizacji                     | Typ 1

## Cennik

### Na-żądanie

#### Podstawowe użycie

Wariant    | PLN    | Okres 
---------- | -----: | :--:
a1.nano    | 0.0153 | 1h
a1.micro   | 0.0263 | 1h
a1.small   | 0.0481 | 1h
a1.medium  | 0.0962 | 1h
a1.large   | 0.1706 | 1h

#### Ogólne użycie

Wariant    | PLN    | Okres 
---------- | -----: | :--:
m2.tiny    | 0.0393 | 1h
m2.small   | 0.0612 | 1h
m2.medium  | 0.1224 | 1h
m2.large   | 0.1880 | 1h
m2.xlarge  | 0.3978 | 1h
m2.xxlarge | 0.5946 | 1h

#### Intensywne wykorzystanie procesora

Wariant    | PLN    | Okres 
---------- | -----: | :--:
c3.light   | 0.8002 | 1h
c3.small   | 1.0849 | 1h
c3.medium  | 2.1698 | 1h
c3.large   | 3.2546 | 1h
c3.xlarge  | 4.3395 | 1h

#### Intensywne wykorzystanie pamięci

Wariant    | PLN    | Okres 
---------- | -----: | :--:
r4.small   | 1.2143 | 1h
r4.medium  | 1.8128 | 1h
r4.large   | 2.4287 | 1h
r4.xlarge  | 4.9814 | 1h
r4.xxlarge | 9.7303 | 1h 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:
 
<PageList path_re="guide/compute/virtual-machine/"/>

## Powiązane produkty

* *[Dysk](/resource/storage/disk.md)*
* *[Sieć](/resource/networking/network.md)*
* *[Obraz](/resource/storage/image.md)*
