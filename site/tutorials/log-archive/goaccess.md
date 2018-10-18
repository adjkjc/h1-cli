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
  yum:
    name: goaccess
    state: installed
  after_event:
    text: Po wykonaniu tych operacji powinieneś móc skorzystać z goaccess.
```

```yaml
- name: Uruchom stream logów z serwera www na lokalny komputer do goaccess  
  variables:
      "log_name": nazwa utworzonego przez nas archiwum logów
      "plik_wyjsciowy": nazwa pliku, w którym zapisywana będzie graficzna interpretacja logów
      "log_format" : format logów, np. "%h %^[%d:%^] \"%r\" %s %b \"%R\" \"%u\""
      "date-format" : format daty np. %d/%b/%Y
  shell:
    cmd: ./h1 log stream --log "log_name" --output tsv --fields message --filter message~access.log | cut -d ":" -f2- | goaccess --log-format="log_format" --date-format="date-format" -o "plik_wyjsciowy" --real-time-html
```

## Powiązane produkty

* *[Dziennik](/guide/storage/log-archive/creating.md)*

## Możliwe użycie
* *[rsyslog](/tutorials/log-archive/rsyslog.md)*

## Co zyskujemy
- graficzną, bardziej przystępną formę prezentacji logów
- ułatwione badanie poprawności i wydajności pracy usług np. serwera www



