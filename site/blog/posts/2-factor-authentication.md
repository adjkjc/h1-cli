# Weryfikacja dwuetapowa

<img :src="$withBase('/media/2fa.png')">

Wiele serwisów internetowych wciąż wykorzystuje logowania wyłącznie z wykorzystaniem adresu e-mail i hasła. Jednak takie podejście nie jest wystarczające bezpieczne w dzisiejszym świecie, w którym co dzień zdarzają się ataki szkodliwego oprogramowania i inne formy kradzieży haseł.

W trosce o bezpieczeństwo korzystania z naszych *Usług* udostępniamy prosty mechanizm, który dodaje dodatkową warstwę ochrony konta *Użytkownika*, oprócz hasła - weryfikacje dwuetapową. Dwuetapowa weryfikacja jest jak posiadanie drugiego zamka w drzwiach. Po jej włączeniu, gdy *Użytkownik* loguje się do *Panelu Zarządzania*, zostanie pierw poproszony o podanie adresu e-mail i hasła (pierwszego czynnika - dowód, że *Użytkownik* coś zna), a następnie o jednorazowy kod z skojarzonego urządzenia (drugi czynnik - dowód, że coś *Użytkownik* posiada). Kod jednorazowy ulega nieustannej zmianie co 30 sekund, więc jest odporny na kradzież. Te liczne czynniki zwiększają bezpieczeństwo konta *Użytkownika* i *Zasobów*, którymi zarządza. 

Każda z tych często popularnych czynności naraża *Użytkownika* na kradzież hasła do konta:

* Używanie tego samego hasła na kilku witrynach internetowych
* Pobieranie programów z internetu
* Otwieranie załączników lub linków zawartych w e-mailach

Dzięki weryfikacji dwuetapowej można powstrzymać intruzów, nawet jeśli przechwycą hasło *Użytkownika*. Jest to krytyczne, gdyż gdy ktoś ukradnie hasło, może zablokować dostęp do konta, a następnie dowolnie modyfikować *Zasoby* narażając *Organizacje* na poważne szkody.

Od teraz w prosty sposób można [włączyć weryfikacje dwuetapową do Platformy](/guide/platform/user/enable-totp.md) dla swojego konta *Użytkownika*, aby chronić zarządzane *Zasoby*. Wystarczy instalacja odpowiedniej aplikacji na urządzeniu mobilnym, takim jak tablet lub smartfon oraz kilka kliknięć w *Panelu zarządzania*. Opisaliśmy także jak [wprowadzić taki mechanizm do *Wirtualnych Maszyn*](/tutorials/virtual-machine/2fa-totp.md). Wówczas intruz, aby dostać się na konto, będzie potrzebował nie tylko hasła, ale jeszcze dostępu do telefonu *Użytkownika*.

Adam Dobrawy - Warszawa, 13 grudnia 2018 roku
