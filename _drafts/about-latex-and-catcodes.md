---
layout: post
title: "About LaTeX and catcodes: How to break, how to fix"
# title: "About LaTeX and catcodes: At some places, things break"
author:
  - Vincent Kuhlmann

text_align: justify

---

<script>
let beforeHighlight = () => {
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

## What are catcodes?

For new people to LaTeX perhaps a surprise: commands don't need to start with a
backslash. In fact, if you want, you can have use `!maketitle` and
`!begin{document}` for example. LaTeX doesn't require a _blackslash_, it
requires a character _with catcode 0_.

Don't believe me? Well try this:
```
\documentclass[a4paper]{article}

\usepackage[margin=2cm]{geometry}

\title{Some title}
\begin{document}
	\maketitle
	
	Hey!
\end{document}
```

Nothing special yet. But now, add ``\catcode`\!=0`` at the start of your document
and replace the backslashes by exclamation points, so
```
\catcode`\!=0
!documentclass[a4paper]{article}

!usepackage[margin=2cm]{geometry}

!title{Some title}
!begin{document}
	!maketitle
	
	Hey!
!end{document}
```

Works totally fine! Instead of the special characters being hardcoded to LaTeX,
it just assigns to each character a _catcode_, which decides its faith: a
command, a change to math mode, or just normal text? A nice overview of the
different catcodes can be found on [Wikibooks](https://en.wikibooks.org/wiki/TeX/catcode).

## The problem


## Habemus catcodex iustus!

