# Automatycznie odświeżenie rekordów DNS wskazujących na RouterOS

Przedstawimy w jaki sposób zautomatyzować konfiguracje [DNS](/resource/networking/dns.md) w celu trwałego wskazywania na aktualny adres IP RouterOS (Mikrotik, Cloud Hosted Router), nawet w przypadku jego zmiany.

Pozwoli to innym urządzeniom sieciowym na zlokalizowanie urządzenia, nawet w przypadku zmiany jego adresowej sieciowej. Technika ta bywa określana jako "Dynamic DNS".

Wykorzystamy *Konto Usługi*, które pozwoli na bezpieczne wprowadzenie zmian w platformie bez konieczności zachowania hasła *Użytkownika* w konfiguracji.

## Warunki wstępne

Przed przystąpieniem do operacji powinieneś mieć:

* utworzony *DNS*, [zgodnie z instrukcją](/guide/networking/dns/creating.md)
* utworzony rekord DNS typu A z dowolną wartością, [zgodnie z instrukcją](/guide/networking/dns/record-set-creating.md),
* dostęp do urządzenia z Router OS, albo utworzyć nowe [zgodnie z przewodnikiem](/tutorials/virtual-machine/cloud-hosted-router.md)
* łączność sieciową z urządzenia z Router OS do sieci *Internet*

## Konfiguracja

### Konfiguracja platformy

Utwórz *Konto Usługi*, [zgodnie z instrukcją](/guide/platform/project/add-service-account.md).

### Konfiguracja Router OS

#### Instalacja skryptu

1. Przejdź do WebFig, [zgodnie z instrukcją](http://www.mikrotik.net.pl/wiki/Webfig).
2. Przejdź do formularza dodawania skryptu. W tym celu w menu z lewej strony wybierz "System"->"Scripts". Następnie naciśnij przycisk "Add new".
3. Wypełnij formularz:

    * W polu "Name" wprowadź ```hyperone_updater```
    * W polu "Source" wprowadź następujący skrypt:

    ```
    :local domain "{domain}"
    :local subdomain "{subdomain}"
    :local authtoken "{identyfikator_service_account}"
    
    :local ipmask [/ip address get [/ip address find interface=ether1] address];
    :if ([:len $ipmask]>5) do={
      :local position [:find $ipmask "/"];
      :local ip [:pick $ipmask 0 $position];
      :put "Current IP: $ip";
      :local oldip [:resolve "$subdomain.$domain"];
      :put "Old IP: $oldip"
      :if ($ip!=$oldip) do={
        :log info "Updated DDNS from $oldip to $ip";
        :tool fetch url="https://api.hyperone.com/v1/dns/zone/$domain./rrsets/A/$subdomain.$domain./ddns?authtoken=$authtoken" mode=https http-method=put
    }  
    ```
    * Zastąp w polu "Source" następujące elementy:
    
    * ```{domain}``` - nazwa strefy *[DNS](/resource/networking/dns.md)*
    * ```{subdomain}```  - nazwa rekordu DNS
    * ```{identyfikator_service_account}``` - identyfikator *Konta Usługi*

3. Zatwierdź zmiany przyciskiem ```Apply```

#### Zaharmonogramowanie wykonania

1. Przejdź do formularza dodawania zadania do harmonogramu. W tym celu w menu z lewej strony wybierz "System"->"Scheduler". Następnie naciśnij przycisk "Add new".

2. Wypełnij formularz:
    
    * W polu *Name* wprowadź ```hyperone dns update```
    * W polu *Interval* wprowadź ```00:00:30```
    * W polu *On Event* wprowadź ```/system script run hyperone_updater```
    
3. Zatwierdź zmiany przyciskiem ```Apply```

## Częste pomyłki

* Rekord DNS, który chcesz modifkować musi istnieć przed wykonaniem operacji, a strefa *DNS* być poprawnie rozwiązywana z wykorzystaniem DNS urządzenia.
