# Bezpieczna aktualizacja z zredukowaną przerwą 

Aktualizacje systemu operacyjnego i aplikacji działających w *[Wirtualnej Maszynach](/resource/compute/virtual-machine.md)* są niezbędne. Użytkownicy oczekują, że będą one trwały jak najkrócej. Natomiast administratorzy chcą przeprowadzić je w sposób skuteczny i bezpieczny dla danych tych użytkownika, a tym samym siebie.

Przedstawimy w jaki sposób pogodzić te wymagania. Dowiesz się jak stworzyć sprawnie kopie środowiska produkcyjnego. Pozwoli Ci to przeprowadzić aktualizacje spokojnie i bez obaw o działające usługi. Po spokojnie przeprowadzonej aktualizacji sprawnie skierujemy ruch użytkowników do nowego środowiska, gdzie będą dostępne ich aktualne dane.

W celu wykonania środowiska testowego stworzymy *[Obraz](/resource/storage/image.md)* *Wirtualnej Maszyny* stanowiący bazę dla nowej *Wirtualnej Maszyny*. Po aktualizacji aktualne dane użytkowników przeniesiemy poprzez przepięcie *Dysku*. Ruch użytkowników przekierujemy poprzez przepięcie publicznego adresu *[Adresu IP](/resource/networking/ip-address.md)* dowiązanego do prywatnego *Adresu IP*.

Dowiesz się:

- jak wykonać *Obraz* *Wirtualnej Maszyny* i użyć go do stworzenia środowiska testowego
- jak szybko przepiąć serwer świadczący usługę pod publicznym *Adresu IP*
- w jaki sposób w mgnieniu oka i bezpiecznie przenieść nawet znaczne ilości danych pomiędzy *Wirtualnymi Maszynami*.

## Warunki wstępne

Przed przystąpieniem do przewodnika powinieneś mieć:

* utworzoną *Wirtualną Maszynę*, [zgodnie z instrukcją](/guide/compute/virtual-machine/creating.md),
* posiadać aplikacje działającą w *Wirtualnej Maszynie*,
* przechowywać dane aplikacji na *Dysku* osobnym od *Dysku* systemowego,
* wykorzystać prywatny *Adres IP*  dowiązany do publicznego *Adresu IP*, [zgodnie z instrukcją](/guide/networking/ip-address/associate-ip-address.md).

```yaml
# render=tutorial
- name: Opracowanie środowiska testowego
  block:
    - name: Utwórz Obraz z Wirtualnej Maszyny
      guide: 
        path: /guide/storage/image/creating-from-vm.md

    - name: Utwórz Wirtualną maszynę z własnego Obrazu
      guide: 
        path: /guide/compute/virtual-machine/creating.md

    - name:
      free_text:
        text: W ten sposób uzyskałeś środowisko w pełni zgodne z produkcyjnym, które zawiera wszelkie elementy konfiguracji środowiska produkcyjnego, lecz osobną adresacje i dyski.

- name: Aktualizacja
  free_text:
    text: Aktualizacje przeprowadź zgodnie z dokumentacją oprogramowania, które wykorzystujesz.

- name: Wdrożenie nowego środowiska
  block:
    - name: Przeniesienie danych
      block:
       - name: Odłącz dysk z danymi z starego środowiska produkcyjnego
         guide:
          path: /guide/compute/virtual-machine/disk-detach.md
         free_text:
          text: W zależności od specyfiki usługi możesz być zainteresowany wykonaniem zrzutu ekranu.
               
       - name: Przerwa usług
         free_text:
           text: Od tego momentu możesz notować utrudnienie w funkcjonowaniu usługi dla użytkowników.
    
       - name: Przyłącz dysk z danymi do nowego środowiska produkcyjnego
         guide:
          path: /guide/compute/virtual-machine/disk-attach.md
    
    - name: Przekierowanie ruchu
      block:
       - name: Odwiąż publiczny adres IP usługi od prywatnego adresu IP w starym środowisku produkcyjnym
         guide:
          path: /guide/networking/ip-address/associate-ip-address.md
    
       - name: Powiąż publiczny adres IP usługi do nowego środowiska produkcyjnego
         guide:
          path: /guide/networking/ip-address/disassociate-ip-address.md
    
       - name: Wznowienie usług
         free_text:
           text: Od tego momentu usługa powinna działać poprawnie dla użytkowników.
```