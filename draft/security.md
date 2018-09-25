# Bezpieczeństwo dostępu

## Dwuskładnikowe logowanie

<!-- http://di.com.pl/Dwuskladnikowe-uwierzytelnianie-co-daje-w-jakich-uslugach-wystepuje-i-jak-je-wlaczyc-51228 -->
<!-- https://dwa-skladniki.pl/ -->

Guide: zarządzanie dwu składnikowym logowaniem dla użytkownika

## Ograniczenia dostępu sieciowego

Użytkownik może wprowadzić ograniczenia w zakresie adresów ip lub regionów z których będą akceptowane połączenia do platformy dla tego Użytkownika. Jednocześnie dla każdego Projektu można także zdefiniować takie ograniczenia.

Ograniczenia zdefiniowane projektu są nadrzędne nad ograniczeniami zdefiniowanymi dla użytkownika.

Guide: definiowane ograniczenia dostępu sieciowego dla użytkownika
Guide: definiowane ograniczenia dostępu sieciowego dla projektu

Baza danych: ```GeoLite2 Country```

## Logowanie

### Historia zdarzeń

Wszelkie żądania zmian i akcji są logowane i zapisywane do historii zdarzeń danego zasobu.

### Wszelkie operacje / Rozszerzone logowanie

Logowanie opcjonalnie per projekt, wymaga wskazania usługi logarchive (?) do której logi będą wysyłane. Obejmuje wszelkie zapytania kierowane w ramach projektu do publicznego API. Logowane są pobieranie danych (GET) oraz wszelkie zapytania tworzące (POST), modyfikujące (PUT, PATCH) lub usuwające (DELETE) zasoby lub inne informacje dla danego projektu.

Guide: zarządzanie rozszerzonym logowaniem dla projektu

## Szyfrowane połączenia

Wszelkie połączenia do zarządzania usługami w ramach platformy są szyfrowane ....

* https
* ssh

<!--
https://cloud.google.com/security/
https://gsuite.google.com/security/
https://www.microsoft.com/en-us/trustcenter/security/azure-security
-->

## Hasła

Hasła Użytkownika trafiają do platformy w formie zaszyfrowanej i nigdy nie są przechowywane nawet tymczasowo w formie jawnej.

## ```protected```

Tag ```protected``` zabezpiecza zasób przed przypadkowym usunięciem w przypadku wykonywania skryptów i umożliwia oznaczenie krytycznej infrastruktury.

## Service Accounts (? jak po polsku, czy nazwa ang. już zostaje)

* co umożliwiają, podkreślić elastyczność
* jakie korzyści dają
* jak dokładnie można ograniczać dostęp

Guide: zarządzanie Service Accounts
Tutorial: wykorzystanie Service Accounts w automatyzacji

## Powiązane treści

Best Practices: jak zwiększyć bezpieczeństwo korzystania z platformy