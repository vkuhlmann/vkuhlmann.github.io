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
2->A
3+A->B
(B+1)/2->A
Output(A,1,B)
Output(A+1,1,"Hey!")
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
        this.memory = {};

        this.binaryOperators = [
            [
                ['+', (a, b) => a + b],
                ['-', (a, b) => a - b]
            ],
            [
                ['*', (a, b) => a * b],
                ['/', (a, b) => a / b]
            ],
            [
                ['^', (a, b) => Math.pow(a, b)]
            ]
        ];

        this.binPerform = {};
        for (let g of this.binaryOperators) {
            for (let item of g) {
                this.binPerform[item[0]] = item[1];
            }
        }

        this.binAssociativity = {
            '^': 3,
            '*': 2,
            '/': 2,
            '+': 1,
            '-': 1
        };

        this.recognizedBinOperators = [];
        for (let g of this.binaryOperators) {
            for (let item of g) {
                this.recognizedBinOperators.push(item[0]);
            }
        }

        window.tibasic = this;
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

    FindNextLineSep() {
        let strModus = false;
        let p = pos;
        for (; p < this.code.length; p++) {
            if (this.code[p] == '"')
                strModus = !strModus;
            else if (this.code[p] == "\n")
                return p;
            else if (this.code[p] == ":" && !strModus)
                return p;
        }
        return p;
    }

    RunSingle() {
        let to = this.FindNextLineSep();
        let l = this.code.substring(this.pos, to);
        let tokenRe = /^(?<tokenName>[a-zA-Z]+)( )/;
    }

    SetCode(code) {
        code = code.replace("\r\n", "\n").replace("\r", "");
        this.code = code;
        this.pos = 0;

        this.linesepCode = this.code;
        let strModus = false;
        for (let i = 0; i < this.linesepCode.length; i++) {
            if (this.linesepCode[i] == '"')
                strModus = !strModus;
            else if (this.linesepCode[i] == ":" && !strModus)
                this.linesepCode[i] = '\n';
        }
    }

    ReadInstructionToken() {
        let p = this.pos;
        for (; p < this.linesepCode.length; p++) {
            let valid = (this.linesepCode[p] >= 'A' && this.linesepCode[p] <= 'Z');
            if (p > this.pos)
                valid = valid || (this.linesepCode[p] >= 'a' && this.linesepCode[p] <= 'z');
            if (!valid)
                break;
        }
        if (p - this.pos < 2)
            return null;
        let startPos = this.pos;
        this.pos = p;
        return this.linesepCode.substring(startPos, p);
    }

    EvaluateExpressionLiteral(maxPos) {
        let code = this.linesepCode;
        if ((code[this.pos] >= '0' && code[this.pos] <= '9') 
            || code[this.pos] == '.' || code[this.pos] == '+'
            || code[this.pos] == '-') {
            let p = this.pos + 1;
            for (; p < maxPos; p++) {
                if (code[p] < '0' || code[p] > '9' || code[p] == '.')
                    break;
            }
            let val = parseFloat(code.substring(this.pos, p));
            this.pos = p;
            return val;
        }

        if (code[this.pos] >= 'A' && code[this.pos] <= 'Z') {
            let val = this.memory[code[this.pos]];
            this.pos += 1;
            return val;
        }

        if (code[this.pos] == '(') {
            this.pos += 1;
            let val = this.EvaluateExpression(maxPos);
            if (this.pos < maxPos) {
                if (code[this.pos] == ')') {
                    this.pos++;
                } else {
                    this.SyntaxError();
                    return null;
                }
            }
            return val;
        }

        this.SyntaxError();
    }

    EvaluateExpression(maxPos) {
        let code = this.linesepCode;
        if (code[this.pos] == '"') {
            let termPos = code.indexOf('"', this.pos + 1);
            let val = code.substring(this.pos + 1, termPos);
            this.pos = termPos + 1;
            return val;
        }

        let vals = [this.EvaluateExpressionLiteral(maxPos)];
        let operators = [];

        while (this.pos < maxPos && this.recognizedBinOperators.includes(code[this.pos])) {
            if (code[this.pos + 1] == ">")
                break;

            operators.push(code[this.pos]);
            this.pos += 1;
            vals.push(this.EvaluateExpressionLiteral(maxPos));
        }

        return this.ResolveBinExpress(vals, operators, 0, operators.length);
    }

    ResolveBinExpress(vals, operators, begin, end) {
        if (begin == end)
            return vals[begin];
        let assoc = Infinity;
        let i = -1;
        for (let j = begin; j < end; j++) {
            let a = this.binAssociativity[operators[j]];
            if (a >= assoc)
                continue;
            assoc = a;
            i = j;
        }

        let p1 = this.ResolveBinExpress(vals, operators, begin, i);
        let p2 = this.ResolveBinExpress(vals, operators, i + 1, end);

        return this.binPerform[operators[i]](p1, p2);
    }

    SyntaxError() {
        alert("Syntax error!");
        throw new SyntaxError();
    }

    DebugEval(code) {
        this.SetCode(code);
        return this.EvaluateExpression(this.linesepCode.length);
    }

    RunStatement(lineend) {
        if (this.pos == lineend)
            return;
        let code = this.linesepCode;
        let tok = this.ReadInstructionToken();
        if (tok == null) {
            let val = this.EvaluateExpression(lineend);
            if (code[this.pos] == '-' && code[this.pos + 1] == '>') {
                this.pos += 2;
                if (code[this.pos] >= 'A' && code[this.pos] <= 'Z') {
                    this.memory[code[this.pos]] = val;
                    this.pos++;
                } else {
                    this.SyntaxError();
                    return;
                }
            } else {
                this.memory["Ans"] = val;
            }
            if (this.pos != lineend) {
                this.SyntaxError();
                return;
            }
        }

        if (tok == "ClrHome") {
            this.ClrHome();
        } else if (tok == "Output") {
            if (code[this.pos] != '(') {
                this.SyntaxError();
                return;
            }
            this.pos++;
            let row = this.EvaluateExpression(lineend);
            if (code[this.pos] != ',') {
                this.SyntaxError();
                return;
            }
            this.pos++;
            let col = this.EvaluateExpression(lineend);
            if (code[this.pos] != ',') {
                this.SyntaxError();
                return;
            }
            this.pos++;
            
            let text = this.EvaluateExpression(lineend).toString();
            if (code[this.pos] != ')') {
                this.SyntaxError();
                return;
            }
            this.pos++;
            
            this.Output(row, col, text);
        }
        if (this.pos != lineend) {
            this.SyntaxError();
            return;
        }

    }

    Run() {
        // let code = this.gadget.codeAreaEl.value;
        // code = code.replace("\r\n", "\n").replace("\r", "");
        // this.code = code;
        // this.pos = 0;
        this.gadget.statusEl.innerText = "Uncompleted";
        let code = this.gadget.codeAreaEl.value;
        this.SetCode(code);
        // let clrHomeRe = /^ClrHome\s*$/;
        // let outputRe = /^Output\((?<row>[^,]*),\s*(?<column>[^,]*),\s*"(?<text>[^"]*)"\)\s*$/;
        code = this.linesepCode;

        let status = null;
        while (this.pos < code.length) {
            let lineend = code.indexOf('\n', this.pos);
            if (lineend == -1)
                lineend = code.length;
            this.RunStatement(lineend);
            if (this.pos != lineend) {
                this.SyntaxError();
                return;
            }
            this.pos = lineend + 1;
        }

        // for (let l of code.split("\n")) {
        //     if (l.match(/^\s*$/) != null)
        //         continue;

        //     let m = l.match(clrHomeRe);
        //     if (m != null) {
        //         this.ClrHome();
        //         continue;
        //     }

        //     m = l.match(outputRe);
        //     if (m != null) {
        //         this.Output(parseInt(m.groups.row),
        //         parseInt(m.groups.column), m.groups.text);
        //         continue;
        //     }

        //     if (status == null) {
        //         status = `Unknown command ${l}`;
        //         break;
        //     }
        // }
        if (status == null)
            status = "Success";
        this.gadget.statusEl.innerText = status;
    }
}

customElements.define("tibasic-simulator", TIBasicSimulatorGadget);

