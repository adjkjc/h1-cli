# Konfiguracja goaccess do współpracy z usługą Dziennika

Niniejszy dokument przedstawia w jaki sposób skonfigurować rsyslog na platformie Linux w celu wykorzystania [Dziennika](/resource/storage/log-archive.md).

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux
* zainstalowaną aktualną wersje rsyslog
* skonfigurowane przekazywanie logów nginx do rsyslog ([zgodnie z instrukcją](/tutorials/log-archive/nginx-rsyslog.md)) lub apache ([zgodnie z instrukcją](/tutorials/log-archive/nginx-rsyslog.md))
* otwarty port 6514 dla połączeń wychodzących
* utworzony *Dziennik*, [zgodnie z instrukcją](/guide/storage/log-archive/creating.md)
* dodane hasło w *Dzienniku*, [zgodnie z instrukcją](/guide/storage/log-archive/add-password.md).
* skonfigurowane repozytorium EPEL (w przypadku systemu CentOS)

## Instalacja

```yaml
# render=tutorial
  
- name: Zainstaluj pakiet goaccess
  service:
    name: goaccess
    state: installed
  after_event:
    text: Po wykonaniu tych operacji powinieneś móc skorzystać z goaccess.
```

