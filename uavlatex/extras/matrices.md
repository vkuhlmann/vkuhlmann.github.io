---
title: "Matrices"
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
R(\theta) = \begin{pmatrix}
    \cos(\theta) & -\sin(\theta)\\
    \sin(\theta) & \cos(\theta)
\end{pmatrix},\quad
A = \left|\begin{matrix}
    4 & 3\\
    -1 & 2
\end{matrix}\right)
```

