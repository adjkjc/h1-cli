# Usunięcie adresu IP w sieci prywatnej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć [Adres IP](/resource/networking/ip-address.md) w sieci prywatnej.

## Warunki wstępne

* usunięcie wymaga spełnienia [warunków usuwania Adres IP](/resource/networking/ip-address.md#usuwanie)

## Instrukcja

### Panel

W celu usunięcia *Zapory sieciowej* poprzez panel wykonaj następujące kroki:

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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Utwórz Nowy"
    },
    "after_event": "Po kliknięciu zostanie przydzielony losowy publiczny adres IP."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Adresy IP"
    },
    "after_event": "Po kliknięciu pojawi się lista reguł."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj Nowy"
    },
    "after_event": "Po kliknięciu zostanie otwarte okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [],
      "defined_all": false
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj"
    },
    "after_event": "Po kliknięciu zostanie dodany adres IP."
  }
```

#### CLI

W celu usunięcia *Zapory sieciowej* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 firewall delete --firewall my-firewall
```

gdzie:

 * ```--firewall``` określa nazwę lub identyfikator *Zapory sieciowej*

Szczegółowe dane są dostępne w dokumentacji polecenia [h1 firewall delete](/h1-cli/firewall.md#firewall-delete).