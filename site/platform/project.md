# Projekt

Projekt przeznaczony jest do logicznego zgrupowania zasobów, którego dla Organizacji mają wspólny cel i przeznaczenie.

## Cykl życia

### utworzenie

*Projekt* może zostać utworzony, w przypadku spełnienia następujących warunków:

* *Organizacja* nie znajduje się w stanie *Ograniczonego użycia*

Użytkownik tworzący Projekt otrzymuje automatycznie rolę ```owner``` Projektu.

<!-- wymaga wprowadzenia nazwy Projektu -->

<!-- 
### usunięcie

Nie jest możliwe usunięcie projektu. 
-->

### Operacje

Dostępne są następujące dedykowane operacje:

* zmiana nazwy
* zarządzanie członkami projektu
    * dodanie użytkownika do Projektu
    * usunięcie użytkownika z Projektu
    * zmiana roli użytkownika w Projekcie
* zarządzanie parametrami powiadomień
    * zmiana próg środków Projektu
* zarządzanie kluczami SSH
    * dodanie klucza SSH
    * usunięcie klucza SSH
* zarządzanie service account
    * dodanie service account
    * zarządzanie prawami dostępu
    * dodanie prawa dostępu
    * usunięcie prawa dostępu
    * usuwanie service account
* zasilenie środków
* dostęp do faktur Projektu wystawionych dla Organizacji
* dostęp do historii zasileń środków
* dostęp do historii naliczonych opłat

<!-- czy service account powinno miec dostep GET do /project/self ??? -->

#### Zmiana nazwy

#### Zarządzanie członkami Projektu

Każdy *Projekt* musi mieć przynajmniej jednego Użytkownika z rolą ```owner```

Następujące operacje przeznaczone do zarządzania członkami Projektu są dostępne:

* dodanie użytkownika do Projektu
* usunięcie użytkownika z Projektu
* zmiana roli użytkownika w Projekcie

Dostępne są następujące role z określonymi prawami dostępu:

* ```owner``` - wszelkie prawa dostępu,
* ```billing``` - odczyt danych związanych z rozliczeniami i płatnościami
* ```user``` - modyfikacja zasobów bez modyfikacji projektu

#### Zarządzanie parametrami powiadomień

Każdy *Projekt* może mieć zdefiniowane wiele progów powiadomień o poziomie środków, które określają poziom środków, który wywołuje powiadomienie o braku środków.

Następujące operacje przeznaczone do zarządzania parametrami powiadomień Projektu są dostępne:

* dodanie progu środków
* usunięcie progu środków

#### Zarządzanie kluczami SSH

Każdy *Projekt* może mieć zapisane klucze SSH w celu ich sprawnego wykorzystania jako dane dostępowe do określonych zasobów.

Następujące operacje przeznaczone do zarządzania kluczami SSH są dostępne:

 * dodanie klucza SSH
 * usunięcie klucza SSH

#### Zarządzanie service account

Każdy *Projekt* może mieć zdefiniowane wiele service account. Są to dane dostępowe umożliwiające wykonywanie działań w *Projekcie*. Przeznaczone są one do zarządzania zasobami platformy przez skrypty, urządzenia lub inne procesy automatyzujące. Możliwe są do wykorzystania np. poprzez ```CLI``` lub podczas bezpośredniego dostępu do API. Posiadają określone prawa dostępu do wybranych elementów platformy.

Dostępne są następujące operacje:

 * dodanie service account
 * usunięcie service account

Dla każdego service account są dostępne następujące operacje:

 * dodanie prawa dostępu
 * usunięcie prawa dostępu

#### Zasilenie środków

Zasilenie środków jest dostępne następującymi drogami:

* tradycyjnym przelewem,
* PayPal 
* eCard - Visa, VisaCheckout, MasterCard, American Express, Maeostro 
* dotPay - płatności błyskawiczne popularnych polskich banków, Blik, mTransfer

## Forma rozliczeń

Podstawą formą rozliczeń na platformie jest ```pre-paid```, czyli poprzez dokonanie wpłaty uzyskania środków z przeznaczeniem na wykorzystanie na usługi w ramach platformy. 

W celu przyznania limitu kredytowego dla rozliczeń ```post-paid``` wymagane jest dokonanie indywidualnej oceny Organizacji w szczególności w zakresie kondycji finansowej oraz historii współpracy. Może wiązać się to z przedstawieniem przez Organizację dodatkowych dokumentów.

## Parametry techniczne

Parametr        | Wartość
----------------| -------
Liczba członków | 100

[Napisz do nas](/about-us/contact.md) jeżeli potrzebujesz zwiększyć te limity.

## Przewodniki

Dostępne są następujące przewodniki dla *Zasobu*:

<PageList path_re="/guide/platform/project/"/>