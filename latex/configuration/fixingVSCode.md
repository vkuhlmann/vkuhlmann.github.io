---
sidebar_position: 1
---

# FIXING VS CODE

## Wizard

import VSCodeConfigWizard from "../../src/components/VSCodeConfigWizard"

<VSCodeConfigWizard />


## Error 1: LaTeX fatal error: spawn pdflatex ENOENT

As told in the installation article, the actual compilation (converting the code
to the PDF) is done by TeXLive, MiKTeX or MacTeX. For this reason, Visual Studio
Code needs to locate them. However, while it should, it doesn't always succeed.

In some cases, the error can be resolved by simply restarting your computer. If
this doesn't work, there is something else you can try:


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

</TabItem>
<TabItem value="linux">

To be added

</TabItem>
</Tabs>

---

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
</Tabs>

---


### Trigger compilation manually

## Error 2: Perl not found



