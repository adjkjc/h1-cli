# Skalowanie mocy obliczeniowej i przestrzeni w chmurze

<img :src="$withBase('/media/scaling.png')">

Została udostępniona nowa funkcjonalność pozwalająca na zmianę wariantu instancji *Wirtualnej Maszyny*. Dzięki temu w dowolnym momencie możesz zwiększyć moc *Wirutalnej Maszyny* odpowiednio do potrzeb. Wierzymy, że pozwoli Ci to skuteczniej skalować swoje rozwiązania, czyli dostosować się do wymagań - łatwo zareagować, jeśli się zwiększą lub zaoszczędzić, gdy są niższe.

Skalować *Wirtualną Maszynę* można poprzez zmianę wariantu (mocy obliczeniowej) dla pojedyńczeń instancji - co zawsze ma swoje granicę - lub poprzez zmianę liczby instancji *Wirtualnych Maszyn*. Skalować *Dysk* można poprzez zmianę przestrzeni konkretnego *Dysku* lub zmianę liczby instancji *Dysków*. Większa liczba instancji może także poprawić dostępność aplikacji.

[Operacja zmiany wariantu instancji](/guide/compute/virtual-machine/service-change.md) *Wirtualnej Maszyny* i [powiększenia przestrzeni *Dysku*](/guide/storage/disk/resize.md) jest łatwa do wykonania poprzez panel oraz [CLI](/cli). 

Jeżeli spodziewasz się zwiększonego ruchu możesz dostosować rozmiar instancji w przeciągu zaledwie kilku minut poprzez prosty w użyciu panel zarządzania. Monitorując parametry pracy instancji, albo działanie aplikacji możesz automatycznie dostosować zasoby do aktualnego ruchu dzięki narzędziu CLI lub bezpośrednio korzystając z programistycznego API.

Jeżeli moc jednej instancji nie będzie wystarczająca lub będziesz chciał zwiększyć odporność aplikacji na awarię możesz również [utworzyć nową *Wirtualną Maszyne*](/guide/compute/virtual-machine/creating.md). Obraz *Wirtualnej Maszyny* wykonasz [bez wpływu na pracę dotychczasowej instancji](/resource/storage/image.md#utworzenie). Dzięki temu sprawnie stworzysz nowy węzeł aplikacji, aby rozłożyć ruchu w celu zwiększenia wydajność i dostępności.

Jeżeli wyczerpiesz przestrzeń *Dysku* to bez wpływu na działanie aplikacji zwiększysz rozmiar *Dysku* lub [dołączysz kolejne *Dyski*](/guide/compute/virtual-machine/disk-attach.md). Działanie nie wymaga nawet restartu instancji *Wirtualnej Maszyny*. Każda *Wirtualna Maszyna* w danym czasie może mieć przyłączonych wiele *Dysków*. Monitorując dostępną przestrzeń i zwiększając ją według potrzeb nigdy więcej nie utracisz danych z powodu braku miejsca na ich przechowanie.

Adam Dobrawy - Warszawa, 13 listopada 2018 roku