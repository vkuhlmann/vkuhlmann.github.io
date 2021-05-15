---
title: "Speciale tekens"
layout: latexReferentie
tab: "Materiaal"

text-align: left

---

<a href="https://en.wikibooks.org/wiki/LaTeX/Special_Characters" target="_blank">Meer over speciale tekens op Wikibooks</a>

<a href="http://mirrors.ctan.org/info/symbols/comprehensive/symbols-a4.pdf">CTAN symbolenlijst</a>

---

De voorkeursmethode voor accenten in LaTeX is door middel van commando's:

{% capture blockslijst %}
* `\"e` &euml;
* `\'e` &eacute;
* <code>\`e</code> &egrave;
* `\^e` &ecirc;
<!-- * `\H{o}` ő -->
* `\~n` &ntilde;
* `\c{c}` &ccedil;
* `\r{a}` &aring;
{% endcapture %}

<div class="listtoblocks">
    {{ blockslijst | markdownify }}
</div>

Maar meestal kan je ook direct letters met accenten toevoegen aan je bestand,
als je `\usepackage[utf8]{inputenc}` gebruikt.
