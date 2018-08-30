# Utworzenie dysku

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć [ISO](/resource/storage/iso.md) wykorzystywany w napędzie DVD [Wirtualnej maszyny](/resource/compute/virtual-machine.md).
 
W przypadku tworzenia *ISO* możesz utworzyć go na podstawie pliku lokalnego lub poprzez wskazanie serwera z którego zostanie ono pobrane.

## Warunki wstępne

* utworzenie *ISO* wymaga spełnienia [warunków utworzenia ISO](/resource/storage/disk.md#utworzenie)

## Utworzenie *ISO* poprzez wskazanie serwera

Utworzenie *ISO* poprzez wskazanie serwera umożliwia sprawne wykorzystanie ogólnodostępnych plików ```.iso```.

### Panel

W celu utworzenia *ISO* poprzez panel wykonaj następujące kroki:

1. Wybierz pozycje ```ISO``` znajdującą się w menu bocznym.
2. Wybierz przycisk ```Utwórz Nowy```. Po kliknięciu pojawi się okno z formularzem.
3. Wypełnij formularz:

	* Określ ```nazwę``` dla swojego zasobu.
    * Określ ```źródło```.

	> Określa on dostępny rozmiar i parametry wydajnościowe.

	Przykładowe wartości:

	 * Nazwa: ```moje-iso```
	 * Źródło: ```http://releases.ubuntu.com/18.04.1/ubuntu-18.04.1-desktop-amd64.iso```

4. Wybierz przycisk ``Utwórz``. Po kliknięciu przejdziesz do strony ze szczegółami nowego zasobu.

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "ISOs"
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
          "name": "Źródło",
          "type": "text",
          "value": "http://releases.ubuntu.com/18.04.1/ubuntu-18.04.1-desktop-amd64.iso"
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

W celu utworzenia *ISO* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 iso create --name myiso --source-url http://example.com/some.iso
```
gdzie:

 * ```--name``` określa nazwę nowoutworzonego *ISO*
 * ```--source-url``` określa adres URL dla dysku

Szczegółowe dane są dostępne w dokumentacji polecenia [h1 iso create](/h1-cli/iso.md#iso-create).

## Utworzenie dysku na podstawie pliku lokalnego

Utworzenie *ISO* na podstawie pliku lokalnego umożliwia przeniesienie istniejącego dysku ```.iso``` do platformy umożliwia
wykorzystanie obrazów *ISO*, które nie są publicznie dostępne. 

#### CLI

W celu utworzenia *ISO* na podstawie pliku lokalnego wykonaj następujące polecenie:

```bash
h1 iso create --name myiso --source-file my.iso
```

gdzie:

 * ```--name``` określa nazwę nowoutworzonego dysku
 * ```--source-file``` wskazuje ściezkę do przesłanego pliku

Szczegółowe dane są dostępne w dokumentacji polecenia [h1 iso create](/h1-cli/iso.md#iso-create).
