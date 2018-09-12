# Praktyki

Korzyści:

* zdobędziesz cenne doświadczenie zawodowe
* rozwiniesz ścieżkę swojej kariery jako programista
* opublikujesz dostępny kod jako część większego projektu - chcemy, aby był on dostępny na [GitHubie](http://github.com/) dla każdego
* brak umowy poufności względem opracowanego kodu
* praktyczne zastosowanie narzędzi Git - najpopularniejszego i podstawowego narzędzia pracy grupowej z kodem źródłowym
* podzielimy się doświadczeniem i poradzimy, gdy utkniesz w martwym punkcie lub nie będziesz wiedzieć od czego zacząć

## Zadania

### Træfik - dostawca DNS <Badge text="Go"/>

[Træfik](https://docs.traefik.io/) to nowoczesne [odwrotne proxy HTTP](https://en.wikipedia.org/wiki/Reverse_proxy) i load-balancer, który ułatwia wdrażanie mikrousług. Posiada on możliwość automatycznego uzyskiwania certyfikatów SSL z [Let's Encrypt](https://letsencrypt.org/). Uzyskiwanie certyfikatu SSL wymaga uwierzytelnienie (wykazania prawa do) domeny, co może odbyć się m. in. poprzez odpowiedni wpis DNS. HyperOne udostępnia usługę [DNS](/resource/networking/dns.md).

Celem jest opracowanie integracji, abyśmy byli [dostawcą  usług DNS](https://docs.traefik.io/configuration/acme/#provider) (ang. ```dns provider```) w Træfik na potrzeby weryfikacji Let's Encrypt. Istnieje dotychczas znaczna ilość integracji mogących stanowiących źródło inspiracji i podpowiedzi.

### CLI - moduł Powershell <Badge text="Powershell"/>  <Badge text="NodeJS"/>

Posiadamy [CLI](/h1-cli/), które umożliwia zarządzanie zasobami platformy. Chcemy zwiększyć komfort jego wykorzystania na platformie Windows poprzez modułu PowerShell, będący obwolutą (ang. ```wrapper```) na istniejące CLI.

Został opracowany [wstępny zarys](https://github.com/hyperonecom/h1-cli/issues/73). Konieczne jest jego rozwinięcie i przełożenie na kod. Możliwe, że część kodu będzie wymagać wygenerowania do czego powinna wystarczyć elementarna wiedza o NodeJS, którą możemy przekazać.

### Terraform - dostawca <Badge text="Go"/>

W rozwoju środowisk chmurowych popularny jest proces [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_Code) (IaC) zakładający wykorzystanie do zarządzania i opisu infrastruktury deklaratywnych procedur.

Jednym z popularniejszych narzędzi usprawniających ten proces jest [Terraform](https://www.terraform.io/intro/index.html) napisany w Go.

Chcielibyśmy powstania dostawcy (```ang. provider```), który umożliwi wykorzystanie tego narzędzia względem naszej platformy. Wystawiamy do tego odpowiednie API. Konieczne jest napisanie odpowiedniego modułu, a w miarę rozwoju platformy jego rozwijanie. Istnieje [wiele modułów](https://github.com/terraform-providers) mogących stanowiących źródło inspiracji i podpowiedzi.

### OctoDNS - dostawca <Badge text="Python"/>

[OctoDNS](https://github.com/github/octodns) jest narzędziem umożliwiającym deklaratywne opisanie strefy DNS, a w przypadku zmian opracowania planu doprowadzenia do pożądanego stanu i zrealizowania go. Umożliwia to efektywne zarządzanie rekordami DNS w sposób identyczny dla kodu źródłowego, a dzięki narzędziom ciągłej integracji wdrażanie tych zmian. OctoDNS został napisany w języku Python.

Chcielibyśmy powstania dostawcy (```ang. provider```), który umożliwi wykorzystanie tego narzędzia względem naszej platformy. Udostępniamy do tego odpowiednie API. Konieczne jest napisanie odpowiedniego modułu, a w miarę rozwoju platformy jego rozwijanie. Istnieje [wiele modułów](https://github.com/github/octodns/tree/master/octodns/provider) mogących stanowiących źródło inspiracji i podpowiedzi.

### Ansible - moduł  <Badge text="Python"/>

[Ansible](http://www.ansible.com/) jest narzędziem przeznaczonym do automatyzacji zarządzania konfiguracją oprogramowania. Umożliwia ono także zarządzanie infrastrukturą np. utworzonymi wirtualnymi serwerami.

Chcielibyśmy powstania modułu, który umożliwi wykorzystanie tego narzędzia względem naszej platformy. Udostępniamy do tego odpowiednie API. Konieczne jest napisanie odpowiedniego modułu, a w miarę rozwoju platformy jego rozwijanie. Istnieje wiele modułów (przykład dla [GCE](https://docs.ansible.com/ansible/latest/modules/gce_module.html) mogących stanowiących źródło inspiracji i podpowiedzi.

### Grafana - źródło danych <Badge text="JavaScript"/>

[Grafana](https://grafana.com/) jest narzędziem przeznaczonym do monitorowania i analizy historycznych danych, przede wszystkim tych które ulegają okresowej zmianie w czasie (ang. ```time-series```).

Grafana wspiera wiele [źródeł danych](http://docs.grafana.org/features/datasources/). Niektóre są ściśle związanych z określonym dostawcą usług np. [CloudFlare](https://support.cloudflare.com/hc/en-us/articles/115002722267-Install-the-Cloudflare-Grafana-Plugin), [Azure](https://grafana.com/plugins/grafana-azure-monitor-datasource). [Trwają prace](https://github.com/grafana/grafana/issues/4355) nad wprowadzeniem do Grafany mechanizmów prezentacji danych czasu rzeczywistego.

W platformie udostępniamy w czasie rzeczywistym, a także gromadzimy historyczne dane obrazujące parametry pracy [Wirtualnych maszyn](/resource/compute/virtual-machine.md). Usprawni to monitorowanie parametrów ich pracy bez konieczności instalowania przez użytkownika jakiegokolwiek agenta.

Chcielibyśmy powstania modułu dostarczającego źródło danych, który umożliwi wykorzystanie tego narzędzia względem naszej platformy. Gromadzimy dane historyczne i udostępniamy do tego odpowiednie API. Konieczne jest napisanie odpowiedniego modułu, a w miarę rozwoju platformy jego rozwijanie. Istnieje wiele [otwartoźródłowych modułów](https://grafana.com/plugins?type=datasource) mogących stanowiących źródło inspiracji i podpowiedzi.

### Zabbix - import metryk <Badge text="JavaScript"/>

[Zabbix](https://www.zabbix.com/) jest narzędziem przeznaczonym do monitorowania serwerów i aplikacji. Posiada [otwarty protokół](https://www.zabbix.com/documentation/3.4/manual/appendix/protocols) umożliwiający import metry z dowolnych źródeł.

W platformie udostępniamy w czasie rzeczywistym, a także gromadzimy historyczne dane obrazujące parametry pracy [Wirtualnych maszyn](/resource/compute/virtual-machine.md). Takie dane możemy także zacząć udostępniać dla innych zasobów.

Wydaje się możliwe utworzenie agenta, który w czasie rzeczywistym zaimportuje dane o maszynach wirtualnych z platformy do serwera Zabbix. Serwer Zabbix wykorzysta wówczas te informacje np. do powiadomieniu o utrudnieniach w pracy aplikacji użytkownika. W niektórych przypadkach może to pozwolić na zrezygnowanie z instalacji i konfiguracji jakiegokolwiek oprogramowania na monitorowanej wirtualnej, a każda utworzona na platformie Wirtualna maszyna mogłaby ulegać automatycznej rejestracji i zostać objęta monitoringiem.

Chcielibyśmy powstania usługi do wykorzystania przez użytkowników platformy, które powyższe zapewnią. Ze względu na utrzymanie oprogramowania w czasie i nasze doświadczenia preferujemy napisanie tego w NodeJS, ale w przypadku wystąpienia istotnych powodów jesteśmy otwarci na inne technologie.

### Apache LibCloud - dostawca <Badge text="Python"/>

[Apache LibCloud](https://libcloud.apache.org) jest biblioteka Pythona do interakcji z popularnymi dostawcami usług w chmurze za pomocą zunifikowanego API.

Chcielibyśmy powstania odpowiedniego modułu, który umożliwi wykorzystanie naszej platformy jako dostawcy zasobów w tej bibliotece.

### CLI - graficzna prezentacja metryk <Badge text="JavaScript"/>

Posiadamy [CLI](/h1-cli/), które umożliwia zarządzanie zasobami platformy. Posiada także możliwość uzyskania danych obrazujących parametry pracy Wirtualnych maszyn (zob. [CLI="vm metrics"] ). Forma prezentacji ich jest dość surowa, choć nawet w CLI możliwe byłoby [zaprezentowanie przystępniej](https://github.com/hyperonecom/h1-cli/issues/158).

Chcielibyśmy opracowania odpowiednich zmian do CLI, które zwiększą atrakcyjność prezentacji metryk np. poprzez wykresy.

### GraphQL - bramka oparta o REST API platformy <Badge text="JavaScript"/>

Dostrzegamy [potencjał](https://stackshare.io/posts/companies-using-graphql-in-production-2018) technologi GraphQL. Posiadamy jednak istniejące stabilne rozwiązania, które wymagają utrzymania oparte o REST API platformy.

Chcielibyśmy zbudowania bramki GraphQL opartej na bieżącym interfejsie API REST, co pozwoliłoby w pełni ocenić potencjał migracji do GraphQL.

### Zarządzanie użytkownikami Wirtualnych maszyn <Badge text="JavaScript"/> <Badge text="C++"/> <Badge text="C#"/> <Badge text="Python"/>

Chcielibyśmy umożliwić zarządzanie kontami użytkowników usług działających na Wirtualnych maszynach z poziomu interfejsu platformy. Dostrzegamy [istniejące otwarte rozwiązania](https://github.com/GoogleCloudPlatform/compute-image-packages), które to realizują. Posiadamy doświadczenie w opracowaniu [usług umożliwiających bezpieczną komunikacje platformy](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/make-integration-service) z systemem pracującym w *Wirtualnej Maszynie*.

Zadanie to będzie z pewnością wymagało istotnych zmian po stronie platformy.  Nie będzie ono trywialne w realizacji. Jesteśmy jednak otwarci, aby je wspólnie z Tobą zaplanować, zaprojektować i zrealizować.

