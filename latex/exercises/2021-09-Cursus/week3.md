---
sidebar_position: 1
---

# Week 3

import CodeInline from "../../../src/components/CodeInline.js";
import DocsImage from "../../../src/components/DocsImage.js";

### Maak een documentclass voor je inleveropgave

Bekijk de code in de slide hierover en plaats de `inleveropgave.cls` in dezelfde
map als je `document.tex`. Kopieer een inleveropgave naar je `document.tex` en
probeer zo min mogelijk configuratie over te houden in je `document.tex`.

### NewEnviron + adjustbox

Definieer een speciale box die jij mooi vindt. Je kan vertrekken vanuit de code
in de slides, en van daar uit aanpassen. Je mag het natuurlijk ook heel lelijk
maken en super onpraktisch.

Bekijk voor de mogelijkheden de documentatie van adjustbox: https://www.ctan.org/pkg/adjustbox

### Newcommand

Zou je in plaats van `\NewEnviron` gewoon `\newcommand` kunnen gebruiken? Wat
is het verschil in gebruik?

### Accolades

Bij superscript en subscript kan je met accolades gebruiken, maar ook zonder.
Probeer hetzelfde voor andere commando's, zoals <CodeInline code="\underline Test"/>
vs <CodeInline code="\underline{Test}"/> en <CodeInline code="\section Titel"/>
vs <CodeInline code="\section{Titel}"/>. Wat doen accolades dus in LaTeX?


### Whitespace beperken

Vorige keer kreeg je deze oefening: maak onderstaande regenboord met behulp van
<CodeInline code="\textcolor{red}{Text}"/>. De kleuren zijn 'red', 'orange', 'yellow',
'green', 'blue', 'indigo' en 'violet'. Maar 'indigo' is niet standaard
gedefinieerd. Je kan deze kleur krijgen op meerdere manieren, maar ik gebruikte
de definitie van [latexcolor.com](http://latexcolor.com/).
Om precies te zijn, de `\definecolor` voor `indigo(dye)`.

<DocsImage src="/assets/latex/rainbow_scratch68.svg" />

**Nieuwe toevoeging.** Het ziet er misschien wel mooi uit in de output, maar
niet in de input. Zet elke `\textcolor` op zijn eigen lijn, voor betere
overzichtelijkheid. Echter, nu komen er spaties tussen de letters! Hoe halen
we die weg?

### multicols

In de presentatie heb je gezien hoe je `twocolumn` als package option kan
meegeven om je tekst in twee kolommen te krijgen in je document. Echter, het
is vervolgens lastig om een gedeelte als &eacute;&eacute;n kolom te krijgen.

Daarom is het soms handiger om de environment `multicols` te gebruiken van
het `multicol` package. Je gebruikt dan in je code

```latex
\begin{multicols}{2}
    Heel wat tekst
\end{multicols}
```

voor twee kolommen. Je kan environment `multicols*` gebruiken om te voorkomen
dat kolommen automatisch gebalanceerd worden. Probeer uit hoe dit alles eruit
ziet bij veel tekst.

Op de Overleaf documentatie van meerdere kolommen vind je meer details:
https://www.overleaf.com/learn/latex/Multiple_columns


### subfiles

Soms heb je een heel lang document, zoals later bijvoorbeeld je scriptie. Het is
niet heel handig om een heel groot codebestand te hebben, je zit dan voortdurend
te scrollen en compilatie gaat heel langzaam.

Hier is een oplossing voor, subfiles. Probeer de code uit in het stukje
[subfiles](/latex/subfiles) van deze website.

### Bibliografie

Wanneer je bronnen gebruikt voor de inhoud van je document, moet je eraan
refereren. Als dit meer dan een paar is, of je document is bijvoorbeeld een
practicumverslag, dan moet je dit netjes doen met het bibliografiesysteem
van LaTeX.

Lees hiervoor het stukje [Bibliography](/latex/Bibliography) op deze website.

### Nieuwe nummeringen

Gebruiken de commando's `\newcounter{iets}`, `\refstepcounter{iets}` en
`\theiets` om je eigen nummeringen te defini&euml;ren. Je kan de nummering
gebruiken in een commando (zoals je bij `\section`) hebt, of in een environment,
zoals `\begin{equation}`. Op het internet vind je hier ook vanalles over.

### xkeyval

Probeer de code van mijn antwoord op deze forumvraag uit:

https://tex.stackexchange.com/questions/598048/newcommand-with-easily-configurable-optional-parameters/598124#598124

Kan je begrijpen hoe het werkt? Bekijk ook de documentatie van xkeyval op
https://www.ctan.org/pkg/xkeyval


### texorpdfstring

Kan je vinden wat `\texorpdfstring` doet in de documentatie van `hyperref` op
https://www.ctan.org/pkg/hyperref ?

Een uitleg hiervan kan je ook vinden (onder puntje `.toc`) op

https://tex.stackexchange.com/questions/597675/understanding-all-output-files-when-compiling-a-latex-document/597678#597678
