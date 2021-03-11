---
layout: post
title: "Showing LaTeX in LaTeX"
author:
  - Vincent

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

**_Warning: This page is under construction._**

LaTeX is a code-based word processing tool most known for typesetting
mathematics and its further use in exact sciences, most notably publications.
Hence many people in the industry will pick up the basics, often using material
provided by the organization. Convenient for demonstration, the slides or reader
is written in LaTeX. However, when trying to display literal LaTeX code, people
tend to fall back to very rudimentary solutions (Level 1 and Level 2). This
article explains how to typeset LaTeX code in LaTeX properly (Level 3).

## Level 1: Just monospace

In constrast to normal text, code if often shown <span
style="font-family:monospace;"> in monospace</span>, i.e. each character has
equal width, as it was in the early days of technology. Not just that, it is
also convenient when raw text is the only formatting you work with; just put
dashes on the next line, and you've got yourself some 'underlined' text.
In LaTeX, this font type can be selected using the `\texttt{some text}` command,
or when used between braces, `{\ttfamily some text}` formats everything in
monospace upto the the closing brace.

However, this is very merely a font switch, and `\texttt{\maketitle}` will
generate the title heading in monospace. To prevent command interpretation of a
backslash, one could resort to `\texttt{\textbackslash maketitle}`, which uses a
command to display a literal backslash.

## Level 2: Verbatim

There is also a way to temporarily disable the command interpreting property of
a backslash, as well as other special characters (like&nbsp;%). In LaTeX code,
one can do `\verb|\maketitle|`. This prints `\maketitle` literally, and also in
monospace already. If you need to display the '|'-character, you can use
`\verb!Exlamation points \verb|instead|.!`. Or really any non-space character
you like, the character which delimits the begin, is the one which delimits the
end.

The `\verb` command is for in-line usage. To show multiple lines of code, or to
give it its own line, use is its block equivalent, the `verbatim`-environment:
```latex
And for this see the following code:
\begin{verbatim}
    \begin{document}
        \maketitle
    \end{document}
\end{verbatim}
```

However, the code is actually formatted as
```plaintext
\begin{document}
\maketitle
\end{document}
```
that is, indentation is lost. To fix this, use the
`Verbatim`-environment from the package `fancyvrb`. Add
`\usepackage{fancyvrb}` anywhere before your
`\begin{document}`, and then use
```
And for this see the following code:
\begin{Verbatim}[tabsize=4]
    \begin{document}
        \maketitle
    \end{document}
\end{Verbatim}
```

This preserves the indentation from the code. However, you might also experience
everything being indented too much. That is because you naturally indent your
LaTeX code, but those indentations are now picked up by Verbatim! Select the
lines and Shift+Tab one or multiple times to unindent them. This might look a
bit ugly in your LaTeX code, but hey, we've not yet arrived at the proper way
either...

## Level 3: Automatic colors

## About LaTeX and catcodes: at some places, things break

