# Konfiguracja Apache 2 w celu wysyłania logów do rsyslog

Niniejszy dokument przedstawia w jaki sposób skonfigurować Apache 2 w celu wysyłania logów do Rsyslog na platformie Linux.

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux
* dostęp sudo lub root
* zainstalowaną aktualną wersje Rsyslog
* zainstalowanego Apache 2
* zainstalowany curl (tylko do wykonania testu)

```yaml
# render=tutorial
- name: Konfiguracja
  block:
    - name: Zmodyfikuj plik konfiguracyjny
      lineinfile:
        line: |
            ErrorLog       syslog:
            CustomLog      "||/usr/bin/logger -t apache"
        regexp: ErrorLog.*
        state: present
        path: /etc/httpd/conf/httpd.conf

    - name: Zrestartuj serwer Apache 2
      service:
        name: httpd
        state: restarted
      after_event:
        text: Po wykonaniu tych operacji wpisy powinny być odsyłane do lokalnego sysloga.

- name: Weryfikacja
  block:
  - name: Wyślij pierwszy wpis
    shell:
      cmd: curl http://{server_ip}
      variables:
        server_ip: Adres IP serwera na której jest zainstalowany serwer Apache 2.

  - name: Zweryfikuj zapis wpisów do pliku dziennika syslog
    shell:
      cmd: tail -f /var/log/messages
```

## Co zyskujemy

- elastyczność w zarządzaniu logami
- większe bezpieczeństwo
- dowolność w rozszerzaniu sposobu prezentowania naszych logów

## Powiązane produkty

* *[Dziennik](/guide/storage/log-archive/creating.md)*

## Możliwe użycie

* *[Rsyslog](/tutorials/log-archive/rsyslog.md)*
* *[GoAccess](/tutorials/log-archive/goaccess.md)*
