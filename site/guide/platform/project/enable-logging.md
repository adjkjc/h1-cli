# Włączenie rejestrowania operacji

## Wprowadzenie

Dokument wyjaśnia w jaki sposób włączyć rejestrowanie operacji *[Projektu](/platform/project.md)* do *[Dziennika](/resource/storage/log-archive.md)*.

## Instrukcja

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 project logging enable --project MyProject --logArchive 5beabe03680cffd11f0e653d  --password StrongPassword
```

gdzie:

 * ```--project``` określa nazwę lub identyfikator *Projektu* konfigurowanego
 * ```--logArchive``` określa identyfikator *Dziennika*
 * ```--password``` określa hasło *Dziennika*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="project logging enable"].