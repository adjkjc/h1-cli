# Eksport *DNS* do formatu pliku strefy (BIND)

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać wyeksportować z platformy rekordy [DNS](/resource/networking/dns.md) z pliku strefy (BIND) np. w celu zbiorczej ich identycji i [ponownego importu](./import.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki [zarządzania DNS](/resource/networking/dns.md).

## Instrukcja

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 dns zone export --zone 'my-domain.tld'
```

gdzie:

 * ```--zone``` określa nazwę *DNS* do której importowany są rekordy
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="dns zone export"].