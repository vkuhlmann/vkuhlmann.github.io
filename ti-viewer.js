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

let tiViewerSlots = document.createElement("template");
tiViewerSlots.innerHTML = `
    <slot></slot>
`;

class TIViewer extends HTMLElement {
    constructor() {
        super();
        // console.log("A");
        // this.innerHTML = "";
        // console.log("B");

        // console.log(`Contents (1a): (${this.outerHTML})`);
        // console.log(`Contents (1b): (${this.textContent})`);

        var shadow = this.attachShadow({mode: "open"});
        //shadow.appendChild(tiViewerBaseContent.content.cloneNode(true));
        shadow.appendChild(tiViewerSlots.content.cloneNode(true));
        this.div = shadow.querySelector("div");
        this.slotContents = this.shadowRoot.querySelector("slot");

        this.listenersCodeProcessed = [];
        this.iscodeprocessed = false;

        //console.log(`Contents (1c): (${this.slotContents.assignedNodes()})`);

        //shadow.appendChild(document.createElement("slot"));
        

        //var container = document.createElement("div");
    }

    connectedCallback() {
        // console.log(`Contents (2a): (${this.outerHTML})`);
        // console.log(`Contents (2b): (${this.textContent})`);
        // console.log(`Contents (2c): (${this.innerHTML})`);
        // console.log(`Contents (2d): (${this.shadowRoot.innerHTML})`);
        // console.log(`Contents (2e): (${this.shadowRoot.textContent})`);

        this.slotContents = this.shadowRoot.querySelector("slot");
        //console.log(`Contents (3a): (${this.slotContents.assignedNodes()})`);
        
        document.addEventListener("DOMContentLoaded", () => {
            console.log(`Contents: (${this.slotContents.assignedNodes()})`);
            let nodes = this.slotContents.assignedNodes();
            let thecode = null;
            for (let n of nodes) {
                console.log(`Nodename ${n.nodeName}`);
                if (n.nodeName.toLowerCase() == "code") {
                    thecode = n.textContent;
                    //console.log(`Thecode children: ${n.childNodes}`);
                }
            }
            while (this.shadowRoot.firstChild) {
                this.shadowRoot.removeChild(this.shadowRoot.firstChild);
            }

            this.shadowRoot.appendChild(tiViewerBaseContent.content.cloneNode(true));
            this.div = this.shadowRoot.querySelector("div");

            thecode = thecode.replace("\r\n", "\n").replace("\r", "");
            if (thecode[0] == "\n")
                thecode = thecode.substring(1);
            if (thecode[thecode.length - 1] == "\n")
                thecode = thecode.substring(0, code.length - 1);

            //console.log(`The code: (${thecode})`);
            createTIBlocks(thecode, this.div);
            this.iscodeprocessed = true;
            for (let list of this.listenersCodeProcessed) {
                this.whenCodeProcessed(list);
            }

        });

    }

    whenCodeProcessed(func) {
        if (this.iscodeprocessed) {
            console.log("Executing listener.");
            func();
            return;
        }

        this.listenersCodeProcessed.push(func);
    }

    disconnectedCallback() {

    }

    attributeChangedCallback() {

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
        l = l.trimStart();

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

