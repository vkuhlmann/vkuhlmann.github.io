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
<div class="tiViewer">
    <button type="button" class="button-toggle" data-id="showCode">Show code</button>
    <div class="tiCode" data-id="code">
        
    </div>
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
        this.codeTarget = shadow.querySelector("[data-id=\"code\"]");
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
                    //thecode = n.textContent;
                    thecode = n.innerText;
                    //console.log(`Code children: ${n.childNodes[0].textContent}`);
                    //console.log(`Thecode children: ${n.childNodes}`);
                }
            }
            while (this.shadowRoot.firstChild) {
                this.shadowRoot.removeChild(this.shadowRoot.firstChild);
            }

            this.shadowRoot.appendChild(tiViewerBaseContent.content.cloneNode(true));
            this.div = this.shadowRoot.querySelector("div");
            this.codeTarget = this.shadowRoot.querySelector("[data-id=\"code\"]");

            thecode = thecode.replace("\r\n", "\n").replace("\r", "");
            if (thecode[0] == "\n")
                thecode = thecode.substring(1);
            while (thecode[thecode.length - 1] == " ")
                thecode = thecode.substring(0, thecode.length - 1);
            while (thecode[thecode.length - 1] == "\n")
                thecode = thecode.substring(0, thecode.length - 1);
            console.log(`Code: (${thecode})`);

            //console.log(`The code: (${thecode})`);
            this.dataFormatCode(thecode);

            if (this.classList.contains("overwide")) {
                this.div.classList.add("overwide");
                this.classList.remove("overwide");
            }

            if (this.classList.contains("minimal")) {
                this.div.classList.add("minimal");
                this.classList.remove("minimal");
            }

            this.collapseCode = new ToggleButton(this.div.querySelector("[data-id=\"showCode\"]"));
            this.collapseCode.onToggle = () => {
                //this.codeTarget.classList.add("hide");
                this.div.classList.remove("collapsed");
                this.collapseCode.el.innerHTML = "Hide code";
            };

            this.collapseCode.onUntoggle = () => {
                //this.codeTarget.classList.remove("hide");
                this.div.classList.add("collapsed");
                this.collapseCode.el.innerHTML = "Show code";
            };

            this.collapseCode.toggle();
            if (this.hasAttribute("collapsed"))
                this.collapseCode.untoggle();
            else
                this.collapseCode.toggle();


            for (let list of this.listenersCodeProcessed) {
                this.whenCodeProcessed(list);
            }

        });

    }

    dataFormatCode(code) {
        this.dataCode = code;
        this.dataGroups = [];

        let mode = this.getAttribute("mode") || "blocks";

        if (mode == "linear") {
            this.createLinear(code);
        } else if (mode == "blocks") {
            this.createBlocks(code);
        }
    }

    createBlocks(code) {
        let groups = [];
        createTIBlocks(code, this.codeTarget, groups);
        console.log(`Groups is (${JSON.stringify(groups)})`);

        this.iscodeprocessed = true;

        let nameToColor = {};
        produceGroups(groups, nameToColor);

        updateColors(this.div, l => {
            for (let g of groups) {
                if (l >= g.begin && l < g.end) {
                    return g.color;
                }
            }
            return "hsla(0, 100%, 50%, 0%)";
        });
        this.dataGroups = groups;
    }

    createLinear(code) {
        let groups = [];
        createTILinear(code, this.codeTarget, groups);
        //console.log()

        this.iscodeprocessed = true;
        let nameToColor = {};
        produceGroups(groups, nameToColor);

        updateColors(this.div, l => {
            for (let g of groups) {
                if (l >= g.begin && l < g.end) {
                    return g.color;
                }
            }
            return "hsla(0, 100%, 50%, 0%)";
        });
        this.dataGroups = groups;
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

function splitInTILines(code, groups) {
    let outp = [];
    if (groups == null)
        groups = [];

    for (let l of code.split("\n")) {
        l = l.trimStart();

        l = processLine(l, groups, outp.length + 1);

        if (l == null)
            continue;

        let remainingLength = 15;
        while (true) {
            let text = l.substring(0, remainingLength);
            text = text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
            let colonStyle = "";
            if (text.startsWith("\""))
                colonStyle = "color:green;font-weight:bold;background-color:lightgreen;";
            else if (text.startsWith("Lbl"))
                colonStyle = "color:red;font-weight:bold;background-color:hsl(0, 100%, 80%);";

            if (remainingLength == 15)
                text = `<span style="user-select:none;${colonStyle}">:</span>${text}`;
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

function splitInLines(code, groups) {
    let outp = [];
    if (groups == null)
        groups = [];

    let lines = code.split("\n");
    let indent = lines[0].length - lines[0].trimStart().length;

    for (let l of code.split("\n")) {
        //l = l.trimStart();
        l = l.substring(indent);
        if (l.startsWith(" ")) {
            l = "&nbsp;" + l.substring(1);
        }

        l = processLine(l, groups, outp.length + 1);

        if (l == null)
            continue;

        let text = l;
        text = `${text}<br/>`;
        outp.push(text);
    }
    return outp;
}

function processLine(l, groups, linenumber) {
    let hashtagPos = l.indexOf("#");
    let comm = "";

    if (hashtagPos != -1) {
        comm = l.substring(hashtagPos + 1);
        l = l.substring(0, hashtagPos);

        if (comm.startsWith("#")) {
            l = null;
            comm = comm.substring(1);
        }
        comm = comm.trimStart();

        processComment(comm, groups, linenumber);
    }
    return l;
}

function processComment(comm, groups, linenumber) {
    let markRe = /^MARK ("(?<name>[^"]*)"( |$))?(?<color>[a-zA-Z0-9_\-*]+)$/;
    let m = comm.match(markRe);
    if (m != null) {
        let name = m.groups.name;
        let color = m.groups.color;
        //console.log(`Name ${name} with color ${color}`);
        groups.push({
            name: name,
            color: color,
            begin: linenumber,
            end: linenumber + 1
        });
        return;
    }

    let beginRe = /^BEGIN ("(?<name>[^"]*)"( |$))?(?<color>[a-zA-Z0-9_\-*]+)$/;
    
    m = comm.match(beginRe);
    if (m != null) {
        let name = m.groups.name;
        let color = m.groups.color;
        //console.log(`Name ${name} with color ${color}`);
        groups.push({
            name: name,
            color: color,
            begin: linenumber,
            end: Infinity
        });
        return;
    }

    let endRe = /^END "(?<name>[^"]*)"$/;

    m = comm.match(endRe);
    if (m != null) {
        let name = m.groups.name;
        let g = null;
        for (let gr of groups) {
            if (gr.name == name) {
                g = gr;
                break;
            }
        }

        if (g != null) {
            g.end = linenumber;
        }
        return;
    }
    console.log("Comment ignored");
}

function createTILinear(code, el, groups) {
    console.log(`Code is: (${code})`);
    el.innerHTML = "";
    let lines = splitInLines(code, groups);

    let div = document.createElement("div");
    el.appendChild(div);

    let lineno = 0;
    for (let l of lines) {
        let t = document.createElement("span");
        t.innerHTML = l;
        lineno += 1;
        t.setAttribute("data-displayline", lineno);
        t.classList.add("bordercolor");

        div.appendChild(t);
    }
}

function createTIBlocks(code, el, groups) {
    el.innerHTML = "";
    let lines = splitInTILines(code, groups);

    el.classList.add("ti-blocks");

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
            t.classList.add("bordercolor");

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
    for (let t of el.querySelectorAll("[data-displayline]")) {
        let lineNumber = t.getAttribute("data-displayline");
        let col = getLineColor(lineNumber);
        t.style["border-left"] = `4px solid ${col}`;
    }
}

class ToggleButton {
    constructor(el) {
        this.el = el;
        this.state = 0;

        const that = this;
        this.el.addEventListener("click", e => that.cycleToggle());
    }

    getState() {
        return this.state;
    }

    isToggled() {
        return this.state > 0;
    }

    toggle() {
        if (this.isToggled())
            return;
        this.el.classList.add("toggled");
        this.state = 1;

        this.onToggle();
    }

    onToggle() {
        console.log("Toggle handler not overriden!");
        // Override this
    }

    untoggle() {
        if (this.state == 0)
            return;
        this.state = 0;
        this.el.classList.remove("toggled");

        this.onUntoggle();
    }

    onUntoggle() {
        // Override this
    }

    cycleToggle() {
        if (this.state == 1) {
            this.untoggle();
        } else {
            this.toggle();
        }
    }
}

