# Konfiguracja nginx w celu wysyłania logów do rsyslog

Niniejszy dokument przedstawia w jaki sposób skonfigurować nginx w celu wysyłania logów do rsyslog na platformie Linux.

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux
* dostęp sudo lub root
* zainstalowaną aktualną wersje Rsyslog
* zainstalowaną najnowszą stabilną wersję Nginx
* zainstalowany curl (tylko do wykonania testu)

```yaml
# render=tutorial
- name: Konfiguracja
  block:
    - name: Zmodyfikuj plik konfiguracyjny
      lineinfile:
        line: |
            error_log syslog:server=unix:/dev/log;
            access_log syslog:server=unix:/dev/log  main;
        regexp: access_log.*
        state: present
        path: /etc/nginx/nginx.conf

    - name: Zrestartuj serwer WWW Nginx
      service:
        name: nginx
        state: restarted
      after_event:
         text: Po wykonaniu tych operacji wpisy powinny być odsyłane do lokalnego sysloga.

- name: Weryfikacja
  block:
    - name: Wyślij pierwszy wpis
      shell:
        cmd: curl http://{server_ip}
        variables:
          server_ip: Adres IP serwera na której jest zainstalowany serwer WWW

    - name: Zweryfikuj zapis do pliku dziennika syslog
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