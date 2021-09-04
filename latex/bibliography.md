---
sidebar_position: 4
---

# Bibliography

<DocsImage src="/assets/latex/bibliography/snippetReferences.svg" pad />

:::info

This documentation page describes the several components of using bibliographies
one by one. However, you need them all before you can generate an output.

Additionally, in contrast to Overleaf, most installations aren't configured to
trigger `biber` (explained later) automatically. This article hasn't been yet
completed to tell how to do this for VS Code. You will probably need some
patience and endurance to figure everything out yourself.

:::


<!--truncate-->

import CodeInline from "../src/components/CodeInline.js";
import DocsImage from "../src/components/DocsImage.js";

## Introduction

Recall how we can refer to a figure like this
```latex
We see a penguin in Figure~\ref{fig:penguin}.
\begin{figure}[h]
    \centering
    \includegraphics[height=2cm]{assets/penguin.jpg}
    \caption{A cute penguin. This a photo from the internet.}\label{fig:penguin}
\end{figure}
```

:::info

The tilde (`~`) yields a non-breaking space. It prevents breaking the text at
that spot when wrapping the text onto the page. I.e., to avoid
```
Lorem ipsum dolor sit amet, consectetur adipiscing. We see a penguin in Figure
3.
        
                                __
                             -=(o '.
                                '.-.\
                                /|  \\
                                '|  ||
                       snd       _\_):,_
        
           Figure 3: A cute penguin. The ASCII art is from
                     https://ascii.co.uk/art/penguins

```

:::

A similar system exists for referring to bibliography entries, but it is a bit
more involved.

## Cite command

The <CodeInline code="\ref{}"/> command can't be used for citing source. Instead
we use a <CodeInline code="\cite{}"/> command. When the bibliography style is
set to `numeric`, this shows a number between square braces. The bibliography is
in alphabetic order by default, and the numbers are therefore assigned in this order.

The necessary configurations to use the <CodeInline code="\cite{}"/> command are
presented in the next sections. See the following table to see which variations
of the <CodeInline code="\cite{}"/> command are available.

<!-- | Code                                                        | Output         |
| -----------------------------------------                   | -------------- |
| <CodeInline code="\cite{mysource}"/>                        | `[1]`          |
| <CodeInline code="\cite[21]{mysource}"/>                    | `[1, p. 21]`          |
| <CodeInline code="\cite[21--30,8]{mysource}"/>              | `[1, pp. 21–30, 8]`          |
| <CodeInline code="\cite[See][21--30,8]{mysource}"/>         | `[See 1, pp. 21--30, 8]`          |
| <CodeInline code="\cite[See chapter 3 of][]{mysource}"/>    | `[See chapter 3 of 1]`          |
| <CodeInline code="\cite[See chapter 3 of]{mysource}"/>      | `[1, See chapter 3 of]`          |
| <CodeInline code="\cites{mysource}{othsource}"/>            | `[1, 7]`          | -->

| Code                                                        | Output
| ----------------------------------------------------------- | ----------------------------
| <CodeInline code="\cite{mysource}"/>                        | \[1\]
| <CodeInline code="\cite[21]{mysource}"/>                    | \[1, p. 21\]
| <CodeInline code="\cite[21--30,8]{mysource}"/>              | \[1, pp. 21&ndash;30, 8\]
| <CodeInline code="\cite[See][21--30,8]{mysource}"/>         | \[See 1, pp. 21&ndash;30, 8\]
| <CodeInline code="\cite[See chapter 3 of][]{mysource}"/>    | \[See chapter 3 of 1\]
| <CodeInline code="\cite[See chapter 3 of]{mysource}"/>      | \[1, See chapter 3 of\]
| <CodeInline code="\cites{mysource}{othsource}"/>            | \[1, 7\]

## The `.bib`-file

The details of a source are given in a special format:
```plaintext title="bibliography.bib"
@book{babington,
    author = {Peter Babington},
    title = {Some work},
    publisher = {Publisher},
    year = 1993,
    volume = 4,
    series = 10,
    address = {The address},
    edition = 3,
    month = 7,
    note = {An optional note},
    isbn = {3257227892}
}
```

This entry is of type `book`, has key `babington` and contains fields necessary
or optional for a source of type `book`. The key is what you use to cite the source:

| Code                                                        | Output
| ----------------------------------------------------------- | ----------------------------
| <CodeInline code="\cite{babington}"/>                        | \[1\]
| <CodeInline code="\fullcite{babington}"/>                    | Peter Babington. _Some work._ 3de ed. Deel 4. 10. An optional note. The address: Publisher, jul 1993. <span style={{ fontVariant: "small-caps" }}>isbn</span>: 3257227892

(Language was set to `Dutch` when the `\fullcite` example was generated.)

You can add more entries to the file simply by appending them to the file.
Beware that source keys should always be unique. The structure of
`bibliography.bib` could for example look like

```plaintext title="bibliography.bib"
@article{babington,
    ...
}

@book{somebook,
    ...
}
```

## The `.tex`-file

If you put the `bibliography.bib` file in the same directory as your
main file (which I will call `document.tex`), then the main file looks like

```latex title="document.tex"
\documentclass[a4paper]{article}
\usepackage{biblatex}
\addbibresource{bibliography.bib}

\begin{document}
    Lorem ipsum dolor sit amet \cite{babington}.
    ...
    \printbibliography
\end{document}
```

The <CodeInline code="\printbibliography"/> produces the bibliography, e.g.

<DocsImage src="/assets/latex/bibliography/snippetReferences.svg" pad />

## Biber and biblatex

Biblatex is the LaTeX package which records which sources are cited and does
the final typesetting. However, operations like reading the `.bib`-file and
sorting entries is performed by a program, which should be shipped in your
LaTeX installation. This program is called biber.

There is also an older system in use, for which the LaTeX package is called
`natbib` and the backend program is called `bibtex`. Confusing names! The older
system requires modifications to the `.tex` file, but the `.bib` file has the
same format for both systems.

You can manually run biber by compiling your `.tex` file, then opening a
terminal in the directory of your `.tex` file and running `biber document`,
where your `.tex` file is assumed to be called `document.tex`. You can then
recompile your `document.tex` and your cites should now be working.

Note that biber must be triggered each time you modified the `.bib`-file, or
when you started or stopped citing a source. Else, the output might show
outdated content. It is advisable to configure your editor to trigger biber
automatically on compilation.

## Tweaking

You can tweak the behavior of the bibliography in many ways. For example, you
can change the citation style from numeric to APA, or change the sorting of the
references. Refer to the [BibLaTeX
manual](http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf)
for details.

```latex
\usepackage[style=numeric,sorting=nty]{biblatex}
\usepackage[style=apa,sorting=none]{biblatex}
```

The `References` section is not automatically included in your table of contents.
You may include it by adding
```latex
\addcontentsline{toc}{section}{References}
```

This sets the page number for the `References` section to be the page number at
which that command executes. This might however be off, for example because the
command is issued before the <CodeInline code="\printbibliography"/>, and only
the typesetting of the `References` header initiates the new page. At the time
of writing, I don't have the time to destillate a general solution to this
problem.

## Bib fields

Refer to [Wikibooks](https://en.wikibooks.org/wiki/LaTeX/Bibliography_Management)
for overviews about which fields to include for your source.

## Multiple authors

You separate multiple authors by the keyword `and`. LaTeX will properly do the
comma's between them right. Providing the author in this format allows LaTeX to
omit authors when desired. For example, consider

```plaintext
author = {A. Smith and B. Doe and E. Dropper and F. Foxtrot}
```

and use `\textcite`, like

| Code                                                        | Output
| ----------------------------------------------------------- | ----------------------------
| <CodeInline code="Lorem ipsum by \textcite{smith}."/>       | Lorem ipsum by A. Smith et al. [1].

Notice how it truncates the names to one name, and appends `et al.`. This is
because the amount of names is greater than `maxnames` (by default 3), which
causes truncation to an amount of `minnames` names (by default 1).

There are also the values `maxbibnames` and `minbibnames`. These are an override
for showing names in the bibliography. For example, you might want to show more
names here than in-text.

You can change these values by passing them as package options for `biblatex`:
```latex
\usepackage[maxnames=2,minnames=1,maxbibnames=4,minbibnames=2]{biblatex}
```


