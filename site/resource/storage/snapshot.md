# Migawka

## Przeznaczenie

*Migawka* to uchwycony w danym momencie stan *[Vault](/resource/storage/vault.md)*. 
<!-- TODO: Skąd się wzięła nazwa "Vault"? -->

Główne zalety:
* rozliczana tylko za zmienione dane

Przykładowe zastosowania:
* baza do utworzenia nowego *Vaulta*
* zabezpieczenie stanu *Vault* przed zmianami

## Cykl życia

### Utworzenie

*Migawka* może zostać utworzona po spełnieniu następujących warunków: 

* dostęp do *Vault* jest włączony
* wszystkie *ogólne* warunki

*Migawka* tworzona jest na podstawie istniejącego *Vault*.

### Usuwanie

Migawka może zostać usunięta po spełnieniu następujących warunków: 

* wszystkie *ogólne* warunki

## Zarządzanie

### Typowe operacje

Dostępne są następujące typowe operacje:

* możliwość zmiany wyświetlanej nazwy
* zarządzanie *Tagami*

## Opłaty

* Zabezpieczone dane uwzględniane są w przestrzeni wykorzystywanej przez *Vault*, co wpływa na koszt tej usługi.

## Ograniczone użycie

!!! include(standard-limited-usage.md) !!!

## Lokalizacje

!!! include(regions.md) !!!

## Cennik

Nazwa              | Okres  | Cena (PLN) | Uwagi
------------------ | :----: | ---------: | :----:
migawka            |   -    |     0.0000 | 

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="guide/storage/snapshot/"/>

## Powiązane produkty

* *[Vault](/resource/storage/vault.md)*