import { TIBasicContext } from "./tibasic-logic.js";
import { TIBasicLogic } from "./tibasic-functions.js";
import React, { useState, useRef, useContext, useEffect, useCallback } from "react";
//import tiStyles from "css-loader!sass-loader!../scss/ticode.module.scss";
import tiStyles from "../scss/ticode.module.scss";
//import tiStyles from "css-loader!sass-loader!../scss/ticode.scss";
import clsx from "clsx";
import _ from "lodash";
import ThemeContext from '@theme/ThemeContext';
import Translate, { translate } from '@docusaurus/Translate';
import { useEditable } from 'use-editable';
import Highlight, { defaultProps } from 'prism-react-renderer';

//import Prism from 'prismjs/components/prism-core';
import Prism from 'prism-react-renderer/prism';

//import test from "@theme/hooks/usePrismTheme";
//import codeStyles from "css-loader!./styles.module.css";
import codeStyles from "./styles.module.css";

import darkCodeTheme from 'prism-react-renderer/themes/dracula';
import lightCodeTheme from 'prism-react-renderer/themes/github';

import copy from 'copy-text-to-clipboard';
import Edit from "./Edit";

//const codeStyles = {};
console.log("TI-styles:");
console.log(tiStyles);

Prism.languages.TIBasic = {
    "function": {
        pattern: /ClrHome|Output|If|Else|End|Then|While|Break/
    }
}

//import codeStyles from '!style-loader!css-loader!@theme/CodeBlock/styles.module.css';

class CalculatorButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={clsx(tiStyles["button-action"])} onClick={this.props.onClick} {...this.props}>
                {this.props.children}
            </button>
        );
    }
}

class CalculatorScreen extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);

        this.state = {
            grid: _.times(8, y => new Array(16).fill(" "))
        };
    }

    render() {
        return (<div className={clsx(tiStyles.simView, this.context.isDarkTheme && tiStyles.dark)} style={{ "flex": "0 0 auto" }}>
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

function EditorButtons(props) {
    const [showCopied, setShowCopied] = useState(false);
    const code = props.code;

    const handleCopyCode = () => {
        copy(code);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    /* Source: @docusaurus/theme-classic */
    return (
        <button
            type="button"
            aria-label={translate({
                id: 'theme.CodeBlock.copyButtonAriaLabel',
                message: 'Copy code to clipboard',
                description: 'The ARIA label for copy code blocks button',
            })}
            className={clsx(codeStyles.copyButton, 'clean-btn')}
            onClick={handleCopyCode}
            style={{marginRight: "20px"}}
            >
            {showCopied ? (
                <Translate
                    id="theme.CodeBlock.copied"
                    description="The copied button label on code blocks">
                    Copied
                </Translate>
            ) : (
                <Translate
                    id="theme.CodeBlock.copy"
                    description="The copy button label on code blocks">
                    Copy
                </Translate>
            )}
        </button>
    );
}

// Based on source code from @docusaurus/theme-class CodeBlock component
// Also contains code from https://codesandbox.io/s/use-editable-0l9kc
// (Which is a SandBox attached to https://github.com/FormidableLabs/use-editable)
function TIEditor(props) {
    const [code, setCode] = useState(props.code ?? "");
    const editorRef = useRef(null);

    let context = useContext(ThemeContext);

    let prismTheme = context.isDarkTheme ? darkCodeTheme : lightCodeTheme;
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const onEditableChange = useCallback((code) => {
        let newCode = code.slice(0, -1);
        console.log(`Setting new code to (${newCode})`);
        setCode(newCode);
        if (props.codeChanged != null)
            props.codeChanged(newCode);
    }, []);

    useEditable(editorRef, onEditableChange, {
        disabled: false,
        indentation: 2
    });

    let language = "TIBasic";
    let useDocuCode = true;

    return (
        <Highlight {...defaultProps} Prism={Prism}
            key={String(mounted)}
            theme={prismTheme}
            code={code} language={language ?? "jsx"}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div
                    className={
                        clsx(useDocuCode && codeStyles.codeBlockContainer)
                    }
                    style={style}
                >
                    {
                        useDocuCode &&
                        <div className={clsx(codeStyles.codeBlockTitle)}>
                            {props.title}
                        </div>
                    }
                    <div className={clsx(useDocuCode && codeStyles.codeBlockContent, language)}>
                        <pre className={className} style={{ ...style, height: "200px", overflowY: "scroll" }}
                            spellCheck="false" ref={editorRef}
                        >
                            <code>
                                {tokens.map((line, i) => (
                                    <React.Fragment key={`aa-${i}`}>
                                        {line
                                            .filter((token) => !token.empty)
                                            .map((token, key) => (
                                                <span {...getTokenProps({ token, key })} />
                                            ))}
                                        {"\n"}
                                    </React.Fragment>
                                ))}
                            </code>
                        </pre>

                        <EditorButtons code={code} />
                    </div>
                </div>
            )}
        </Highlight>
    );
}

export { TIEditor };

class TIBasicTryIt extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);

        this.containerRef = React.createRef();

        this.screen = React.createRef();
        this.tiContext = null;

        this.runButton = React.createRef();
        this.stopButton = React.createRef();
        this.status = React.createRef();
        this.codeEdit = React.createRef();

        this.state = {
            isRunning: false
        };

        let thecode = this.props.code;
        thecode = thecode.replace(/(^|\n)( |\t)+/g, "\n");
        thecode = thecode.replace(/##[^\n]*\n/g, "");
        thecode = thecode.replace(/^\n/g, "");
        thecode = thecode.replace(/→/g, "->");
        thecode = thecode.replace(/⌊/g, "l");
        thecode = thecode.replace(/≠/g, "!=");
        thecode = thecode.replace(/\xAD/g, "");
        this.initialCode = thecode;
        this.thecode = thecode;

        console.log("TI-styles:");
        console.log(tiStyles);
    }

    editorCodeChanged(newCode) {
        this.thecode = newCode;
    }

    render() {
        const that = this;

        try {
            return (
                <div style={{borderLeft: "2px solid hsl(0, 100%, 30%)", padding: "6px 0px 6px 6px", marginBottom: "5px"}}>
                    <TIEditor title={this.props.title ?? "Try-it:"} code={this.initialCode}
                        codeChanged={(newCode) => that.editorCodeChanged(newCode)}
                    />
                    <div className={clsx(tiStyles.card, this.context.isDarkTheme && tiStyles.dark)} style={{ padding: "8px" }}>
                        <div className={clsx(tiStyles.tiBasicSimulator)}>
                            <div style={{ display: "flex", flexFlow: "column nowrap" }}>
                                <CalculatorScreen ref={this.screen} />
                                <div dataid="status" style={{
                                    whiteSpace: "pre",
                                    maxWidth: "200px", overflow: "auto"
                                }} ref={this.status}>No status</div>
                            </div>
                            <div className={clsx(tiStyles.tryitButtons)}>
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
                </div>
            );

        } catch (error) {
            return (<div>{`Error: ${error}`}</div>);
        }
    }

    getCode() {
        //return this.codeAreaEl.current.value;
        return this.thecode;
    }

    onCalcButtonDown(key) {
        this.tiContext.SetKey(+key);
    }

    componentDidMount() {
        try {
            this.attachContext();
            console.log("Context is");
            console.log(this.tiContext);
            this.tiContext.randomizeScreen();
        } catch (error) {
            console.error(`Error mounting component: ${error}`);
        }
    }

    runCode() {
        let code = this.getCode();
        this.tiContext.SetCode(code);
        this.setState({
            isRunning: true
        });
        this.currentlyRunning = TIBasicLogic.Run(this.tiContext);

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
    }

    onRunFinished() {
        this.setState({
            isRunning: false
        });
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
