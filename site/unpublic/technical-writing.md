# Redakcja w HyperOne

Wyróżniamy następujące kategorie/typy treści:

* *referencyjne* -  czyli dokładnie opisane wszystkie opcje/funkcjonalności/zagadnienia dotyczące każdy pojedynczej usługi
* *poradniki (guides)* -  czyli co i jak zrobić krok po kroku aby wkorzystać funkcjonalności usług (korzystając z panelu/cli/api)
* *samouczki (tutorials)* -  czyli jak coś zrobić konkretnego korzystając między innymi z usługi, ale nie tylko, czyli jak realnie osiągnąć jakąś korzyść korzystając z usługi.
* *concepts (brak tłumaczenia)* -  czyli ogólne wyjaśnienie danego zagadnienia technicznego, jak działa, na czym polega, w jaki sposób daje korzyści, na co należy uważać, etc. - tutaj nie skupiamy się na połączeniu z usługami, a na ogólnym wyjaśnieniu danego zagadnienia technicznego
* *najlepsze praktyki (best practices)* -  czyli dla danej rodzinny zagadnień najlepsze praktyki rekomendowane przez nas.
* *trouble shooter (brak tłumaczenia)* -  czyli jak rozwiązać dany problem, są podobne do samouczku ale wychodzące z punktu wyjścia jako problemu który jest do rozwiązania, a nie konkretnego celu do osiągnięcia jak w samouczku.
* *rozwiązania (solutions)* -  czyli ogólne bardziej złożone rozwiązania problemów biznesowych z wykorzystaniem świadczonych usług, zarówno związanych z określonymi procesami (continous deployment, continous integration itp.), jak również z całymi branżami (edukacja),
* *post blogowy* -  w zależności od jego przeznaczenia powinien być informacyjny i odwołujący się (linkujący) do innych treści z wymienionych powyżej prezentujący takie elementy jak:
    * *wiadomości* -  aktualizacje i zmiany w platformie, wydarzenia w których uczestniczymy,
    * *ekosystem* -  wydarzenia zewnętrzne względem platformy, które zwiększają możliwość jej wykorzystania np. nowa wersja oprogramowania zewnętrznego dostawcy, która jest z nami kompatybilna,
    * *inżynieria* -  techniczne ujęcie problemów dotykanych przez nas podczas pracy nad platformą
        * *najlepsze praktyki i wskazówki techniczne* -  umiejscowione w czasie podpowiedzi rozwiązania problemów w danym czasie, odniesienie aktualnych wydarzeń do technicznych aspektów pracy platformy
        * *luki w zabezpieczeniach* -  nasze stanowisko odnośnie określonych, medialnych podatności bezpieczeństwa
        * *elementy wewnętrzne* -  pokazanie w mocno techniczny sposób naszych wewnętrznych osiągnięć i rozwiązań  technicznych, od inżyniera dla inżyniera.
* *streszczenie posta blogowego* -  treść która będzie wykorzystywana w celu promowania tego posta w social media (Facebook, T, linkedin), powiadomieniach o zmianach w platformie i innych kanałach.

## Rodzaje treści

Rozróżniamy dwa typy treści:

1. ulotne - czyli takie które są aktualne tylko na czas publikacji (posty blogowe, wpisy social media, wiadomości PR, artykuły, etc.)
2. ponad czasowe - wymagające stałego utrzymania w czasie i mogą mieć odniesienie do danej wersji usługi/oprogramowania (referencyjna, przewodniki, tutorials, best practices, etc.)

Istotne jest że każda z tych typów treści wymaga innego języka, przekazu informacji oraz struktury.

## Słownik

* Organisation (Organizacja) -
* Project (Projekt) -
* User (Użytkownik) -
* Location -
  * Region -
  * Global -
* Resource (Zasób) -
  * Identifier - (Identyfikator Zasobu) ``_id``
  * Tag
* Customer Data (Dane Organizacji) -
* Funds (Środki) - all funds available on account including credit limit
* Special Regions (Regiony specjalne) -
* Transfer (Przekazanie) -

# Pewne reguły pomocne podczas redakcji

* Nazwy zdefiniowanych pojęć lub nazwy zasobów zaczynają się od wielkiej litery i mają zastosowane formatowanie kursywą (np. *Zasób*)
* Podczas opisu przeznaczenia unikaj bytów abstrakcyjnych. Pomóż użytkownikowi wyobrazić sobie produkty, odwołując się do rzeczy, które są mu znane z realnego świata i problemów, które ma w nim
* Upewnij się, że każdy czynnik brany pod uwagę przy rozliczeniach ma określoną jednostkę
* W dokumentacji referencyjnej:
    * Podczas przekazywania *Zasobu*, rozważ:
         * transfer licencji na oprogramowanie, a kwestię umowy licencyjnej
         * dostęp do zasobu za pośrednictwem *Danych Dostępowych*
         * odwołania do tego zasobu z innych zasobów
         * odwołania w tym zasobie do innych zasobów
    * Podczas udostępniania *Zasobu* rozważ:
         * Jeśli i jak ograniczyć dostęp do zasobu udostępnionego, w przypadku ograniczonego korzystania z zasobu?
* W przypadku języka polskiego:
    * stosuj następujące słownictwo
         * upload -> importowanie
         * disk **size** -> **rozmiar** dysku
    * nie nadużywaj następujących słów:
         * ``wspierał``
         * ``jest``
