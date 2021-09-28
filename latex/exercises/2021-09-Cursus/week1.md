---
sidebar_position: 1
---

# Week 1

import CodeInline from "../../../src/components/CodeInline.js";
import DocsImage from "../../../src/components/DocsImage.js";

### Eerste document

Maak een document met een titel en een eerste regel tekst. Stel de auteur in
op jouw naam.

### Titels

Maak een aantal titels met <CodeInline code="\section{}"/>, <CodeInline code="\subsection{}"/>
en <CodeInline code="\subsubsection{}"/>

### Voorbeeld namaken

Maak het voorbeeld van de cursuspagina na.
Het voorbeeld: [LaTeX_Week1_Voorbeeld.pdf](https://www.a-eskwadraat.nl/Vereniging/Commissies/hektex/downloads/2021-2022/LaTeX_Week1_Voorbeeld.pdf)

---

## Extra oefeningen

### Kleurtjes

Met het commando <CodeInline code="\textcolor{red}{Text}"/> kan je tekst een
kleurtje geven. Je hebt hiervoor nodig <CodeInline code="\usepackage{xcolor}"/>.

Maak hiermee onderstaande regenboog. De kleuren zijn 'red', 'orange', 'yellow',
'green', 'blue', 'indigo' en 'violet'. Maar 'indigo' is niet standaard
gedefinieerd. Je kan deze kleur krijgen op meerdere manieren, maar ik gebruikte
de definitie van [latexcolor.com](http://latexcolor.com/).
Om precies te zijn, de `\definecolor` voor `indigo(dye)`.

<DocsImage src="/assets/latex/rainbow_scratch68.svg" />

### Teksteffecten

Probeer de volgende teksteffecten uit:

<DocsImage src="/assets/latex/textEffects.png" />

### Accolades

Bij superscript en subscript kan je met accolades gebruiken, maar ook zonder.
Probeer hetzelfde voor andere commando's, zoals <CodeInline code="\underline Test"/>
vs <CodeInline code="\underline{Test}"/> en <CodeInline code="\section Titel"/>
vs <CodeInline code="\section{Titel}"/>. Wat doen accolades dus in LaTeX?
