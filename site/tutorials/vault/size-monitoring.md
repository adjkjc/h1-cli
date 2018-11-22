# Monitorowanie wykorzystanej przestrzeni Vault w Zabbix

Przedstawimy w jaki sposób monitorować wykorzystywaną przestrzeń w *[Vault](/resource/storage/vault.md)* z pomocą Zabbix.

Wykorzystywana przestrzeń stanowi przykład, który można odnieść do dowolnego z *Zasobów* udostępnianych przez platformę.

Wykorzystany zostanie *Zabbix*, który stanowi wszechstronne narzędzie umożliwiające monitoring prace serwerów, urządzeń sieciowych, a - jak zaraz pokażemy - także *Zasobów* naszej platformy. Służy do zbierania, analizowania i wizualizacji danych. Umożliwia opracowanie wykresów umożliwiających analizę trendów i wzorców użycia. Przede wszystkim posiada mechanizm wyzwalaczy, które pozwalają powiadamiać w przypadku niepożądanego stanu lub anomalii w pozycjach monitorowanego elementu. Dostarczony szablon zapewnia powiadomienia, gdy pojemność *Vault* jest bliska wyczerpania.

Platforma udostępnia dla *Vault* informacje pod następującymi adresami:

 * wykaz *Vault* dla *Projektu* -```https://api.hyperone.com/v1/vault/```.
 * podstawowe informacje o *Vault* -```https://api.hyperone.com/v1/vault/{vault_id_lub_nazwa}```

Dostep wymaga uwierzytelnienia, co jest możliwe m. in. poprzez przekazanie identyfikatora *Konta Usługi* w zapytaniu np. ```?authtoken=dd289825cb4fc2b1100006d30fdece3e```.

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowane serwer [Zabbix](https://www.zabbix.com/)
* zainstalowany agent Zabbix na serwerze Linux
* skonfigurowany agent Zabbix do współpracy z serwerem Zabbix
* zainstalowany curl na serwerze z agentem
* zainstalowany [jq](https://stedolan.github.io/jq/) z agentem
* utworzone *Konto usługi* [zgodnie z instrukcją](/guide/platform/project/add-service-account.md) umożliwiające dostęp do `/vault/`

```yaml
# render=tutorial
- name: Konfiguracja agenta Zabbix
  block:
    - name: Utwórz plik konfiguracyjny
      template:
        content: | 
            UserParameter=hyperone.vault.list[*],curl "https://api.hyperone.com/v1/vault?authtoken={token}" -s | jq '[.[] | {"{#VAULTID}":._id,"{#VAULTNAME}":.name,"{#VAULTSIZETOTAL}":.size,"{#VAULTSIZEUSED}":.sizeUsed}] | {data: .}'
            UserParameter=hyperone.vault.show[*],curl "https://api.hyperone.com/v1/vault/$1?authtoken={token}" -s
        dest: /etc/zabbix/zabbix_agentd.d/userparameter_vault.conf
        variables:
          token: identyfikator *Konta Usługi*
    - name: Zweryfikuj poprawność konfiguracji
      shell:
        cmd: sudo -u zabbix zabbix_agentd -t hyperone.vault.list
    - name: Zrestartuj usługę Zabbix-Agent
      service:
        name: zabbix-agent
        state: restarted
- name: Konfiguracja serwera Zabbix
  block:
    - name: Pobierz i zaimportuj szablon
      free_text:
        text: Pobierz <a :href="$withBase('/tutorials/zabbix/template.xml')">szablon konfiguracji</a>, który utworzy nowe pozycje dla wykazu *Vault* i regułę wykrywania pozycji parametryzujących *Vault*.
    - name: Dołącz szablon do hosta
      free_text:
        text: Wybierz serwer, który ma komunikować się z platformą. Dołącz do niego wcześniej zaimportowany szablon.
      after_text:
        Zabbix pobierze informacje o dostępnych *Vault*, następnie rozpocznie dla każdego z nich gromadzić informacje o dostępnej przestrzeni. W przypadku przekroczenia 90% przestrzeni danego *Vault* wyzwoli wyzwalacz, co umożliwi np. powiadomienie admistratora.
```