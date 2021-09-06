---
sidebar_position: 1
---

# Installation

LaTeX can be written in Visual Studio Code. See the image below for an impression.
Clicking it opens the image in a new tab.

[![Screenshot of writing LaTeX in Visual Studio Code](/img/latex/VisualStudioCodeDemo.png)](/img/latex/VisualStudioCodeDemo.png)

Download Visual Studio Code: <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>.

Visual Studio Code is the editor: it's mostly concerned with presenting the
code in a nice manner. To produce a `.pdf` file from a `.tex` file, we need
another program too. This is the compiler, which is part of a distribution.
Refer to the following snippet of text taken from [a-es2.nl/texnicie](http://a-es2.nl/texnicie) to see which distribution you need to install:

* Windows: [MiKTeX](https://miktex.org/download) (alternative: [TeX Live](https://www.tug.org/texlive/acquire-netinstall.html))
* Mac: [MiKTeX](https://miktex.org/download) (alternative: [MacTeX](https://tug.org/mactex/mactex-download.html))
* Linux: [TeX Live](https://www.tug.org/texlive/acquire-netinstall.html)! (alternative: [MiKTeX](https://miktex.org/download))<br/>
  On Debian you can do
  `sudo apt-get install texlive-full`.

The distributions don't differ much from eachother. On Windows, MiKTeX can
install packages automatically, TeX Live can't. TeX Live rather chooses to install
all or most packages, which takes a couple of gigabytes of storage. TeX Live is
however better integrated with the command line, if you plan on using that.

---

The installation can take some time. In the meantime you can already have a
look inside Visual Studio Code.

In Visual Studio Code you need to install the extension 'LaTeX Workshop'. In the
menu on the left (called 'the Activity bar'), select 'Extensions'.
Alternatively, use the shortcut `Ctrl+Shift+X` to open the menu. Search and
install the extension. This mainly adds code syntax highlighting for LaTeX to
VS Code, as well as a set of tools necessary for compiling the code into a PDF.

Encountering installation problems? Restarting your computer and trying again
might help, else ask for help.

Select `File > Open Folder` and choose a new directory on your computer. Next,
create a file (`File > New File`) and paste the following rudimentary document:

```latex
\documentclass[a4paper]{article}

\title{De titel}
\begin{document}
    \maketitle

    Hallo!
\end{document}
```

Save (`Ctrl+S`) the file with name `document.tex` (or something else ending in
`.tex`). In the left menu (the Activity bar), an icon appears with the text
'TeX'. In this meny, click on `Build LaTeX project`, followed by `View LaTeX
project`. This should open a PDF view, showing the rudimentary document you just
copied.

You see the project directory now contains a `document.pdf` alongside the
`document.tex`. There are a bunch of other files too, like `.aux`, `.log`,
`.synctex.gz` and possibly more files. These are auxiliary files and you can
ignore them.

The installation is now complete.

