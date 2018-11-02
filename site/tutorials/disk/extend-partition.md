# Rozszerzenie używanej przestrzeni *Dysku*

Przedstawimy w jaki sposób rozszerzyć używaną przestrzeń *[Dysku](/resource/storage/disk.md)* wykorzystywanego w [Wirtualnej maszynie](/resource/compute/virtual-machine.md).

Ze względu na sposób działania systemów operacyjnych operacja [zwiększenia rozmiaru *Dysku*](/guide/storage/disk/resize.md) nie sprawia, że staje się ona wykorzystywana przez aplikacje użytkownika.

Dane gromadzone na dysku są gromadzone w grupach tzw. partycjach. Każda partycja ma ściśle określony rozmiar i pozycje na dysku.

Obszar dysku podzielony jest na części - partycje. Każda partycja ma ściśle określony rozmiar i pozycje na dysku. Na partycji istnieje określony system plików, który także posiada określony rozmiar. Dopiero system plików umożliwia na swobodne zapisywanie i odczytywanie plików.

Zwiększenie rozmiaru *Dysku* tworzy nową przestrzeń, która w celu wykorzystania powinna być przypisana do partycji np. poprzez rozszerzenie istniejącej lub utworzenie nowej. Następnie rozszerzyć należy system plików.

Dostępny w [rekomendowanych obrazach](/platform/recommended-images.md) cloud-init dla systemów z rodziny Linux wraz z uruchomieniem systemu wykonuje te operacje dla *Dysku* systemowego.

Niniejsza instrukcja przedstawia rozszerzeni *Dysku*, a następnie partycji dla:

* systemów z rodziny Windows:
    * Microsoft Windows Server 2016 Standard Desktop Experience
    * Microsoft Windows Server 2016 Standard Core
    * Microsoft Windows Server 2016 DataCenter Desktop Experience
    * Microsoft Windows Server 2016 DataCenter Core
* systemów z rodziny Linux z systemem plików ext2, ext3 i ext4 np. Ubuntu 18.04

```yaml
# render=tutorial
- name: Konfiguracja środowiska
  block:
    - name: Utwórz nową Wirtualną maszynę z rekomendowanego obrazu Ubuntu lub Windows
      guide:
        path: /guide/compute/virtual-machine/creating.md#utworzenie-z-wykorzystaniem-rekomendowanego-obrazu
    - name: Utwórz nowy pusty *Dysk*
      guide:
        path: /guide/storage/disk/creating.md
    - name: Dołączenie *Dysku* na dane
      guide:
        path: /guide/compute/virtual-machine/disk-attach.md
- name: Dostęp do serwera
  block:
    - name: Uzyskaj dostęp do konsoli *Wirtualnej maszyny*
      guide:
        path: /guide/compute/virtual-machine/console.md
- name: Rozszerzenie *Dysk* dodatkowego i systemu plików dla systemów z rodziny Linux
  block:
    - name: Zidentyfikuj ścieżkę do *Dysku*
      identify_disk:
        value: path
    - name: Zidentyfikuj partycje, którą zamierzasz rozszerzyć
      identify_partition:
        dev: /dev/sdb
        value: position
    - name: Rozszerz *Dysk* dodatkowy
      guide:
        path: /guide/storage/disk/resize.md
    - name: Rozszerz partycje
      parted:
        device: /dev/sdb
        action: resizepart
    - name: Zidentyfikuj ścieżkę do partycji
      identify_partition:
        value: path
    - name: Rozszerz system plików
      filesystem:
        dev: /dev/sdb1
        resizefs: true
- name: Rozszerzenie dysku i systemu plików dla systemów z rodziny Windows
  block:
    - name: Zidentyfikuj *Dysk*
      powershell:
        cmd: Get-Disk
    - name: Zidentyfikuj partycje
      powershell:
        cmd: Get-Disk -Number 1 | Get-Partition
    - name: Dla *Dysku* systemowego
      block:
        - name: Wyłącz *Wirtualną Maszynę*
          guide:
            path: /guide/compute/virtual-machine/stop.md
        - name: Rozszerz *Dysk* podstawowy
          guide:
            path: /guide/storage/disk/resize.md
        - name: Uruchom *Wirtualną Maszynę*
          guide:
            path: /guide/compute/virtual-machine/start.md
        - name: Rozszerz partycje do oczekiwanego rozmiaru
          powershell:
            cmd: Get-Disk -Number 1 | Get-Partition -PartitionNumber 1 | Resize-Partition -Size $(Get-PartitionSupportedSize -DiskNumber 1 -PartitionNumber 1).SizeMax
    - name: Dla *Dysku* dodatkowego
      block:
        - name: Rozszerz *Dysk* dodatkowy
          guide:
            path: /guide/storage/disk/resize.md
        - name: Rozszerz partycje do oczekiwanego rozmiaru
          powershell:
            cmd: Get-Disk -Number 1 | Get-Partition -PartitionNumber 1 | Resize-Partition -Size $(Get-PartitionSupportedSize -DiskNumber 1 -PartitionNumber 1).SizeMax
```
