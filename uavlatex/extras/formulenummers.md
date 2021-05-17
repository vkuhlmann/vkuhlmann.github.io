---
title: "Formulenummers"
layout: latexReferentie
tab: "Materiaal"
---


### Nummers per paragraaf

Wil je dat vergelijkingnummers per paragraaf lopen? Daarvoor kan je in je
preamble toevoegen
```
\counterwithin{equation}{section}
```

In paragraaf 3 krijg je dan voor de zevende genummerde vergelijking bijvoorbeeld

<img src="{{ "/assets/uavlatex/5_Formules/equationCounterWithin.svg" | relative_url }}"
class="latexoutput" />

### Met nummers

```
De verdubbelingsformule herschrijven we nu als
\begin{align}
    \cos(2\theta) &= \cos^2(\theta) - \sin^2(\theta)\\
    &= 2\cos^2(\theta)-1.
\end{align}
```

<img src="{{ "/assets/uavlatex/5_Formules/mathAlignDoubleNumber.svg" | relative_url }}"
class="latexoutput" />

---

<script>setTokenHighlights(["\\\\nonumber","\\\\aaaaa"]);</script>

### Individueel niet: `\nonumber`

```
De verdubbelingsformule herschrijven we nu als
\begin{align}
    \cos(2\theta) &= \cos^2(\theta) - \sin^2(\theta)\nonumber\\
    &= 2\cos^2(\theta)-1.
\end{align}
```

<!-- <script>//setTokenHighlights([]);
</script>

<pre>
<code>De verdubbelingsformule herschrijven we nu als
\begin{align}
    \cos(2\theta) &amp;= \cos^2(\theta) - \sin^2(\theta)<span style="color:red">\nonumber</span>\\
    &amp;= 2\cos^2(\theta)-1.
\end{align}</code>
</pre> -->

<img src="{{ "/assets/uavlatex/5_Formules/mathAlignSecondNumbered.svg" | relative_url }}"
class="latexoutput" />

---

### Hele block niet: `align*`

```
De verdubbelingsformule herschrijven we nu als
\begin{align*}
    \cos(2\theta) &= \cos^2(\theta) - \sin^2(\theta)\\
    &= 2\cos^2(\theta)-1.
\end{align*}
```

<img src="{{ "/assets/uavlatex/5_Formules/mathAlignNoNumbers.svg" | relative_url }}"
class="latexoutput" />

---

### Totale controle: `\tag`

```
De verdubbelingsformule herschrijven we nu als
\begin{align*}
    \cos(2\theta) &= \cos^2(\theta) - \sin^2(\theta)\\
    &= 2\cos^2(\theta)-1. \tag{Alt. verd. form.}
\end{align*}
```

<img src="{{ "/assets/uavlatex/5_Formules/mathTag.svg" | relative_url }}"
class="latexoutput" />

---
