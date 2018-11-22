# Konfiguracja cyklicznej kopii danych do Vault z pomocą rsync

Przedstawimy w jaki sposób wykorzystać rsync w celu wykorzystania cyklicznej kopii danych do [Vault](/resource/storage/vault.md).

*Vault* zapewnia stały dostęp do kopii danych bez konieczności administrowania systemem operacyjnym. Wygodny dostęp popularnymi protokołami  tj. ssh, sftp, scp, rsync zapewnia sprawny dostęp do danych, wtedy gdy są potrzebne. Możliwość wykonania *[Migawek](/resource/storage/snapshot.md)* dodatkowo zabezpiecza archiwum przed zmianami, a [wykonywanie cykliczne *Migawek*](/tutorials/vault/imager-snapshoter.md) wykonywanie zapewnia tworzenie przyrostowych kopii.

Przedstawiona procedura może służyć także do konwersji danych *Dysku* do *Vault*.

<!-- Wykorzystywany jest parametry```-M--fake-super```, który oznacza, że na zdalnym serwerze atrybuty uprzywilejowane (właściciel pliku itp.) są przechowywane za pomocą specjalnych rozszerzonych atrybutów dołączonych do każdego pliku. -->

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux, na przykład w *Wirtualnej maszynie* [utworzonej zgodnie z instrukcją](/guide/compute/virtual-machine/creating.md)
* zainstalowany rsync w wersji co najmniej 3.1.0
* otwarty port 22 dla połączeń wychodzących
* utworzony *Vault*, [zgodnie z instrukcją](/guide/storage/vault/creating.md)
* dodany klucz SSH do *Vault*, [zgodnie z instrukcją](/guide/storage/vault/add-ssh-key.md)

```yaml
# render=tutorial
- name: Pierwsza synchronizacja
  block:
    - name: Wykonaj początkową synchronizacje
      shell:
        cmd: rsync -av backupowany_katalog {{resource_id}}@vault.pl-waw-1.hyperone.com:~/backup-dir
- name: Automatyzacja
  block:
  - name: Dodaj do harmonogramu automatyczną synchronizacje
    cron:
      job: rsync -av backupowany_katalog {{resource_id}}@vault.pl-waw-1.hyperone.com:~/backup-dir
      special_time: daily
```

## Zobacz także

Zapoznaj się także z samouczkiem w jaki sposób [automatycznie wykonywać migawki Vault](/tutorials/vault/imager-snapshoter.md) w celu przechowywać wiele wersji stanów synchronizacji i umożliwić do nich powrót.