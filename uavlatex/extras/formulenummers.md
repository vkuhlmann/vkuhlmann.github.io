---
title: "Formulenummers"
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
\begin{equation}
    \sin^2(\theta) + \cos^2(\theta) = 1
\end{equation}
```


test

\begin{equation}
    \sin^2(\theta) + \cos^2(\theta) = 1
\end{equation}

\\(\\sqrt{2}\\).

