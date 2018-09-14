# Utworzenie Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć [Wirtualną Maszynę](/resource/compute/virtual-machine.md) zapewniaj skalowalną moc obliczeniową w chmurze.

Możliwe jest utworzenie *Wirtualnej maszyny* z wykorzystaniem:
- *[Rekomendowanego obrazu](/platform/recommended-images.md)*
- *[Obrazu](/resource/storage/image.md)* użytkownika
- bez żadnego obrazu

Nie wykorzystanie żadnego obrazu nie oznacza braku systemu operacyjnego, gdyż możliwe jest np. [wykorzystanie napędu DVD](./dvd-inject.md) i samodzielna instalacje dowolnego.

## Warunki wstępne

* utworzenie *Wirtualnej maszyny* wymaga spełnienia [warunków utworzenia Wirtualnej maszyny](/resource/compute/virtual-machine.md#utworzenie)

## utworzenie z wykorzystaniem rekomendowanego obrazu

Utworzenie *Wirtualnej maszyny* z wykorzystaniem rekomendowanego obrazu stanowi najszybszą drogę do jej utworzenia - z 
konfiguracją systemu operacyjnego zapewniającą optymalne wykorzystanie właściwości platformy.

### Panel

<!-- TODO:  Monika, konieczne jest nazwanie sekcji formularza, aby wyeliminować ukośnik -->

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
    "after_event": "Po kliknięciu pojawi się strona z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Obraz / Rekomendowane",
          "type": "choose",
          "value": "debian"
        },
        {
          "name": "Wariant",
          "type": "choose",
          "value": "m2.medium"
        },
        {
          "name": "Sieć",
          "type": "choose",
          "value": "Public Internet"
        },
        {
          "name": "Dane dostępowe / Hasło / Nazwa użytkownika",
          "type": "text",
          "value": "guru"
        },
        {
          "name": "Dane dostępowe / Hasło / Hasło",
          "type": "password"
        },
        {
          "name": "Nazwa serwera",
          "type": "name",
          "value": "moj-serwer"
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

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm create --image debian --type m2.medium --username guru --password my-secret-password --name moj-serwer
```
gdzie:

 * ```--image``` określa identyfikator lub nazwę *Obrazu*
 * ```--type``` określa wariant
 * ```--username``` określa nazwę użytkownika dostępowego
 * ```--password``` określa początkowe hasło dostępowe
 * ```--name``` określa nazwę nowo utworzonej *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm create"].

## Utworzenie Wirtualnej maszyny z *Obrazu* użytkownika

Utworzenie *Wirtualnej maszyny* z *Obrazu* użytkownika umożliwia odtworzenie maszyny *Wirtualnej maszyny* z 
dowolnymi danymi i konfiguracją jaką użytkownik wcześniej przygotował.

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
    "after_event": "Po kliknięciu pojawi się strona z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Obrazy / Użytkownika",
          "type": "choose",
          "value": "moj-obraz"
        },
        {
          "name": "Wariant",
          "type": "choose",
          "value": "m2.medium"
        },
        {
          "name": "Sieć",
          "type": "choose",
          "value": "Public Internet"
        },
        {
          "name": "Dane dostępowe / Hasło / Nazwa użytkownika",
          "type": "text",
          "value": "guru"
        },
        {
          "name": "Dane dostępowe / Hasło / Hasło",
          "type": "password"
        },
        {
          "name": "Nazwa serwera",
          "type": "name",
          "value": "moj-serwer"
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

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm create --image moj-obraz --type m2.medium --username guru --password my-secret-password --name moj-serwer
```
gdzie:

 * ```--image``` określa identyfikator lub nazwę *Obrazu*
 * ```--type``` określa wariant
 * ```--username``` określa nazwę użytkownika dostępowego
 * ```--password``` określa początkowe hasło dostępowe
 * ```--name``` określa nazwę nowo utworzonej *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm create"].

## Utworzenie *Wirtualnej maszyny* bez żadnego *Obrazu*

Utworzenie *Wirtualnej maszyny* bez żadnego *Obrazu* przyspiesza proces jej tworzenia. Jest to szczególnie przydatne, 
gdy system operacyjny ma zostać dostarczony w inny sposób np. poprzez [przypięcie dysku](./disk-attach.md) lub 
[wykorzystanie napędu DVD](./dvd-inject.md).

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
    "after_event": "Po kliknięciu pojawi się strona z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Obrazy",
          "type": "choose",
          "value": "bez obrazu"
        },
        {
          "name": "Wariant",
          "type": "choose",
          "value": "m2.medium"
        },
        {
          "name": "Sieć",
          "type": "choose",
          "value": "Public Internet"
        },
        {
          "name": "Dane dostępowe / Hasło / Nazwa użytkownika",
          "type": "text",
          "value": "guru"
        },
        {
          "name": "Dane dostępowe / Hasło / Hasło",
          "type": "password"
        },
        {
          "name": "Nazwa serwera",
          "type": "name",
          "value": "moj-serwer"
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

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm create --type m2.medium --username guru --password my-secret-password --name moj-serwer
```

gdzie:

 * ```--type``` określa wariant
 * ```--username``` określa nazwę użytkownika dostępowego
 * ```--password``` określa początkowe hasło dostępowe
 * ```--name``` określa nazwę nowo utworzonej *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm create"].

