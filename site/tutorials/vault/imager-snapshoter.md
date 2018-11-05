# Wykonywanie automatycznych Migawek z Vault oraz Obrazów z Wirtualnych Maszyn

Przedstawimy w jaki sposób wykorzystać [CLI](/h1-cli) oraz *Konto usługi* w celu automatycznego wykonywania:

* *[Migawek](/resource/storage/snapshot.md)* z *[Vault](/resource/storage/vault.md)
* *[Obrazów](/resource/storage/image.md)* z *[Wirtualnych Maszyn](/resource/compute/virtual-machine.md)

CLI jest alternatywą formą dostępu do zarządzania platformą udostępniającą tekstowy interfejs możliwy do wykorzystania w automatycznych skryptach.

Wykorzystany zostanie *Konto usługi*. *Konto usługi* to dane dostępowe umożliwiające wykonywanie modyfikacje *Zasobów* *Projektu* w imieniu *Użytkownika* przez aplikacje tj. skrypty, urządzenia lub inne procesy automatyzujące. W szczególności można je wykorzystać poprzez ```CLI``` lub podczas bezpośredniego dostępu do API.

Przed wykonaniem *Obrazu* - w celu zachowania spójności danych - *Wirtualna Maszyna* jest wyłączona, a po wykonaniu *Obrazu* ponownie uruchamiana.

Po wykonaniu *Migawek* lub *Obrazów* zostaną usunięte te, które są starsze niż 7 dni i zostały wykonane podczas poprzedniego uruchomienia skryptu.

Wymagane oprogramowanie GNU Date i Bash jest domyślnie dostępne w [Rekomendowanym obrazie](/platform/recommended-images.md) Ubuntu.

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowany system Linux, na przykład w *Wirtualnej maszynie* [utworzonej zgodnie z instrukcją](/guide/compute/virtual-machine/creating.md)
* zainstalowane GNU Date i Bash
* utworzone *Konto usługi*, [zgodnie z instrukcją](/guide/platform/project/add-service-account.md)
* zainstalowane [CLI](/h1-cli)

```yaml
# render=tutorial
- name: Automatyczne *Migawki*
  block:
    - name: Utwórz nowy plik skryptu
      template:
        syntax: bash
        content: | 
            #!/bin/bash
            set -ueo pipefail
            set -x
            
            TOKEN="{token}"
            SNAPSHOT_RETENTION="7 days";
            DRY_RUN="yes"
            
            export H1_TOKEN="$TOKEN";
            
            ## Automatic new snapshots
            h1 vault list -o id | while read vault; do
                snapshot_name=$(date +'automatic snapshot on %F')
                h1 snapshot create --vault "$vault" --name "$snapshot_name" --tag automatic=yes;
                echo "Created snapshot for Vault ID: $vault";
            done;
            
            ## Garbage collector
            minimum_unix_time=$(date +"%s" --date="$SNAPSHOT_RETENTION ago")
            date +"Removing snapshot older than %d-%m-%Y %H:%M" --date="@$minimum_unix_time";
            
            h1 snapshot list --query "[?tag.automatic == 'yes'].{id:_id,createdOn:createdOn}" -o tsv | while read SNAPSHOT_ID SNAPSHOT_DATE; do
                snapshot_unix_time=$(date "+%s" --date "$SNAPSHOT_DATE");
                if [ $snapshot_unix_time -lt $minimum_unix_time ]; then
                    if [ "$DRY_RUN" == "no" ]; then
                        h1 snapshot delete --yes --snapshot "$SNAPSHOT_ID";
                    fi
                    echo "Delete old snapshot $SNAPSHOT_ID created on $SNAPSHOT_DATE"
                else
                    echo "Skip fresh snapshot $SNAPSHOT_ID created on $SNAPSHOT_DATE";
                fi
            done;
        dest: ~/hyperone-snapshoter.sh
        variables:
          token: identyfikator *Konta Usługi*
    - name: Zweryfikuj poprawność konfiguracji
      shell:
        cmd: bash ~/hyperone-snapshoter.sh
    - name: Wyłącz tryb próbny
      lineinfile:
        regexp: DRY_RUN="yes"
        line: DRY_RUN="no"
        state: present
    - name: Dodaj do harmonogramu automatyczne Migawki
      cron:
        job: bash ~/hyperone-snapshoter.sh
        special_time: daily

- name: Automatyczne *Obrazy*
  block:
    - name: Utwórz nowy plik skryptu
      template:
        syntax: bash
        content: | 
            #!/bin/bash
            set -ueo pipefail
            set -x
            
            TOKEN="{token}"
            IMAGE_RETENTION="-7 days";
            DRY_RUN="no"
            
            export H1_TOKEN="$TOKEN";
            
            ## Automatic new image
            h1 vm list --query '[].{id:_id,name:name,state:state}' -o tsv | while read VM_ID VM_NAME VM_STATE; do
                image_name=$(date +"$VM_ID:$VM_NAME:%F");
                if [ "$VM_STATE" == "Running" ] || [ "$VM_STATE" == "Off" ]; then
                    if [ "$VM_STATE" == 'Running' ]; then
                        h1 vm stop --vm "$VM_ID";
                        echo "Stopped VM: $VM_NAME ( $VM_ID )";
                    fi;
                    h1 image create --vm "$VM_ID" --name "$image_name" --tag automatic=yes;
                    echo "Created image for VM: $VM_NAME ( $VM_ID )";
                    if [ "$VM_STATE" == "Running" ]; then
                        h1 vm start --vm "$VM_ID";
                        echo "Rerun VM: $VM_NAME ( $VM_ID )";
                    fi;
                else
                    echo "Skip VM in invalid ($VM_STATE) state: $VM_NAME ( $VM_ID )";
                fi;
            done;
            
            ## Garbage collector
            minimum_unix_time=$(date +"%s" --date="$IMAGE_RETENTION ago")
            date +"Removing image older than %d-%m-%Y %H:%M" --date="@$minimum_unix_time";
            
            h1 image list --query "[?tag.automatic == 'yes'].{id:_id,createdOn:createdOn}" -o tsv | while read IMAGE_ID IMAGE_DATE; do
                image_unix_time=$(date "+%s" --date "$IMAGE_DATE");
                if [ $image_unix_time -lt $minimum_unix_time ]; then
                    if [ "$DRY_RUN" == "no" ]; then
                        h1 image delete --yes --image "$IMAGE_ID";
                    fi
                    echo "Delete old image $IMAGE_ID created on $IMAGE_DATE"
                else
                    echo "Skip fresh image $IMAGE_ID created on $IMAGE_DATE";
                fi
            done;
        dest: ~/hyperone-imager.sh
        variables:
          token: identyfikator *Konta Usługi*
    - name: Zweryfikuj poprawność konfiguracji
      shell:
        cmd: bash ~/hyperone-imager.sh
    - name: Wyłącz tryb próbny
      lineinfile:
        regexp: DRY_RUN="yes"
        line: DRY_RUN="no"
        state: present
    - name: Dodaj do harmonogramu automatyczne Obrazy
      cron:
        job: bash ~/hyperone-imager.sh
        special_time: daily
```

## Zobacz także

Zapoznaj się także z samouczkiem w jaki sposób [automatycznie wykonywać kopie bezpieczeństwa do Vault](/tutorials/vault/rsync.md).