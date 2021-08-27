"use strict";

class TIBasicContext {
    constructor () {
        this.code = "";
        this.rawCode = "";
        this.pos = 0;
        this.memory = {};
        this.timeoffset = Math.floor(new Date(2021, 3, 21).getTime() / 1000);
        this.stack = [];
        this.isStopRequested = false;
        this.key = 0;
        this.extraDelay = 0;
        this.nextDisplayLine = -1;
        this.screenHeight = 8;
    }

    SetCode(code) {
        code = code.replace("\r\n", "\n").replace("\r", "") + "\n";

        this.rawCode = code;
        this.pos = 0;

        this.code = this.rawCode;
        let strModus = false;
        for (let i = 0; i < this.code.length; i++) {
            if (this.code[i] == '"')
                strModus = !strModus;
            else if (this.code[i] == ":" && !strModus)
                this.code = this.code.slice(0, i) + "\n" + this.code.slice(i + 1);
        }
    }

    DataTypeError() {
        return new Error("TI-BASIC: Invalid data type");
    }

    SyntaxError() {
        return new Error("TI-BASIC: Invalid syntax");
    }

    ArgumentError() {
        return new Error("TI-BASIC: Invalid argument count") ;
    }

    DomainError() {
        return new Error("TI-BASIC: Invalid domain") ;
    }

    IncrementError() {
        return new Error("TI-BASIC: Invalid increment") ;
    }

    DimMismatchError() {
        return new Error("TI-BASIC: Dim mismatch");
    }

    InvalidDimError() {
        return new Error("TI-BASIC: Invalid dim");
    }

    UndefinedError() {
        return new Error("TI-BASIC: Undefined");
    }

    LabelError() {
        return new Error("TI-BASIC: Unknown label");
    }

    MemoryError() {
        return new Error("TI-BASIC: Memory");
    }

    DebugEval(code) {
        this.SetCode(code);
        return TIBasicEvaluator.Evaluate(this);
    }

    ClrHome() {
        console.log("ClrHome not overridden!");
    }

    Output(row, column, text) {
        console.log("Output not overridden!");
    }

    GetKey() {
        this.extraDelay = 10;
        return 0;
    }

    StartTmr() {
        this.extraDelay = 10;
        return Math.floor(new Date().getTime() / 1000) - this.timeoffset;
    }

    Break() {
        this.isStopRequested = true;
        this.SetStatus("Stopped");
    }

    MoveScreenUp() {
        console.log("MoveScreenUp not overridden!");
    }

    SetStatus(status) {
        
    }

    PushStack(val) {
        if (this.stack.length == 200)
            throw this.MemoryError();
        this.stack.push(val);
    }

    PopStack() {
        return this.stack.pop();
    }
}

export {TIBasicContext};

// Source: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


class TIBasicLogic {
    // v: variable, n: number, s: string, l: list

    static ReadArgs(context, form) {
        let code = context.code;

        if (code[context.pos] != '(')
            throw context.SyntaxError();
            context.pos++;

        let vals = [];
        let parts = form.split(",");
        for (let i = 0; i < parts.length; i++) {
            let part = parts[i];
            if (code[context.pos] == ')' || code[context.pos] == '\n') {
                if (part.includes("["))
                    break;
                else
                    throw context.ArgumentError();
            }
            if (i > 0) {
                if (code[context.pos] != ',')
                    throw context.SyntaxError();
                context.pos++;
            }

            if ((code[context.pos] == ')' || code[context.pos] == '\n')
                && part.includes("["))
                break;

            let val = null;
            if (part == "v") {
                val = code[context.pos];
                if (val < 'A' || val > 'Z')
                    throw context.SyntaxError();
                context.pos++;
            } else {
                val = TIBasicEvaluator.Evaluate(context, part);
            }
            vals.push(val);
            // if (i < parts.length - 1) {
            //     if (code[context.pos] == ')')
            //         throw context.ArgumentError();

            //     if (code[context.pos] != ',')
            //         throw context.SyntaxError();
            //     context.pos++;
            // }
        }

        if (code[context.pos] == ',')
            throw context.ArgumentError();
        if (code[context.pos] != ')' && code[context.pos] != '\n')
            throw context.SyntaxError();
        if (code[context.pos] == ')')
            context.pos++;
        return vals;
    }

    static InstrOutput(context) {
        let vals = TIBasicLogic.ReadArgs(context, "n,n,s");
        context.Output(vals[0], vals[1], vals[2]);
    }

    static InstrClrHome(context) {
        context.ClrHome();
    }

    static DisplVal(context, val) {
        if (!(typeof val == "string")) {
            val = TIBasicLogic.TIToString(context, val);
            while (val.length < 16)
                val = " " + val;
        }

        if (context.nextDisplayLine == -1 || context.nextDisplayLine == context.screenHeight) {
            context.MoveScreenUp();
            context.nextDisplayLine = context.screenHeight - 1;
        }
        context.Output(context.nextDisplayLine + 1, 1, val);
        context.nextDisplayLine++;
    }

    static InstrDisp(context) {
        let code = context.code;
        if (code[context.pos] != ' ')
            throw context.SyntaxError();
        context.pos++;

        let commaRequired = false;
        while (code[context.pos] != '\n') {
            if (commaRequired) {
                if (code[context.pos] != ",")
                    throw context.SyntaxError();
                context.pos++;
            }
            commaRequired = true;

            let val = TIBasicEvaluator.Evaluate(context, "nls");
            TIBasicLogic.DisplVal(context, val);
        }
    }

    static ReadFunctionName(context, allowLowercaseStart = false) {
        let code = context.code;
        let p = context.pos;
        for (; p < code.length; p++) {
            let valid = (code[p] >= 'A' && code[p] <= 'Z');
            if (p > context.pos || allowLowercaseStart)
                valid = valid || (code[p] >= 'a' && code[p] <= 'z');
            if (!valid)
                break;
        }
        if (p - context.pos < 2)
            return null;
        let startPos = context.pos;
        context.pos = p;
        return code.substring(startPos, p);
    }

    static ReadListName(context) {
        let lPos = context.pos;
        let code = context.code;

        if (code[context.pos] == "l")
            context.pos++;
        let listName = "l";
        for (let i = 0; i < 6; i++) {
            if (!(code[context.pos] >= 'A' && code[context.pos] <= 'Z')
            && !(code[context.pos] >= '0' && code[context.pos] <= '9'))
                break;

            listName += code[context.pos];
            context.pos++;
        }
        if (listName.length == 7) {
            context.pos--;
            throw context.SyntaxError();
        }

        if (listName.length == 1) {
            context.pos = lPos;
            throw context.SyntaxError();
        }
        if (listName[1] >= '0' && listName[1] <= '9') {
            if (listName.length > 1 || listName[1] > '6') {
                context.pos = lPos;
                throw context.SyntaxError();
            }
        }
        return listName;
    }

    static RunStatement(context) {
        let code = context.code;
        if (context.pos == code.length)
            return;

        if (code[context.pos] == '\n') {
            context.pos++;
            return;
        }

        let startPos = context.pos;
        let tok = TIBasicLogic.ReadFunctionName(context, false);

        if (tok != null) {
            let handlerName = `Instr${tok}`;

            if (TIBasicLogic[handlerName] != null) {
                TIBasicLogic[handlerName](context);
                if (code[context.pos] != '\n')
                    throw context.SyntaxError();
                context.pos++;
                return;

            } else if (TIBasicControlStatements[handlerName] != null) {
                TIBasicControlStatements[handlerName](context);
                return;
            }
        }
        context.pos = startPos;

        let val = TIBasicEvaluator.Evaluate(context);
        if (code[context.pos] == '-' && code[context.pos + 1] == '>') {
            context.pos += 2;
            if (code[context.pos] >= 'A' && code[context.pos] <= 'Z' 
                && code[context.pos + 1] == '\n') {
                if (typeof val != "number")
                    throw context.DataTypeError();
                context.memory[code[context.pos]] = val;
                context.pos++;

            } else if (code[context.pos] == "l" || (code[context.pos] >= 'A'
                && code[context.pos] <= 'Z' && typeof val == "object")) {

                let listName = TIBasicLogic.ReadListName(context);
                if (code[context.pos] == "(") {
                    let index = TIBasicLogic.ReadArgs(context, "n")[0];
                    if (index != Math.floor(index))
                        throw context.InvalidDimError();

                    if (context.memory[listName] == null || index < 1 || index > context.memory[listName].length + 1)
                        throw context.InvalidDimError();

                    if (code[context.pos] != "\n")
                        throw context.SyntaxError();

                    if (typeof val != "number")
                        throw context.DataTypeError();

                    context.memory[listName][index - 1] = val;

                } else if (code[context.pos] == "\n") {
                    if (typeof val != "object")
                        throw context.DataTypeError();
                    context.memory[listName] = val;

                } else {
                    throw context.SyntaxError();
                }

            } else {
                let pos = context.pos;
                let assignTarget = TIBasicLogic.ReadFunctionName(context, true);
                if (assignTarget == "dim") {
                    if (typeof val != "number")
                        throw context.DataTypeError();
                    if (Math.floor(val) != val)
                        throw context.InvalidDimError();

                    if (code[context.pos] != "(")
                        throw context.SyntaxError();
                    context.pos++;
                    if (code[context.pos] != "l")
                        throw context.SyntaxError();
                    let listName = TIBasicLogic.ReadListName(context);
                    if (context.memory[listName] == null)
                        context.memory[listName] = [];
                    let l = context.memory[listName];
                    l.splice(val);
                    while (l.length < val) {
                        l.push(0);
                    }
                    if (code[context.pos] != ")" && code[context.pos] != "\n")
                        throw context.SyntaxError();
                    if (code[context.pos] == ")")
                        context.pos++;
                } else {
                    context.pos = pos;
                    throw context.SyntaxError();
                }
            }
        }
        context.memory["Ans"] = val;

        if (code[context.pos] != '\n')
            throw context.SyntaxError();
        context.pos++;
        return;
    }

    static async Run(context) {
        context.isStopRequested = false;
        context.SetStatus("Uncompleted");
        let code = context.code;
        broadcastAllSing();

        let status = null;
        try {
            context.isPaused = false;
            while (context.pos < code.length) {
                if (context.isStopRequested) {
                    context.isStopRequested = false;
                    return;
                }
                TIBasicLogic.RunStatement(context);
                await sleep(2 + context.extraDelay);
                context.extraDelay = 0;
            }
            context.isPaused = false;

        } catch (ex) {
            context.isPaused = false;

            if (ex.message?.startsWith("TI-BASIC")) {
                let lineStart = context.rawCode.lastIndexOf("\n", context.pos - 1) + 1;
                let lineEnd = context.rawCode.indexOf("\n", lineStart + 1);
                if (lineEnd == -1)
                    lineEnd = context.rawCode.length;

                let linenumber = context.rawCode.substring(0, lineStart).split("\n").length;
                status = `Error at line ${linenumber}: ${ex.message}\n`;
                status += `| ${context.rawCode.substring(lineStart, lineEnd)}\n`;
                status += "|";
                for (let i = 0; i < context.pos - lineStart + 1; i++)
                    status += " ";
                status += "^";
                context.SetStatus(status);
                throw ex;

            } else {
                context.SetStatus("Exception");
                throw ex;
            }
        }

        context.SetStatus("Success");
    }

    static FindEnd(context, orElse = false, pos = null) {
        let oldPos = context.pos;
        context.pos = pos ?? oldPos;
        let depth = 0;
        let isIf = false;
        let code = context.code;

        let tokPos = null;

        while (context.pos < code.length) {
            tokPos = context.pos;
            let tok = TIBasicLogic.ReadFunctionName(context);
            context.pos = code.indexOf("\n", context.pos) + 1;

            if (tok == "While" || tok == "For" || tok == "Repeat"
            || (tok == "Then" && isIf))
                depth++;

            if (tok == "Else" && depth == 0 && orElse)
                break;
            
            if (tok == "End") {
                if (depth == 0)
                    break;
                depth--;
            }

            isIf = (tok == "If");
        }

        if (context.pos == code.length)
            tokPos = code.length;

        context.pos = oldPos;
        return tokPos;
    }

    static TIToString(context, val) {
        if (typeof val == "number") {
            return val.toString();
        } else if (typeof val == "object") {
            if (val.length == 0)
                throw context.InvalidDimError();

            let str = "{";
            for (let i = 0; i < val.length - 1; i++) {
                str += `${val[i]} `;
            }
            if (val.length > 0)
                str += `${val[val.length - 1]}`;
            str += "}";
            return str;

        } else {
            return val.toString();
        }
    }
}

export {TIBasicLogic};

class TIBasicControlStatements {

}

export {TIBasicControlStatements};

class TIBasicEvaluator {
    static Evaluate(context, type = "nsl") {
        let code = context.code;
        let valueBegin = context.pos;

        if (code[context.pos] == '"') {
            let termPos = code.indexOf('"', context.pos + 1);
            let val = code.substring(context.pos + 1, termPos);
            context.pos = termPos + 1;

            if (!type.includes("s")) {
                context.pos = valueBegin;
                throw context.DataTypeError();
            }
            return val;
        }

        let vals = [TIBasicEvaluator.EvaluateLiteral(context)];
        let operators = [];

        if (typeof vals[vals.length - 1] == "string")
            throw context.DataTypeError();

        while (code[context.pos] != '\n') {
            let op = code[context.pos];
            if (op == " ") {
                let p = context.pos + 1;
                for (; code[p] >= 'a' && code[p] <= 'z'; p++)
                    op += code[p];
                op += code[p];
                if (op[op.length - 1] != ' ')
                    throw context.SyntaxError();
            } else if (">=".includes(code[context.pos + 1]))
                op += code[context.pos + 1];

            if (op == "->" || op[0] == ',' || op[0] == ')' || op[0] == '}')
                break;

            if (!TIBasicEvaluator.recognizedBinOperators.includes(op))
                op = "";

            operators.push(op);
            context.pos += op.length;
            vals.push(TIBasicEvaluator.EvaluateLiteral(context));
        }

        let val = TIBasicEvaluator.ResolveBinExpress(context, vals, operators, 0, operators.length);

        if ((typeof val == "number") && !type.includes("n")) {
            if (type.includes("s"))
                val = TIBasicLogic.TIToString(context, val);
            else
                throw context.DataTypeError();
        }

        if ((typeof val == "object") && !type.includes("l")) {
            if (!type.includes("s"))
                throw context.DataTypeError();
            
            val = TIBasicLogic.TIToString(context, val);
        }

        return val;
    }

    static EvaluateLiteral(context) {
        let code = context.code;

        if ((code[context.pos] >= '0' && code[context.pos] <= '9')
            || code[context.pos] == '.' || code[context.pos] == '+'
            || code[context.pos] == '-') {
            let p = context.pos + 1;
            for (; code[p] != '\n'; p++) {
                if ((code[p] < '0' || code[p] > '9') && code[p] != '.')
                    break;
            }
            let val = parseFloat(code.substring(context.pos, p));
            context.pos = p;
            return val;
        }

        if (code[context.pos] >= 'A' && code[context.pos] <= 'Z') {
            let val = context.memory[code[context.pos]];
            context.pos += 1;
            return val;
        }

        if (code[context.pos] == "l") {
            let listName = TIBasicLogic.ReadListName(context);
            if (context.memory[listName] == null) {
                context.pos--;
                throw context.UndefinedError();
            }
            if (code[context.pos] == '(') {
                let index = TIBasicLogic.ReadArgs(context, "n")[0];
                if (index != Math.floor(index))
                    throw context.InvalidDimError();
                if (index < 1 || index > context.memory[listName].length)
                    throw context.InvalidDimError();
                return context.memory[listName][index - 1];
            }
            return context.memory[listName];
        }

        if (code[context.pos] == '(') {
            context.pos += 1;
            let val = TIBasicEvaluator.Evaluate(context);
            if (code[context.pos] != '\n') {
                if (code[context.pos] == ')')
                    context.pos++;
                else
                    throw context.SyntaxError();
            }
            return val;
        }

        if (code[context.pos] == '{') {
            context.pos += 1;
            let arr = [];
            while (code[context.pos] != '\n' && code[context.pos] != '}') {
                if (arr.length > 0) {
                    if (code[context.pos] != ',')
                        throw context.SyntaxError();
                    context.pos++;
                }

                let val = TIBasicEvaluator.Evaluate(context);
                arr.push(val);
            }
            if (code[context.pos] == '}')
                context.pos++;
            return arr;
        }

        if (code[context.pos] >= 'a' && code[context.pos] <= 'z'
            || code[context.pos] >= 'A' && code[context.pos] <= 'Z') {
            let name = TIBasicLogic.ReadFunctionName(context, true);
            let capitalized = name[0].toUpperCase() + name.substring(1);            
            let funcName = `Fn${capitalized}`;
            if (TIBasicEvaluator[funcName] == null)
                throw context.SyntaxError();
            return TIBasicEvaluator[funcName](context);
        }

        throw context.SyntaxError();
    }

    static ResolveBinExpress(context, vals, operators, begin, end) {
        if (begin == end)
            return vals[begin];
        let assoc = Infinity;
        let i = -1;
        for (let j = begin; j < end; j++) {
            let a = TIBasicEvaluator.binAssociativity[operators[j]];
            if (a > assoc)// || (a == assoc && Math.floor(a) == a))
                continue;
            assoc = a;
            i = j;
        }

        let p1 = TIBasicEvaluator.ResolveBinExpress(context, vals, operators, begin, i);
        let p2 = TIBasicEvaluator.ResolveBinExpress(context, vals, operators, i + 1, end);

        return TIBasicEvaluator.binPerform[operators[i]](context, p1, p2);
    }
}

TIBasicEvaluator.binPerformSing = {
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

TIBasicEvaluator.binPerform = {

}

function broadcastUnOp(singFunc) {
    return (context, a) => {
        let isANum = (typeof a == "number");

        if (isANum) {
            return singFunc(a);
        } else {
            let arr = new Array(a.length);
            for (let i = 0; i < a.length; i++) {
                arr[i] = singFunc(a[i]);
            }
            return arr;
        }
    };
}

function broadcastBinOp(singFunc) {
    return (context, a, b) => {
        let isANum = (typeof a == "number");
        let isBNum = (typeof b == "number");

        if (isANum && isBNum) {
            return singFunc(a, b);
        } else if (isANum) {
            let arr = [];
            for (let bIt of b) {
                arr.push(singFunc(a, bIt));
            }
            return arr;

        } else if (isBNum) {
            let arr = [];
            for (let aIt of a) {
                arr.push(singFunc(aIt, b));
            }
            return arr;

        } else {
            if (a.length != b.length)
                throw context.DimMismatchError();
            let arr = new Array(a.length);
            for (let i = 0; i < a.length; i++) {
                arr[i] = singFunc(a[i], b[i]);
            }
            return arr;
        }
    };
}

export {broadcastBinOp, broadcastUnOp}

TIBasicEvaluator.recognizedBinOperators = [];
for (let op in TIBasicEvaluator.binPerform) {
    TIBasicEvaluator.recognizedBinOperators.push(op);
}

function broadcastAllSing() {
    for (let op in TIBasicEvaluator.binPerformSing) {
        TIBasicEvaluator.binPerform[op] = broadcastBinOp(TIBasicEvaluator.binPerformSing[op]);
    }
    for (let op in TIBasicEvaluator.binPerform) {
        if (!TIBasicEvaluator.recognizedBinOperators.includes(op))
            TIBasicEvaluator.recognizedBinOperators.push(op);
    }
}

TIBasicEvaluator.binAssociativity = {
    "^": 3,
    "*": 2,
    "": 2,
    "/": 2.5,
    "+": 1,
    "-": 1.5,
    "=": 0,
    "!=": 0,
    ">": 0,
    "<": 0,
    ">=": 0,
    "<=": 0,
    " and ": -1,
    " or ": -1,
    " xor ": -1
};

TIBasicEvaluator.binPerformSing[" and "] = (a, b) => (a != 0 && b != 0) ? 1 : 0;
TIBasicEvaluator.binPerformSing[" or "] = (a, b) => (a != 0 || b != 0) ? 1 : 0;
TIBasicEvaluator.binPerformSing[" xor "] = (a, b) => ((a != 0) != (b != 0)) ? 1 : 0;

export {TIBasicEvaluator};
