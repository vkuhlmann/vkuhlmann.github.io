---
sidebar_position: 9
---

# Counters

import CodeInline from "../src/components/CodeInline.js";
import DocsImage from "../src/components/DocsImage.js";

Within 'counters', LaTeX keeps track of numberings, like automatic title
numbering and numbering of equations.

## Inspection

<!-- **Inspection.**  -->
The current value of the <CodeInline code="subsection"/>-counter can be printed
in your document with <CodeInline code="\arabic{subsection}"/>. However, this will always print
the number in arabic numbers, but you might want to put it in roman numbers for example, or prepend
the current section number or add diferent formatting. This formatting is done by <CodeInline code="\thesubsection"/>.

See the following demo:

```latex
\section{AA}
Counters: \thesubsection,
\arabic{subsection}, \roman{subsection}

\subsection{BB}
Counters: \thesubsection,
\arabic{subsection}, \roman{subsection}

\subsection{CC}
Counters: \thesubsection,
\arabic{subsection}, \roman{subsection}
```

<DocsImage src="/assets/latex/counters/inspect-thesubsection.svg" pad />

## Manipulation

You can change the value of the counter with <CodeInline code="\setcounter"/>
and <CodeInline code="\addtocounter"/>: first you pass the name of the counter,
followed by the new value or the amount to be added.

<DocsImage src="/assets/latex/counters/manipulate-thesubsection.svg" pad />

```latex
\section{AA}
\setcounter{section}{9}

\subsection{BB}
\addtocounter{subsection}{-4}
subsection: \arabic{subsection}

\subsection{CC}
```

Title numbering doesn't use <CodeInline code="\addtocounter{section}{1}"/> directly,
but <CodeInline code="\refstepcounter"/>. This increments the counter, but also resets
the subsection counter, meaning you don't get 1, 1.1, 1.2, 2, 2.<span style={{textDecoration:"underline"}}>3</span>, but 1, 1.1, 1.2, 2, 2.<span style={{textDecoration:"underline"}}>1</span>.
It also arranges that <CodeInline code="\label"/> and <CodeInline code="\ref"/>
function properly.

Spare the formatting, you're now able to simulate <CodeInline code="\section"/>
and <CodeInline code="\subsection"/>.

<DocsImage src="/assets/latex/counters/manipulate-refstepcounter.svg" pad />

```latex
\refstepcounter{section}
\label{sec:AA}
\textbf{\thesection, AA}

\refstepcounter{subsection}
\textbf{\thesubsection, BB}

\refstepcounter{subsection}
\label{sec:CC}
\textbf{\thesubsection, CC}

\refstepcounter{section}
\textbf{\thesection, DD}

Zie Paragraaf \ref{sec:AA} en
Deelparagraaf \ref{sec:CC}.

\refstepcounter{subsection}
\textbf{\thesubsection, DD}
```

## Formatting

With <CodeInline code="\meaning\thesubsection"/> you can see how the formatting works:
the command <CodeInline code="\thesubsection"/> evaluates to <CodeInline code="\thesection.\@arabic\c@subsection"/>,
which is equivalent to <CodeInline code="\thesection.\arabic{subsection}"/>.

If you now use

```latex
\renewcommand\thesubsection
{(\thesection)\alph{subsection}}
```

then 2.1 becomes (2)a and 5.3 becomes (5)c.

## Counterwithin

We just saw how you can change a number's formatting using <CodeInline code="\renewcommand"/>.
You could use this for example to preprend the equation number with the current `section`-number. That
results in

<DocsImage src="/assets/latex/counters/counterwithin-equation.svg" pad />

But after a <CodeInline code="\section"/>, the equation number just continues, so the next
equation would be `(3.20)` instead of `(3.1)`. As we have seen, <CodeInline code="\refstepcounter"/>
can perform automatic number resets, like it does for `subsection`-numbers. To enable the
same feature for equations, we need to specify <CodeInline code="\counterwithin*{equation}{section}" />.

You can also use <CodeInline code="\counterwithin" /> (without the star), which
does everything automatically:

```latex
\counterwithin{equation}{section}
% is equivalent to:
\counterwithin*{equation}{section}
\renewcommand\theequation
{\thesection.\arabic{equation}}
```

To remove a counter from the reset list, you can use <CodeInline code="\counterwithout*"/>.
Without the star, the formatting itself will also be reset.

## Available counters

To list the counters which are by default defined, add the following code into
your document:

```latex
{\makeatletter
\def\@elt #1{#1; }
\cl@@ckpt}
```

It will print something like

page; equation; enumi; enumii; enumiii; enumiv; footnote; mpfootnote; part; section; subsection;subsubsection; paragraph; subparagraph; figure; table; parentequation
