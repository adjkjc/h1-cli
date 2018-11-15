# Wprowadzenie do API Platformy

API *Platformy* pozwala na łatwe wykonanie każdej operacji udostępnionej np. poprzez Panel lub CLI w sposób automatyczny i programowy.

Dostęp do wszystkich funkcji API odbywa się za pośrednictwem protokołu HTTPS poprzez adres ```https://api.hyperone.com/v1/```.

Wszystkie dane są wysyłane i odbierane jako JSON. Puste pola są uwzględniane jako ``null``, a nie pomijane.

Wszystkie znaczniki czasu przesyłane są w formacie ISO 8601: ```RRRR-MM-DDTHH: MM:SSZ```

W niniejszej dokumentacji przykłady poleceń są zapisywane z wykorzystaniem [HTTPie](https://httpie.org/).

## Uwierzytelnienie dostępu do *Platformy*

W celu wykonywania operacji na *Platformie* poprzez API należy:

* dokonać uwierzytelnienia *Użytkownika*, aby uzyskać identyfikator sesji *Użytkownika* albo
* [utworzyć *Konto usługi*](/guide/platform/project/add-service-account.md), aby uzyskać identyfikator *Konta Usługi*

oraz

* przesłać wraz z żądaniem token dostępowy (identyfikator sesji *Użytkownika* lub identyfikator *Konta Usługi*)

### Identyfikator sesji *Użytkownika*

Token dostępowy stanowiący identyfikator sesji *Użytkownika* posiada wszystkie uprawnienia *Użytkownika* do wszystkich *Projektów* do których *Użytkownik* został dodany i pozwala wykonywać operację na nich wszystkich.

Wymagane jest aby każde żądanie do API posiadało dodatkowo w nagłówku [pole ```x-project```](#naglowek-x-project) które będzie definiował w kontekście jakiego *Projektu* dane żądanie powinno zostać wykonane.

Taka sesja *Użytkownika* jest wykorzystywana w przypadku Panelu lub narzędzia CLI i powinna identyfikować osobę fizyczną, ponieważ posiada szerokie uprawnienia i ograniczony czas ważności.

### Identyfikator *Konta Usługi*

Token dostępowy stanowiący identyfikator *[Konta Usługi](/platform/project.md)* jest tworzony w ramach pojedynczego *Projektu* i posiada ograniczone prawa dostępu np. tylko do wykonania obrazu lub danych operacji na pojedynczym lub wszystkich zasobach.

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

Uwierzytelnienie żądania polega na przesłaniu tokenu dostępowego (identyfikatora sesji *Użytkownika* lub *Konta usługi*):

 * w nagłówku HTTP ```x-auth-token``` albo
 * w cookie ```x-auth-token``` albo
 * w zapytaniu ```?authtoken=xxxxxx```

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

Warto przy tym wykorzystać [parametr ```--verbose```](/h1-cli/common-arguments.md) CLI w celu uzyskania ścieżki i formatu żądania oraz [parametr ```-o json```](/h1-cli/common-arguments.md) w celu uzyskania informacji o strukturze odpowiedzi. Przykładowo:

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
