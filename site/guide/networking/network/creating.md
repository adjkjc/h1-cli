# Utworzenie Sieci

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *[Sieć](/resource/networking/network.md)* wykorzystywaną do izolacji i segmentacji platformy w celu ograniczenia komunikacji zasobów.

## Warunki wstępne

* utworzenie wymaga spełnienia [warunków utworzenia *Sieci*](/resource/networking/network.md#utworzenie)

## Instrukcja

### Panel
      
W celu utworzenia *Sieć* poprzez panel wykonaj następujące kroki:
 
1. Wybierz pozycje ```Sieć``` znajdującą się w menu bocznym.
2. Wybierz przycisk ```Utwórz Nowy```. Po kliknięciu pojawi się okno z formularzem.
3. Wypełnij formularz:

	* Określ parametr ```nazwa``` dla swojego zasobu.
    * Określ parametr ```przestrzeń adresowa sieci```.
    * Określ parametr ```brama domyślna```.

	Przykładowe wartości:

	 * Nazwa: ```moja-siec```
	 * Przestrzeń adresowa: ```10.21.154.0/24```
	 * Brama domyślna: ```10.21.154.1```

4. Wybierz przycisk ``Utwórz``. Po kliknięciu przejdziesz do strony ze szczegółami nowego zasobu.
     
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
          "value": "moje-iso"
        },
        {
          "name": "Przestrzeń adresowa",
          "type": "text",
          "value": "10.21.154.0/24"
        },
        {
          "name": "Brama domyślna",
          "type": "text",
          "value": "10.21.154.1"
        }
      ],
      "defined_all": true
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Utwórz"
    },
    "after_event": "Po kliknięciu przejdziesz do strony ze szczegółami nowego zasobu."
  }
]
```

#### CLI

W celu utworzenia *Sieci* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 network create --name my-ip-network --address 10.214.180.0/24 --gateway 10.214.180.10
```

gdzie:

 * ```--name``` - określa nazwę nowoutworzonej *Sieci*
 * ```--address``` - określa pulę adresową *Sieci* (parametr opcjonalny)
 * ```--gateway``` - określa bramę domyślna *Sieci* (parametr opcjonalny)

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="network create"].