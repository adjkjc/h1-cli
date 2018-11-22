# Dodanie Tagu do Zasobu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać *Tag* do *[Zasobu](/platform/resource.md)*,  w celu zbiorczego odwołania lub nadania Zasobom jednolitych właściwości.

## Instrukcja

### CLI

Poniżej przedstawiono wykonanie operacji dla *Wirtualnej Maszyny*. Analogiczne postępowanie jest w przypadku innych zasobów.

W celu wykonania operacji z wykorzystaniem panelu wykonaj następujące kroki:

```bash
h1 vm tag add --vm MyVm --tag Key=Value
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej Maszyny*
 * ```--tag``` określa klucz i wartość (oddzielone "=") dla *Tagu*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm tag add"].

W przypadku konieczności dodania tagów do innych typów *Zasobów* dostępne są następujące polecenia:

* [CLI="snapshot tag add"]
* [CLI="vm tag add"]
* [CLI="vm nic tag add"]
* [CLI="replica tag add"]
* [CLI="ip tag add"]
* [CLI="image tag add"]
* [CLI="netgw tag add"]
* [CLI="network tag add"]
* [CLI="network ip tag add"]
* [CLI="disk tag add"]
* [CLI="firewall tag add"]
* [CLI="vault tag add"]
* [CLI="iso tag add"]
* [CLI="project tag add"]