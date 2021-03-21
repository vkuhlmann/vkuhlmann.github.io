---
layout: post
title: "About LaTeX and catcodes: How to break, how to fix"
# title: "About LaTeX and catcodes: At some places, things break"
author:
  - Vincent Kuhlmann

text_align: justify

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
command, a change to math mode, spacing, or just normal text? A nice overview of
the different catcodes can be found on
[Wikibooks](https://en.wikibooks.org/wiki/TeX/catcode).

_Remark: I talk about LaTeX because of more familiarity to people, but the
concepts explained in this article are really innate to TeX, which is the
underpinning of LaTeX._

<!-- ## How LaTeX works

LaTeX, designed around parsing documents, is a very stream-based language. The
equivalent of a function in other programming languages is a 'macro', which in
LaTeX is often nothing more than a collection of 'tokens'. When a macro like
`\maketitle` is encountered, it is simply replaced with the collection of tokens
it consists of.

Let's start with `\author` however. Suppose the input stream, what still has to
be read, is
```
\author{Myself}
\maketitle

Hello world!
\end{document}
```

Then `\author` is encountered, and gets 'expanded', i.e. replaced by its
collection of tokens. We can see this as the input stream becoming
```
\gdef \@author {myself}
\maketitle

Hello world!
\end{document}
```

The command  -->

## The problem


## Habemus catcodex iustus!

