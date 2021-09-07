---
sidebar_position: 1
---

# Exercises of part 1

import CodeInline from "../../src/components/CodeInline.js";
import DocsImage from "../../src/components/DocsImage.js";

### First document

Create a document with a title and a first line of text. Set the author to be
your name.

### Headings

Create headings at different depths, and create a table of contents for it.
The table of contents should be on its own page, or on be on a page with just
the title.

### Page margins

Set the left and right margins to be 2.54 cm, and the top and bottom margins
to be both 4 cm. (Just as exercise, might look ugly.)

### Use fancyhdr

Make your page look more fancy by adding in your preamble

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
```

You need more than one page of text to witness the effect. You can add <CodeInline code="\usepackage{lipsum}"/>
to your preamble and use `\lipsum[1-12]` to create twelve paragraphs of nonsense
text. Do you see the effect now?

:::info

For doing more with the `fancyhdr` package, check out their manual, at
[the CTAN fancyhdr page](https://ctan.org/pkg/fancyhdr). Check the 'A simple
example' section at page 9 to 10.

:::

### Text with symbols

Produce the following text with LaTeX:

_When I woke up this morning, the temperature in my room was 13°C with 75%
humidity. I wrote down this data on my C:\ drive, in a file called
temp_room.txt. That morning the dollar-to-euro exchange rate was $1.00 is €0.84._

(You don't need to typeset it in italics.) It might be a good idea to compile
after every special symbol added, to see if it works. Or use the debug strategy
using comments.

Reference material:

* You can use `\textdegree` instead of pasting in a celsius symbol. [Overleaf on the degree symbol](https://www.overleaf.com/learn/latex/Questions/How_can_I_write_a_%C2%B0_(degree)_symbol_in_LaTeX%3F)
* My slides for typing special characters literally
* Use `\usepackage{lmodern}` for a nicer euro symbol. [LaTeX Stack Exchange on the euro symbol](https://tex.stackexchange.com/questions/9866/latest-advice-on-the-euro-symbol)
* For special characters it is often advisable to use `\usepackage[utf8]{inputenc}`
* These references might advise you to use `\usepackage{textcomp}`, but as the 
  [CTAN textcomp page](https://www.ctan.org/pkg/textcomp) says, this package is
  now included by default. **You don't need to add `\usepackage{textcomp}`!**

:::danger

Make sure the output shows `C:\ drive`, with the backslash, and with the space!

:::

### Rainbow colors

Create this shiny rainbow. The rainbow colors are red, orange, yellow, green,
blue, indigo and violet. However, indigo isn't by default defined. There are
many ways to get this color, but I used the definition from [latexcolor.com](http://latexcolor.com/).
Specifically, I used their `\definecolor` for `indigo(dye)`.

<DocsImage src="/assets/latex/rainbow_scratch68.svg" />

Note you need a new `\textcolor` for each letter, and that `\textcolor` is defined
by `\usepackage{xcolor}`. The code can become very unreadable by putting everything
on a single line, instead try to put each `\textcolor...` on a separate line.
But avoid getting spaces between the letters!

### Quotes

Produce

_I ask "Where have you been?" everytime I see him._

Where the quotes should be the right way around. If you add `\usepackage[english]{babel}`,
can you see why you can't use the double quote from your keyboard `"` for closing
the quotation?

Alternatively, you can use `\usepackage{csquotes}`, and quote text with the
`\enquote{Text}` command. Observe how the style changes when setting the babel
language to `french`. For nicer french quotes, add 
```latex
\usepackage[T1]{fontenc}
\usepackage{lmodern}
```
to your preamble.
