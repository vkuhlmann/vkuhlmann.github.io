---
sidebar_position: 3
---

# Subfiles

Subfiles is a LaTeX package which allows you to split your document in multiple
subfiles, instead of one big file. This is more manageable for editing the code
and saves on compilation time, as you can compile each part individually.

<!--truncate-->

import CodeInline from "../src/components/CodeInline.js";

Say we split a large thesis into one file for each section. Our file structure
could look like

```plaintext
thesis.tex
section1.tex
section2.tex
...
```

For `thesis.tex` use the following structure
```latex
\documentclass[a4paper]{article}
\usepackage{subfiles}

\begin{document}
    ...
    \subfile{section1.tex}
    \subfile{section2.tex}
\end{document}
```

For the subfiles, e.g. `section1.tex` use
```latex
% !TEX root=section1.tex
\documentclass[thesis]{subfiles}

\begin{document}
    \section{Homotopy theory}
    ...
\end{document}
```

Compiling the `thesis.tex` now behaves as if <CodeInline code={`\\subfile{section1.tex}`} />
is replaced with the contents of `document` in `section1.tex`.

All <CodeInline code={`\\usepackage`} />'s and other configuration go in the
preamble of the main file, i.e. `thesis.tex`.

:::caution

Leave the preamble of the subfiles empty. That preamble will be ignored when
compiling the main file. Instead, put all <CodeInline code={`\\usepackage`} nobackdrop />
and other configuration in the main file's preamble.

:::

:::info

The magic comment `% !TEX root=section1.tex` instructs the editor to compile and
display the subfile instead of the main file.

:::

