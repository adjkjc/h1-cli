# Zmiana nazwy Zasobu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zmienić nazwę *[Zasobu](/platform/resource.md)*.

## Instrukcja

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm rename --vm MyVm --new-name MyNamedVm
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej Maszyny*
 * ```--new-name``` określa nową nazwę *Wirtualnej Maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm rename"].

W przypadku konieczności dodania tagów do innych typów *Zasobów* dostępne są następujące polecenia:

* [CLI="h1 snapshot rename"]
* [CLI="h1 vm rename"]
* [CLI="h1 replica rename"]
* [CLI="h1 image rename"]
* [CLI="h1 netgw rename"]
* [CLI="h1 network rename"]
* [CLI="h1 disk rename"]
* [CLI="h1 firewall rename"]
* [CLI="h1 vault rename"]
* [CLI="h1 iso rename"]
* [CLI="h1 project rename"]