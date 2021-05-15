---
title: "Tabellen"
layout: latexReferentie
tab: "Materiaal"
---

Tabellen maak je met de `tabular`-environment. Als je een caption wil kunnen
plaatsen zoals bij `figure`, plaats je daarrond nog een `table`-environment.
Verder moet je aangeven wat je kolommen zijn. De tabel in het voorbeeld heeft
twee gecentreerde kolommen (`c`), en dan een kolom met vaste grootte, `p{2cm}`.

Je scheidt rijen door middel van een `\\`-sequentie en kolommen binnen een rij
door middel van het `&`-karakter. De `\toprule`, `\midrule` en `\bottomrule`
zorgen voor de horizontale strepen. De `\cmidrule` is net zoals `\midrule`, maar
gaat alleen over de kolommen die je opgeeft. Ten slotte zien we hoe we
`\multicolumn` kunnen gebruiken om twee cellen tot een gecentreerde cel samen te
voegen. `\usepackage{booktabs}`

```
\begin{table}[htbp]
    \centering
    \begin{tabular}{c c p{2cm}}
        \toprule
        Getal 1 & Getal 2 & Notitie\\
        \cmidrule(lr){1-2}\cmidrule(lr){3-3}
        88 & 94 & Twee grote getallen\\
        89 & 12 & Een grote en een kleintje\\
        96 & 18 & Weer zo\\
        32 & 98 & Iets minder schreef\\
        \midrule
        \multicolumn{2}{c}{527} & Totale som\\
        \bottomrule
    \end{tabular}
    \caption{Een tabel!}
\end{table}
```

<img src="{{ "/assets/uavlatex/2_Tekstopmaak/tabellen2.svg" | relative_url }}"
class="latexoutput" />

---

Soms wil je een vaste breedte voor je tabel. Je kan dan `tabularx` van
`\usepackage{tabularx}` gebruiken. Je geeft dan ook op hoe breed je tabel moet
zijn. Je rechterkolom wordt dan doorgetrokken zodat je tabel breed genoeg is.

Verder kan je, zoals in het voorbeeld, kolomtype `X` gebruiken; die kolommen
worden gelijk uitgerekt totdat de tabel breed genoeg is.

```
\begin{table}[htbp]
    \centering
    \begin{tabularx}{0.7\textwidth}{X X}
        \toprule
        Formule & Beschrijving\\
        \midrule
        $ \sqrt{2} $ & Wortel\\
        $ \frac{2}{3} $ & Breuk\\
        $ 6\geq 3 $ & Symbool\\
        $ a^2 + b^2 $ & Superscript\\
        \bottomrule
    \end{tabularx}
    \caption{Een tabel!}
\end{table}
```

<img src="{{ "/assets/uavlatex/2_Tekstopmaak/tabellen1.svg" | relative_url }}"
class="latexoutput" />

---

<a href="https://en.wikibooks.org/wiki/LaTeX/Tables" target="_blank">Meer over tabellen op Wikibooks</a>
