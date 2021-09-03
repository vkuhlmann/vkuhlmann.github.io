import { TIBasicEvaluator, TIBasicControlStatements, TIBasicLogic, broadcastBinOp, broadcastUnOp } from "./tibasic-logic.js";

TIBasicEvaluator.FnRemainder = context => {
    let code = context.code;

    let vals = TIBasicLogic.ReadArgs(context, "nl,nl");
    return broadcastBinOp((a, b) => {
        if (a != Math.floor(a) || b != Math.floor(b)) {
            if (code[context.pos - 1] == ")")
                context.pos--;
            throw context.DomainError();
        }
        return a % b;
    })(context, vals[0], vals[1]);
}

TIBasicEvaluator.FnInt = context => {
    let vals = TIBasicLogic.ReadArgs(context, "nl");
    return broadcastUnOp(a => {
        return Math.floor(a);
    })(context, vals[0]);
}

TIBasicEvaluator.FnAbs = context => {
    let vals = TIBasicLogic.ReadArgs(context, "nl");
    return broadcastUnOp(a => {
        return Math.abs(a);
    })(context, vals[0]);
}

TIBasicEvaluator.FnRound = context => {
    let vals = TIBasicLogic.ReadArgs(context, "nl,[n");
    if (vals.length == 1)
        vals[1] = 0;
    return broadcastBinOp((a, b) => {
        return Math.round(a * Math.pow(10, b)) / Math.pow(10, b);
    })(context, vals[0], vals[1]);
}

TIBasicEvaluator.FnMax = context => {
    let vals = TIBasicLogic.ReadArgs(context, "nl,nl");
    return broadcastBinOp((a, b) => {
        return Math.max(a, b);
    })(context, vals[0], vals[1]);
}

TIBasicEvaluator.FnMin = context => {
    let vals = TIBasicLogic.ReadArgs(context, "nl,nl");
    return broadcastBinOp((a, b) => {
        return Math.min(a, b);
    })(context, vals[0], vals[1]);
}

TIBasicEvaluator.FnStartTmr = context => {
    return context.StartTmr();
}

TIBasicEvaluator.FnGetKey = context => {
    return context.GetKey();
}

TIBasicEvaluator.FnNot = context => {
    let vals = TIBasicLogic.ReadArgs(context, "nl");
    return broadcastUnOp(a => {
        return (a == 0) ? 1 : 0;
    })(context, vals[0]);
}

TIBasicEvaluator.FnDim = context => {
    let code = context.code;
    if (code[context.pos] != "(")
        throw context.SyntaxError();
    context.pos++;

    if (code[context.pos] != "l")
        throw context.SyntaxError();
    let listName = TIBasicLogic.ReadListName(context);
    if (context.memory[listName] == null)
        throw context.UndefinedError();

    if (code[context.pos] != ")" && code[context.pos] != "\n")
        throw context.SyntaxError();
    if (code[context.pos] == ")")
        context.pos++;

    return listName.length;
}


TIBasicControlStatements.InstrIf = context => {
    let code = context.code;

    if (code[context.pos] != ' ')
        throw context.SyntaxError();
    context.pos++;
    let expr = TIBasicEvaluator.Evaluate(context);
    if (code[context.pos] != '\n')
        throw context.SyntaxError();
    context.pos++;

    let bool = (expr != 0);

    let lineAfterIfPos = context.pos;
    let tok = TIBasicLogic.ReadFunctionName(context);
    if (tok == "Then") {
        if (code[context.pos] != '\n')
            throw context.SyntaxError();
        context.pos++;

        context.PushStack({ type: "If", value: bool });

        if (!bool)
            context.pos = TIBasicLogic.FindEnd(context, true);
        return;
    }
    context.pos = lineAfterIfPos;

    if (expr == 0) {
        let newl = code.indexOf('\n', context.pos);
        if (newl != -1)
            context.pos = newl + 1;
        else
            context.pos = code.length;
    }
}

TIBasicControlStatements.InstrElse = context => {
    if (context.stack.length < 1)
        throw context.SyntaxError();
    let a = context.stack[context.stack.length - 1];
    if (a.type != "If")
        throw context.SyntaxError();

    let code = context.code;
    if (code[context.pos] != '\n')
        throw context.SyntaxError();
    context.pos++;

    if (a.value)
        context.pos = TIBasicLogic.FindEnd(context);
}

TIBasicControlStatements.InstrEnd = context => {
    let a = context.PopStack();
    if (a == null)
        throw context.SyntaxError();

    let code = context.code;
    if (code[context.pos] != '\n')
        throw context.SyntaxError();
    context.pos++;

    if (a.type == "If" || a.type == "WhileFalse" || a.type == "ForFalse") {
        return;

    } else if (a.type == "While" || a.type == "Repeat") {
        let afterEnd = context.pos;
        context.pos = a.condPos;
        let expr = TIBasicEvaluator.Evaluate(context);
        if (code[context.pos] != '\n')
            throw context.SyntaxError();
        context.pos++;
        let bool = (expr != 0);
        if (!bool)
            context.pos = afterEnd;
        else
            context.PushStack(a);
        return;

    } else if (a.type == "For") {
        context.memory[a.variable] += a.increment;
        let bool = a.condition();
        if (bool) {
            context.pos = a.execPos;
            context.PushStack(a);
        }
        return;

    } else {
        throw Error("Unknown environment");
    }
}

TIBasicControlStatements.InstrWhile = context => {
    let code = context.code;

    if (code[context.pos] != ' ')
        throw context.SyntaxError();
    context.pos++;
    let condPos = context.pos;

    let expr = TIBasicEvaluator.Evaluate(context);
    if (code[context.pos] != '\n')
        throw context.SyntaxError();
    context.pos++;

    let bool = (expr != 0);

    if (!bool) {
        context.PushStack({ type: "WhileFalse" });
        let endPos = TIBasicLogic.FindEnd(context);
        context.pos = endPos;
        return;
    }

    let execPos = context.pos;

    context.PushStack({
        "type": "While",
        "condPos": condPos,
        "execPos": execPos
    });
}

TIBasicControlStatements.InstrRepeat = context => {
    let code = context.code;

    if (code[context.pos] != ' ')
        throw context.SyntaxError();
    context.pos++;
    let condPos = context.pos;

    let expr = TIBasicEvaluator.Evaluate(context);
    if (code[context.pos] != '\n')
        throw context.SyntaxError();
    context.pos++;

    let execPos = context.pos;

    context.PushStack({
        "type": "Repeat",
        "condPos": condPos,
        "execPos": execPos
    });
}

TIBasicControlStatements.InstrFor = context => {
    let code = context.code;

    let vals = TIBasicLogic.ReadArgs(context, "v,n,n,[n");
    if (code[context.pos] != '\n')
        throw context.SyntaxError();
    context.pos++;
    let execPos = context.pos;

    if (vals.length < 4)
        vals = [...vals, 1];
    if (vals[3] == 0)
        throw context.IncrementError();

    context.memory[vals[0]] = vals[1];

    let condition = null;
    if (vals[3] > 0) {
        condition = () => {
            return context.memory[vals[0]] <= vals[2];
        };
    } else {
        condition = () => {
            return context.memory[vals[0]] >= vals[2];
        };
    }

    let bool = condition();

    if (!bool) {
        context.PushStack({ type: "ForFalse" });
        let endPos = TIBasicLogic.FindEnd(context);
        context.pos = endPos;
        return;
    }

    context.PushStack({
        "type": "For",
        "execPos": execPos,
        "variable": vals[0],
        "increment": vals[3],
        "condition": condition
    });
}

function IsTIAlphanumeric(c) {
    return (c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z');
}

TIBasicControlStatements.InstrLbl = context => {
    let code = context.code;
    if (code[context.pos] != ' ')
        throw context.SyntaxError();
    context.pos++;
    if (!IsTIAlphanumeric(code[context.pos]))
        throw context.SyntaxError();
    context.pos++;
    if (code[context.pos] == "\n")
        return;

    if (!IsTIAlphanumeric(code[context.pos]))
        throw context.SyntaxError();
    context.pos++;
    if (code[context.pos] != "\n")
        throw context.SyntaxError();
};

TIBasicControlStatements.InstrGoto = context => {
    let code = context.code;
    if (code[context.pos] != ' ')
        throw context.SyntaxError();
    context.pos++;

    if (!IsTIAlphanumeric(code[context.pos]))
        throw context.SyntaxError();
    let label = code[context.pos];

    context.pos++;
    if (code[context.pos] == "\n")
        return;

    if (!IsTIAlphanumeric(code[context.pos]))
        throw context.SyntaxError();
    label += code[context.pos];
    context.pos++;

    if (code[context.pos] != "\n")
        throw context.SyntaxError();
    let gotoIndex = code.search(new RegExp(`(?<=\n|^)Lbl ${label}\n`));
    if (gotoIndex == -1)
        throw context.LabelError();
    context.pos = code.indexOf("\n", gotoIndex) + 1;
};

TIBasicControlStatements.InstrStop = context => {
    let code = context.code;
    if (code[context.pos] != '\n')
        throw context.SyntaxError();
    context.pos = code.length;
};

TIBasicControlStatements.InstrPause = context => {
    let code = context.code;
    let origPos = code.lastIndexOf("\n", context.pos - 1) + 1;

    if (!context.isPaused) {
        if (code[context.pos] == " ") {
            context.pos++;
            if (code[context.pos] != "\n") {
                let val = TIBasicEvaluator.Evaluate(context, "nls");
                TIBasicLogic.DisplVal(context, val);
            }
        }
        if (code[context.pos] != "\n")
            throw context.SyntaxError();

        context.isPaused = true;
        context.pos = origPos;
        context.SetStatus("Paused");
    }
    context.pos = origPos;

    if (context.GetKey() == 105) {
        context.isPaused = false;
        context.SetStatus("Uncompleted");
        context.pos = code.indexOf("\n", context.pos) + 1;
    }
}

export { TIBasicLogic }
