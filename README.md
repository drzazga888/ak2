# automaty komórkowe - projekt nr 2

## Tematy: 

### (k,r) - rodzina automatów

- k = 2
- r = 1
- => 256 automatów elementarnych
- nazwa od 0 do 256, przekłada się na regułę
- dla (2,1) i (3,1) badamy głównie w nich uszkodzenia
- puszczamy na raz symulację x(t), na krawedziach, roznica, diagram debriana

### dla (1 + 1), gładkie podłoże, losujemy, gdzie spadnie kwaracik

- 3 modele:
- famili
- walt-vilain - wiazania
- dasarmy-tamborena - rogi
- chropowatosc grubosci powierzchni sigma = sqrt(sum((h_i - <h>)^2)/n(n-1))

### modele hydrodynamiczne

1. siatka kwadratowa
reguly zderzen
- z dwoch przeciwnych kierunkow - poruszaja sie prostopadle
- odbijajace - jak w pudelku, wraca odbita
- w pudelku - regulowana przegroda - polozenie i szerokosc, na poczatku czastki na gorze pudelak
- parametr kontrolny - % wypelnienia czastkami gornej czesci pudelka

2. siatka trojkatna
- jesli z dwoch przeciwnych kierunkow - losowo z droch
- z 3 - wymieniaja sie predkosciami (po prostu jakby sie nie widzialy)
- brzegi - kat padania = kat odbicia

### modelowanie pozarow lasu

- kwadratowa siatka
- 3 stany komorek: trawa, drzewo, palace sie drzewo
- wypelniamy sama trawa
- trawa zamienia sie w drzewo z prawd.
- drzewo moze sie zapalic sie z prawd.
- potem - trawa
- komorka drzewo, ktora ma sasiada palace drzewo, jest zapalonym drzewem
- wykres 2x: % palacych sie drzew i ilosc drzew niepalacych
- moze byc otoczenie moorowskie
- modyfikacja - wprowadzamy kierunek wiatru, dodajemy p = 0..1, wtedy tylko prawa strona

### Modele sznajdow (socjologiczne)

1D:
- lancuch komorek ze stanami 0, 1 (na tak, na nie)
- losujemy pare wezlow (obok)
- jesli ten sam stan, wtedy sasiedzi tej pary zaraza opinia najblizszych sasiadow - "zgoda buduje"
- jesli niezgoda - 2a - nic nie robie, 2b - antagonizuje swoje otoczenie - "niezgoda rujnuje"
- gestosc(1) - parametr wejsciowy
- wykres jak sie rozwija jedna z opinii od czasu
- losujemy jedna pare
- poziome bloki moga byc

2D:
- wariant tylko 2a
- uzgodniona para ma 6 sasiadow - oni przejmuja opinie

### model ewakuacji

- model 2d
- model podlogowy
- init - modelowanie pomieszczenia
- przy wejsciach - dajemy 0
- najblizszy sasiad - zwiekszamy o 1
- gdy zaczna sie stykac - wybieramy wartosc wtedy na kratce, ktora jest mniejsza
- sciana - wartosc 10^8 (nieskonczonosc)
- w sposob przypadkowy rozmieszczamy delikwentow - byle nie wpadli na nic
- automat synch - przesuwamy do dowolnego, niezajetego miejsca
- parametr p - panika tzn idzie w zlym kierunku
- wykres % zapelnienia od czasu

### model isinga

- model magnetyczny, 2d
- kratki ze spinamy
- input: gestosc tych strzałek
- ewolucja: wartosc spinu zalezna od wiekszoci spinow (5 elem.)
- E = -Js_1s_2 - hs_j
- gdy J dodatnie - ukladaja sie w tym samym kierunku
- T - prawdopodobienstwo przyjecia nieefektywnej konfiguracji - schemat metropolisa, liczymy e_pocz i e_konc
- sprawdzamy, czy Ekonc < Epocz - akceptujemy jak jest
- na odwrot - akceptujemy  zprawdopodobienstwem p~e^(-dE/T), 
- dane wejsciowe - procent, h i T

### q2r

### model cifa (modeloanie katalityczne)

- sledzimy gestosc produktow w ukladzie

### symulacje ruchu ulicznego

1D - opisanw w wykladzie
- lancuch komorek
- wypelniona = pojazd, z predkoscia (o ile miejsca w prawo nalezy przemiescic komorke)
- gdy ma predkosc v, to v + 1, ale max = {min od maksymalnej o tej zinkremetowanej}
- pojazd nie moze wjechac na drugi - co najwyzej dotkac zderzakiem
- losowe zwalnianie pojazdu...
- srednia predkosc pojazdow - sledzimy
- periodyczne warunki brzegowe

2D - opis w dokumencie
- po ulicach na Manhattanie - 6 sklejonych torusow (3 poz i 3 pion), sklejone sygnalizacja (na skrzyzowanach(
- na skrzyzowaniach - z sygnalizacja swietlna
- czas przelaczenia itd.. do sygnalizatora, dodac do elementow sterowania

### modele epidemiologiczne

- 3 stany komorek
- SIR - podatny, zainfektowany i removed/recovered
- siec kwadratowa
- alfa i beta
- alfa - podatna zostanie zarazona przez sasiada
- beta - cholery, ktore nie moga sie uodpornic
- musza sie sumowac do 1
- synchroniczny bądź asyncgroniczny
