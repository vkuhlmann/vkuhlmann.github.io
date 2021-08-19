---
title: "Adjustbox"
layout: latexReferentie
tab: "Materiaal"

text-align: left

---

<a href="https://www.ctan.org/pkg/adjustbox" target="_blank">Adjustbox package pagina</a>

<a href="http://mirrors.ctan.org/macros/latex/contrib/adjustbox/adjustbox.pdf" target="_blank">Adjustbox package documentatie</a>

---

Boxen zijn de magie in LaTeX die je grip geven op layout van je documenten en
elementen daarin. Maar ze kunnen ook heel direct esthetisch zijn, bijvoorbeeld
doordat je een gekleurde box kan maken:

<img src="{{ "/assets/uavlatex/2_Tekstopmaak/adjustboxColoredBox.svg" | relative_url }}"
class="latexoutput" />

{% raw %}

`\usepackage{adjustbox,xcolor}`

```
\adjustbox{
    cframe=blue!50!white 1pt 6pt 3pt,
    bgcolor=blue!10!white,
}{%
    \parbox{\dimexpr\linewidth - 20pt\relax}{
        Quisque porta feugiat tortor tristique porta.
        Morbi fermentum egestas felis finibus tincidunt.
    }%
}
```

{% endraw %}


Er is hier heel wat gaande: de parbox zorgt ervoor dat we een vaste breedte
krijgen, met breedte `\linewidth - 20pt`. Omdat het een berekening moet uitvoeren,
hebben we daarrond de `\dimexpr ... \relax` nodig.

Met de key `cframe` plaatsen we een gekleurde rand rond onze box. De kleur is
50% blauw, en resterend is wit. De rand is 1pt breed, en de afstand van de tekst
tot de rand is 6pt. Vervolgens geven we ook een marge mee: de randen van de box
schuiven we 3pt op langs elke kant.

Ten slotte kleuren we de achtergrond van onze box. Hiermee wordt ook duidelijk
dat we de randen hebben opgeschoven. De `%`-tekens zorgen dat er geen extra
whitespace verschijnt overal. De 20pt is berekend als (1pt + 6pt + 3pt) * 2.
Want door alle marges en randen, blijft niet de hele regelbreedte meer over.

---

Er zijn nog veel meer dingen die je kan doen, zoals je box schalen (`scale=1.2`),
ondersteboven keren (`scale={1 -1}`) en doen alsof het geen breedte heeft (`set
width=0pt`). Je ziet dat boxen een krachtig stuk gereedschap is. En adjustbox
brengt veel functies samen, waar Zwitsers zakmes.

