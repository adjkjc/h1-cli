# Sieć

## Przeznaczenie

*Sieć* może być używana jako sposób izolacji i segmentacji platformy w celu ograniczenia komunikacji zasobów.

Główne zalety:

 * skutecznie izoluje komunikacje zasobów
 * umożliwia wykorzystanie [Zapory sieciowej](/resource/networking/firewall.md)
 * konfiguracja parametrów DHCP

Przykładowe zastosowania:

 * ochrona usług nieprzeznaczona do publicznego udostępniania
 * ograniczenie wykorzystania publicznych *Adresów IP*

## Cykl życia

### Utworzenie

*Sieć* może zostać utworzona po spełnieniu następujących warunków:

 * wszystkie ogólne warunki *utworzenia zasobu*

### Usuwanie

*Sieć* może zostać usunięta po spełnieniu następujących warunków:

 * nie istnieją przyłączone do niej *[Adaptery sieciowe](/resource/networking/network-adapter.md)*
 * wszystkie ogólne warunki *usunięcia zasobu*

## Zarządzanie

Dla *Sieci* charakterystyczne są następujące operacje:

 * ustawienie serwerów DNS w protokole DHCP i [metadanych](/resource/compute/virtual-machine.md#metadane)
 * ustawienie bramy domyślnej w protokole DHCP i [metadanych](/resource/compute/virtual-machine.md#metadane)

### Ustawienie serwera DNS

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Sieć* znajduje się w stanie ```Online```
 * *Sieć* nie znajduje się w stanie *Ograniczonego użycia*

### Ustawienie bramy domyślnej DNS

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * *Sieć* znajduje się w stanie ```Online```
 * *Sieć* nie znajduje się w stanie *Ograniczonego użycia*

### Typowe operacje

Dla *Sieci" dostępne są następujące typowe operacje:

 * zmiana wyświetlanej nazwy

## Opłaty

Opłaty są naliczane na podstawie czasu.

## Przekazanie

Przekazanie jest możliwe między *Projektami* tej samej lub innej *Organizacji* po spełnieniu następujące warunków:

 * nie istnieją przyłączone do niej *Adaptery sieciowe*
 * wszystkie *ogólne warunki*

## Lokalizacja

!!! include(regions.md) !!!

## Cennik

Nazwa              | Okres                              | Cena (PLN)                        | Uwagi
------------------ | :--------------------------------: | --------------------------------: | :----
sieć               | [PERIOD="network:private network"] | [PRICE="network:private network"] |

*Podane ceny są cenami netto i nie zawierają podatku VAT*

## Przewodniki

Do korzystania z *Sieci* mogą być przydatne następujące przewodniki:

<PageList path_re="guide/networking/network/"/>

## Powiązane produkty

 * *[Wirtualna maszyna](/resource/compute/virtual-machine.md)*