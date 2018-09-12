# Dodanie reguły Zapory sieciowej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać regułę do *[Zapory sieciowej](/resource/networking/firewall.md)*.

Reguły zapory sieciowej podzielone są na następujące kategorie:

* przychodzące reguły - określają reguły dla ruchu przychodzącego,
* wychodzące reguły - określają reguły dla ruchu wychodzącego.

## Warunki wstępne

* posiadanie *Zapory sieciowej*

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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj regułę"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Nazwa",
          "type": "name",
          "value": "dopuszczenie ruchu na porcie 8080"
        },
        {
          "name": "Filtr",
          "type": "text",
          "value": "tcp:8080"
        },        
        {
          "name": "Strefa zewnętrzna",
          "type": "text",
          "value": "123.123.123.123"
        }
      ],
      "defined_all": false
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj"
    }
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 firewall ingress add --firewall secure-zone-fw --action allow \
    --priority 300 \
    --filter tcp:80 \
    --external 123.123.123.123 --internal '*' \
    --name 'dopuszczenie ruchu na porcie 8080'
```

gdzie:

 * ```--firewall``` określa nazwę lub identyfikator *Zapory sieciowej*
 * ```--action``` określa rodzaj polityki (```allow``` lub ```deny```)
 * ```--priority``` określa priorytet reguły względem pozostałych
 * ```--external``` określa strefę zewnętrzną reguły
 * ```--internal``` określa strefę wewnętrzną reguły
 * ```--name``` określa nazwę reguły

Szczegółowe dane są dostępne w dokumentacji poleceń:

* [h1 firewall ingress add](/h1-cli/firewall.md#firewall-ingress-add)
* [h1 firewall egress add](/h1-cli/firewall.md#firewall-egresss-add)
