---
sidebar_position: 2
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
`settings.json` and hit enter. This is a JSON file, and fragments shown below
should be placed before the final closing brace of the file. You might need to
add a comma after the last option specified, and make sure there isn't a comma
right before the final closing brace.

## Compile on F5

By default the `.tex` file is compiled on every save, but I prefer to retain
better control over it. Therefore in the `settings.json` I add

```json
"latex-workshop.latex.autoBuild.run": "never",
"latex-workshop.latex.rootFile.useSubFile": true,
"latex-workshop.latex.rootFile.doNotPrompt": true,
```

Then in `keybindings.json` I add
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

The LaTeX workshop comes with a `wrap-env` function, which you can bind to F5
by adding in the `keybindings.json` this code
```json
{
    "key": "Ctrl+E",
    "when": "resourceExtname == .tex && false",
    "command": "latex-workshop.wrap-env"
},
```

But it doesn't work too great for me. Instead I use a snippet for starting an
environment. In the `keybindings.json` add
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

Now open the Command Palette (`Ctrl+Shift+P`), type `snippet` and select
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

Relying on Word Wrap to present everything nicely, so you don't need to scroll
horizontally endlessly isn't that great in my opinion. I use the `Rewrap`
package, which binds to `Alt+Q` to provide a rewrapping of the paragraph with
actual newline characters.

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


And in my `settings.json` I've also added for switching between VS Code tabs
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

