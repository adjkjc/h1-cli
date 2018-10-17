# Konfiguracja cyklicznej kopii danych do Vault z pomocą rsync

Przedstawimy w jaki sposób wykorzystać rsync w celu wykorzystania cyklicznej kopii danych do [Vault](/resource/storage/vault.md).

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux, na przykład w *Wirtualnej maszynie* [utworzonej zgodnie z instrukcją](/guide/compute/virtual-machine/creating.md)
* zainstalowaną aktualną wersje rsync
* otwarty port 22 dla połączeń wychodzących
* utworzony *Vault*, [zgodnie z instrukcją](/guide/storage/vault/creating.md)
* dodany klucz SSH do *Vault*, [zgodnie z instrukcją](/guide/storage/vault/add-ssh-key.md)

```yaml
# render=tutorial
- name: Pierwsza synchronizacja
  block:
    - name: Wykonaj początkową synchronizacje
      shell:
        cmd: rsync -av backupowany_katalog {{resource_id}}@vault.pl-waw-1.hyperone.com:/
- name: Automatyzacja
  block:
  - name: Dodaj do harmonogramu automatyczną synchronizacje
    cron:
        job: rsync -av backupowany_katalog {{resource_id}}@vault.pl-waw-1.hyperone.com:/
        special_time: daily
```

