# Konfiguracja GoAccess do współpracy z usługą Dziennika

Niniejszy dokument przedstawia w jaki sposób skonfigurować Rsyslog na platformie Linux w celu wykorzystania [Dziennika](/resource/storage/log-archive.md).

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux
* zainstalowaną aktualną wersje rsyslog
* skonfigurowane przekazywanie logów Nginx do Rsyslog ([zgodnie z instrukcją](/tutorials/log-archive/nginx-rsyslog.md)) lub Apache2 ([zgodnie z instrukcją](/tutorials/log-archive/nginx-rsyslog.md))
* otwarty port 6514 dla połączeń wychodzących
* utworzony *Dziennik*, [zgodnie z instrukcją](/guide/storage/log-archive/creating.md)
* dodane hasło w *Dzienniku*, [zgodnie z instrukcją](/guide/storage/log-archive/add-password.md)
* skonfigurowane repozytorium EPEL (w przypadku systemu CentOS)

```yaml
# render=tutorial
- name: Instalacja
  block:
    - name: Zainstaluj pakiet goaccess
      yum:
        name: goaccess
        state: installed
      after_event:
        text: Po wykonaniu tych operacji powinieneś móc skorzystać z GoAccess.

- name: Użycie
  block:
    - name: Odczytuj wpisy Dziennika na lokalny komputer do GoAccess
      shell:
        cmd: ./h1 log stream --log "{log_name}" --output tsv --fields {message} --filter message~access.log | cut -d ":" -f2- | goaccess --log-format="{log_format}" --date-format="{date-format}" -o "plik_wyjsciowy" --real-time-html
        variables:
          log_name: nazwa utworzonego przez nas archiwum wpisów
          output_file: nazwa pliku, w którym zapisywana będzie graficzna interpretacja wpisów
          log_format: format wpisów, np. `%h %^[%d:%^] \"%r\" %s %b \"%R\" \"%u\"`
          date_format: format daty np. `%d/%b/%Y`
```

## Powiązane produkty

* *[Dziennik](/guide/storage/log-archive/creating.md)*

## Możliwe użycie

* *[Rsyslog](/tutorials/log-archive/rsyslog.md)*

## Co zyskujemy
- graficzną, przystępną formę prezentacji logów
- ułatwione badanie poprawności i wydajności pracy usług np. serwera www
