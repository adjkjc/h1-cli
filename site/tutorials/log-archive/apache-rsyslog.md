# Konfiguracja Apache w celu wysyłania logów do rsyslog

Niniejszy dokument przedstawia w jaki sposób skonfigurować Apache w celu wysyłania logów do rsyslog na platformie Linux.

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux
* dostęp sudo lub root
* zainstalowaną aktualną wersje rsyslog
* zainstalowanego Apache
* zainstalowany curl (tylko do wykonania testu)

## Konfiguracja

```yaml
# render=tutorial
- name: Zmodyfikuj plik konfiguracyjny
  template:
    content: | 
        ErrorLog       syslog:
        CustomLog      "||/usr/bin/logger -t apache"
    dest: /etc/httpd/conf/httpd.conf
   
- name: Zrestartuj serwer www Apache
  service:
    name: httpd
    state: restarted
  after_event:
    text: Po wykonaniu tych operacji logi powinny być odsyłane do lokalnego sysloga.
```

## Weryfikacja
  
```yaml
# render=tutorial
- name: Wyślij pierwszy wpis  
  variables:
      "server_ip": adres ip maszyny na której jest zainstalowany serwer www
  shell:
    cmd: curl http://"server_ip"
- name: Sprawdź czy logi zapisują się do sysloga
  shell:
    cmd: tail -f /var/log/messages
```


## Powiązane produkty

* *[Dziennik](/guide/storage/log-archive/creating.md)*

## Możliwe użycie
* *[rsyslog](/tutorials/log-archive/rsyslog.md)*
* *[goaccess](/tutorials/log-archive/goaccess.md)*