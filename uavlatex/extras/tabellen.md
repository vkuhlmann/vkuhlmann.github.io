---
title: "Tabellen"
layout: latexReferentie

comments: true
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

```
\begin{tabularx}{0.5\textwidth}{ll}
    \toprule
    Formule & Beschrijving\\
    \midrule
    $ \sqrt{2} $ & Wortel\\
    $ \frac{2}{3} $ & Breuk\\
    $ 6\geq 3 $ & Symbool\\
    $ a^2 + b^2 $ & Superscript\\
    \bottomrule
\end{tabularx}%
```

