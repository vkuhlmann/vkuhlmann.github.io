---
---

"use strict";

let code = `
    ClrHome
    Output(1,1,"Hey!")
`;

let tibasicSimulatorBaseContent = document.createElement("template");
tibasicSimulatorBaseContent.innerHTML = `
<link rel="stylesheet" href="{{ "/assets/css/style.css" | relative_url }}">
<div class="tiBasicSimulator">
    <div style="display:flex;flex-flow:column nowrap;">
        <div class="simView" style="flex:0 0 auto;">
            <span>B</span>
            <span>C</span>
            <span>C</span>
        </div>
        <div data-id="status">
            No status
        </div>
    </div>
    <div style="flex:1 0 auto;">
        <textarea style="width:100%;height:100%;" data-id="codeArea">
ClrHome
</textarea>
    </div>
    <div>
        <button class="button-action" data-id="runButton">Run</button>
        <button class="button-action">2nd</button>
    </div>
</div>
`;

let tibasicSimulatorSlots = document.createElement("template");
tibasicSimulatorSlots.innerHTML = `
    <slot></slot>
`;

class TIBasicSimulatorGadget extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(tibasicSimulatorSlots.content.cloneNode(true));

        this.listenersCodeProcessed = [];
        this.iscodeprocessed = false;
    }

    createScreen() {
        this.grid = [];

        this.rowCount = 8;
        this.columnCount = 16;

        for (let i = 0; i < this.rowCount; i++) {
            let l = new Array(this.columnCount);
            for (let j = 0; j < l.length; j++)
                l[j] = " ";
            this.grid.push(l);
        }

        this.gridEls = [];

        let el = this.div.querySelector(".simView");
        el.innerHTML = "";
        for (let y = 0; y < 8; y++) {
            let l = [];
            for (let x = 0; x < 16; x++) {
                let sp = document.createElement("span");
                sp.setAttribute("x", x);
                sp.setAttribute("y", y);
                sp.innerText = " ";
                el.appendChild(sp);
                l.push(sp);
            }
            this.gridEls.push(l);
        }
    }

    updateScreen() {
        for (let y = 0; y < this.gridEls.length; y++) {
            for (let x = 0; x < this.gridEls[y].length; x++) {
                this.gridEls[y][x].innerText = this.grid[y][x];
            }
        }
    }

    connectedCallback() {
        this.slotContents = this.shadowRoot.querySelector("slot");
        
        document.addEventListener("DOMContentLoaded", () => {
            //console.log(`Contents: (${this.slotContents.assignedNodes()})`);
            let nodes = this.slotContents.assignedNodes();
            let thecode = null;
            for (let n of nodes) {
                //console.log(`Nodename ${n.nodeName}`);
                if (n.nodeName.toLowerCase() == "code") {
                    thecode = n.innerText;
                }
            }
            while (this.shadowRoot.firstChild) {
                this.shadowRoot.removeChild(this.shadowRoot.firstChild);
            }

            this.shadowRoot.appendChild(tibasicSimulatorBaseContent.content.cloneNode(true));
            this.div = this.shadowRoot.querySelector("div");
            this.codeAreaEl = this.div.querySelector("[data-id=\"codeArea\"]");
            this.runButtonEl = this.div.querySelector("[data-id=\"runButton\"]");
            this.statusEl = this.div.querySelector("[data-id=\"status\"]");
            this.createScreen();
            //this.randomizeScreen();

            this.controller = this.createSimulator();
            this.controller.randomizeScreen();
        });

    }

    disconnectedCallback() {

    }

    attributeChangedCallback() {

    }

    createSimulator() {
        return new TIBasicSimulator(this);
    }
}

class TIBasicSimulator {
    constructor(gadget) {
        this.gadget = gadget;
        this.initialize();
    }

    initialize() {
        const that = this;
        this.gadget.runButtonEl.addEventListener("click", () => { that.Run() });
    }

    randomizeScreen() {
        //let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ                  ";

        let grid = this.gadget.grid;

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                let charId = Math.floor(Math.random() * chars.length);
                grid[y][x] = chars[charId];
            }
        }
        this.gadget.updateScreen();
    }

    ClrHome() {
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 16; x++) {
                this.gadget.grid[y][x] = " ";
            }
        }
        this.gadget.updateScreen();
    }

    Output(row, column, text) {
        let y = row - 1;
        let x = column - 1;
        let pos = y * this.gadget.grid[0].length + x;
        let charpos = 0;

        while (y < this.gadget.grid.length && charpos < text.length) {
            while (x < this.gadget.grid[0].length && charpos < text.length) {
                this.gadget.grid[y][x] = text[charpos];
                charpos++;
                x++
            }
            y++;
            x = 0;
        }
        this.gadget.updateScreen();
    }

    Run() {
        let code = this.gadget.codeAreaEl.value;
        code = code.replace("\r\n", "\n").replace("\r", "");

        let clrHomeRe = /^ClrHome\s*$/;
        let outputRe = /^Output\((?<row>[^,]*),\s*(?<column>[^,]*),\s*"(?<text>[^"]*)"\)\s*$/;

        let status = null;

        for (let l of code.split("\n")) {
            if (l.match(/^\s*$/) != null)
                continue;

            let m = l.match(clrHomeRe);
            if (m != null) {
                status = "Clearing home";
                this.ClrHome();
                continue;
            }

            m = l.match(outputRe);
            if (m != null) {
                this.Output(parseInt(m.groups.row),
                parseInt(m.groups.column), m.groups.text);
                continue;
            }

            if (status == null) {
                status = `Unknown command ${l}`;
                break;
            }
        }
        if (status == null)
            status = "Success";
        this.gadget.statusEl.innerText = status;
    }
}

customElements.define("tibasic-simulator", TIBasicSimulatorGadget);

