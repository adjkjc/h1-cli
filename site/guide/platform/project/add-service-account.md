# Dodanie Konta Usługi do Projektu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać *Konta Usługi* do [Projektu](/platform/project.md) co umożliwia zarządzania *Zasobami* Platformy przez skrypty, urządzenia lub inne procesy automatyzujące. 

## Instrukcja

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 project token add --project 6oAoJqgyLZP4Le9UUNHrEOYP --name secret-token-1
```

gdzie:

 * ```--project``` określa nazwę lub identyfikator *Projektu*
 * ```--email``` nazwę konta usługi

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="project token add"].