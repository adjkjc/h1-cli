# Projekt

Projekt przeznaczony jest do logicznego zgrupowania zasobów, którego dla *Organizacji* mają wspólny cel i przeznaczenie.

## Cykl życia

### utworzenie

*Projekt* może zostać utworzony, w przypadku spełnienia następujących warunków:

* *Organizacja* nie znajduje się w stanie *Ograniczonego użycia*

Użytkownik tworzący Projekt otrzymuje automatycznie rolę ```owner``` *Projektu*.

<!-- wymaga wprowadzenia nazwy *Projektu* -->

### Usunięcie

*Projekt* może zostać usunięty, w przypadku spełnienia następujących warunków:

 * *Projekt* nie znajduje się w stanie *Ograniczonego użycia*
 * *Projekt* posiada środki lub *Faktury*

## Zarządzanie

### Operacje

Dostępne są następujące dedykowane operacje:

* zarządzanie członkami *Projektu*
    * dodanie użytkownika do *Projektu*
    * usunięcie użytkownika z *Projektu*
    * zmiana roli użytkownika w Projekcie
* zarządzanie parametrami powiadomień
    * zmiana próg środków *Projektu*
* zarządzanie kluczami SSH
    * dodanie klucza SSH
    * usunięcie klucza SSH
* zarządzanie *Kontem usługi*
    * dodanie *Konta usługi*
    * zarządzanie prawami dostępu
    * dodanie prawa dostępu
    * usunięcie prawa dostępu
    * usuwanie *Konta usługi*
* zarządzanie rejestrowaniem operacji
    * włączenie rejestrowania operacji
    * wyłączenia rejestrowania operacji
* zasilenie środków
* dostęp do faktur *Projektu* wystawionych dla Organizacji
* dostęp do historii zasileń środków
* dostęp do historii naliczonych opłat

<!-- czy service account powinno miec dostep GET do /project/self ??? -->

#### Zarządzanie użytkownika *Projektu*

Następujące operacje przeznaczone do zarządzania członkami *Projektu* są dostępne:

* dodanie użytkownika do *Projektu*
* usunięcie użytkownika z *Projektu*
* zmiana roli użytkownika w *Projekcie*

Dostępne są następujące role z określonymi prawami dostępu:

* ```owner``` - wszelkie prawa dostępu,
* ```billing``` - modyfikacja danych związanych z rozliczeniami i płatnościami
* ```user``` - modyfikacja zasobów bez modyfikacji *Projektu*
* własne role *Organizacji*

Operacje mogą zostać wykonane po spełnieniu następujących warunków:

 * Zostaje zachowany przynajmniej jeden *Użytkownik* z rolą ```owner```
 * *Użytkownik* wykonujący operacje posiada rolę ```owner```

Użytkownik tworzący *Projekt* otrzymuje automatycznie rolę ```owner``` Organizacji.

#### Zarządzanie parametrami powiadomień

Każdy *Projekt* może mieć zdefiniowane wiele progów powiadomień o poziomie środków, które określają poziom środków, który wywołuje powiadomienie o braku środków.

Następujące operacje przeznaczone do zarządzania parametrami powiadomień *Projektu* są dostępne:

* dodanie progu środków
* usunięcie progu środków

#### Zarządzanie kluczami SSH

Każdy *Projekt* może mieć zapisane klucze SSH w celu ich sprawnego wykorzystania jako dane dostępowe do określonych zasobów.

Następujące operacje przeznaczone do zarządzania kluczami SSH są dostępne:

 * dodanie klucza SSH
 * usunięcie klucza SSH

#### Zarządzanie *Kontem usługi*

*Konto usługi* to dane dostępowe umożliwiające wykonywanie modyfikacje *Zasobów* *Projektu* w imieniu *Użytkownika* przez aplikacje tj. skrypty, urządzenia lub inne procesy automatyzujące. W szczególności można je wykorzystać poprzez ```CLI``` lub podczas bezpośredniego dostępu do API. Posiada określony identyfikator oraz prawa dostępu do wybranych elementów platformy.

Każdy *Projekt* może mieć zdefiniowane wiele *Kont usług*. Każde *Konto usługi* jest powiązane tylko z jednym *Projektem*.

Dostępne są następujące operacje:

 * dodanie *Konta usługi* do *Projektu*
 * usunięcie *Konta usługi* z *Projektu*

Dla każdego *Konta usługi* są dostępne następujące operacje:

 * dodanie prawa dostępu
 * usunięcie prawa dostępu

Identyfikator *Konta usługi* jest wartością, którą należy przesłać do platformy, aby wykorzystać *Konto usługi* i służy do uwierzytelnienia żądania. Zatem należy chronić go przed ujawnieniem.

Prawa dostępu określają do jakiej ścieżki i z wykorzystaniem jakiej metody HTTP (```GET```, ```POST```, ```PUT``` itp. lub ```ALL``` dla wszystkich metod) dostęp do API platformy jest dopuszczalny. Ścieżka określona jest przez wyrażenie regularne, które musi zostać od dopasowane początku ścieżki.

Zarządzanie konfiguracją *Projektu* lub *Organizacji* lub *Użytkownika* nie jest możliwe z wykorzystaniem dla *Konta usługi* , aby zapobiec niepożądanej eskalacji uprawnień, uzyskaniu informacji o innych *Kontach usług*, w tym ich identyfikatorach.

Dowolna aktywność wykonana przez *Konto usługi* jest oznaczona na Platformie jako wykonana przez *Użytkownika*, który utworzył dane *Konto usługi*.

#### Zarządzanie rejestrowaniem operacji

*Projekt* może mieć określony *[Dziennik](/resource/storage/log-archive.md)* i jego dane dostępowe w postaci *Hasła*. Ich określenie oznacza, że będą przesyłane do niego w celu rejestracji podstawowe informacje o żądaniach do API *Platformy* (Panel, CLI) m. in. wykonywanych akcjach, ich rezultat, a także którzy użytkownicy, źródłowy adres IP, z którego wykonane były połączenia i kiedy nastąpiło połączenia.

Dostępne są następujące operacje:

 * włączenie rejestrowania zdarzeń
 * wyłączenia rejestrowania zdarzeń

#### Zasilenie środków

Zasilenie środków jest dostępne następującymi drogami:

* tradycyjnym przelewem,
* PayPal
* eCard - Visa, VisaCheckout, MasterCard, American Express, Maeostro
* dotPay - płatności błyskawiczne popularnych polskich banków, Blik, mTransfer

## Przekazanie

Przekazanie jest możliwe między *Organizacjami* po spełnieniu następujące warunków:

 * docelowa *Organizacja* posiada umowy licencyjne wymagane dla każdego z *Zasobów* *Projektu*
 * *Projekt* posiada środki
 * *Projekt* nie jest objęty *Programem Early adopters*
 * *Projekt* nie znajduje się w stanie *Ograniczonego użycia*

Przekazaniu podlegają wszystkie elementy *Projektu*, z wykluczeniem praw dostępu *Użytkowników* z własnymi rolami.

Transfer *Projektu* polega na:

* zainicjowaniu transferu przez źródłową *Organizacje* wraz z wskazaniem:
    * *Projektu*, który otrzyma środki przekazywanego *Projektu*
    * docelowej *Organizacji*

* zaakceptowaniu transferu przez docelową *Organizacje*

## Forma rozliczeń

Podstawą formą rozliczeń na Platformie jest ```pre-paid```, czyli poprzez dokonanie wpłaty uzyskania środków z przeznaczeniem na wykorzystanie na usługi w ramach platformy.

W celu przyznania limitu kredytowego dla rozliczeń ```post-paid``` wymagane jest dokonanie indywidualnej oceny Organizacji w szczególności w zakresie kondycji finansowej oraz historii współpracy. Może wiązać się to z przedstawieniem przez Organizację dodatkowych dokumentów.

## Parametry techniczne

Parametr                         | Wartość
-------------------------------- | -------
Liczba *Użytkowników* *Projektu* | 100
Liczba progów śródków            | 20

[Napisz do nas](/about-us/contact.md) jeżeli potrzebujesz zwiększyć te limity.

## Przewodniki

Do korzystania z *Projektu* mogą być przydatne następujące przewodniki:

<PageList path_re="/guide/platform/project/"/>