---
sidebar_position: 1
---

# Installation

import ShowEmail from "../../src/components/ShowEmail";

Toubles compiling? See [VS Code problems troubleshooting](/latex/configuration/fixingVSCode).

## VS Code

Visual Studio Code (or VS Code) is a modern, open-source[*](https://github.com/microsoft/vscode/wiki/Differences-between-the-repository-and-Visual-Studio-Code)
code editor with
extension support, and is developed by Microsoft, together with a community.
There is an extension which adds the LaTeX-specific features, meaning we can use
this beautiful editor for writing LaTeX code!

<!-- (Open-source details:
[VS Code repository on GitHub](https://github.com/microsoft/vscode),
[Differences between the repository and VS Code](https://github.com/microsoft/vscode/wiki/Differences-between-the-repository-and-Visual-Studio-Code)) -->

See the image below for an impression. [Open image in new tab.](/img/latex/VisualStudioCodeDemo.png)

[![Screenshot of writing LaTeX in Visual Studio Code](/img/latex/VisualStudioCodeDemo.png)](/img/latex/VisualStudioCodeDemo.png)

** Download and install Visual Studio Code: <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>. **

## Distribution

Visual Studio Code is the editor: it is mostly concerned with presenting the
code in a nice manner. To produce a `.pdf` file from a `.tex` file, we need
another program too. This is the compiler, which is part of a distribution.
Refer to the following snippet taken from [a-es2.nl/texnicie](http://a-es2.nl/texnicie) to see which distribution you need to install:

* Windows: [MiKTeX](https://miktex.org/download) (alternative: [TeX Live](https://www.tug.org/texlive/acquire-netinstall.html))
* Mac: [MacTeX](https://tug.org/mactex/mactex-download.html) (alternative: [MiKTeX](https://miktex.org/download))
* Linux: [TeX Live](https://www.tug.org/texlive/acquire-netinstall.html) (alternative: [MiKTeX](https://miktex.org/download))<br/>
  On Debian you can do
  `sudo apt-get install texlive-full`.

The distributions do not differ much from each other. On Windows, MiKTeX can
install packages automatically, TeX Live cannot. TeX Live rather chooses to install
all or most packages, which takes a couple of gigabytes of storage. TeX Live is
however better integrated with the command line, if you plan on using that.

The distribution might take a lot of time to install. The other required parts
will be faster.

** Download and install MiKTeX, MacTeX or TeX Live, depending on your operating
system and preference. **

---

Encountering installation problems? Restarting your computer and trying again
might help, else ask for help. For help outside a LaTeX course, send a mail to <ShowEmail inline endwithdot />

## Perl (Windows only)

On Mac and Linux, Perl is installed by default. Non-Windows users can skip this
step.

<!-- :::warning -->

LaTeX Workshop (see below) compiles your `.tex` by default with `latexmk` (a
program shipped by each distribution), which needs Perl installed on your
computer. On Windows, Perl is not installed by default, and only TeX Live comes
bundled with it.

The script `latexmk` improves the user experience for compiling multiple times
or with a bibliography. You can install Perl from https://strawberryperl.com.

Alternatively, you can instruct the `LaTeX Worskhop`-extension to use `pdflatex`
for compiling instead. Instructions for this are at [VS Code problems troubleshooting](/latex/configuration/fixingVSCode).

For more on `latexmk`: https://mg.readthedocs.io/latexmk.html

** Download and install Strawberry Perl if you are on Windows: https://strawberryperl.com. **

<!-- ::: -->
<!-- 
--- -->

## LaTeX Workshop

The installation can take some time. In the meantime you can already have a
look inside Visual Studio Code. Some of the steps below should be doable while
the distribution is not installed yet. However, if you want to play on the safe
side, wait for the distribution to be installed before proceeding.

In Visual Studio Code you need to install the extension 'LaTeX Workshop'. In the
menu on the left (called 'the Activity bar'), select 'Extensions'.
Alternatively, use the shortcut `Ctrl+Shift+X` to open the menu. Search and
install the extension. This mainly adds code syntax highlighting for LaTeX to
VS Code, as well as a set of tools necessary for compiling the code into a PDF.

** Install the 'LaTeX Workshop' extension in VS Code. **

## Testing your installation

Select `File > Open Folder` and choose a new directory on your computer. Next,
create a file (`File > New File`) and paste the following rudimentary document:

```latex
\documentclass[a4paper]{article}

\title{The title}
\begin{document}
    \maketitle

    Hello!
\end{document}
```

Save the file (`Ctrl+S`) with name `document.tex` (or something else ending in
`.tex`). In the left menu (the Activity bar), an icon appears with the text
'TeX'. In this menu, click on `Build LaTeX project`, or expand the menu and
select a specific recipe. Wait till compilation is done.

![Screenshot of VS Code statusbar while compiling](/assets/latex/VSCodeStatusbarCompiling.png)

![Screenshot of VS Code statusbar after succesful compilation](/assets/latex/VSCodeStatusbarCompiled.png)

If you do not get a success, have a look at [VS Code problems troubleshooting](/latex/configuration/fixingVSCode).
If you get the success checkmark, click the `View LaTeX PDF` button.

---

Encountering installation problems? Restarting your computer and trying again
might help, else ask for help. For help outside a LaTeX course, send a mail to <ShowEmail inline endwithdot />

---

Now change something in your `.tex` and press `Ctrl+S` or `Command+S` to save.
With the default settings, LaTeX workshop should automatically compile your
file again, and the PDF viewer should refresh automatically after that compilation.

You see the project directory now contains a `document.pdf` alongside the
`document.tex`. There are a bunch of other files too, like `.aux`, `.log`,
`.synctex.gz` and possibly more files. These are auxiliary files and you can
ignore them. If you want, you can harmlessly remove them by selecting
`Clean up auxiliary files` in the `Build LaTeX project` menu.

The installation is now complete.


