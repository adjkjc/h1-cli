# Konfiguracja nginx w celu wysyłania logów do rsyslog

Niniejszy dokument przedstawia w jaki sposób skonfigurować nginx w celu wysyłania logów do rsyslog na platformie Linux.

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux
* dostęp sudo lub root
* zainstalowaną aktualną wersje rsyslog
* zainstalowaną najnowszą stabilną wersję nginx
* zainstalowany curl (tylko do wykonania testu)

## Konfiguracja

```yaml
# render=tutorial
- name: Zmodyfikuj plik konfiguracyjny
  template:
    content: | 
        error_log syslog:server=unix:/dev/log;
        access_log syslog:server=unix:/dev/log  main;
    dest: /etc/nginx/nginx.conf
   
- name: Zrestartuj serwer www nginx
  service:
    name: nginx
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