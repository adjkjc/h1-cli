# Uruchomienie Cloud Hosted Router na Wirtualnej maszynie

Przedstawimy w jaki sposób uruchomić Cloud Hosted Router (CHR) w [Wirtualnej maszynie](/resource/compute/virtual-machine.md).

Cloud Hosted Router (CHR) to wersja systemu operacyjnego RouterOS od firmy Mikrotik, która jest przeznaczona do środowiska zwirtualizowanego.

## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* zainstalowane [CLI](/h1-cli)

```yaml
# render=tutorial
- name: Konfiguracja
  block:
    - name: Pobieranie obrazu dysku 
      free_text:
        text: Przejdź do [sekcji pobierania](https://mikrotik.com/download) strony internetowej producenta Mikrotik. Odszukaj wybraną wersje typu "VHDX image" oprogramowania. Pobierz ją na lokalny komputer.
    - name: Utwórz nowy *Dysk* poprzez przesłanie
      guide:
        path: /guide/storage/disk/creating.md#utworzenie-dysku-poprzez-przeslanie
    - name: Utwórz nową Wirtualną maszynę bez obrazu
      guide: 
        path: /guide/compute/virtual-machine/creating.md#utworzenie-wirtualnej-maszyny-bez-zadnego-obrazu-użytkownika
    - name: Dołączenie dysku
      guide: 
        path: /guide/compute/virtual-machine/disk-attach.md
    - name: Uzyskaj dostęp do konsoli *Wirtualnej maszyny*
      guide: 
        path: /guide/compute/virtual-machine/console.md
    - name: Konfiguracja
      free_text: 
        text: W celu bezpiecznego skonfigurowania usługi skorzystaj z [dokumentacji producenta](https://wiki.mikrotik.com/wiki/Manual:Securing_Your_Router#Access_by_IP_address).
```

<!-- Network: https://app.asana.com/0/836013051111576/836509326193072 -->