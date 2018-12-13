# Włączenie weryfikacji dwuetapowej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób włączyć weryfikacje dwuetapową *[Użytkownika](/platform/user.md)*, co znacząco zwiększa bezpieczeństwo procesu logowania.

## Warunki wstępne

* zainstalowana na urządzeniu mobilnym aplikacja wspierająca dwuetapową weryfikacje tj. [Authy](https://authy.com/download/), [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2), [FreeOTP](https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp&hl=pl). 

## Instrukcja

### Panel

W celu wykonania operacji z wykorzystaniem panelu wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "avatar",
      "location": "nav-item-user"
    },
    "after_event": "Po kliknięciu pojawi się menu rozwijane."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "label": "ustawienia"
    },
    "after_event": "Po kliknięciu pojawi się strona z ustawieniami Użytkownika."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "label": "Bezpieczeństwo"
    },
    "after_event": "Po kliknięciu pojawi się opcja konfiguracji weryfikacji dwuetapowej."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "label": "Włącz"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "scan_qr_2fa"
  },
  {
    "action_name": "input_totp_code"
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Kod weryfikacji",
          "type": "text",
          "value": "123456"
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
      "label": "Włącz"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Ustaw kody bezpieczeństwa"
    }
  }
] 
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 user 2fa enable
```

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="user 2fa enable"].