---
sidebar_position: 10
---

# Whitespace

import CodeInline from "../src/components/CodeInline.js";
import DocsImage from "../src/components/DocsImage.js";

## Horizontal whitespace

<a href="/assets/latex/whitespace-horizontal.png" target="_blank"><DocsImage src="/assets/latex/whitespace-horizontal.png" /></a>

Per bullet point:

* Four spaces in code are compressed to just a single space in the output; no matter
the amount or the type of whitespace, LaTeX converts it to one space.
* To force 4 spaces, we can use the `\ `-command (backslash followed by a
  space).
* There are other commands more convenient for a bit of horizontal space, like&nbsp;
  <CodeInline code="\quad" />, <CodeInline code="\qquad" /> and <CodeInline
  code="\;" />. Sometimes they are useful in mathematics mode: to separate
  symbols which are otherwise to tight to each other, or to seperate two
  formulas on one line.
* Horizontal can also be specified with a dimension, e.g. <CodeInline code="\hspace{2cm}" /> for
  2 centimeters.
* While <CodeInline code="\LaTeX is cool!" /> looks right in the code, in the
  output the 'LaTeX' and the 'is' are sticking together.
* This is because whitespace after a command is seen as an indication the
  command name is finished. For example, here we want the `\TeX` and `niCie` to
  stick together, however `\TeXniCie` would return an error as now it is reading
  a command 'TeXniCie', which is unknown.
* If we want whitespace after a command without arguments, we can signal the end
  of the command name in a different way. Braces mean grouping in LaTeX and
  will not be printed. Furthermore, they cannot be part of a command name, and
  therefore already signal the end of the command name. Any whitespace after it
  is not removed. _Note:_ The braces are not an argument here!
* Here is code split over two lines. While the output looks fine, you could ask
  yourself: "where is the space between 'name' and 'is' coming from?". The
  reason is the newline character, which signals to the computer the text
  is continuing on the next line. This newline character is whitespace, and as
  I have said, any whitespace, doesn't matter how much or which type, becomes a
  single space.
* If we add a percent sign, this creates a comment, i.e. it and the rest of the
  line is ignored **including the newline character**. Therefore, there will
  be no space between the 'name' and 'is'.

## Vertical whitespace

<!-- <a href="/assets/latex/whitespace-vertical.png" target="_blank"><DocsImage src="/assets/latex/whitespace-vertical.png" nopad /></a> -->

[![Vertical whitespace in LaTeX](/assets/latex/whitespace-vertical.png)](/assets/latex/whitespace-vertical.png)

Vertical whitespace can be added with a dimension using `\vspace`. Just like
with horizontal space, there exist commands for a fixed amount of vertical
space, like `\medskip` and `\bigskip`.
