---
title: "Matrices"
layout: latexReferentie
tab: "Materiaal"
---

<script>
beforeHighlight = () => {
    let a = document.querySelectorAll("code");
    for (let b of a) {
        if (b.className.includes("language-"))
            continue;
        if (b.classList.contains("verb"))
            continue;
        b.classList.add("language-latex");
    }
};
</script>

Een matrix maak je met een `pmatrix`-environment:
```
R(\theta) = \begin{pmatrix}
    \cos(\theta) & -\sin(\theta)\\
    \sin(\theta) & \cos(\theta)
\end{pmatrix}
```

<img src="{{ "/assets/uavlatex/5_Formules/matrixsimple.svg" | relative_url }}"
class="latexoutput" style="max-width:30em;" />

---

Er zijn nog meer mogelijke matrix environments:

<img src="{{ "/assets/uavlatex/5_Formules/matricessoorten.svg" | relative_url }}"
class="latexoutput" />

Eerste rij van links naar rechts: `pmatrix`, `bmatrix`, `Bmatrix`. Tweede rij
van links naar rechts: `vmatrix`, `Vmatrix`, `matrix`.

Je kan elke andere combinatie van haakjes rond je matrix maken door `\left` en
`\right` rond de `matrix`-environment te gebruiken!


