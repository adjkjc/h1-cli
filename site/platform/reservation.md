# Rezerwacja

## Przeznaczenie

*Rezerwacja* stanowi możliwość znaczącego obniżnia kosztów usług oraz uzyskania gwarantowanych zasobów. Dostępna w wielu wariantach, które różnią się ceną i zapewnionymi *Zasobami*, aby spełnić szczególne wymagania biznesowe.

## Cykl życia

### Utworzenie

*Rezerwacja* może zostać utworzona po spełnieniu następujących warunków:

 * wszystkie [ogólne warunki utworzenia *Zasobu*](/platform/resource.md#utworzenie)

### Usuwanie

*Rezerwacja* może zostać usunięta, jeżeli:

* okres ważności *Rezerwacji* upłynął.
 * wszystkie [ogólne warunki usunięcia *Zasobu*](/platform/resource.md#usuniecie)

## Warianty

*Rezerwacja* możliwa jest dla następujących *Zasobów*:

* Maszyny wirtualne do ogólnego użytku
* Maszyna wirtualna do zadań wykorzystujących procesor
* Maszyny wirtualne do zadań wykorzystujących pamięć
* Kontenery

*Rezerwacja* możliwa jest na następujące okresy:

* 1 rok
* 3 lata

## Zarządzanie

Dla *Rezerwacji* charakterystyczne są następujące operacje:

 * przypisanie *Rezerwacji* do *Zasobu*
 * przedłużenie *Rezerwacji*
 * zmiana *Rezerwacji*

### Przypisanie

Operacja umożliwia wykorzystanie *Rezerwacji* w celu obniżenia ceny *Zasobu*.

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Rezerwacja* nie posiada aktualnie przypisanego *Zasobu*
 * *Usługa* *Zasobu* do której ma zostać przypisana *Rezerwacja* nie posiada przypisanej żadnej innej *Rezerwacji*

### Przedłużenie

Operacja umożliwia przedłużenie okresu rozliczeniowego rezerwacji o następny okres rozliczeniowy.

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * obecny cykl rozliczeniowy dla *Rezerwacji* jest ostatnim cyklem
 * operacja przedłużenia wykonana została przed okresem zakończenia *Rezerwacji*
 * zostały spełnione wszystkie warunki utworzenia *Rezerwacji*

## Zmiana

Operacja umożliwia zmianę *Rezerwacji* poprzez dokonanie nowej *Rezerwacji* (jednej lub kilku) oraz rezygnacji z posiadanej *Rezerwacji* rozliczając niewykorzystana wartość *Rezerwacji* na rzecz nowej *Rezerwacji* (jednej lub kilku).

Koszt operacji został przedstawiony w [Regulaminie świadczenia usługi](/platform/terms-of-services.md).

W celu wykonania operacji [prosimy o kontakt](/about-us/contact.md).

## Płatność

* opłaty za rezerwacja naliczona jest jednorazowo za pełny okres rezerwacji

* czas rezerwacji jest liczony w latach określonych dla właściwego wariantu

* opłaty za *Zasób* naliczane są zgodnie z warunkami właściwymi dla danego *Zasobu* z uwzględnieniem stawek *Rezerwacji*. W momencie upływu jej ważności cena ulega przywróceniu.

* okres *Rezerwacji* wymaga wykonania operacji przedłużenia co spowoduje zmianę daty zakończenia okresu *Rezerwacji* dodając kolejny okres

## Ograniczone użycie

W przypadku ograniczonego użycia znajdują zastosowanie ogólne warunki *[Ograniczonego użycia]()*.

## Przekazanie

Przekazanie *Rezerwacji* jest możliwe między *Projektami* tej samej *Organizacji*, w przypadku spełnienia następujących warunków:

* stan to ```Rozłączona```

## Lokalizacja

!!! include(regions.md) !!!

## Cennik

### Maszyny wirtualne ogólnego przeznaczenia

[PRICE_TABLE="^m2.*$"]

### Maszyny wirtualne do zadań wykorzystujących procesor

[PRICE_TABLE="^c3.*$"]

### Maszyny wirtualne do zadań wykorzystujących pamięć

[PRICE_TABLE="^r4.*$"]

* Podane ceny są cenami netto i nie zawierają podatku VAT*

## Powiązane produkty

* *[Maszyny wirtualne](/resource/compute/virtual-machine.md)*
* *[Kontenery](/resource/compute/virtual-machine.md)*