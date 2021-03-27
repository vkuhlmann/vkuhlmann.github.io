---
---

"use strict";

let TI_VIEWER_MARKCOLORS = {
    yellow: "hsl(54, 90%, 50%)",
    lightblue: "hsl(189, 90%, 50%)",
    lightgreen: "hsl(90, 90%, 50%)",
    darkgreen: "hsl(122, 90%, 20%)",
    orange: "hsl(31, 90%, 50%)",
    blue: "hsl(207, 90%, 50%)",
    darkblue: "darkblue",
}

let tiViewerBaseContent = document.createElement("template");
tiViewerBaseContent.innerHTML = `
<link rel="stylesheet" href="{{ "/assets/css/style.css" | relative_url }}">
<div class="tiCode">
    
</div>
`;

class TIViewer extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(tiViewerBaseContent.content.cloneNode(true));
        this.div = shadow.querySelector("div");

        //var container = document.createElement("div");
    }
}

customElements.define("ti-viewer", TIViewer);

let oldcol = {
    darkBlue: "hsl(207, 90%, 20%)"
}

TI_VIEWER_MARKCOLORS[null] = "purple";

function produceGroups(data, paramNamed) {
    //let named = { ...paramNamed };
    let named = paramNamed;

    for (let d of data) {
        if (d.name in named) {
            d.color = named[d.name];

        } else {
            if (d.color in TI_VIEWER_MARKCOLORS)
                d.color = TI_VIEWER_MARKCOLORS[d.color];
            named[d.name] = d.color;
        }
    }
    return data;
}


function formatTI() {
    let el = document.querySelector("#tiCode");
    el.innerHTML = "";
    code = code.trim();
    for (let l of code.split("\n")) {
        let builtup = "";
        let remainingLength = 15;
        while (l.length > 0 || builtup.length == 0) {
            let text = l.substring(0, remainingLength);
            text = text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
            builtup += text + "<br/>";
            l = l.substring(remainingLength);
            remainingLength = 16;
        }

        let t = document.createElement("span");
        t.innerHTML = `
      <span style="user-select:none;">:</span>${builtup}
      `;
        el.appendChild(t);
    }
}

function splitInTILines(code) {
    let outp = [];
    for (let l of code.split("\n")) {
        let remainingLength = 15;
        while (true) {
            let text = l.substring(0, remainingLength);
            text = text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
            if (remainingLength == 15)
                text = `<span style="user-select:none;">:</span>${text}`;
            let terminate = l.length < remainingLength;
            if (terminate)
                text = `${text}<br/>`;
            outp.push(text);

            if (terminate)
                break;
            l = l.substring(remainingLength);
            remainingLength = 16;
        }
    }
    return outp;
}

function createTIBlocks(code, el) {
    el.innerHTML = "";
    let lines = splitInTILines(code);

    for (let i = 0; i < lines.length; i += 7) {
        let sel = lines.slice(i, i + 7);
        let lineDecl = ` Line ${i + 1} `;
        while (lineDecl.length < 16) {
            if (lineDecl.length < 15)
                lineDecl = "." + lineDecl;
            lineDecl += ".";
        }
        lineDecl = `<span style="user-select:none;">${lineDecl}<br/></span>`;

        sel.splice(0, 0, lineDecl);
        while (sel.length < 8)
            sel.push("<br/>");

        let divh = document.createElement("span");

        let fr = document.createElement("div");
        fr.classList = "fr";
        divh.appendChild(fr);

        let frHoriz = document.createElement("div");
        frHoriz.classList = "fr-horiz";
        divh.appendChild(frHoriz);


        let div = document.createElement("span");
        divh.appendChild(div);

        let lineno = i - 1;
        for (let l of sel) {
            let t = document.createElement("span");
            t.innerHTML = l;

            lineno += 1;
            //let col = "transparent";
            if (lineno != i)
                t.setAttribute("data-displayline", lineno);

            //   if ((Math.floor(lineno / 5) % 2) == 0)
            //     col = "red";
            // }

            // t.style["border-left"] = `4px solid ${col}`;
            t.style["border-left"] = `4px solid transparent`;

            div.appendChild(t);
        }

        el.appendChild(divh);
    }
}

function updateColors(el, getLineColor) {
    //debugger;
    for (let t of el.querySelectorAll("[data-displayline]")) {
        let lineNumber = t.getAttribute("data-displayline");
        let col = getLineColor(lineNumber);
        t.style["border-left"] = `4px solid ${col}`;
    }
}

