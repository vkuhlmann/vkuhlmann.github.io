---
sidebar_position: 1
---

# FIXING VS CODE

<!-- ## Wizard

import VSCodeConfigWizard from "../../src/components/VSCodeConfigWizard"

<VSCodeConfigWizard /> -->

import ShowEmail from "../../src/components/ShowEmail"

## Common errors

When installing VS Code, you might encounter some hurdles trying to compile
LaTeX. There are two frequent problems:

1. LaTeX fatal error: spawn pdflatex ENOENT
   
   Cause: VS Code can't locate the compiler (TeXLive, MiKTeX or MacTeX).  
   Try closing VS Code and restarting your computer, this might solve the
   problem!

2. Perl not found

   Cause: LaTeX Workshop assumes an installation with TeXLive or MacTeX. This
   installs Perl by default, while MiKTeX doesn't. Perl is required by
   `latexmk`, which compiles the code on each change by default. Instead we can
   trigger `pdflatex` for each compilation, which I prefer over automatic
   compilation.

## Fixing using the wizard

For this reason, I've made a <a href="./configwizard" target="_blank">Config wizard</a>
which fixes the settings for everything to work again. Follow these steps:

1. Open `settings.json`. See [Opening settings.json](#opening-settingsjson)
   below.
2. Select the desired options.

   Check "Add pdflatex-only recipe". You need it if you've installed MiKTeX as
   compiler, or if you're getting the error 'Perl not found'. But adding it
   never hurts.

   If you're experiencing `LaTeX fatal error: spawn pdflatex ENOENT`, check
   `Set pdflatex to full path`. See [Getting path to pdflatex](#getting-path-to-pdflatex)
   below for obtaining the "Full path to pdflatex".

3. Generate new settings, and save them to the `settings.json`.
4. Restart VS Code.
5. If it's still not working, contact me. If it is working, I would love to hear
   if it helped!  
   <ShowEmail/>


## Opening settings.json

Select `View > Command Palette`, type `settings.json` and type enter.

## Getting path to pdflatex

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="windows" values={[
    {label: "Windows", value: "windows"},
    {label: "Mac", value: "mac"},
    {label: "Linux", value: "linux"}
]}>
<TabItem value="windows">

Press `Start+R`, type `cmd` and hit enter. Type `pdflatex -version` and press
enter. If this gives an error telling the command doesn't exist, there is a problem
which your distribution. You can try uninstalling it and installing a different
distribution, or contact me. Else, proceed.

Type `where.exe pdflatex` and press enter. This should give one line, which is the
path to `pdflatex`.

</TabItem>
<TabItem value="mac">

Open the app called `Terminal`. Type `pdflatex -version` and press enter.
If this gives an error telling the command doesn't exist, there is a problem
which your distribution. You can try uninstalling it and installing a different
distribution, or contact me. Else, proceed.

Type `which pdflatex` and press enter. This should give one line, which is the
path to `pdflatex`.

<!-- Back in VS Code, we need to open `settings.json`. You do this by opening the
command palette (`Command+Shift+P`), typing `settings.json` and hitting enter.

Go to `Selection > Select all` or press `Command+A` to copy the whole file.
Paste the contents in the <a href="Config wizard" target="_blank">Config wizard</a>.
Select the option `Set pdflatex to full path`, and paste the path we found earlier
(using `which pdflatex`). Generate the new settings, clear the `settings.json`
file and paste the newly generated settings. Save the file and restart Visual
Studio Code. Does it work now? -->

</TabItem>
<TabItem value="linux">

Open `Terminal`. Type `pdflatex -version` and press enter. If this gives an
error telling the command doesn't exist, there is a problem which your
distribution. You can try uninstalling it and installing a different
distribution, or contact me. Else, proceed.

Type `which pdflatex` and press enter. This should give one line, which is the
path to `pdflatex`.

</TabItem>
</Tabs>

## Manual compilation

<Tabs defaultValue="windows" values={[
    {label: "Windows", value: "windows"},
    {label: "Mac", value: "mac"},
    {label: "Linux", value: "linux"}
]}>
<TabItem value="windows">

In VS Code, right-click your `document.tex`, and select `Copy Path`.

Right-click the Windows Start menu on the bottom-left of the screen and select
'Windows Powershell'. Type `cd "`, and press `Ctrl+V` to paste the path we just
got in VS Code. Remove the `\document.tex` at the end, type `"` to close the
quotes, and hit enter.

Now type `pdflatex document` and hit enter. Right-click your `document.tex` in
VS Code, and select `Reveal in File Explorer`. You should now see there is a
`document.pdf` alongside the `document.tex`. If you press 'View' in the TeX
menu in VS Code, this should open this pdf.

</TabItem>
<TabItem value="mac">

In VS Code, right-click your `document.tex`, and select `Copy Path`.

Open Terminal. Type `cd "`, and press `Command+V` to paste the path we just
got in VS Code. Remove the `/document.tex` and the end, type `"` to close the
quotes, and hit enter.

Now type `pdflatex document` and hit enter. Right-click your `document.tex` in
VS Code, and select `Reveal in Finder`. You should now see there is a
`document.pdf` alongside the `document.tex`. If you press 'View' in the TeX
menu in VS Code, this should open this pdf.

</TabItem>
<TabItem value="linux">

In VS Code, right-click your `document.tex`, and select `Copy Path`.

Open Terminal. Type `cd "`, and press `Ctrl+Shift+V` to paste the path we just
got in VS Code. Remove the `/document.tex` and the end, type `"` to close the
quotes, and hit enter.

Now type `pdflatex document` and hit enter. Right-click your `document.tex` in
VS Code, and select `Reveal in Finder`. You should now see there is a
`document.pdf` alongside the `document.tex`. If you press 'View' in the TeX
menu in VS Code, this should open this pdf.
</TabItem>

</Tabs>

<!-- ## Error 1: LaTeX fatal error: spawn pdflatex ENOENT

As told in the installation article, the actual compilation (converting the code
to the PDF) is done by TeXLive, MiKTeX or MacTeX. For this reason, Visual Studio
Code needs to locate them. However, while it should, it doesn't always succeed.

In some cases, the error can be resolved by simply restarting your computer. If
this doesn't work, there is something else you can try: -->

<!-- 
<Tabs defaultValue="windows" values={[
    {label: "Windows", value: "windows"},
    {label: "Mac", value: "mac"},
    {label: "Linux", value: "linux"}
]}>
<TabItem value="windows">

To be added

</TabItem>
<TabItem value="mac">

Open the app called `Terminal`. Type `pdflatex -version` and press enter.
If this gives an error telling the command doesn't exist, there is a problem
which your distribution. You can try uninstalling it and installing a different
distribution, or contact me. Else, proceed.

Type `which pdflatex` and press enter. This should give one line, which is the
path to `pdflatex`.

:::info

If you want, you can manually compile your `.tex` file. Right-click the name
of your `.tex` file in VS Code and select `Copy Path`. Then, in the Terminal,
type `cd "`, press `Command+V`, type `"` and press enter. If this doesn't show
an error you can type `pdflatex document`, if your file is called `document.tex`.
If you have finder open at the directory of the `.tex` file, you should see the
pdf appear. If you hit 'View LaTeX PDF' in VS Code, this should also show it to
you.

:::

Back in VS Code, we need to open `settings.json`. You do this by opening the
command palette (`Command+Shift+P`), typing `settings.json` and hitting enter.

Go to `Selection > Select all` or press `Command+A` to copy the whole file.
Paste the contents in the <a href="Config wizard" target="_blank">Config wizard</a>.
Select the option `Set pdflatex to full path`, and paste the path we found earlier
(using `which pdflatex`). Generate the new settings, clear the `settings.json`
file and paste the newly generated settings. Save the file and restart Visual
Studio Code. Does it work now?

</TabItem>
<TabItem value="linux">

To be added

</TabItem>
</Tabs> -->

<!-- --- -->
<!-- 
If you are familiar with JSON, you can use the manual solution, else the wizard
might be easier to you.

<Tabs defaultValue="wizard" values={[
    {label: "Wizard", value: "wizard"},
    {label: "Manual", value: "manual"}
]}>
<TabItem value="wizard">



</TabItem>
<TabItem value="manual">

Type `"latex-workshop.latex.tools"` as a new setting and select VS Code's to add
the default value. Then go to the tool with name "pdflatex". Change the command
to the path for pdflatex we found a moment ago. If you're on Windows, make sure
to escape the backslash characters, i.e. either change each to a forward slash,
or double them.

Save the settings.json and restart VS Code.

</TabItem>
</Tabs> -->
