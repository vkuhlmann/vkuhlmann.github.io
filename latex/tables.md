---
sidebar_position: 6
---

# Tables

import CodeInline from "../src/components/CodeInline.js";
import DocsImage from "../src/components/DocsImage.js";

Tables are created using the `tabular` environment. If you want a caption, the
figure equivalent for tables is the `table` environment. You can use a <CodeInline code="\caption"/>
within it.

After the <CodeInline code="\begin{tabular}"/> you need to specify the columns. The example has
two centered columns (`c`), followed by one with a fixed width, `p{2cm}`.

You separate rows by using `\\` (the newline command) and columns within a row
are separated using the `&`-character. The <CodeInline code="\toprule"/>, <CodeInline code="\midrule"/> and <CodeInline code="\bottomrule"/>
yield the horizontal rules. The <CodeInline code="\cmidrule"/> is just like <CodeInline code="\midrule"/>, but
only spans the columns indicated. Finally, there is the
<CodeInline code="\multicolumn"/>: multiple cells within the same row are merged together.

Required: <CodeInline code="\usepackage{booktabs}"/>


```latex
\begin{table}[htbp]
    \centering
    \begin{tabular}{c c p{2cm}}
        \toprule
        Getal 1 & Getal 2 & Notitie\\
        \cmidrule(lr){1-2}\cmidrule(lr){3-3}
        88 & 94 & Twee grote getallen\\
        89 & 12 & Een grote en een kleintje\\
        96 & 18 & Weer zo\\
        32 & 98 & Iets minder schreef\\
        \midrule
        \multicolumn{2}{c}{527} & Totale som\\
        \bottomrule
    \end{tabular}
    \caption{Een tabel!}
\end{table}
```

<DocsImage src="/assets/uavlatex/2_Tekstopmaak/tabellen2.svg" pad />

---

Sometimes you need a fixed width for your table. You can use `tabularx` from the
package <CodeInline code="\usepackage{tabularx}"/>. The difference is the column
specifiers are preceded by a different argument: the table width.

Next, you can use, like in the example, column type `X`; the columns will be
stretched equally until the table has the appropriate width.

```latex
\begin{table}[htbp]
    \centering
    \begin{tabularx}{0.7\textwidth}{X X}
        \toprule
        Formule & Beschrijving\\
        \midrule
        $ \sqrt{2} $ & Wortel\\
        $ \frac{2}{3} $ & Breuk\\
        $ 6\geq 3 $ & Symbool\\
        $ a^2 + b^2 $ & Superscript\\
        \bottomrule
    \end{tabularx}
    \caption{Een tabel!}
\end{table}
```

<DocsImage src="/assets/uavlatex/2_Tekstopmaak/tabellen1.svg" pad />

---

[More about tables on Wikibooks](https://en.wikibooks.org/wiki/LaTeX/Tables)

