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

<!-- ```
\begin{equation}
    \sin^2(\theta) + \cos^2(\theta) = 1
\end{equation}
```


test

\begin{equation}
    \sin^2(\theta) + \cos^2(\theta) = 1
\end{equation}

\\(\\sqrt{2}\\). -->

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

<script>
    // function restoreTokenhighlight() {

    // }

    function setTokenHighlights(list) {
        let reList = "";
        for (let it of list) {
            if (reList.length > 0)
                reList += "|";
            reList += `(?:${it})`;
        }

        // let exclusions = [];

        // for (let it of list) {
        //     if (it.startsWith("\\"))
        //         exclusions.push(it.substring(1));
            
        // }

        //let e = /\\(?!aaaaa)(?:[^a-z()[\]]|[a-z*]+)/i;
        let e = new RegExp(`(?!(?:${reList}))\\\\(?:[^a-zA-Z()[\\]]|[a-zA-Z*]+)`);
        let matcher = new RegExp(`${reList}`);
        if (reList.length == 0)
            matcher = new RegExp("(?!)");

        Prism.languages.latex.function.pattern = e;
        console.log(`Test: ${JSON.stringify(Prism.languages.latex.equation[0].inside["equation-command"])}`);
        Prism.languages.latex.equation[0].inside["equation-command"].pattern = e;
        Prism.languages.latex.equation[0].inside["tokenhighlight"] = {
            pattern: matcher
        };
        Prism.languages.latex.equation[1].inside["equation-command"].pattern = e;
        Prism.languages.latex.equation[1].inside["tokenhighlight"] = {
            pattern: matcher
        };

        Prism.languages.latex.tokenhighlight = {
            pattern: matcher,
            alias: "sometest"
        };

        console.log(`e: ${e.toString()}`);
        console.log(`matcher: ${matcher.toString()}`);

        console.log(`LaTeX: ${JSON.stringify(Prism.languages.latex)}`);
    }

    //console.log(`Test`);
    // let newObj = Prism.languages.latex;

    // Prism.languages.latex.tokenhighlight = {};

    // let e = /\\(?!aaaaa)(?:[^a-z()[\]]|[a-z*]+)/i;

    // Prism.languages.latex.function.pattern = e;
    // Prism.languages.latex.equation[0].inside.pattern = e;
    // Prism.languages.latex.equation[1].inside.pattern = e;

    // Prism.languages.latex.tokenhighlight = {
    //     pattern: /\\aaaaa/,
    //     alias: "sometest"
    // };
    // console.log(`LaTeX: ${JSON.stringify(Prism.languages.latex)}`);

    setTokenHighlights(["\\\\aaaaa"]);
</script>

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
