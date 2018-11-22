# Utworzenie Dysku

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *[Dysk](/resource/storage/disk.md)* wykorzystywany do przechowywania danych na potrzeby [Wirtualnej maszyny](/resource/compute/virtual-machine.md). W przypadku tworzenia *Dysku* twardego możesz utworzyć go pustym. Natomiast jeżeli posiadasz już dysk w odpowiednim formacie możesz przesłać jego obraz do platformy i na tej podstawie utworzyć dysk w pltaformie. Utworzony dysk możesz w przyszłości rozszerzać lub zmniejszać.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie [warunki utworzenia *Dysku*](/resource/storage/disk.md#utworzenie)

## Utworzenie pustego Dysku

Utworzenie pustego dysku umożliwia w przyszłości składowania na nim dowolnych danych. Taki dysk początkowo nie zawiera żadnych danych użytkownika.

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
      "label": "Dyski"
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
          "value": "moj-dysk"
        },
        {
          "name": "Typ",
          "type": "choose",
          "value": "ssd",
          "help": "Określa on dostępny rozmiar i parametry wydajnościowe."
        },
        {
          "name": "Rozmiar",
          "type": "number",
          "value": "50"
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
    
### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 disk create --name disk-type --size 10 --type ssd
```
gdzie:

 * ```--name``` określa nazwę nowo utworzonego dysku
 * ```--size``` określa rozmiar utworzonego dysku
 * ```--type``` określa typ tworzonego dysku

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="disk create"].

## Utworzenie dysku poprzez import

Utworzenie dysku poprzez import umożliwia przeniesienie istniejącego dysku ```.vhdx``` do platformy. Taki dysk już od samego początku może zawierać dane użytkownika gotowe do wykorzystania.

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 disk create --name new-disk --size 1 --type ssd --source-file ./my-disk.vhdx
```

gdzie:

 * ```--name``` określa nazwę nowo utworzonego dysku
 * ```--size``` określa rozmiar utworzonego dysku
 * ```--type``` określa typ tworzonego dysku
 * ```--source-file``` określa plik ```.vhdx``` zawierający obraz przesyłanego dysku.

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="disk create"].
