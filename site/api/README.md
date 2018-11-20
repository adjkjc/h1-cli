# Wprowadzenie do API Platformy

API *Platformy* pozwala na łatwe wykonanie każdej operacji udostępnionej np. poprzez Panel lub CLI w sposób automatyczny i programowy.

Dostęp do wszystkich funkcji API odbywa się za pośrednictwem protokołu HTTPS poprzez adres ```https://api.hyperone.com/v1/```. Zostało wykonane w stylu REST.

Wszystkie dane są wysyłane i odbierane jako JSON. Puste pola są uwzględniane jako ``null``, a nie pomijane.

Wszystkie znaczniki czasu przesyłane są w formacie ISO 8601: ```RRRR-MM-DDTHH: MM:SSZ```

W niniejszej dokumentacji przykłady poleceń są zapisywane z wykorzystaniem [HTTPie](https://httpie.org/).

## Terminologia

Wykorzystywane w dokumencie pojęcia oznaczają:

* *Użytkownik* przeznaczony jest do zarządzania zasobami platformy przez osoby fizyczne. Wykorzystuje platformę do zarządzania *Zasobami* np. poprzez CLI lub panel. Więcej informacji w artykule *[Użytkownik](/site/platform/user.md)
)*.
* *Projekt* przeznaczony jest do logicznego zgrupowania zasobów, którego dla Organizacji mają wspólny cel i przeznaczenie. Więcej informacji w artykule *[Projekt](/site/platform/project.md).
* *Zasób* stanowi obiekt w infrastrukturze Platformy, z którym *Użytkownik* może współdziałać i go modyfikować. Więcej informacji w artykule *[Zasób](/site/platform/resource.md)*.
* *Konto usługi* to dane dostępowe umożliwiające wykonywanie modyfikacji *Zasobów* *Projektu* w imieniu *Użytkownika* przez aplikacje tj. skrypty, urządzenia lub inne procesy automatyzujące. Przypisany jest zawsze do jednego Projektu. Więcej w sekcji *Konto Usługi* artykułu *[Projekt](/site/platform/project.md)*.


## Uwierzytelnienie dostępu do *Platformy*

W celu wykonywania operacji na *Platformie* poprzez API należy:

* dokonać uwierzytelnienia *Użytkownika*, aby uzyskać identyfikator sesji *Użytkownika* albo
* [utworzyć *Konto usługi*](/guide/platform/project/add-service-account.md), aby uzyskać identyfikator *Konta Usługi*

oraz

* przesłać wraz z żądaniem token dostępu (identyfikator sesji *Użytkownika* lub identyfikator *Konta Usługi*)

Uwierzytelnienie żądań kierowanych do API wymaga tokenu dostępu który może zostać uzyskany jako:

* sesja *Użytkownika*
* *Klucz usługi*

Poniżej porównanie funkcjonalności obu rozwiązań.

| opis                             | sesja *Użytkownika*                                                                                                                        | *Klucz usługi*                                                                                                                                                                                                                |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Utworzenie                       | Poprzez podanie nazwy *użytkownika* oraz hasła (możliwe także wymagane dwuskładnikowe uwierzytelnienie)                                    | Przez *Użytkownika* dla wybranego *Projektu*                                                                                                                                                                                  |
| Protokoły dla utworzenia         | HTTP, SSH                                                                                                                                  | HTTP                                                                                                                                                                                                                          |
| Zakres dostępu                   | Możliwość wyboru *Projektu* dla każdego żądania do API wedle posiadanych uprawnień *Użytkownika*                                           | Jedynie w ramach *Projektu* do którego został przypisany                                                                                                                                                                      |
| Uprawnienia                      | Wszelkie uprawnienie włącznie z możliwością zarządzania *Użytkownikiem*, *Projektami* i *Organizacją* wedle posiadanych uprawnień do nich. | Ograniczone do uprawnień w ramach pojedynczego Projektu wyszczególnionych przy tworzeniu z możliwością późniejszej modyfikacji zakresu uprawnień. Brak możliwości zarządzania *Użytkownikami*, *Projektami* lub *Organizacją* |
| Czas obowiązywania               | Przez około 1 godziny od ostatniej wykonanej operacji na API z jego użyciem albo do czasu usunięcia                                        | Do czasu określonego na stałe podczas utworzenia albo do czasu usunięcia                                                                                                                                                      |
| Zastosowanie                     | Wykorzystanie w panelu oraz CLI w bezpośredniej interakcji z *Użytkownikiem*                                                               | W skryptach i wszelkiej automatyzacji                                                                                                                                                                                         |
| Wymagane parametry               | `x-auth-token` oraz `x-project` w celu podania Projektu dla żądania                                                                        | jedynie `x-auth-token`                                                                                                                                                                                                        |
| Kanały wykorzystania             | panel, narzędzie CLI, API                                                                                                                  | narzędzie CLI, API                                                                                                                                                                                                            |
| Dwuskładnikowe uwierzytelnienie | zgodnie z konfiguracją Użytkownika                                                                                                         | tylko przy utworzeniu, brak wymogu przy wykorzystaniu                                                                                                                                                                         |


### Identyfikator sesji *Użytkownika*

Token dostępu stanowiący identyfikator sesji *Użytkownika* posiada wszystkie uprawnienia *Użytkownika* do wszystkich *Projektów* do których *Użytkownik* został dodany i pozwala wykonywać operację na nich wszystkich.

Wymagane jest aby każde żądanie do API posiadało dodatkowo w nagłówku [pole ```x-project```](#naglowek-x-project) które będzie definiował w kontekście jakiego *Projektu* dane żądanie powinno zostać wykonane.

Taka sesja *Użytkownika* jest wykorzystywana w przypadku Panelu lub narzędzia CLI i powinna identyfikować osobę fizyczną, ponieważ posiada szerokie uprawnienia i ograniczony czas ważności.

### Identyfikator *Konta Usługi*

Token dostępu stanowiący identyfikator *[Konta Usługi](/platform/project.md)* jest tworzony w ramach pojedynczego *Projektu* i posiada ograniczone prawa dostępu np. tylko do wykonania obrazu lub danych operacji na pojedynczym lub wszystkich zasobach.

Ze względu że *Konto usługi* jest utworzone w ramach Projektu w takim przypadku nie ma konieczności przy wysyłaniu żądania do API podawać w nagłówku pola ```x-project``` ponieważ *Projekt* jest już zdefiniowany i przypisany do *Konta usługi*.

Głównym zastosowaniem *Konta usługi* jest automatyzacja i wykorzystanie w skryptach lub oprogramowaniu bezpośrednio komunikującym się z API ponieważ poprzez nadanie jedynie bardzo ograniczonych i zawężonych uprawnień zwiększamy bezpieczeństwo. *Konto usługi* nie posiada dostępu lub nie umożliwia modyfikacji danych *Projektu* lub *Użytkownika* ze względów bezpieczeństwa.

## Uwierzytelnienie dla sesji *Użytkownika*

Uwierzytelnienie *Użytkownika* w celu uzyskania identyfikatora sesji *Użytkownika* może odbywać się następującymi metodami:

* uwierzytelnianie HTTP
* uwierzytelnianie SSH

Identyfikator sesji *Użytkownika* niezależny od formy uwierzytelniania ważny jest około 60 godzin od ostatniego żądania. Dowolne żądanie z wykorzystaniem identyfikatora sesji może przedłużyć jego ważność do godziny.

### Uwierzytelnianie dla sesji *Użytkownika* poprzez HTTP

```bash
$ http -v POST https://api.hyperone.com/v1/user/user@example.com/session password="SomePassword"
POST /v1/user/user@example.com/session HTTP/1.1
Accept: application/json
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 31
Content-Type: application/json
Host: api.hyperone.com
User-Agent: HTTPie/0.9.2

{
    "password": "SomePassword"
}

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 279
Content-Type: application/json; charset=utf-8
Date: Wed, 14 Nov 2018 16:17:58 GMT
ETag: W/"117-yP0knerlhN5P+EmQ5R/l3XVB7v0"
Referrer-Policy: strict-origin-when-cross-origin
Server: nginx
Set-Cookie: x-auth-token=5beab306913f2d5d821b350c; Path=/; Expires=Wed, 14 Nov 2018 17:17:58 GMT; HttpOnly; Secure
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block

{
    "_id": "5beab306913f2d5d821b350c",
    "access": [
        {
            "_id": "5beabe03680cffd11f0e653d",
            "method": "ALL",
            "path": "/"
        }
    ],
    "clientIp": "62.181.3.201",
    "createdBy": "user@example.com",
    "createdOn": "2018-11-14T16:17:58.691Z",
    "expiry": "2018-11-14T17:17:58.691Z",
    "userAgent": "HTTPie/0.9.2"
}
```

W przypadku dwuskładnikowego uwierzytelniania ```API``` może odmówić dostępu, pomimo prawidłowego hasła. Wskazuje wówczas w odpowiedzi dopuszczalne formy dwuskładnikowego uwierzytelniania dla danego *Użytkownika*:

```bash
HTTP/1.1 403 Forbidden
Connection: keep-alive
Content-Length: 95
Content-Type: application/json; charset=utf-8
Date: Wed, 14 Nov 2018 16:22:08 GMT
ETag: W/"5f-B9yRZdFJ8bamT6aiGzDt/Jq8ySs"
Server: nginx

{
    "code": "CHALLENGE_REQUEST",
    "message": "challenge request",
    "status": 403,
    "value": [
        "totp",
        "otac"
    ]
}
```

Należy wówczas ponowić żądanie przesyłając także kod uwierzytelniający:

```bash
$ http -v POST https://api.hyperone.com/v1/user/user@example.com/session password="SomePassword" challenge:='{"totp":980350}'
POST /v1/user/user@example.com/session HTTP/1.1
Accept: application/json
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 65
Content-Type: application/json
Host: api.hyperone.com
User-Agent: HTTPie/0.9.2

{
    "challenge": {
        "totp": 980350
    },
    "password": "SomePassword"
}

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 289
Content-Type: application/json; charset=utf-8
Date: Wed, 14 Nov 2018 16:27:14 GMT
ETag: W/"121-Iz6lTv8neWrXqycLchMC/mvror8"
Referrer-Policy: strict-origin-when-cross-origin
Server: nginx
Set-Cookie: x-auth-token=5beab306913f2d5d821b350c; Path=/; Expires=Wed, 14 Nov 2018 17:27:14 GMT; HttpOnly; Secure
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block

{
    "_id": "5beab306913f2d5d821b350c",
    "access": [
        {
            "_id": "5bec4ce23fcfc062ba95aa55",
            "method": "ALL",
            "path": "/"
        }
    ],
    "clientIp": "62.181.3.201",
    "createdBy": "user@example.com",
    "createdOn": "2018-11-14T16:27:14.045Z",
    "expiry": "2018-11-14T17:27:14.044Z",
    "userAgent": "HTTPie/0.9.2"
}
```

###  Uwierzytelnianie dla sesji *Użytkownika* poprzez SSH

W celu wykorzystania SSH do uwierzytelniania należy uzyskać połączenie SSH z *Platformą* z wykorzystaniem klucza SSH *Użytkownika*, która wówczas zwróci identyfikator sesji *Użytkownika*:

```bash
$ ssh -o "User=user@example.com" api.hyperone.com -s rbx-auth
{"_id":"5beab306913f2d5d821b350c","expiry":"2018-11-14T17:42:43.448Z","createdBy":"user@example.com","createdOn":"2018-11-14T16:42:43.449Z","access":[{"_id":"5bec50833fcfc062ba95d0b5","path":"/","method":"ALL"}],"clientIp":"::ffff:10.80.7.50","userAgent":"SSH-2.0-OpenSSH_7.2p2 Ubuntu-4ubuntu2.6"}
```

## Uwierzytelnienie żądania do *Platformy*

Token dostępu oraz inne parametry wymagane dla uwierzytelnienia żądania mogą zostać przekazane do API na kilka sposobów.

| opis | query | header | cookie |
| :--- | :---: | :---: | :---: |
| token dostępu | authtoken | x-auth-token | x-auth-token |
| projekt | project | x-project | - |

W przypadku podania parametrów na kilka sposobów zostanie wykorzystany pierwszy znaleziony w następującej kolejności: ```query```, ```header```, ```cookie```.

Jeżeli nie zaznaczono inaczej, wszystkie żądania do API *Platformy*, wymagają uwierzytelnienia.

Przykładowe poprawne żądanie z wykorzystaniem *Konta Usługi*:

```bash
$ http -v GET https://api.hyperone.com/v1/ip x-auth-token:5af0bbbcb7802508ad844caa
GET /v1/ip HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: api.hyperone.com
User-Agent: HTTPie/0.9.2
x-auth-token: 5af0bbbcb7802508ad844caa


HTTP/1.1 200 OK
Connection: keep-alive
Content-Encoding: gzip
Content-Type: application/json; charset=utf-8
Date: Wed, 14 Nov 2018 23:47:36 GMT
ETag: W/"b57-N+imK4oxVYs5yAsFHPjgpoAOfSY"
Referrer-Policy: strict-origin-when-cross-origin
Server: nginx
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Transfer-Encoding: chunked
Vary: Accept-Encoding
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block

[
    {
        ...
    }
]
```

## Nagłówki żądania

### Nagłówek ``x-auth-token``

Nagłówek ``x-auth-token`` przeznaczony jest do uwierzytelniania żądania do *Platformy*.

### Nagłówek ``x-project``

Każdy *Użytkownik* może mieć dostęp do wielu *Projektów*. Z tego powodu w przypadku wykorzystania identyfikatora sesji *Użytkownika* w celu modyfikowania *Zasobów* *Projektu* należy wskazać *Projekt*, którego dotyczy żądanie w nagłówku ```x-project``` w następujący sposób:

```bash
$ http -v GET https://api.hyperone.com/v1/image x-auth-token:5beab306913f2d5d821b350c x-project:5bec28a99e1716681aeb6164
GET /v1/image HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: api.hyperone.com
User-Agent: HTTPie/0.9.2
x-auth-token: 5beab306913f2d5d821b350c
x-project: 5bec28a99e1716681aeb6164


HTTP/1.1 200 OK
Connection: keep-alive
Content-Encoding: gzip
Content-Type: application/json; charset=utf-8
Date: Wed, 14 Nov 2018 17:11:33 GMT
ETag: W/"44f-mgg0+kIQ0OS8BLkO3tYRK5S/C/Y"
Referrer-Policy: strict-origin-when-cross-origin
Server: nginx
Set-Cookie: x-auth-token=5beab306913f2d5d821b350c; Path=/; Expires=Wed, 14 Nov 2018 18:11:06 GMT; HttpOnly; Secure
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Transfer-Encoding: chunked
Vary: Accept-Encoding
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block

[
    ...
]
```

### Nagłówek ```Prefer```

Część operacji *API* może być czasochłonna. W takim przypadku *Platforma* może wykonać żądanie *asynchronicznie* poprzez odpowiedź z statusem ```202``` oraz z nagłówkiem ```x-event-id``` zawierający identyfikator operacji. Asynchroniczne wykonanie jest kontrolowane - zgodnie z [RFC7240](https://tools.ietf.org/html/rfc7240) - poprzez nagłówek ```Prefer```.

W celu uzyskania natychmiastowej odpowiedzi bez względu na rzeczywisty czas wykonania operacji należy przesłać w nagłówku żądania:

```
Prefer: respond-async,wait=0
```

W celu oczekiwania na wykonanie operacji przez określony czas należy przesłać w nagłówku żądania:

```
Prefer: respond-async,wait=86400
```

Wartość```86400``` stanowi maksymalny czas oczekiwania w sekundach.

## Format żądania i odpowiedzi

W celu ustalenia prawidłowej składni żądania należy wykorzystać [CLI](http://github.com/hyperonecom/h1-cli).

Warto przy tym wykorzystać [parametr ```--verbose```](/h1-cli/common-arguments.md) w celu uzyskania ścieżki i formatu żądania oraz [parametr ```-o json```](/h1-cli/common-arguments.md) w celu uzyskania informacji o strukturze odpowiedzi. Przykładowo:

```
$ h1 vault create --name my-vault --size 10 --tag example-tag -o json --verbose
verbose: body
{
  "name": "my-vault",
  "size": 10,
  "tag": {
    "example-tag": ""
  },
  "credential": {
    "password": [],
    "certificate": []
  }
}
verbose: POST https://api.hyperone.com/v1/vault
verbose: headers
{
  "x-auth-token": "5beab306913f2d5d821b350c",
  "x-project": "5bec28a99e1716681aeb6164"
}
verbose: headers
{
  "server": "nginx",
  "date": "Wed, 14 Nov 2018 17:35:17 GMT",
  "content-type": "application/json; charset=utf-8",
  "transfer-encoding": "chunked",
  "connection": "close",
  "vary": "Accept-Encoding",
  "set-cookie": [
    "x-auth-token=5beab306913f2d5d821b350c; Path=/; Expires=Wed, 14 Nov 2018 18:34:39 GMT; HttpOnly; Secure"
  ],
  "x-event-id": "5bec5cd4680cffd11f0f3026",
  "etag": "W/\"47e-w86+yBQyNVA+nLGSYyD7QJUmXBE\"",
  "x-xss-protection": "1; mode=block",
  "x-frame-options": "DENY",
  "x-content-type-options": "nosniff",
  "strict-transport-security": "max-age=31536000; includeSubdomains; preload",
  "referrer-policy": "strict-origin-when-cross-origin",
  "content-encoding": "gzip"
}
{ _id: '5bec5cd4680cffd11f0f3025',
  name: 'my-vault',
  services:
   [ { type: 'flavour',
       name: 'vault',
       data: { sizeMax: 1000, sizeMin: 1 },
       billing: '5bec5cd5aff60a685f9c89e1',
       sourceService: '5a0332c4eb8f4ed95c206a12',
       _id: '5bec5cd5aff60a685f9c89e2',
       id: '5bec5cd5aff60a685f9c89e2' },
     { type: 'metric',
       name: 'metric traffic Outbound',
       data: { metric: 'rbx.vault.%s.traffic.Outgoing' },
       billing: '5bec5cd5aff60a685f9c89e3',
       sourceService: '5bacb27a70db5c0bf4e5dce0',
       _id: '5bec5cd5aff60a685f9c89e4',
       id: '5bec5cd5aff60a685f9c89e4' } ],
  flavour: 'vault',
  modifiedOn: '2018-11-14T17:35:16.613Z',
  modifiedBy: 'user@example.com',
  createdBy: 'user@example.com',
  createdOn: '2018-11-14T17:35:16.610Z',
  accessRights: [ '5beab306913f2d5d821b350c' ],
  processing: false,
  created: true,
  queue:
   [ { _id: '5bec5cd4680cffd11f0f3026',
       name: 'create',
       createdBy: 'user@example.com',
       queued: '2018-11-14T17:35:16.612Z',
       state: 'finished',
       resource: { id: '5bec5cd4680cffd11f0f3025', type: 'vault' } } ],
  state: 'Online',
  tag: { 'example-tag': '' },
  size: 10,
  sizeUsed: 0.0001462697982788086,
  credential: { password: [], certificate: [] } }
```

# Błędy i kody stanu HTTP

Czasami żądania do API nie powodzą się. Niepowodzenia mogą wystąpić z wielu różnych powodów. We wszystkich przypadkach interfejs API powinien zwrócić kod stanu HTTP, który wskazuje na charakter błędu, z treścią odpowiedzi w formacie JSON zawierającą dodatkowe informacje.

Wykorzystywane są w szczególności następujące kody stanu HTTP:

| Kod 	| Znaczenie                                 	| Opis                                                                                                                                                                                                                           	|
|-----	|-------------------------------------------	|---------------------------------------------------------------
| 200 	| Sukces (```Success```)                    	| Jeśli zażądano danych, będą one dostępne w treści odpowiedzi.                                                                                                                                                                  	|
| 202 	| Zaakceptowano (```Accepted```)            	| Żądanie zostało przyjęte i zostanie ono przetworzone w niedługiej przyszłości. Żądanie może, ale nie musi, zostać zrealizowane, ponieważ np. może być zabronione, gdy przetwarzanie faktycznie będzie miało miejsce.           	|
| 400 	| Nieprawidłowe żądanie (```Bad Request```) 	| Żądanie zostało przyjęte, ale jego składnia została uznana za nieprawidłową. Zwykle dzieje się tak z powodu brakującego lub źle sformułowanego parametru. Sprawdź dokumentację i składnię żądania i spróbuj ponownie.          	|
| 401 	| Nieautoryzowany (```Unauthorized```)      	| W żądaniu nie podano prawidłowego tokena dostępowego, więc Platforma nie mogła powiązać *Użytkownika* z żądaniem.                                                                                                                    	|
| 403 	| Zabroniony (```Forbidden```)              	| Uwierzytelnienie żądania przebiegło poprawnie, a jego składnia była poprawna, ale Platforma odmawia zrealizowania żądania. Może się tak zdarzyć, jeśli *Użytkownik* próbuje modyfikować *Zasoby*, do których nie ma dostępu. 	|
| 404 	| Nie znaleziony (```Not Found```)          	| Podana metoda i ścieżka żądania nie określają znanej akcji w interfejsie API lub obiekt określony przez żądanie nie istnieje lub *Użytkownik* nie ma żadnego prawa dostępu do obiektu.                                                 	|
| 429 	| Zbyt dużo żądań (```Too Many Requests```) 	|  Przekroczyłeś limit żądań do interfejsu API.                                                                                                                                                                                  	|
| 50x 	| -                                         	| Po stronie Platformy wystąpił problem, który uniemożliwił zrealizowanie żądania.                                                                                                                                               	|` -

W przypadku błędu, odpowiedź będzie zawierała opis błędu w następujących polach:

* ```status``` - tożsamy z kodem stanu HTTP
* ```message``` - opis błędu
