---
---

"use strict";

let code = `
    ClrHome
    Output(1,1,"Hey!")
`;

let oldCode = `
ClrHome
2->A
3+A->B
(B+1)/2->A
If ((0>2)=0)*4-5
Output(A,1,B)
Output((A+1<5)+1,1,"Hey!")
Output(8,1,remainder(int(3.2),5))
`;

let keyTestCode = `
ClrHome
0->K
While K!=105
getKey->K
If K
Output(1,1,K)
End
`;

let tibasicTryitBaseContent = document.createElement("template");
tibasicTryitBaseContent.innerHTML = `
<link rel="stylesheet" href="{{ "/assets/css/style.css" | relative_url }}">
<div class="tiBasicSimulator">
    <div style="display:flex;flex-flow:column nowrap;">
        <div class="simView" style="flex:0 0 auto;">
            <span>B</span>
            <span>C</span>
            <span>C</span>
        </div>
        <div data-id="status" style="white-space:pre;max-width:200px;overflow:auto;">No status</div>
    </div>
    <div style="flex:1 0 auto;">
        <textarea style="width:100%;height:100%;" data-id="codeArea">
Code wasn't loaded!
</textarea>
    </div>
    <div class="tryitButtons">
        <button class="button-action" data-id="runButton">Run</button>
        <button class="button-action" data-id="stopButton">Stop</button>
        <button class="button-action" data-key="21">2nd</button>
        <button class="button-action" data-key="22">Mode (Quit)</button>
        <button class="button-action" data-key="105">Enter</button>
        <button class="button-action" data-key="85">+</button>
        <button class="button-action" data-key="75">-</button>
        <button class="button-action" data-key="102">0</button>
    </div>
</div>
`;

let tibasicTryitSlots = document.createElement("template");
tibasicTryitSlots.innerHTML = `
    <slot></slot>
`;

class TIBasicTryitGadget extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(tibasicTryitSlots.content.cloneNode(true));

        this.listenersCodeProcessed = [];
        this.iscodeprocessed = false;
        this.context = null;
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
            thecode = thecode.replace(/(^|\n)\s+/g, "\n");
            thecode = thecode.replace(/##[^\n]*\n/g, "");
            thecode = thecode.replace(/^\n/g, "");
            thecode = thecode.replaceAll("→","->");
            thecode = thecode.replaceAll("⌊","l");
            thecode = thecode.replaceAll("≠","!=");


            while (this.shadowRoot.firstChild) {
                this.shadowRoot.removeChild(this.shadowRoot.firstChild);
            }

            this.shadowRoot.appendChild(tibasicTryitBaseContent.content.cloneNode(true));
            this.div = this.shadowRoot.querySelector("div");
            this.codeAreaEl = this.div.querySelector("[data-id=\"codeArea\"]");
            this.codeAreaEl.value = thecode;
            this.runButtonEl = this.div.querySelector("[data-id=\"runButton\"]");
            this.stopButtonEl = this.div.querySelector("[data-id=\"stopButton\"]");
            this.statusEl = this.div.querySelector("[data-id=\"status\"]");
            this.createScreen();
            //this.randomizeScreen();

            this.attachContext();
            this.context.randomizeScreen();
        });

    }

    disconnectedCallback() {

    }

    attributeChangedCallback() {

    }

    attachContext() {
        if (this.context != null)
            return;
        this.context = new TryitGadgetContext(this);
        const that = this;
        this.runButtonEl.addEventListener("click", () => that.runCode());
        this.stopButtonEl.addEventListener("click", () => that.stopCode());

        for (let keyEl of this.div.querySelectorAll("[data-key]")) {
            if (keyEl.hasAttribute("registered"))
                continue;

            let keyNum = keyEl.getAttribute("data-key");
            keyEl.addEventListener("pointerdown", () => that.context.SetKey(+keyNum));

            keyEl.setAttribute("registered", "registered");
        }
    }

    runCode() {
        let code = this.codeAreaEl.value;
        this.context.SetCode(code);
        this.runButtonEl.setAttribute("disabled", "disabled");
        this.isRunning = true;
        this.currentlyRunning = TIBasicLogic.Run(this.context);
        this.stopButtonEl.removeAttribute("disabled", "disabled");

        const that = this;
        this.currentlyRunning.then(
            () => {
                that.onRunFinished();
            }
        ).catch(
            (ex) => {
                that.onRunFinished();
                throw ex;
            }
        );
    }

    onRunFinished() {
        this.isRunning = false;
        this.runButtonEl.removeAttribute("disabled");
        this.stopButtonEl.setAttribute("disabled", "disabled");
    }

    stopCode() {
        this.context.Break();
    }
}

class TryitGadgetContext extends TIBasicContext {
    constructor(gadget) {
        super();
        this.gadget = gadget;
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

    GetKey() {
        let ans = this.key;
        this.key = 0;
        return ans;
    }

    SetKey(key) {
        this.key = key;
    }


    SetStatus(status) {
        this.gadget.statusEl.innerText = status;
    }

    randomizeScreen() {
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
}

customElements.define("tibasic-tryit", TIBasicTryitGadget);
