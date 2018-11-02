# Migracja DNS

Przedstawimy w jaki sposób w sposób bezpieczny przenieść obsługę domeny internetowej do *[DNS](/resource/networking/dns.md)*.

Dzięki temu będziesz mógł korzystać z gamy możliwości jakie oferujemy w tym zakresie tj.:
 * wysokodostępna architektura
 * dostępne liczne typy rekordów
 * brak wymogu instalacji i utrzymania oprogramowania
 * zarządzanie także poprzez API i CLI w celu automatyzacji zmian
 * możliwość importu i eksportu konfiguracji w formacie pliku strefy (BIND)

```yaml
# render=tutorial
- name: Konfiguracja
  block:
    - name: Utwórz *DNS*
      guide:
        path: /guide/networking/dns/creating.md
    - name: Utwórz rekordy w *DNS*
      block:
        - name: Jeżeli możesz mieć dostęp do informacje o rekordach w formacie pliku strefy (BIND)
          block:
            - name: Pobierz informacje z konfiguracji od dotychczasowego dostawcy
              free_text:
                text: Informacje w takim formacie może gromadzić np. lokalna instancja [PowerDNS](https://doc.powerdns.com/authoritative/backends/bind.html) lub [BIND](https://www.isc.org/downloads/bind/).
            - name: Zaimportuj informacje do *DNS*
              guide:
                path: /guide/networking/dns/import.md
        - name: Jeżeli dotychczasowy dostawca nie udostępnia informacji o rekordach w formacie pliku strefy (BIND)
          block:
            - name: Utwórz odpowiednie rekordy DNS manualnie
              guide:
                path: /guide/networking/dns/record-set-creating.md        
    - name: Zaktualizuj rekordy serwera nazw u rejestratora
      free_text: 
        text: >
          Zaloguj się do panelu usług swojego dostawcy rejestratora domeny i zmień rekordy serwera nazw (delegacje), tak aby wskazywały serwery nazw, które są domyślnie wprowadzone do *DNS*. Skontaktuj się z swoim rejestratorem w przypadku pytań:
            * [Nazwa.pl](https://pomoc.nazwa.pl/baza-wiedzy/produkty-i-uslugi/domeny/zarzadzanie-domenami/jak-wykonac-zmiane-delegacji-domeny/)
            * [Hekko](https://pomoc.hekko.pl/6,34,glowne_serwery_dns)
            * [Domeny.tv](https://www.domeny.tv/pomoc/zmiana_delegacji_domeny.php)
            * [Home.pl](https://pomoc.home.pl/baza-wiedzy/delegacja-domeny-z-home-pl-na-zewnetrzne-serwery-dns-innego-operatora)
            * [OVH](https://docs.ovh.com/gb/en/domains/web_hosting_general_information_about_dns_servers/)
            * [Linuxpl](https://support.linuxpl.com/Knowledgebase/Article/View/45/1/zmiana-serwerow-dns-dla-domen-zarejestrowanych-w-linuxplcom)
    - name: Weryfikuj propagacje rekordów DNS
      dig:
        name: '{domain_name}'
        type: NS
      variables:
        domain_name: nazwa domeny internetowej
      after_text:
        text: >
          Monitoruj proces. W przypadku spójnej odpowiedzi z wielu lokalizacji proces możesz uznać za zakończony.
```
<!--     transfer domain registration (optionally) -->