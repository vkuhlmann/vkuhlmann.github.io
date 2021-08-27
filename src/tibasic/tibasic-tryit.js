import { TIBasicContext } from "./tibasic-logic.js";
import { TIBasicLogic } from "./tibasic-functions.js";
import React from "react";
import ReactDOM from "react-dom";
import "!style-loader!css-loader!sass-loader!../scss/ticode.scss";
import _ from "lodash";

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
<link rel="stylesheet" href="/assets/css/style.css">
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
        <button class="button-action" data-key="95">+</button>
        <button class="button-action" data-key="85">-</button>
        <button class="button-action" data-key="102">0</button>
        <button class="button-action" data-key="25">Up</button>
        <button class="button-action" data-key="34">Down</button>
    </div>
</div>
`;

let tibasicTryitSlots = document.createElement("template");
tibasicTryitSlots.innerHTML = `
    <slot></slot>
`;

class CalculatorButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="button-action" onClick={this.props.onClick} {...this.props}>
                {this.props.children}
            </button>
        );
    }
}

class CalculatorScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            grid: _.times(8, y => new Array(16).fill(" "))
        };
    }

    render() {
        return (<div className="simView" style={{ "flex": "0 0 auto" }}>
            {_.times(8, y => {
                return _.times(16, x => {
                    return (<span key={y * 16 + x}>{this.state.grid[y][x]}</span>);
                })
            })}
        </div>);
    }

    getScreenHeight() {
        return this.state.grid.length;
    }
}

class TIBasicTryIt extends React.Component {
    constructor(props) {
        super(props);

        this.subelement = document.createElement("div");
        this.subelement.innerHTML = "Hello!";

        this.containerRef = React.createRef();
        this.codeAreaEl = React.createRef();

        this.screen = React.createRef();
        this.tiContext = null;

        this.runButton = React.createRef();
        this.stopButton = React.createRef();
        this.status = React.createRef();

        this.state = {
            isRunning: false
        };

        let thecode = this.props.code;
        thecode = thecode.replace(/(^|\n)( |\t)+/g, "\n");
        thecode = thecode.replace(/##[^\n]*\n/g, "");
        thecode = thecode.replace(/^\n/g, "");
        thecode = thecode.replaceAll("→","->");
        thecode = thecode.replaceAll("⌊","l");
        thecode = thecode.replaceAll("≠","!=");
        thecode = thecode.replaceAll("\xAD", "");
        this.initialCode = thecode;
    }

    render() {
        const that = this;
        try {
            
            return (
                <div className="card" style={{ padding: "8px", marginBottom: "40px" }}>
                    {this.props.title ?? "Try-it:"}
                    {/*
                    <div ref={this.containerRef} />
                    <code style={{whiteSpace: "pre"}}>
                        {this.props.code}
                    </code> */}
                    <div className="tiBasicSimulator" style={{}}>
                        <div style={{ display: "flex", flexFlow: "column nowrap" }}>
                            <CalculatorScreen ref={this.screen} />
                            <div dataid="status" style={{
                                whiteSpace: "pre",
                                maxWidth: "200px", overflow: "auto"
                            }} ref={this.status}>No status</div>
                        </div>
                        <div style={{ flex: "1 0 auto" }}>
                            <textarea style={{ width: "100%", height: "100%" }} dataid="codeArea"
                                defaultValue={this.initialCode} ref={this.codeAreaEl} />
                        </div>
                        <div className="tryitButtons">
                            <CalculatorButton action="run" onClick={() => that.runCode()} ref={this.runButton}
                            disabled={this.state.isRunning}>Run</CalculatorButton>
                            <CalculatorButton action="stop" ref={this.stopButton} onClick={() => that.stopCode()} disabled={!this.state.isRunning}>Stop</CalculatorButton>
                            <CalculatorButton key="21" onClick={() => that.onCalcButtonDown(21)}>2nd</CalculatorButton>
                            <CalculatorButton key="22" onClick={() => that.onCalcButtonDown(22)}>Mode (Quit)</CalculatorButton>
                            <CalculatorButton key="105" onClick={() => that.onCalcButtonDown(105)}>Enter</CalculatorButton>
                            <CalculatorButton key="95" onClick={() => that.onCalcButtonDown(95)}>+</CalculatorButton>
                            <CalculatorButton key="85" onClick={() => that.onCalcButtonDown(85)}>-</CalculatorButton>
                            <CalculatorButton key="102" onClick={() => that.onCalcButtonDown(102)}>0</CalculatorButton>
                            <CalculatorButton key="25" onClick={() => that.onCalcButtonDown(25)}>Up</CalculatorButton>
                            <CalculatorButton key="34" onClick={() => that.onCalcButtonDown(34)}>Down</CalculatorButton>
                        </div>
                    </div>
                </div>
            );

        } catch (error) {
            <div>{`Error: ${error}`}</div>
        }
    }

    getCode() {
        return this.codeAreaEl.current.value;
    }

    onCalcButtonDown(key) {
        this.tiContext.SetKey(+key);
    }

    componentDidMount() {
        // Using code from https://stackoverflow.com/questions/38192552/react-jsx-append-html-react-object-after-initialization
        // get initialized component markup
        //var container = this.containerRef.current;
        // console.log("Container:");
        // console.log(container);

        // let el = document.createElement("div");
        // el.innerHTML = "Hello!";

        //let el = "Test";

        // start a new React render tree with the container and the cards
        // passed in from above, this is the other side of the portal.
        //ReactDOM.render(<div>{el}</div>, container);


        //this.createScreen();
        //this.randomizeScreen();

        try {
            this.attachContext();
            console.log("Context is");
            console.log(this.tiContext);
            this.tiContext.randomizeScreen();
        } catch(error) {
            console.error(`Error mounting component: ${error}`);
        }
    }

    runCode() {
        let code = this.getCode();
        this.tiContext.SetCode(code);
        //this.runButton.current.setAttribute("disabled", "disabled");
        this.setState({
            isRunning: true
        });
        //this.isRunning = true;
        this.currentlyRunning = TIBasicLogic.Run(this.tiContext);
        //this.stopButtonEl.removeAttribute("disabled", "disabled");

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

    attachContext() {
        if (this.tiContext != null)
            return;
        this.tiContext = new TryitGadgetContext(this);
        // const that = this;
        // this.runButtonEl.addEventListener("click", () => that.runCode());
        // this.stopButtonEl.addEventListener("click", () => that.stopCode());

        // for (let keyEl of this.div.querySelectorAll("[data-key]")) {
        //     if (keyEl.hasAttribute("registered"))
        //         continue;

        //     let keyNum = keyEl.getAttribute("data-key");
        //     keyEl.addEventListener("pointerdown", () => that.context.SetKey(+keyNum));

        //     keyEl.setAttribute("registered", "registered");
        // }
    }

    onRunFinished() {
        this.setState({
            isRunning: false
        });
        //this.runButton.current.removeAttribute("disabled");
        //this.stopButtonEl.setAttribute("disabled", "disabled");
    }

    stopCode() {
        this.tiContext.Break();
    }
}

export { TIBasicTryIt };



class TryitGadgetContext extends TIBasicContext {
    constructor(gadget) {
        super();
        this.gadget = gadget;
        this.screen = this.gadget.screen.current;
        console.log("Screen:");
        console.log(this.screen);
        this.screenHeight = this.screen.getScreenHeight();
    }

    ClrHome() {
        this.screen.setState(() => {
            return {
                grid: _.times(8, () => new Array(16).fill(" "))
            }
        });
        this.nextDisplayLine = 0;
    }

    Output(row, column, text) {
        let y = row - 1;
        let x = column - 1;
        let charpos = 0;

        this.screen.setState((state, props) => {
            let grid = state.grid.map(a => [...a]);
            while (y < grid.length && charpos < text.length) {
                while (x < grid[0].length && charpos < text.length) {
                    grid[y][x] = text[charpos];
                    charpos++;
                    x++
                }
                y++;
                x = 0;
            }
            return {
                "grid": grid
            };
        });
    }

    GetKey() {
        let ans = this.key;
        this.key = 0;
        return ans;
    }

    SetKey(key) {
        this.key = key;
    }

    MoveScreenUp() {
        let amount = 1;

        this.screen.setState((state, props) => {
            let grid = state.grid.map(a => [...a]);

            for (let y = 0; y < grid.length - amount; y++) {
                for (let x = 0; x < grid[y].length; x++)
                    grid[y][x] = grid[y + amount][x];
            }
            for (let y = grid.length - amount; y < grid.length; y++) {
                for (let x = 0; x < grid[y].length; x++)
                    grid[y][x] = " ";
            }
            return {
                "grid": grid
            };
        });
    }

    SetStatus(status) {
        this.gadget.status.current.innerText = status;
    }

    randomizeScreen() {
        console.log("Randomizing screen...");
        let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ                  ";

        this.screen.setState((state, props) => {
            let grid = state.grid.map(a => [...a]);

            for (let y = 0; y < grid.length; y++) {
                for (let x = 0; x < grid[y].length; x++) {
                    let charId = Math.floor(Math.random() * chars.length);
                    grid[y][x] = chars[charId];
                }
            }

            console.log("Randomized screen");
            console.log("Grid will become");
            console.log(grid);
            console.log("Original grid:");
            console.log(state.grid);

            return {
                "grid": grid
            };
        });
    }
}

//customElements.define("tibasic-tryit", TIBasicTryitGadget);
