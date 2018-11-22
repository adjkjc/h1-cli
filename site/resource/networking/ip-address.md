# Adres IP

## Przeznaczenie

*Adres IP* jest wymagany do zapewnienia komunikacji do internetu lub *[Sieci](/resource/networking/network.md)*.

Główne zalety:

 * kompatybilne z protokołem IPv4
 * dostępne jako adresy IP prywatne lub publiczne
 * mogą być swobodnie przenoszone pomiędzy zasobami

Przykładowe zastosowania:

 * świadczenie ogólnodostępnych usług internetowych
 * wsteczna kompatybilność dla szyfrowanych połączeń

## Cykl życia

### Utworzenie

*Adres IP* może zostać utworzony po spełnieniu następujących warunków:

 * istnieje wolny adres IP w puli adresów sieciowych (dotyczy tylko *Sieci* prywatnych)
 * wszystkie [ogólne warunki utworzenia *Zasobu*](/platform/resource.md#utworzenie)

W zależności od sieci można użyć adresu IP z różnych zakresów:

 * *[Sieć](/resource/networking/network.md)* - można używać tylko prywatnych adresów IP zgodnie z [RFC-1918](https://tools.ietf.org/html/rfc1918), a *Adres IP* można pobrać z puli adresowej należącej do *Sieci*
 * internet - *Adresy IP* są przydzielane przez platformę i pobierane bezpośrednio z internetu

Wyróżniamy dwa typy *Adresów IP* w platformie:

 * ```ulotny``` - przypisany podczas tworzenia *Zasobu* i dostępny tylko do momentu usunięcia *Zasobu*; taki adres można przekształcić w ```trwały``` w dowolnym momencie przed usunięciem *Zasobu*
 * ```trwały``` - przypisany do *Projektu*, może być swobodnie przenoszony między *Zasobami* lub zachowany do przyszłego wykorzystania

### Usuwanie

*Adres IP* może zostać usunięty po spełnieniu następujących warunków:

 * nie jest powiązany z żadnym innym zasobem
 * wszystkie [ogólne warunki usunięcia *Zasobu*](/platform/resource.md#usuniecie)

## Zarządzanie

Dla *Adresu IP* charakterystyczne są następujące operacje:

 * przekształcenie ulotnego *Adresu IP* w trwały
 * zmiana rekordu PTR w DNS dla *Adresu IP*
 * powiązanie *Adresu IP* z innym *Adresem IP*

Powiązanie *Adresu IP* w internecie z *Adresem IP* w *Sieci* umożliwia dostęp do internetu.

### Przekształcenie

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Adres IP* znajduje się w stanie ```Przydzielony``` lub ```Nieprzydzielony```
 * *Adres IP* nie znajduje się w stanie *Ograniczonego użycia*

### Zmiana rekordu PTR

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Adres IP* znajduje się w stanie ```Przydzielony``` lub ```Nieprzydzielony```
 * *Adres IP* nie znajduje się w stanie *Ograniczonego użycia*

### Powiązanie z innym adresem IP

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Adres IP* znajduje się w stanie ```Przyłączony``` lub ```Rozłączony```
 * *Adres IP* jest *Adresem IP* w *Sieci* prywatnej
 * dowiązywany *Adres IP* jest adresem w *Sieci* publicznej
 * *Adres IP* nie znajduje się w stanie *Ograniczonego użycia*

### Odwiązanie od innego adresem IP

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Adres IP* znajduje się w stanie ```Przyłączony``` lub ```Rozłączony```
 * *Adres IP* posiada dowiązywany *Adres IP*
 * *Adres IP* nie znajduje się w stanie *Ograniczonego użycia*

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

Nazwa                  | Okres                    | Cena (PLN)               | Uwagi
---------------------- | :----------------------: | :----------------------: | ---------:
IP w sieci publicznej  | [PERIOD="ip:public v4"]  | [PRICE="ip:public v4"]   |
IP w sieci prywatnej   | [PERIOD="ip:private v4"] | [PRICE="ip:private v4"] |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

<!--
Transfer is aavailabe due following reason:
- security restriction of creating subzones
-->

## Przewodniki

Do korzystania z *IP* mogą być przydatne następujące specjalne przewodniki:

<PageList path_re="guide/networking/ip-address/"/>

Użyteczne mogą okazać się także następujące ogólne przewodniki:

<PageList path_re="guide/resource/"/>

## Powiązane produkty

 * *[Adapter sieciowy](/resource/networking/network.md)*
 * *[Brama sieciowa](/resource/networking/network.md)*
