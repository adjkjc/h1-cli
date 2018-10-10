# Utworzenie repliki

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *[Replikę](/resource/compute/replica.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie [warunki utworzenia Repliki](/resource/compute/replica.md#utworzenie)

## Instrukcja

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 replica create --local-vm Local-VM --autostart
```

gdzie:

 * ```--local-vm``` określa identyfikator lokalnej wirtualnej maszyny
 * ```--autostart``` określa, że po wykonaniu polecenia rozpocznie się replikacja

Polecenie należy wykonać na lokalnym serwerze Hyper-V, gdzie wprowadza zmiany mające na celu:

* dodanie nowego certyfikatu uwierzytelnienia do platformy
* konfiguruje replikacje dla wybranej maszyny wirtualnej
* rozpoczyna replikację maszyny wirtualnej.

<!--
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="replica create"].
-->