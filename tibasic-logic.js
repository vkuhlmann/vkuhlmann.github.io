"use strict";

class TIBasicContext {
    constructor () {
        this.code = "";
        this.rawCode = "";
        this.pos = 0;
        this.memory = {};
        this.timeoffset = Math.floor(new Date(2021, 4, 21).getTime() / 1000);
        this.stack = [];
        this.isStopRequested = false;
        this.key = 0;
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
                this.code[i] = '\n';
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
        return 0;
    }

    StartTmr() {
        return Math.floor(getTime() / 1000) - this.timeoffset;
    }

    Break() {
        this.isStopRequested = true;
    }

    SetStatus(status) {
        
    }
}

// Source: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


class TIBasicLogic {
    // v: variable, n: number, s: string

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
            if (code[context.pos] >= 'A' && code[context.pos] <= 'Z') {
                context.memory[code[context.pos]] = val;
                context.pos++;
            } else {
                throw context.SyntaxError();
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
        code = context.code;

        let status = null;
        try {
            while (context.pos < code.length) {
                if (context.isStopRequested) {
                    context.isStopRequested = false;
                    return;
                }
                TIBasicLogic.RunStatement(context);
                await sleep(20);
            }
        } catch (ex) {
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
}

class TIBasicControlStatements {

}

class TIBasicEvaluator {
    static Evaluate(context, type = "ns") {
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

        if (typeof vals[vals.length - 1] != "number")
            throw context.DataTypeError();

        while (code[context.pos] != '\n') {
            let op = code[context.pos];
            if (">=".includes(code[context.pos + 1]))
                op += code[context.pos + 1];

            if (op == "->" || op[0] == ',' || op[0] == ')')
                break;

            if (!TIBasicEvaluator.recognizedBinOperators.includes(op))
                op = "";

            operators.push(op);
            context.pos += op.length;
            vals.push(TIBasicEvaluator.EvaluateLiteral(context));
        }

        let val = TIBasicEvaluator.ResolveBinExpress(context, vals, operators, 0, operators.length);
        if (!type.includes("n"))
            val = val.toString();
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
            if (a >= assoc)
                continue;
            assoc = a;
            i = j;
        }

        let p1 = TIBasicEvaluator.ResolveBinExpress(context, vals, operators, begin, i);
        let p2 = TIBasicEvaluator.ResolveBinExpress(context, vals, operators, i + 1, end);

        return TIBasicEvaluator.binPerform[operators[i]](p1, p2);
    }
}

TIBasicEvaluator.binPerform = {
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

TIBasicEvaluator.binAssociativity = {
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

TIBasicEvaluator.recognizedBinOperators = [];
for (let op in TIBasicEvaluator.binPerform) {
    TIBasicEvaluator.recognizedBinOperators.push(op);
}


