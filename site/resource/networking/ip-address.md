# Adres IP

## Przeznaczenie

*Adres IP* jest wymagany do zapewnienia komunikacji do Internetu lub *[Sieci](/resource/networking/network.md)*.

W zależności od sieci można użyć adresu IP z różnych zakresów:

 * *[Sieć](/resource/networking/network.md)*, można używać tylko prywatnych adresów IP zgodnie z [RFC-1918](https://tools.ietf.org/html/rfc1918), a *Adres IP* można określić z puli adresowej należącej do *Sieci*
 * Internet, *Adresy IP* są przydzielane przez platformę i są bezpośrednio dostępne z Internetu

Wyróżniamy dwa typy *adresów IP* w Internecie:

 * ```ulotny``` - przypisany podczas tworzenia *Zasobu* i dostępny tylko do momentu usunięcia *Zasobu*. Taki adres można przekształcić w ```trwały``` w dowolnym momencie przed usunięciem *Zasobu*.
 * ```trwały``` - przypisany do *Projektu* i może być swobodnie przenoszony między *Zasobami* lub zachowany do przyszłego wykorzystania.

## Cykl życia

### Utworzenie

*Adres IP* może zostać utworzony, w przypadku spełnienia następujących warunków:

 * istnieje wolny adres IP w puli adresów sieciowych (dotyczy tylko *Sieci* prywatnych)
 * wszystkie *ogólne* warunki

### Usuwanie

*Adres IP* może zostać usunięty, w przypadku spełnienia następujących warunków:

 * nie jest powiązany z żadnym innym zasobem
 * wszystkie *ogólne* warunki

## Zarządzanie 

Dostępne są następujące dedykowane operacje

 * przekształcenie ulotnego *adresu IP* w trwały
 * odłączyć adres IP od *Zasobu*
 * zmień rekord PTR w DNS dla *adresu IP*
 * powiązanie *adresu IP* do obsługujących to *Zasobów*

Powiązanie *Adresu IP* w Internecie z *Adresem IP* w *Sieci* umożliwia dostęp do Internetu.

## Płatność

 * opłaty są naliczane na podstawie czasu.

 * czas wykorzystania jest liczony w okresach rozliczeniowych jednej godziny

## Ograniczone użycie

!!! include(standard-limited-usage.md) !!!

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr | Wartość
-------- | ---
Typ      | IPv4

## Cennik

Nazwa                  | Okres  | Cena (PLN) | Uwagi
---------------------- | :----: | :--------: | ---------:
IP w sieci prywatnej   |   1h   |     0.0160 |
IP w sieci publicznej  |   -    |     0.0000 | 

<!-- TODO: add service -->

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

<PageList path_re="guide/networking/ip-address/"/>

## Powiązane produkty

* *[Adapter sieciowy](/resource/networking/network.md)*
* *[Brama sieciowa](/resource/networking/network.md)*