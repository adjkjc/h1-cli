# Użytkownik

## Przeznaczenie

Użytkownik przeznaczony jest do zarządzania zasobami platformy przez osoby fizyczne. Wykorzystuje platformę do zarządzania *Zasobami* np. poprzez CLI lub panel.

W przypadku konieczności zarządzania zasobami platformy przez skrypty, urządzenia lub inne procesy automatyzujące należy skorzystać z "Service Account".

## Cykl życia

### utworzenie

*Użytkownik* może zostać utworzony, w przypadku spełnienia następujących warunków:

* wykonanie wymaganej weryfikacji danych użytkownika

Identyfikatorem użytkownika jest adres email który jest trwały dla Użytkownika.

## Operacje

Dostępne są następujące dedykowane operacje:

* zmiana hasła
* przypomnienie hasła
* zmiana profilu *Użytkownika*
* zarządzanie kluczami SSH
    * dodanie klucza SSH
    * usunięcie klucza SSH
* zarządzanie dwuskłanikowym uwierzytelnianiem
* historia zdarzeń

### Zmiana hasła

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * bez szczególnych warunków

Hasło *Użytkownika* nigdy nie jest przechowywane w postaci jawnej.

### Przypomnienie hasła

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * bez szczególnych warunków

### Zarządzanie kluczami SSH

Każdy *Użytkownik* może mieć zapisanych wiele kluczy SSH w celu ich sprawnego wykorzystania jako dane dostępowe do określonych zasobów.

Klucze SSH *Użytkownika* są także wykorzystywanee do uwierzytelniania poprzez CLI.

Następujące operacje przeznaczone do zarządzania kluczami SSH są dostępne:

 * dodanie klucza SSH
 * usunięcie klucza SSH

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * bez szczególnych warunków

### Zarządzanie dwuskłanikowym uwierzytelnianiem

Dostępne formy dwuskładnikowego uwierzytelniania:

 * kody TOTP
 * kody zapasowe

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * bez szczególnych warunków

## Weryfikacja

Podczas tworzenia Użytkownika lub w dowolnym późniejszym czasie może być wymagana weryfikacja Użytkownika.

Jeśli wymagana będzie weryfikacja Użytkownika w późniejszym czasie to wpierw zwykle zostanie wyznaczony okres w którym Użytkownik powinien dokonać weryfikacji.

W przypadku nie wykonania weryfikacji w wyznaczonym czasie, funkcjonalność *Użytkownika* zostanie ograniczona. Nadal *Użytkownik* będzie mógł dokonać weryfikacji i jej pozytywny rezultat będzie skutkował wznowieniem pełnego dostępu dla Użytkownika.

Niektóre ze sposobów weryfikacji danych:

 * adres e-mail
 * numeru telefonu komórkowego
 * tożsamości za pomocą:
    * mediów społecznościowych
    * rachunku bankowego
    * PayPal
    * podpisu kwalifikowanego

### adres email

Weryfikacja adresu e-mail polega na zweryfikowania dostępu Użytkownika do podanego adresu e-mail. Odbywa się to poprzez wiadomość z jednorazowym, indywidualnym kodem wysłanym na adres email podany przez Użytkownika i wprowadzenie tego kodu przez Użytkownika w platformie.

### numer telefonu komórkowego

Weryfikacja telefonu komórkowego polega na zweryfikowania dostępu Użytkownika do podanego numeru telefonu. Odbywa się to poprzez SMS z jednorazowym, indywidualnym kodem wysłanym na numer telefonu podany przez Użytkownika i wprowadzenie tego kodu przez Użytkownika w platformie.

### tożsamość

Wykorzystywane są zazwyczaj następujące narzędzia do weryfikacji:

 * media społecznościowe
 * rachunek bankowy
 * PayPal
 * podpis kwalifikowany

#### media społecznościowe

Weryfikacja tożsamości za pomocą mediów społecznościowych polega na uzyskaniu potwierdzenia tożsamości Użytkownika z wybranego medium społecznościowego. Odbywa się to poprzez logowanie do wybranego medium społecznościowego wraz z nadaniem prawa do uzyskania podstawowych informacji o tożsamości użytkownika. Wówczas medium przekazuje informacje o tożsamości użytkownika, co podlega ocenie zgodności i wiarygodności.

Media społecznościowe uznane za wiarygodne to:

* Facebook
* Instagram
* Twitter
* GitHub

<!-- OpenID Connect -->

#### rachunek bankowy

Weryfikacja tożsamości poprzez rachunek bankowy polega na uzyskaniu symbolicznej opłaty z konta bankowego należącego do Użytkownika. Odbywa się to poprzez zlecenie przelewu na konto bankowe platformy, co prowadzi do udzielenia informacji o tożsamości Użytkownika (nadawcy przelewu), co podlega weryfikacji w zakresie spójności.

#### Paypal

Weryfikacja tożsamości poprzez PayPal polega na uzyskaniu symbolicznej opłaty z [zweryfikowanego konta PayPal](https://www.paypal.com/pl/webapps/mpp/security/buy-verificationfaq) należącego do Użytkownika. Odbywa się to poprzez zlecenie płatności na konto platformy, co prowadzi do udzielenia informacji o tożsamości Użytkownika (nadawcy płatności), co podlega weryfikacji w zakresie spójności.

#### podpis kwalifikowany

Weryfikacja tożsamości poprzez podpis kwalifikowany (bezpieczny podpis elektroniczny weryfikowany kwalifikowanym certyfikatem) polega na przekazaniu przez Użytkownika oświadczanie o treści wskazanej przez platformę opatrzonego podpisem kwalifikowanym. Wówczas przez platformę weryfikowana jest treść oświadczenia, poprawność dołączonego podpisu oraz dane zawarte w podpisie.

## Powiadomienia

Użytkownik może wybrać sposób otrzymywania powiadomień.

Dostępne są następujące kanały powiadomień:

 * wiadomość tekstowa sms
 * wiadomość pocztą elektroniczną

# Parametry techniczne

Parametr                                 | Wartość
---------------------------------------- | ----------
Liczba członkostw w Organizacjach        | 3