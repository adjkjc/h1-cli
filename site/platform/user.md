# Użytkownik

## Przeznaczenie

Użytkownik przeznaczony jest do zarządzania zasobami platformy przez osoby fizyczne. Wykorzystuje platformę do zarządzania *Zasobami* np. poprzez CLI lub panel.

W przypadku konieczności zarządzania zasobami platformy przez skrypty, urządzenia lub inne procesy automatyzujące rekomendujemy wykorzystanie *Konta Usługi*.

## Cykl życia

### utworzenie

*Użytkownik* może zostać utworzony, w przypadku spełnienia następujących warunków:

* wykonanie wymaganej weryfikacji danych użytkownika

Identyfikatorem użytkownika jest adres email który jest trwały dla Użytkownika.

## Operacje

Dostępne są następujące dedykowane operacje:

* zmiana hasła
* przypomnienie hasła
* zmiana profilu
* zarządzanie danymi dostępowymi
 * dodanie danych dostępowych
 * usunięcie danych dostępowych
* zarządzanie weryfikacją dwuetapową
 * włączenie weryfikacji dwuetapowej
 * wyłączenie weryfikacji dwuetapowej
* historia zdarzeń

### Zmiana hasła

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * bez szczególnych warunków

Operacja polega na usunięciu wszystkich danych dostępowych typu hasło i dodaniu nowego.

### Przypomnienie hasła

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * bez szczególnych warunków

#### Zmiana profilu

Operacja może zostać wykonana po spełnieniu następujących warunków:

 * bez szczególnych warunków

W celu zapewnienia prawidłowej komunikacji *Użytkownik* utrzymywać aktualność profilu oraz bez zbędnej zwłoki wprowadzać wymagane zmiany.

### Zarządzanie danymi dostępowymi

Dostęp do *Użytkownika* umożliwiają następujące dane dostępowe:

 * hasło
 * klucz SSH

*Użytkownik* może mieć zapisanych wiele danych dostępowych, także tego samego rodzaju.

Hasło *Użytkownika* nigdy nie jest przechowywane w postaci jawnej.

W przypadku wykorzystania uwierzytelniania hasłem lub kluczem SSH i dostępnych form dwuskładnikowego uwierzytelniania *Użytkownik* musi oprócz hasła lub wykorzystania klucza SSH wprowadzić także dane uwierzytelniające wybraną przez *Użytkownika* formę dwuskładnikowego uwierzytelniania.

Kluczy SSH mogą być ponownie wykorzystywane w celu ich sprawnego wykorzystania jako dane dostępowe do określonych zasobów.

Następujące operacje przeznaczone do zarządzania danymi dostępowymi są dostępne:

 * dodanie danych dostępowych
 * usunięcie danych dostępowych

Operacje mogą zostać wykonane po spełnieniu następujących warunków:

 * bez szczególnych warunków

### Zarządzanie weryfikacją dwuetapową

Dostępne formy weryfikacji dwuetapowej:

 * kody TOTP
 * kody zapasowe

Następujące operacje przeznaczone do zarządzania weryfikacją dwuetapową są dostępne:

 * włączenie weryfikacji dwuetapowej
 * wyłączenie weryfikacji dwuetapowej

Operacje mogą zostać wykonane po spełnieniu następujących warunków:

 * bez szczególnych warunków

## Weryfikacja danych

Podczas tworzenia Użytkownika lub w dowolnym późniejszym czasie może być wymagana weryfikacja danych Użytkownika.

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

Weryfikacja adresu e-mail polega na zweryfikowania dostępu Użytkownika do podanego adresu e-mail. Odbywa się to poprzez wiadomość z jednorazowym, indywidualnym kodem wysłanym na adres email podany przez Użytkownika i wprowadzenie tego kodu przez Użytkownika w Platformie.

### numer telefonu komórkowego

Weryfikacja telefonu komórkowego polega na zweryfikowania dostępu Użytkownika do podanego numeru telefonu. Odbywa się to poprzez SMS z jednorazowym, indywidualnym kodem wysłanym na numer telefonu podany przez Użytkownika i wprowadzenie tego kodu przez Użytkownika w Platformie.

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

## Parametry techniczne

Parametr                                 | Wartość
---------------------------------------- | ----------
Liczba członkostw w Organizacjach        | 3

## Przewodniki

Do korzystania z *Użytkownika* mogą być przydatne następujące przewodniki:

<PageList path_re="/guide/platform/user/"/>