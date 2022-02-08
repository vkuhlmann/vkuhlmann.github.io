---
sidebar_position: 2
---

# Exercises of part 2

import CodeInline from "../../../src/components/CodeInline.js";
import DocsImage from "../../../src/components/DocsImage.js";

<p><b><span>Slides: </span>
<a href="/assets/latex/presentation-2022-02-GSNS_Handout.pdf" target="_blank">presentation-2022-02-GSNS_Handout.pdf</a>
</b></p>

### Figure environment

Find a nice image on the internet and put it in the same directory as your
`.tex` file. Add this figure in your document with a proper caption beneath it.

Use the package `\usepackage{lipsum}` and use `\lipsum[1-12]` for nonsense text,
or copy some from `lipsum.com`. Observe how the different placement specifiers
change the positioning of the figure with respect to the text.

### Figure trimming

You can crop an image from within LaTeX by passing a `trim` option to
`\includegraphics`. Try using
```latex
\includegraphics[width=0.9\linewidth,trim=10pt 10pt 10pt 10pt,clip]{example-image-a}
```
and observe how changing the values after trim change the cropping. Make sure
you have added `\usepackage{graphicx}` to your preamble!

Reference material:

* [CTAN graphicx page](https://ctan.org/pkg/graphicx)

### Formulas

Add the
[normal distribution density function](https://en.wikipedia.org/wiki/Normal_distribution)
to your document.

### Subfigure

Try the subfigure example from the slides.

### Mathematics

Go to the slides about the math commands, try them out and try to remember some.
You can also investigate what LaTeX commands you need for the math symbols
you regularly use.

### Tables

Figures aren't the only floats, there are also tables. Follow the tutorial
at [Tables](/latex/tables).

