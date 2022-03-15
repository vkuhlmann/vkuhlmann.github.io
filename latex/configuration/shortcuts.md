---
sidebar_position: 4
---

# Shortcuts

## Prerequisites

This section assumes a setup with Visual Studio Code. Where you have installed
the following extension:

```plaintext
Name: LaTeX Workshop
Id: james-yu.latex-workshop
Description: Boost LaTeX typesetting efficiency with preview, compile, autocomplete, colorize, and more.
Version: 8.20.2
Publisher: James Yu
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop
```

To open `settings.json`, open the Command Palette (`Ctrl+Shift+P`), type
`settings.json` and hit enter. Fragments below should be added to this file.
Keep care to adhere to the required JSON (or actually JSONC) format, like
separating different key-value pairs with a comma:

Wrong:
```json
{
    "theoldsettings": "aaa"
    "something": "I pasted in"
}
```

Correct:
```json
{
    "theoldsettings": "aaa",
    "something": "I pasted in"
}
```

VS Code uses JSONC which is JSON allowing for comments, but it is also benevolent
in allowing small mistakes, like superfluous comma's.

## Compile on F5

By default the `.tex` file is compiled on every save, but I prefer to instruct
compilation with a different shortcut. For this, in the `settings.json` I add

```json
"latex-workshop.latex.autoBuild.run": "never",
"latex-workshop.latex.rootFile.useSubFile": true,
"latex-workshop.latex.rootFile.doNotPrompt": true,
```
The last two lines concern a compilation reference when using [Subfiles](/latex/subfiles).

Then in `keybindings.json` (open in the same way as `settings.json`), I add
```json
{
    "key": "F5",
    "when": "resourceExtname == .tex",
    "command": "latex-workshop.build"
},
{
    "key": "F7",
    "when": "resourceExtname == .tex",
    "command": "latex-workshop.view"
},
```

With `F7` you now see the result of the last compilation.

## Create environment

In LaTeX, you often need environments, like an `align` environment. The
following code allows you to do this quickly, by performing on your
keyboard `Ctrl+E`, typing `align` and entering `Tab`, and it places you within the align, ready to
type your equation.

The LaTeX workshop comes with a `wrap-env` function, which you can bind to F5
by adding in the `keybindings.json` this code
```json
{
    "key": "Ctrl+E",
    "when": "resourceExtname == .tex",
    "command": "latex-workshop.wrap-env"
},
```

But it doesn't work too great for me, I started the environment on the line
after the cursor, but I want it at the cursor itself. For this, I use a snippet
instead. In the `keybindings.json` add
```json
{
    "key": "Ctrl+E",
    "when": "resourceExtname == .tex",
    "command": "editor.action.insertSnippet",
    "args": {
        "langId": "latex",
        "name": "CreateEnvironment"
    }
},
```

Now open the Command Palette (`Ctrl+Shift+P`), type `snippet`, select
`Preferences: Configure User Snippets`, choose `LaTeX`, and change the file's
contents to
```json
{
    // Explanation about tab stops by VS Code:
	// Place your snippets for latex here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.

	"CreateEnvironment": {
		"prefix": "env",
		"body": [
			"\\begin{${1:align*}}",
			"    $0",
			"\\end{$1}"
		],
		"description": "Create LaTeX environment"
	}
}
```

## Math inline

Add to `keybindings.json`

```json
{
    "key": "ctrl+shift+m",
    "when": "resourceExtname == .tex",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\$ ${1:} \\$$0"
    }
},
```


## Creating more shortcuts

You can use the insertSnippet idea for everything that seems handy to you, for
example

```json
{
    "key": "Ctrl+Alt+D F",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\frac{$1}{$0}"
    }
},
{
    "key": "Ctrl+Alt+D E",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\mathbb{E}[$1]$0"
    }
},
{
    "key": "Ctrl+Alt+D [",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\left\\{$1\\right\\\\}$0"
    }
},
{
    "key": "Ctrl+Alt+D Ctrl+G",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\mathcal{G}$0"
    }
},
{
    "key": "Ctrl+Alt+D Ctrl+C",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\mathcal{C}$0"
    }
},
{
    "key": "Ctrl+Alt+D Shift+C",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\mathbb{C}$0"
    }
},
{
    "key": "Ctrl+Alt+D Shift+R",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\mathbb{R}$0"
    }
},
{
    "key": "Ctrl+Alt+D Shift+Z",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\mathbb{Z}$0"
    }
},
{
    "key": "Ctrl+Alt+D Shift+N",
    "command": "editor.action.insertSnippet",
    "args": {
        "snippet": "\\mathbb{N}$0"
    }
},
```


## Other optimizations

People often write their paragraph on one line. While word wrap shows the text
spread over multiple lines, I prefer to not rely on this technique, and
spread the text over actual lines. For this, I use the `Rewrap` package.
I select the text I want to rewrap, and press `Alt+Q` to execute Rewrap's
functionality.

```
Name: Rewrap
Id: stkb.rewrap
Description: Hard word wrapping for comments and other text at a given column.
Version: 1.14.0
Publisher: stkb
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=stkb.rewrap
```

Works well with settings like
```json
"[tex]": {
    "editor.rulers": [80, 100],
    "rewrap.wrappingColumn": 100,
},
"[latex]": {
    "editor.formatOnPaste": false,
    "editor.suggestSelection": "recentlyUsedByPrefix",
    "editor.rulers": [80, 100],
    "rewrap.wrappingColumn": 100,
},
"editor.rulers": [80],
"rewrap.wrappingColumn": 80,
"rewrap.wholeComment": false,
```

Lastly, in my `settings.json`, I've also made it that `Ctrl+Tab` and `Ctrl+Shift+Tab`
switch between VS Code tabs in the order they are shown in. By default they
switch between tabs in an order based on how recently you used the tab.
```json
{
    "key": "Ctrl+Tab",
    "command": "workbench.action.nextEditor"
},
{
    "key": "Ctrl+Shift+Tab",
    "command": "workbench.action.previousEditor"
},
```

