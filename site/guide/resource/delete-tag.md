# Usunięcie Tagu z Zasobu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć *Tag* z *[Zasobu](/platform/resource.md)*.

## Instrukcja

### CLI

Poniżej przedstawiono wykonanie operacji dla *Wirtualnej Maszyny*. Analogiczne postępowanie jest w przypadku innych zasobów.

W celu wykonania operacji z wykorzystaniem panelu wykonaj następujące kroki:

```bash
h1 vm tag delete --vm MyVm --tag Key
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej Maszyny*
 * ```--tag``` określa klucz *Tagu*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm tag add"].

W przypadku konieczności dodania tagów do innych typów *Zasobów* dostępne są następujące polecenia:

* [CLI="snapshot tag delete"]
* [CLI="vm tag delete"]
* [CLI="vm nic tag delete"]
* [CLI="replica tag delete"]
* [CLI="ip tag delete"]
* [CLI="image tag delete"]
* [CLI="netgw tag delete"]
* [CLI="network tag delete"]
* [CLI="network ip tag delete"]
* [CLI="disk tag delete"]
* [CLI="firewall tag delete"]
* [CLI="vault tag delete"]
* [CLI="iso tag delete"]
* [CLI="project tag delete"]