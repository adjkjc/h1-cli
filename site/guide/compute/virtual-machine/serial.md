# Uzyskanie dostepu do konsoli poprzez port szeregowy Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób uzyskać dostepu do konsoli poprzez port szeregowy [Wirtualnej maszyny](/resource/compute/virtual-machine.md).

## Warunki wstępne

* wszystkie warunki wykonania operacji [Uzyskanie dostepu do konsoli poprzez port szeregowy](/resource/compute/virtual-machine.md#uzyskanie-dostepu-do-konsoli-poprzez-port-szeregowy).

## Instrukcja

#### CLI

W celu uzyskanie dostepu do konsoli poprzez port szeregowy *Maszyny Wirtualnej* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm serialport console --vm test-vm
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm serialport console"].