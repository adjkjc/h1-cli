# Konfiguracja rsyslog do użycia Dziennika

Niniejszy dokument przedstawia w jaki sposób skonfigurować rsyslog na platformie Linux w celu wykorzystania [Dziennika](/resource/storage/log-archive.md).

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux
* dostęp sudo
* zainstalowaną aktualną wersje rsyslog
* skonfigurowane przekazywanie logów do rsyslog
* otwarty port 6514 dla połączeń wychodzących
* utworzony *Dziennik*, [zgodnie z instrukcją](/guide/storage/log-archive/creating.md)
* dodane hasło w *Dzienniku*, [zgodnie z instrukcją](/guide/storage/log-archive/add-password.md).

```yaml
# render=tutorial
- name: Konfiguracja
  block:
    - name: Utwórz plik konfiguracyjny
      template:
        content: | 
            # Konfiguracja kolejki wspomaganej dyskiem
            $ActionQueueFileName fwdRule1 # unikalny prefiks nazwy dla plików spool
            $ActionQueueMaxDiskSpace 1g   # limit przestrzeni 1 GB (używaj jak najwięcej)
            $ActionQueueSaveOnShutdown on # zapisz komunikaty na dysku podczas zamykania
            $ActionQueueType LinkedList   # wykonuj asynchronicznie
            $ActionResumeRetryCount -1    # ponawiaj w nieskończoność próby, jeśli host jest wyłączony
            
            # Zdefiniuj format szablonu, aby uwzględnić identyfikator dziennika i hasło
            template(name="HyperOneTemplate" type="string"
             string="<%pri%>%protocol-version% %timestamp:::date-rfc3339% %HOSTNAME% %app-name% %procid% %msgid% [{log_id}:{secret}@HyperOne tag=\"Rsyslog\"]%msg%\n")
            
            # Wysyłaj wiadomości do HyperOne przez TCP z pomocą szablonu.
            action(type="omfwd" protocol="tcp" target="{log_id}.log.pl-waw-1.hyperone.com" port="6514" template="HyperOneTemplate")
    
        dest: /etc/rsyslog.d/21-h1-lass.conf
        variables:
          "log_id": identyfikator *Dziennika*
          "secret": hasło dodane do *Dziennika*
    
    - name: Zrestartuj usługę rsyslog
      service:
        name: rsyslog
        state: restarted
      after_event:
        text: Po wykonaniu tych operacji usługa powinna poprawnie współdziałać.
- name: Weryfikacja
  block:
    - name: Wyślij pierwszy wpis  
      shell:
        cmd: echo "Hello World!" | logger
    - name: Odczytaj pierwszy wpis
      guide:
        path: /guide/storage/log-archive/stream.md
```