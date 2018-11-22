# Import *DNS* do formatu pliku strefy (BIND)

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać wprowadzić do platformy rekordy [DNS](/resource/networking/dns.md) z pliku strefy (BIND).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki [zarządzania DNS](/resource/networking/dns.md).

## Instrukcja

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 dns zone import --zone 'my-domain.tld' --zone-file my-zone-export.txt
```

gdzie:

 * ```--zone``` określa nazwę *DNS* do której importowany są rekordy
 * ```--zone-file``` określa plik zawierający informacje o rekordach
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="dns zone import"].