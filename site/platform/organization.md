# Organizacja

Organizacja przeznaczona jest do rozliczania zasobów platformy należących do określonej osoby prawnej.

## Cykl życia

### utworzenie

*Organizacja* może zostać utworzona, w przypadku spełnienia następujących warunków:

* założyciel *Organizacji* nie znajduje się w stanie *Ograniczonego użycia* 
* podane zostały poprawne dane osoby prawnej jednoznacznie ją identyfikujące:

    * Podmiot z Polski - wymagane podanie poprawnego numeru NIP zarejestrowanego w bazie REGON dla podmiotu. W przypadku braku zgodności pomiędzy nadanym numerem NIP dla podmiotu, a bazą REGON [prosimy o kontakt](/about-us/contact.md).
    * Podmiot z Unii Europejskiej - wymagane podanie numeru identyfikacji podatkowej VAT wykazywanego w systemie [VIES](http://ec.europa.eu/taxation_customs/vies/).
    * Pozostałe podmioty - wymagane podanie numeru identyfikacji podatkowej lub stosownego rejestru podmiotów obowiązującego w danym kraju. 

<!--
### usunięcie

Nie
-->

## Stawki podatku VAT

### Podmioty z Polski

Wszelkie podmioty z Polski są objęte standardowymi stawkami podatkowymi dla świadczonych usług zgodnie z przepisami obowiązującymi w Polsce.

### Podmioty z Unii Europejskiej

Każdy podmiot z Unii Europejskiej powinien podać europejski numer identyfikacji na potrzeby VAT (VAT-EU), który podlega weryfikacji w systemie [VIES](http://ec.europa.eu/taxation_customs/vies/).

W przypadku poprawnej weryfikacji w systemie VIES nie zostanie naliczony podatek VAT. Faktura będzie posiadała adnotację informującą o odwrotnym obciążeniu zgodnie z obowiązującymi przepisami dotyczącymi podatku VAT.

### Pozostałe podmioty

Nie zostaje naliczony podatek VAT.

## Weryfikacja

Podczas tworzenia *Organizacji* lub w dowolnym późniejszym czasie może być wymagana weryfikacja Organizacji.

Jeśli wymagana będzie weryfikacja *Organizacji* w późniejszym czasie to wpierw zwykle zostanie wyznaczony okres w którym Organizacja powinna dokonać weryfikacji.

W przypadku nie wykonania weryfikacji w wyznaczonym czasie, wszystkie *Projekty* przypisane do *Organizacji* zostaną wprowadzone w stan [Ograniczonego użycia](/platform/resource.md#Ograniczone-uzycie). *Organizacja* będzie mogła nadal dokonać weryfikacji i jej pozytywny rezultat będzie skutkował zniesieniem stanu Ograniczonego użycia dla wszystkich projektów Organizacji.

Wykorzystywane są zazwyczaj następujące narzędzia do weryfikacji:

* rachunek bankowy
* PayPal
* podpis kwalifikowanego
* kwalifikowana pieczęć

### rachunek bankowy

Weryfikacja tożsamości poprzez rachunek bankowy polega na uzyskaniu symbolicznej opłaty z konta bankowego należącego do Organizacji. Odbywa się to poprzez zlecenie przelewu na konto bankowe platformy, co prowadzi do udzielenia informacji o tożsamości *Organizacji* (nadawcy przelewu), co podlega weryfikacji w zakresie spójności.

#### Paypal

Weryfikacja tożsamości poprzez PayPal polega na uzyskaniu symbolicznej opłaty z [zweryfikowanego konta PayPal](https://www.paypal.com/pl/webapps/mpp/security/buy-verificationfaq) należącego do Organizacji. Odbywa się to poprzez zlecenie płatności na konto platformy, co prowadzi do udzielenia informacji o tożsamości Użytkownika (nadawcy płatności), co podlega weryfikacji w zakresie spójności.

### podpisu kwalifikowany

Weryfikacja tożsamości poprzez podpis kwalifikowany (bezpieczny podpis elektroniczny weryfikowany kwalifikowanym certyfikatem) polega na przekazaniu przez Organizacje oświadczanie o treści wskazanej przez platformę opatrzonego podpisem kwalifikowanym osoby upoważnionej do reprezentowania podmiotu, której uprawnienie może zostać zweryfikowane w publicznym rejestrze zawierającym dane o podmiocie oraz osobach upoważnionych do reprezentacji. Wówczas przez platformę weryfikowana jest treść oświadczenia, poprawność dołączonego podpisu, dane zawarte w podpisie oraz zgodność z publicznym rejestrem.

### kwalifikowana pieczęć

Weryfikacja tożsamości poprzez pieczęć kwalifikowaną (bezpieczna pieczęć elektroniczna weryfikowana kwalifikowanym certyfikatem) polega na przekazaniu przez Organizacje oświadczanie o treści wskazanej przez platformę opatrzonego pieczęcią kwalifikowaną. Wówczas przez platformę weryfikowana jest treść oświadczenia, poprawność dołączonego pieczęci oraz dane zawarte w pieczęci.

## Kanały płatności

Dostępne kanały płatności zależą od kraju Organizacji.

### Podmioty z Polski

W przypadku z Polski dostępne są następujące kanały płatności:

* szybka płatność bankowa
* karta płatnicza
* przelew bankowy
* PayPal

### Podmioty z Uni Europejskiej

W przypadku z Unii Europejskiej dostępne są następujące kanały płatności:

* karta płatnicza
* przelew bankowy
* PayPal

### Pozostałe podmioty

W przypadku pozostałych podmiotów dostępne są następujące kanały płatności:

* karta płatnicza - wystawiona przez bank lub organizację płatniczą z kraju *Organizacji* 
* PayPal - zweryfikowane konto należącego do podmiotu z kraju Organizacji

## Operacje

Dostępne są następujące dedykowane operacje:

* zmiana nazwy
* zmiana danych rozliczeniowych
* zmiana użytkowników przypisanych do *Organizacji* i ich ról
    * użytkownik tworzący *Organizacje* otrzymuje automatycznie rolę ```owner``` Organizacji
    * Organizacja musi mieć przynajmniej jednego Użytkownika z rolą ```owner```
        * dodanie użytkownika do *Organizacji*
        * usunięcie użytkownika z *Organizacji*
        * zmiana roli użytkownika w *Organizacji*
* dostęp do faktur Projektów wystawionych dla *Organizacji*

## Powiadomienia 

Powiadomienia dla *Organizacji* są wysyłane w przypadku następujących zdarzeń:

* otrzymaniu płatności – otrzymują Użytkownicy z rolą ```owner``` oraz ```billing``` dla *Organizacji*
* wystawieniu w projekcie *Organizacji* faktury – otrzymują Użytkownicy z rolą ```owner``` oraz ```billing``` dla *Organizacji*

# Parametry techniczne

Parametr            | Wartość
--------------------| ----------
Liczba *Projektów*  | 100

[Napisz do nas](/about-us/contact.md) jeżeli potrzebujesz zwiększyć te limity.
