# Usunięcie adresu IP w sieci prywatnej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć [Adres IP](/resource/networking/ip-address.md) w sieci prywatnej.

## Warunki wstępne

* usunięcie wymaga spełnienia [warunków usuwania Adres IP](/resource/networking/ip-address.md#usuwanie)

## Instrukcja

### Panel

W celu usunięcia *Adresu IP* w *Sieci* poprzez panel wykonaj następujące kroki:
 
```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Sieci"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource"
    },
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami zasobu."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Adresy IP"
    },
    "after_event": "Po kliknięciu pojawi się lista adresów IP."
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

W celu usunięcia *Adresu IP* w *Sieci* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 network ip delete --ip my-ip --network my-network
```

gdzie:

 * ```--ip``` określa adres IP lub jego identyfikator
 * ```--network``` określa nazwę lub identyfikator sieci

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="network ip delete"].