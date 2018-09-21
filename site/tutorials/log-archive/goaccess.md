# Konfiguracja goaccess do współpracy z usługą Dziennika

Niniejszy dokument przedstawia w jaki sposób skonfigurować rsyslog na platformie Linux w celu wykorzystania [Dziennika](/resource/storage/log-archive.md).

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux
* dostęp sudo
* zainstalowaną aktualną wersje rsyslog
* skonfigurowane przekazywanie logów nginx do rsyslog [zgodnie z instrukcją](/tutorials/log-archive/nginx-rsyslog.md)
* skonfigurowane przekazywanie logów apache do rsyslog
* otwarty port 6514 dla połączeń wychodzących
* utworzony *Dziennik*, [zgodnie z instrukcją](/guide/storage/log-archive/creating.md)
* dodane hasło w *Dzienniku*, [zgodnie z instrukcją](/guide/storage/log-archive/add-password.md).
* zainstalowany goaccess

