# Bezpieczeństwo dostępu

## Dwu składnikowe logowanie


Guide: zarządzanie dwu składnikowym logowaniem dla użytkownika 


## Ograniczenia dostępu sieciowego

Użytkownik może wprowadzić ograniczenia w zakresie adresów ip lub całych sieci z których będą akceptowane połączenia do platformy (? publicznego API) dla tego użytkownika. Jednocześnie dla każdego Projektu można także zdefiniować takie ograniczenia.

Ograniczenia zdefiniowane projektu są nadrzędne nad ograniczeniami zdefiniowanymi dla użytkownika. 

Guide: definiowane ograniczenia dostępu sieciowego dla użytkownika
Guide: definiowane ograniczenia dostepu sieciowego dla projektu


## Logowanie

### Historia zdarzeń

Wszelkie żądania zmian i akcji są logowane i zapisywane do historii zadarzeń danego zasobu.

### Wszelkie operacje / Rozszerzone logowanie

Logowanie opcjonalnie per projekt, wymaga wskazania usługi logarchive (?) do której logi będą wysyłane. Obejmuje wszelkie zapytania kierowane w ramach projektu do publicznego API. Logowane są pobieranie danych (GET) oraz wszelkie zapytania tworzące (POST), modyfikujące (PUT, PATCH) lub usuwające (DELETE) zasoby lub inne informacje dla danego projektu. 

Guide: zarządzanie rozszerzonym logowaniem dla projektu


## Szyfrowane połączenia

Wszelkie połączenia do zarządzania usługami w ramach platformy są szyfrowane ....

* https
* ssh


## Hasła

Hasła trafiają do platformy w formie zaszyfrowanej i nigdy nie są przechowywane nawet tymczasowo w formie nie zaszyfrowanej.

<!-- TODO: do weryfikacji  -->


## Service Accounts (? jak po polsku, czy nazwa ang. już zostaje)

* co umożliwiają, podkreślić elastyczność
* jakie korzyści dają
* jak dokładnie można ograniczać dostęp

Guide: zarządzanie Service Accounts
Tutorial: wykorzystanie Service Accounts w automatyzacji 


## Powiązane treści

Best Practices: jak zwiększyć bezpieczeństwo korzystania z platformy
