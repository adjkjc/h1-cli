# Instalacja Wordpress na Wirtualnej maszynie

Przedstawimy w jaki sposób uruchomić [Wordpress](https://pl.wordpress.org/) w [Wirtualnej maszynie](/resource/compute/virtual-machine.md).

Przedstawiona procedura instalacji stanowi rozwiązanie instalacji Wordpress w podstawowej konfiguracji LAMP.

<!-- 
## Warunki wstępne

Przed przystąpieniem do integracji powinieneś mieć:

* uruchomione [CLI](/h1-cli)
-->

```yaml
# render=tutorial
- name: Konfiguracja środowiska
  block:
    - name: Utwórz nową Wirtualną maszynę z rekomendowanego obrazu Ubuntu
      guide: 
        path: /guide/compute/virtual-machine/creating.md#utworzenie-z-wykorzystaniem-rekomendowanego-obrazu
    - name: Utwórz nowy pusty *Dysk*
      guide:
        path: /guide/storage/disk/creating.md
    - name: Dołączenie dysku na dane
      guide: 
        path: /guide/compute/virtual-machine/disk-attach.md
- name: Dostęp do serwera
  block:
    - name: Uzyskaj dostęp do konsoli *Wirtualnej maszyny*
      guide:  
        path: /guide/compute/virtual-machine/console.md
- name: Przygotowanie dysku
  block:
    - name: Zidentyfikuj ścieżkę do dysku
      identify_disk:
        value: path
    - name: Sformatuj dysk
      filesystem:
        fstype: ext4
        dev: /dev/sdb
    - name: Zamontuj dysk
      mount:
        src: /dev/sdb
        path: /var/www/html  
        state: mounted

    - name: Zidentyfikuj UUID dysku
      identify_disk: 
        value: uuid
 
    - name: Automatycznie montuj dysk
      mount:
        src: UUID="2d302272-079d-4e01-bf65-a855cb3c9adb"
        path: /var/www/html
        state: present
- name: Instalacja serwera baz danych
  block:
    - name: Zainstaluj serwer bazodanowy MySQL
      apt:
        name: mysql
        state: present
    - name: Utwórz bazę danych w serwerze bazodanowym
      mysql_db: 
        name: customer_wordpress
        state: present
    - name: Utwórz nowego użytkownika bazy danych
      mysql_user:
        name: wordpress_user
        password: SomeStrongPassword
        host: localhost
        priv: customer_wordpress.*:ALL
        state: present
- name: Instalacja Apache2 i PHP   
  block:
    - name: Zainstaluj serwer WWW Apache2
      apt:
        name: apache2
        state: present
    - name: Zainstaluj PHP z wymaganmi modułami
      apt:
        name:  php7.0-fpm php7.0-mysql php7.0-gd php7.0-xml
        state: present
    - name: Uruchom wymagane moduły Apache2
      apache2_module:
        name: proxy_fcgi setenvif
        state: present
    - name: Dodaj do Apache2 domyślną konfiguracje PHP
      apache2_conf:
        name: php7.0-fpm
        state: present
    - name: Uruchom ponownie Apache2
      service:
        name: apache2
        state: restarted
- name: Instalacja Wordpress
  block:
  - name: Pobierz na serwer aktualną wersje Wordpress
    copy:
      src: https://wordpress.org/latest.tar.gz
      dest: /tmp/wordpress.tar.gz
  - name: Skasuj domyślny plik strony
    file:
      dest: /var/wwww/html/index.html
      state: absent
  - name: Wypakuj pliki Wordpress
    unarchive: 
      src: /tmp/wordpress.tar.gz
      dest: /tmp
  - name: Skopiuj pliki do katalogu strony
    copy:
      src: /tmp/wordpress/*
      dest: /var/www/html/
  - name: Skopiuj przykładowy plik konfiguracyjny
    copy: 
      src: /var/www/html/wp-config-sample.php
      dest: /var/www/html/wp-config.php
  - name: Wprowadź nazwę bazy danych do pliku konfiguracyjnego
    lineinfile:
      path: /var/www/html/wp-config.php
      line: define('DB_NAME', 'customer_wordpress');
      regexp: define('DB_USER', '.+?');

  - name: Wprowadź nazwę użytkownika bazy danych do pliku konfiguracyjnego  
    lineinfile:
      path: /var/www/html/wp-config.php
      line: define('DB_USER', 'wordpress_user');
      regexp: define('DB_USER', '.+?');

  - name: Wprowadź hasło do bazy danych do pliku konfiguracyjnego
    lineinfile:
      path: /var/www/html/wp-config.php
      line: define('DB_PASSWORD', 'SomeStrongPassword');
      regexp: define('DB_PASSWORD', '.+?');

  - name: Zidentyfikuj Adres IP Wirtualnej maszyny
    identify_vm:
      value: ip

  - name: Przejdź do kreatora, aby utworzyć konto administratora
    browser:
      url: "http://{{adres_IP}}/"
      state: "opened"    
```

