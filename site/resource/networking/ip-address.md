# Adres IP

## Przeznaczenie

*Adres IP* jest wymagany do zapewnienia komunikacji do internetu lub *[Sieci](/resource/networking/network.md)*.

W zależności od sieci można użyć adresu IP z różnych zakresów:

 * *[Sieć](/resource/networking/network.md)* - można używać tylko prywatnych adresów IP zgodnie z [RFC-1918](https://tools.ietf.org/html/rfc1918), a *Adres IP* można pobrać z puli adresowej należącej do *Sieci*
 * internet - *Adresy IP* są przydzielane przez platformę i pobierane bezpośrednio z internetu

Wyróżniamy dwa typy *Adresów IP* w internecie:

 * ```ulotny``` - przypisany podczas tworzenia *Zasobu* i dostępny tylko do momentu usunięcia *Zasobu*; taki adres można przekształcić w ```trwały``` w dowolnym momencie przed usunięciem *Zasobu*
 * ```trwały``` - przypisany do *Projektu*, może być swobodnie przenoszony między *Zasobami* lub zachowany do przyszłego wykorzystania

## Cykl życia

### Utworzenie

*Adres IP* może zostać utworzony po spełnieniu następujących warunków:

 * istnieje wolny adres IP w puli adresów sieciowych (dotyczy tylko *Sieci* prywatnych)
 * wszystkie ogólne warunki *utworzenia zasobu*

### Usuwanie

*Adres IP* może zostać usunięty po spełnieniu następujących warunków:

 * nie jest powiązany z żadnym innym zasobem
 * wszystkie ogólne warunki *usunięcia zasobu*

## Zarządzanie 

Dla *Adresu IP* charakterystyczne są następujące operacje:

 * przekształcenie ulotnego *Adresu IP* w trwały
 * zmiana rekordu PTR w DNS dla *Adresu IP*
 * powiązanie *Adresu IP* z innym *Adresem IP*

Powiązanie *Adresu IP* w internecie z *Adresem IP* w *Sieci* umożliwia dostęp do internetu.

### Przekształcenie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * zasób znajduje się w stanie ```Przydzielony``` lub ```Nieprzydzielony```
 * zasób nie znajduje się w stanie *Ograniczonego użycia*

### Zmiana rekordu PTR

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * zasób znajduje się w stanie ```Przydzielony``` lub ```Nieprzydzielony```
 * zasób nie znajduje się w stanie *Ograniczonego użycia*

### Powiązanie z innym adresem IP

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * zasób znajduje się w stanie ```Przyłączony``` lub ```Rozłączony```
 * zasób jest *Adresem IP* w *Sieci* prywatnej
 * dowiązywany *Adres IP* jest adresem w *Sieci* publicznej
 * zasób nie znajduje się w stanie *Ograniczonego użycia*

## Opłaty

Opłaty naliczane są w zależności od czasu.

Czas wykorzystania jest liczony w okresach rozliczeniowych jednej godziny.

## Ograniczone użycie

!!! include(standard-limited-usage.md) !!!

## Przekazanie

Przekazanie jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujące warunków:

 * stan jest ``Nieprzydzielony``

## Lokalizacja

!!! include(regions.md) !!!

## Parametry techniczne

Parametr | Wartość
-------- | ---
typ      | IPv4

## Cennik

Nazwa                  | Okres  | Cena (PLN) | Uwagi
---------------------- | :----: | :--------: | ---------:
IP w sieci prywatnej   |  1 h   |     0.0160 |
IP w sieci publicznej  |   -    |     0.0000 | 

<!-- TODO: add service -->

*Podane ceny są cenami netto i nie zawierają podatku VAT*

<!-- 
Transfer is aavailabe due following reason:
- security restriction of creating subzones
-->

## Przewodniki

Do korzystania z *IP* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/networking/ip-address/"/>

## Powiązane produkty

 * *[Adapter sieciowy](/resource/networking/network.md)*
 * *[Brama sieciowa](/resource/networking/network.md)*
