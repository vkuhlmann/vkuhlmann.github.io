---
title: "Lijntjes"
layout: latexReferentie
tab: "Materiaal"

text-align: left

---


{% capture lijntjescode %}
Blokje: `\rule{5pt}{5pt}`

Lijntje: `\rule{5cm}{0.5pt}`

{% raw  %}
Horizontale lijn: `\hrule`

Rood lijntje: `\textcolor{red}{\rule{5cm}{0.5pt}}` `\usepackage{xcolor}`

Stippellijntje: `Mijn naam is \leaders\hbox{.}\hskip 4cm\relax{}`

Geavanceerd:
```
Mijn naam is \leaders\hbox{%
    \rule{4pt}{0.5pt}\kern 2pt\relax
    \rule{8pt}{0.5pt}\kern 2pt\relax}%
\hskip 4cm\relax{}
```

Ruit: `\adjustbox{rotate=45}{\rule{5pt}{5pt}}` `\usepackage{adjustbox}`
    {% endraw %}
{% endcapture %}


<div style="display:flex;flex-flow:row wrap;width:100%;gap:20px;">
    <div style="flex: 25em 1 1;text-align:left;margin-bottom:40px;">
        {{ lijntjescode | markdownify }}
    </div>
    <div style="flex: 25em 1 1;">
        <img src="{{ "/assets/uavlatex/2_Tekstopmaak/lijntjes.svg" | relative_url }}"
        class="latexoutput" />
    </div>
</div>
