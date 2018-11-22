# Rezerwacja

## Przeznaczenia

*Rezerwacja* przeznaczona jest do uzyskania gwarantowanych zasobów. Stanowi także możliwość ograniczenia kosztów usług. Dostępna w wielu wariantach, które różnią się ceną i zapewnionymi *Zasobami*, aby spełnić szczególne wymagania biznesowe.

## Cykl życia

### Utworzenie

*Rezerwacja* może zostać utworzony po spełnieniu następujących warunków:

 * wszystkie [ogólne warunki utworzenia *Zasobu*](/platform/resource.md#utworzenie)

### Usuwanie

*Rezerwacja* może zostać utworzona, jeżeli:

* okres ważności *Rezerwacji* upłynął.

## Warianty

*Rezerwacja* możliwa jest dla następujących zasobów:

* Maszyny wirtualne do ogólnego użytku
* Maszyna wirtualna do zadań wykorzystujących procesor
* Maszyny wirtualne do zadań wykorzystujących pamięć
* Kontenery

*Rezerwacja* możliwa jest na następujący okres:

* 1 rok
* 3 lata

## Zarządzanie

Dla *Rezerwacji* charakterystyczne są następujące operacje:

 * przypisanie *Rezerwacji* do *Zasobu*
 * wydłużenie *Rezerwacji*
 * zmiana *Rezerwacji*

### Przypisanie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Rezerwacja* nie posiada aktualnie przypisanego *Zasobu*
 * *Usługa* *Zasobu* objęta przypisywaną *Rezerwacja* nie posiada przypisanej żadnej *Rezerwacji*


### Wydłużenie

Operacja umożliwienia zwiększenie okresu rozliczeniowego rezerwacji o następny okres rozliczeniowy.

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Rezerwacja* jest nieważna w następnym cyklu rozliczeniowym
 * zostały spełnione wszystkie warunki utworzenia Rezerwacji

## Zmiana

Operacja zmiany *Rezerwacji* polega na dokonaniu nowej Rezerwacji (jednej lub kilku) oraz rezygnacji z posiadanej Rezerwacji na rzecz nowo dokonanej Rezerwacji (jednej lub kilku).

Koszt operacji został przedstawiony w [Regulaminie świadczenia usługi](/platform/terms-of-services.md).

W celu wykonania operacji [prosimy o kontakt](/about-us/contact.md).

## Płatność

* opłaty za rezerwacja naliczona jest jednorazowo za pełny okres rezerwacji

* czas rezerwacji jest liczony w latach określonych dla właściwego wariantu

* opłaty za *Zasobu* naliczane są zgodnie z warunkami właściwymi dla danego *Zasobu* z uwzględnieniem stawek właściwych dla rezerwacji. W momencie upływu jej ważności cena ulega przywróceniu.

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
