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
        <div data-id="status" style="white-space:pre;max-width:200px;overflow:auto;">No status</div>
    </div>
    <div style="flex:1 0 auto;">
        <textarea style="width:100%;height:100%;" data-id="codeArea">
ClrHome
2->A
3+A->B
(B+1)/2->A
If ((0>2)=0)*4-5
Output(A,1,B)
Output((A+1<5)+1,1,"Hey!")
Output(8,1,remainder(int(3.2),5))
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

        var shadow = this.attachShadow({ mode: "open" });
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

        // this.binaryOperators = [
        //     [
        //         ['+', (a, b) => a + b],
        //         ['-', (a, b) => a - b]
        //     ],
        //     [
        //         ['*', (a, b) => a * b],
        //         ['/', (a, b) => a / b]
        //     ],
        //     [
        //         ['^', (a, b) => Math.pow(a, b)]
        //     ]
        // ];

        // this.binPerform = {};
        // for (let g of this.binaryOperators) {
        //     for (let item of g) {
        //         this.binPerform[item[0]] = item[1];
        //     }
        // }

        this.binPerform = {
            "^": (a, b) => Math.pow(a, b),
            "*": (a, b) => a * b,
            "": (a, b) => a * b,
            "/": (a, b) => a / b,
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "=": (a, b) => (a == b) ? 1 : 0,
            "!=": (a, b) => (a != b) ? 1 : 0,
            ">": (a, b) => (a > b) ? 1 : 0,
            "<": (a, b) => (a < b) ? 1 : 0,
            ">=": (a, b) => (a >= b) ? 1 : 0,
            "<=": (a, b) => (a <= b) ? 1 : 0
        }

        this.binAssociativity = {
            "^": 3,
            "*": 2,
            "": 2,
            "/": 2,
            "+": 1,
            "-": 1,
            "=": 0,
            "!=": 0,
            ">": 0,
            "<": 0,
            ">=": 0,
            "<=": 0
        };

        this.recognizedBinOperators = [];
        for (let op in this.binPerform) {
            this.recognizedBinOperators.push(op);
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

    InstrClrHome() {
        this.ClrHome();
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

    InstrOutput(lineEnd) {
        let vals = this.ReadArgs("n,n,s");
        this.Output(vals[0], vals[1], vals[2]);

        // let code = this.linesepCode;

        // if (code[this.pos] != '(') {
        //     this.SyntaxError();
        //     return;
        // }
        // this.pos++;
        // let row = this.EvaluateExpression(lineEnd);
        // if (code[this.pos] != ',') {
        //     this.SyntaxError();
        //     return;
        // }
        // this.pos++;
        // let col = this.EvaluateExpression(lineEnd);
        // if (code[this.pos] != ',') {
        //     this.SyntaxError();
        //     return;
        // }
        // this.pos++;

        // let text = this.EvaluateExpression(lineEnd).toString();
        // if (code[this.pos] != ')') {
        //     this.SyntaxError();
        //     return;
        // }
        // this.pos++;

        // this.Output(row, col, text);
    }

    InstrIf(lineEnd) {
        let code = this.linesepCode;

        if (code[this.pos] != ' ')
            this.SyntaxError();
        this.pos++;
        let expr = this.EvaluateExpression(lineEnd);
        if (this.pos != lineEnd)
            this.SyntaxError();

        if (expr == 0) {
            if (code[this.pos] == '\n')
                this.pos++;
            let newl = code.indexOf('\n', this.pos);
            if (newl == -1)
                this.pos = code.length;
            else
                this.pos = newl;
        }
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

    ReadFunctionName(allowLowercaseStart = false) {
        let p = this.pos;
        for (; p < this.linesepCode.length; p++) {
            let valid = (this.linesepCode[p] >= 'A' && this.linesepCode[p] <= 'Z');
            if (p > this.pos || allowLowercaseStart)
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
                if ((code[p] < '0' || code[p] > '9') && code[p] != '.')
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

        if (code[this.pos] >= 'a' && code[this.pos] <= 'z'
            || code[this.pos] >= 'A' && code[this.pos] <= 'Z') {
            let name = this.ReadFunctionName(true);
            let capitalized = name[0].toUpperCase() + name.substring(1);            
            let funcName = `Fn${capitalized}`;
            if (this[funcName] == null)
                this.SyntaxError();
            return this[funcName]();
        }

        this.SyntaxError();
    }

    FnRemainder() {
        let code = this.linesepCode;

        let vals = this.ReadArgs("n,n");
        if (vals[0] != Math.floor(vals[0]) || vals[1] != Math.floor(vals[1])) {
            if (code[this.pos - 1] == ")")
                this.pos--;
            throw this.DomainError();
        }
        return vals[0] % vals[1];
    }

    FnInt() {
        let vals = this.ReadArgs("n");
        return Math.floor(vals[0]);
    }

    EvaluateExpression(maxPos, type = "ns") {
        let code = this.linesepCode;
        let valueBegin = this.pos;

        if (code[this.pos] == '"') {
            let termPos = code.indexOf('"', this.pos + 1);
            let val = code.substring(this.pos + 1, termPos);
            this.pos = termPos + 1;

            if (!type.includes("s")) {
                this.pos = valueBegin;
                throw this.DataTypeError();
            }
            return val;
        }

        // if (!type.includes("n")) {
        //     this.pos = valueBegin;
        //     throw this.DataTypeError();
        // }

        let vals = [this.EvaluateExpressionLiteral(maxPos)];
        let operators = [];

        if (typeof vals[vals.length - 1] != "number")
            throw this.DataTypeError();

        while (this.pos < maxPos) {
            let op = code[this.pos];
            if (">=".includes(code[this.pos + 1]))
                op += code[this.pos + 1];

            if (op == "->" || op[0] == ',' || op[0] == ')')
                break;

            if (!this.recognizedBinOperators.includes(op))
                op = "";

            operators.push(op);
            this.pos += op.length;
            vals.push(this.EvaluateExpressionLiteral(maxPos));
        }

        let val = this.ResolveBinExpress(vals, operators, 0, operators.length);
        if (!type.includes("n")) {
            val = val.toString();
        }
        return val;
    }

    ReadArgs(form) {
        let code = this.linesepCode;
        let lineEnd = code.indexOf("\n", this.pos);

        if (code[this.pos] != '(')
            this.SyntaxError();
        this.pos++;

        let vals = [];
        let parts = form.split(",");
        for (let i = 0; i < parts.length; i++) {
            let part = parts[i];
            let val = this.EvaluateExpression(lineEnd, part);
            vals.push(val);
            if (i < parts.length - 1) {
                if (code[this.pos] == ')')
                    throw this.ArgumentError();

                if (code[this.pos] != ',')
                    this.SyntaxError();
                this.pos += 1;
            }
        }

        if (code[this.pos] == ',')
            throw this.ArgumentError();
        if (code[this.pos] != ')' && code[this.pos] != '\n')
            this.SyntaxError();
        if (code[this.pos] == ')')
            this.pos++;
        return vals;
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

    DataTypeError() {
        return new Error("TI-BASIC: Invalid data type");
    }

    SyntaxError() {
        throw new SyntaxError("TI-BASIC: Invalid syntax");
    }

    ArgumentError() {
        return new Error("TI-BASIC: Invalid argument count") ;
    }

    DomainError() {
        return new Error("TI-BASIC: Invalid domain") ;
    }

    DebugEval(code) {
        this.SetCode(code);
        return this.EvaluateExpression(this.linesepCode.length);
    }

    RunStatement() {
        let code = this.linesepCode;
        let lineEnd = code.indexOf("\n", this.pos);
        if (lineEnd == -1)
            lineEnd = code.length;

        let tok = this.ReadFunctionName(false);
        if (tok == null) {
            let val = this.EvaluateExpression(lineEnd);
            if (code[this.pos] == '-' && code[this.pos + 1] == '>') {
                this.pos += 2;
                if (code[this.pos] >= 'A' && code[this.pos] <= 'Z') {
                    this.memory[code[this.pos]] = val;
                    this.pos++;
                } else {
                    this.SyntaxError();
                    return;
                }
            }
            this.memory["Ans"] = val;
            if (this.pos != lineEnd) {
                this.SyntaxError();
                return;
            }

            if (code[this.pos] != '\n') {
                this.SyntaxError();
                return;
            }
            this.pos++;
            return;
        }

        let handlerName = `Instr${tok}`;
        if (this[handlerName] == null) {
            this.SyntaxError();
            return;
        }

        this[handlerName](lineEnd);

        if (code[this.pos] != '\n') {
            this.SyntaxError();
            return;
        }
        this.pos++;

        // if (this.pos != lineend) {
        //     this.SyntaxError();
        //     return;
        // }
    }

    Run() {
        // let code = this.gadget.codeAreaEl.value;
        // code = code.replace("\r\n", "\n").replace("\r", "");
        // this.code = code;
        // this.pos = 0;
        let setStatus = s => {
            this.gadget.statusEl.innerText = s;
        }

        setStatus("Uncompleted");
        let code = this.gadget.codeAreaEl.value;
        this.SetCode(code);
        // let clrHomeRe = /^ClrHome\s*$/;
        // let outputRe = /^Output\((?<row>[^,]*),\s*(?<column>[^,]*),\s*"(?<text>[^"]*)"\)\s*$/;
        code = this.linesepCode;

        let status = null;
        try {
            while (this.pos < code.length) {
                this.RunStatement();
            }
        } catch (ex) {
            if (ex.message?.startsWith("TI-BASIC")) {
                let lineStart = this.code.lastIndexOf("\n", this.pos) + 1;
                let lineEnd = this.code.indexOf("\n", lineStart + 1);
                if (lineEnd == -1)
                    lineEnd = this.code.length;

                let linenumber = this.code.substring(0, lineStart).split("\n").length;
                status = `Error at line ${linenumber}: ${ex.message}\n`;
                status += `| ${this.code.substring(lineStart, lineEnd)}\n`;
                status += "|";
                for (let i = 0; i < this.pos - lineStart + 1; i++)
                    status += " ";
                status += "^";
                setStatus(status);
                throw ex;

            } else {
                status = "Exception";
                setStatus(status);
                throw ex;
            }
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

