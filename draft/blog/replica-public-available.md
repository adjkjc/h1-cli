# Replikacja wirtualnych maszyn Hyper-V

Dziś z przyjemnością ogłaszamy udostępnienie dla wszystkich naszych klientów nowego produktu - [Replika](/resource/compute/replica.md), która pozwala na stałą replikacje maszyn wirtualnych działających w lokalnym środowisku Hyper-V do chmury HyperOne. 

Pomimo nawet najlepszych starań, fizyczne serwery (i działające na nich usługi) ulegają awariom. Naraża to Twoją firmę na przerwę w działaniu - kosztem pieniędzy, reputacji i zaufania klientów. Udostępniamy rozwiązanie pozwalające zmniejszyć wpływ awarii w sposób ekonomiczny i bezpieczny.

Nasze rozwiązanie pozwoli Ci odzyskać systemy i dane w ciągu kilku minut. Albo poprzez [wykonanie obrazu repliki](/guide/storage/image/creating-from-replica.md) i [utworzenie Wirtualnej Maszyny](/guide/compute/virtual-machine/creating.md) na platformie HyperOne. Albo [pobranie dysków](/guide/storage/disk/download.md) i wykorzystanie ich w własnym środowisku.

Replikacja pozwala na bieżąco (asynchronicznie) jednokierunkowo replikować wszelkie zmiany na dyskach na poziomie bloków. Opóźnienie w replikacji asynchronicznej jest na poziomie 30 sekund - 5 minut, co oznacza, że dane zapisane na serwerze
źródłowym po około 5 minutach są bezpiecznie zapisane w chmurze.

Usługi możemy uruchomić w dowolnym czasie bez konieczności wyłączenia serwerów lub wykonywania przez nas czynności na serwerach po Państwa stronie. Wystarczy [jedno polecenie CLI](/guide/compute/replica/creating.md), które zainstaluje w Hyper-V certyfikat niezbędne do szyfrowanego połączenia oraz uruchomi replikacje, abyś mógł spać spokojniej.