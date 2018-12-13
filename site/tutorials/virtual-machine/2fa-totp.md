# Dwuetapowa weryfikacja dostępu do *Wirtualnej Maszyny*

Wielu usług internetowych wciąż wykorzystuje logowania wyłącznie z wykorzystaniem nazwy użytkownika i hasła. Jednak takie podejście nie jest wystarczające bezpieczne w dzisiejszym świecie, w którym co dzień zdarzają się ataki szkodliwego oprogramowania powodujące kradzież haseł lub kluczy.

W trosce o bezpieczeństwo zdalnego dostępu do *Wirtualnych Maszyn* przedstawiamy jak wprowadzić mechanizm, który dodaje dodatkową warstwę ochrony konta użytkownika uzyskującego dostęp - weryfikacje dwuetapową. 

Dwuetapowa weryfikacja jest jak posiadanie drugiego zamka w drzwiach. Po jej włączeniu, gdy użytkownik uzyskuje dostęp do serwera, zostanie pierw poproszony o podanie pierwszego czynnika np. hasła (dowód, że Użytkownik coś zna), a następnie o drugi czynnik - jednorazowy kod z skojarzonego urządzenia (dowód, że coś Użytkownik posiada). Kod jednorazowy ulega nieustannej zmianie co 30 sekund, więc jest odporny na kradzież. Te liczne czynniki zwiększają bezpieczeństwo zarządzanych *Wirtualnych Maszyn*.

Dzięki weryfikacji dwuetapowej można powstrzymać intruzów, nawet jeśli przechwycą hasło / klucz SSH np. poprzez infekcje komputera. Jest to krytyczne, gdyż gdy ktoś ukradnie hasło, może zazwyczaj dowolnie modyfikować konfiguracje serwera, a przede wszystkim wykraść dane z niego narażając *Organizacje* na poważne szkody. Po wprowadzeniu dwuetapowej weryfikacji inruz, aby dostać się na konto, będzie potrzebował nie tylko hasła, ale jeszcze dostępu do telefonu Użytkownika.

W celu uchronienia się przed tym można wykorzystać dwuetapową weryfikacja. Wystarczy odpowiednia konfiguracja przez administratora systemu operacyjnego, a następnie konfiguracja przez użytkowników odpowiedniej aplikacji na urządzeniu mobilnym, takim jak tablet lub smartfon. 
 
W przypadku dostępu do *Platformy* także można w prosty sposób [włączyć weryfikacje dwuetapową dla swojego konta *Użytkownika*](), aby chronić zarządzane *Zasoby* przed nieuprawnioną modyfikacją.

## Wymagania wstępne

* zainstalowany system Ubuntu, na przykład w *Wirtualnej maszynie* [utworzonej zgodnie z instrukcją](/guide/compute/virtual-machine/creating.md)
* zainstalowana na urządzeniu mobilnym aplikacja wspierająca dwuetapową weryfikacje tj. [Authy](https://authy.com/download/), [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2). 

```yaml
#render=tutorial
- name: Przygotowanie serwera serwera
  block:
    - name: "Instalacja `libpam-google-authenticator`"
      apt:
        name: libpam-google-authenticator
        state: present
- name: Konfiguracja konta użytkownika
  block:
    - name: Skojarzenie aplikacji wspierającej dwuetapową weryfikacje
      shell:
        cmd: google-authenticator
    - after_event: 
        text: "Postępuj zgodnie z instrukcjami wyświetlonymi na ekranie po wykonaniu polecenia. Zostanie wyświetlony kod QR, który należy zapisać w aplikacji wspierającej dwuetapową weryfikacje. Operacje należy powtórzyć dla każdego użytkownika indywidualnie."
- name: Konfiguracja PAM
  block:
    - name: Konfiguracja opcjonalnej dwuetapowej weryfikacji
      lineinfile:
        path: /etc/pam.d/common-auth
        line: "auth   required  /usr/local/lib/pam_google_authenticator.so nullok"
    - name: Wymuszenie dwuetapowej weryfikacji
      lineinfile:
        path: /etc/pam.d/common-auth
        line: "auth   required  /usr/local/lib/pam_google_authenticator.so"
    - free_text: 
        text: Zmiana określa metody uwierzytelniania interaktywnego np. w graficznej konsoli *Wirtualnej Maszyny*, które należy pomyślnie ukończyć, aby użytkownik uzyskał dostęp.
- name: Konfiguracja serwera SSH
  block: 
  - name: Określ metody uwierzytelniania dla dostępu SSH 
    lineinfile: 
      path: /etc/ssh/sshd_config/
      regexp: "AuthenticationMethods .*"
      line: AuthenticationMethods publickey,keyboard-interactive
  - name: Przeładuj serwer SSH
    service:
      name: sshd
      state: reloaded
  - free_text:
      text: Od tego momentu do logowania wymagane jest wykorzystanie klucza SSH, hasła oraz jednorazowego kodu.
- name: Umożliwienie logowanie kluczem SSH i jednorazowym kodem
  block:
    - free_text:
        text: W celu zniesienia wymogu podania hasła w przypadku dostępu poprzez SSH należy pominąć ```pam_unix.so``` jako wymaganą forma uwierzytelniania dla SSH.
    - name: Zdefiniowanie form uwierzytelniania dla SSH
      template:
        dest: /etc/pam.d/auth-sshd
        content: |
            auth    required                        pam_google_authenticator.so
            auth    requisite                       pam_deny.so
            auth    required                        pam_permit.so
            auth    optional                        pam_cap.so
    - name: 
      lineinfile:
        path: /etc/pam.d/sshd
        regexp: "@include common-auth"
        line: "@include auth-sshd"
    - name: Przeładuj serwer SSH
      service:
        name: sshd
        state: reloaded
```