# Uzyskanie dostępu do konsoli poprzez port szeregowy Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób uzyskać dostępu do konsoli poprzez port szeregowy [Wirtualnej maszyny](/resource/compute/virtual-machine.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Dostęp do konsoli poprzez port szeregowy](/resource/compute/virtual-machine.md).

## Instrukcja

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm serialport console --vm test-vm
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm serialport console"].