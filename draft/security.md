# Bezpieczeństwo

## Dwu składnikowe logowanie



Guide: zarządzanie dwu składnikowym logowaniem dla użytkownika 


## Ograniczenia dostępu sieciowego

Dla użytkownika oraz projektu można wprowadzić ograniczenia w zakresie adresów ip lub całych sieci z których będą akceptowane połączenia do platformy (? publicznego API).

Ograniczenia zdefiniowane projektu są nadrzędne nad ograniczeniami zdefiniowanymi dla użytkownika. 

Guide: definiowane ograniczenia dostępu sieciowego dla użytkownika
Guide: definiowane ograniczenia dostepu sieciowego dla projektu


## Logowanie

### Historia zdarzeń

Wszelkie żądania zmian i akcji są logowane i zapisywane do historii zadarzeń danego zasobu.

### Wszelkie operacje / Rozszerzone logowanie

Logowanie opcjonalnie per projekt, wymaga wskazania usługi logarchive (?) do której logi będą wysyłane. Obejmuje wszelkie zapytania kierowane w ramach projektu do publicznego API. Logowane są pobieranie danych (GET) oraz wszelkie zapytania tworzące (POST), modyfikujące (PUT, PATCH) lub usuwające (DELETE) zasoby lub inne informacje dla danego projektu. 

Guide: zarządzanie rozszerzonym logowaniem dla projektu




## Powiązane treści

Best Practices: jak zwiększych bezpieczeństwo korzystania z platformy