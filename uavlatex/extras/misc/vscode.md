---
title: "Visual Studio Code"
layout: latexReferentie
tab: "Materiaal"

text-align: justify
---


Je kan LaTeX schrijven met Visual Studio Code. De figuur hieronder toont hoe het
er dan uitziet. Klik erop om het te bekijken in een apart tabblad.
<a href="{{ "/assets/uavlatex/Misc/VisualStudioCodeDemo.png" | relative_url }}"
target="_blank">
<img src="{{ "/assets/uavlatex/Misc/VisualStudioCodeDemo.png" | relative_url }}"
class="fullwidthimage" />
</a>

Download Visual Studio Code: <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>.

Visual Studio Code is de editor: die verzorgt alles wat je ziet. Om de `.tex`
code om te zetten in een `.pdf`-bestand, heb je een hulpprogramma nodig. Dat is
MiKTeX of TeX Live. Het volgende stukje ook te vinden op <a
href="http://a-es2.nl/texnicie" target="_blank">a-es2.nl/texnicie</a>:

* Windows: <a href="https://miktex.org/download" target="_blank">MiKTeX</a> (alternatief: <a href="https://www.tug.org/texlive/acquire-netinstall.html" target="_blank">TeX Live</a>)
* Mac: <a href="https://miktex.org/download" target="_blank">MiKTeX</a> (alternatief: <a href="https://tug.org/mactex/mactex-download.html" target="_blank">MacTeX</a>)
* Linux: <a href="https://www.tug.org/texlive/acquire-netinstall.html" target="_blank">TeX Live</a> (alternatief: <a href="https://miktex.org/download" target="_blank">MiKTeX</a>)<br/>
  Op Debian kan je bijvoorbeeld doen
  `sudo apt-get install texlive-full`.

De distributies verschillen niet veel van elkaar. MiKTeX kan - tenminste met
TeXstudio packages automatisch installeren, waar TeX Live dat niet kan (met
standaardinstellingen downloadt TeX Live alle packages, dit kost enkele
gigabytes opslag). TeX Live gaat wel wat beter via de command line, wat een
belangrijke pre is op Linux.

---

De installatie kan even duren. Ondertussen kan je alvast in Visual Studio Code
rondkijken.

In Visual Studio Code moet je de extensie 'LaTeX Workshop' installeren. In het
menu links (Activity bar), klik op 'Extensions', of gebruik de shortcut
`Ctrl+Shift+X`. Zoek en installeer de extensie. Deze extensie voegt de
LaTeX-specifieke onderdelen toe aan Visual Studio Code.

Installatieproblemen? Herstart je computer, en als dat niet werkt, vraag het
mij.

Klik op `File > Open Folder` en kies een nieuwe map in je computer. Maak een
nieuw bestand aan `File > New File`, en paste daarin dit simpele document:

```
\documentclass[a4paper]{article}

\title{De titel}
\begin{document}
    \maketitle

    Hallo!
\end{document}
```

Sla op (`Ctrl+S`) onder de naam `document.tex` (of iets anders wat eindigt op
`.tex`). Je ziet dat er nu in het linker menu (Activity bar) een icoontje met
'TeX' verschijnt. In dit menu, klik eerst op `Build LaTeX project`, en
vervolgens op `View LaTeX project`. Als het goed is zou je de PDF nu te zien
moeten krijgen.

Je ziet dat er naast je `document.tex` nu een `document.pdf` in je map zit,
maar ook een `.aux`, `.log`, `.synctex.gz` en mogelijk meer hulpbestanden. Deze
hulpbestanden mag je negeren.

**Yeey! Het is gelukt!**

