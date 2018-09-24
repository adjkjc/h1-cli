# Usunięcie reguły Zapory sieciowej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć regułę *[Zapory sieciowej](/resource/networking/firewall.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Usunięcie reguły](/resource/networking/firewall.md).

## Instrukcja

### Panel

W celu wykonania operacji z wykorzystaniem panelu wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Zapora sieciowa"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu pojawi się strona ze szczegółami zasobu."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Reguły przychodzące"
    },
    "after_event": "Po kliknięciu pojawi się lista reguł."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_tridot"
    },
    "after_event": "Po kliknięciu pojawi się lista rozwijana."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "selector": "navbar>.vm",
      "label":"Usuń"
    }
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 firewall ingress delete --firewall secure-zone-fw --rule 5b1e8988cdfb072cb51dc843
```

gdzie:

 * ```--firewall``` określa nazwę lub identyfikator *Zapory sieciowej*
 * ```--action``` określa rodzaj reguły (```ingresss``` lub ```egress```)
 * ```--rule``` określa identyfikator reguły

Identyfikator reguły możesz ustalić poprzez:
* [h1 firewall ingress list](/h1-cli/firewall.md#firewall-ingress-list)
* [h1 firewall egress list](/h1-cli/firewall.md#firewall-egresss-list)

Szczegółowe dane są dostępne w dokumentacji poleceń:

* [h1 firewall ingress delete](/h1-cli/firewall.md#firewall-ingress-add)
* [h1 firewall egress delete](/h1-cli/firewall.md#firewall-egresss-add)
