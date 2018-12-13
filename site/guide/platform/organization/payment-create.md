# Utworzenie *Płatności* na rzecz *Organizacji*

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *Płatność* na rzecz *[Organizacji](/platform/organization.md)*.

## Instrukcja

### Panel
      
W celu wykonania operacji z wykorzystaniem panelu wykonaj następujące kroki:

```guide
[{
		"action_name": "click",
		"data": {
			"type": "entry",
			"location": "sidebar",
			"selector": ".nav > li:nth-child(2)",
			"label": "Organizacje"
		}
	},
	{
		"action_name": "click",
		"data": {
			"type": "entry_resource"
		},
		"after_event": "Po kliknięciu zostanie otwarta strona z szczegółami *Zasobu*."
	},
	{
		"action_name": "click",
		"data": {
			"type": "tab",
			"selector": "navbar>.vm",
			"label": "Płatności"
		},
		"after_event": "Po kliknięciu pojawi się lista *Projektów*."
	},
	{
		"action_name": "click",
		"data": {
			"type": "button",
			"label": "Utwórz nowy"
		},
		"after_event": "Po kliknięciu zostanie otwarta strona z formularzem płatności."
	},
	{
		"action_name": "form",
		"data": {
			"modal": true,
			"steps": [{
				"name": "Wartość",
				"type": "text",
				"value": "1000"
			}],
			"defined_all": true
		}
	},
	{
		"action_name": "click",
		"data": {
			"type": "button",
			"selector": "navbar>.vm",
			"label": "forma płatności"
		},
		"after_event": "Po kliknięciu zostanie otwarta strona wybranego operatora płatności, która umożliwi sfinalizowanie płatności."
	}
]
```