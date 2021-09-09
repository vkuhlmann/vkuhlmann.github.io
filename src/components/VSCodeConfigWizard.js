import React, { useState, useRef, useContext, useEffect, useCallback } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import usePrismTheme from '@theme/hooks/usePrismTheme';
import clsx from "clsx";

import DocusaurusThemeContext from '@theme/ThemeContext';

// import { Button, Checkbox, Label, Textarea, ThemeProvider } from 'theme-ui'
// // import { Button, Checkbox, Label, Textarea } from 'rebass'
import { darkTheme, lightTheme } from "./theme"
//import styles from "../scss/ticode.module.scss";

import _ from "lodash";

import texWorkshopDefaults from "../vscodeconfig/workshopDefaults.module.json";
// import {parse as jsoncParse, parseTree as jsoncParseTree, findNodeAtLocation as
//     jsoncFindNodeAtLocation,
//     modify as jsoncModify,
//     getNodeValue as jsoncGetNodeValue
//  } from "jsonc-parser";

import * as jsonc from "jsonc-parser";

// import { Checkbox, Button, Label, Textarea, Box } from '@theme-ui/components';
import {
    Label,
    Input,
    Textarea,
    Checkbox,
    Box,
    Flex,
    Button,
    ThemeProvider
} from 'theme-ui';

// import { useTheme as useThemeEmotion, ThemeProvider, withTheme as withThemeEmotion } from '@emotion/react'
// import theme from '@rebass/preset'

const SETTING_TOOLS = "latex-workshop.latex.tools";
const SETTING_RECIPES = "latex-workshop.latex.recipes";

const TOOLS_PATH = [SETTING_TOOLS];


let jsoncFormatting = {
    formattingOptions: {
        tabSize: 4,
        insertSpaces: true
    }
};

const getDefaultTools = () => {
    return texWorkshopDefaults[SETTING_TOOLS];
};

const ensureTools = ({obj}) => {
    let parseErrors = [];
    let toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj, parseErrors), TOOLS_PATH);
    if (toolsNode == null) {
        toolsNode = getDefaultTools();

        let edits = jsonc.modify(obj, TOOLS_PATH, toolsNode, jsoncFormatting);
        obj = jsonc.applyEdits(obj, edits);
    }
    return {obj, parseErrors};
};

const ensureTool = (obj, toolName) => {
    let defaultValue = _.find(getDefaultTools(),
        tool => tool.name === toolName);

    if (defaultValue == null)
        throw `Can't ensure tool ${toolName}, no default value provided!`;

    let toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj), TOOLS_PATH);
    let tools = jsonc.getNodeValue(toolsNode);

    let index = _.findIndex(tools, tool => tool.name === toolName);
    if (index == -1) {
        obj = jsonc.applyEdits(obj, jsonc.modify(
            obj, [...TOOLS_PATH, 0], defaultValue,
            { ...jsoncFormatting, isArrayInsertion: true }
        ));
        return { obj, modified: true };
    } else {
        return { obj, modified: false };
    }
};


const updateTool = ({obj, toolPredicate, toolUpdate}) => {
    let toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj), TOOLS_PATH);
    let tools = jsonc.getNodeValue(toolsNode);
    if (typeof(toolPredicate) == "string" || toolPredicate instanceof String) {
        let toolName = toolPredicate;
        toolPredicate = tool => tool.name == toolName;
        console.log("Converted predicate");
    }
    console.log("Tools is");
    console.log(tools);

    let index = _.findIndex(tools, toolPredicate);
    console.log(`Update tool found index ${index}`);
    if (index == -1)
        return {obj, found: false};

    const {newValue, path} = toolUpdate(tools[index]);

    toolsNode = null;
    obj = jsonc.applyEdits(obj,
        jsonc.modify(obj, [...TOOLS_PATH, index, ...path],
            newValue, {}
        )
    );
    return {obj, found: false};
};

const updateToolCommand = ({obj, toolPredicate, command}) => {
    return updateTool({obj, toolPredicate, toolUpdate: origVal => {
        console.log(`Changing command from ${origVal.command} to ` +
        `${command}`);
        return {
            newValue: command,
            path: ["command"]
        };
    }});
};

// const configSetPdflatexFullpath = (obj, fullPath, biberPath) => {
//     // let tools = obj[SETTING_TOOLS] ?? texWorkshopDefaults[SETTING_TOOLS];

//     // let res = _.find(tools, tool => tool.name == "pdflatex");
//     // res.command = fullPath;

//     // obj["latex-workshop.latex.tools"] = tools;
//     // return obj;

//     let toolsPath = [SETTING_TOOLS];

//     let errors = [];

//     console.log("Errors is");
//     console.log(errors);

//     let toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj, errors), toolsPath);
//     if (toolsNode == null) {
//         toolsNode = texWorkshopDefaults[SETTING_TOOLS];

//         let edits = jsonc.modify(obj, toolsPath, toolsNode, jsoncFormatting);
//         obj = jsonc.applyEdits(obj, edits);
//         toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj, errors), toolsPath);
//     }

//     const ensureTool = (obj, toolName) => {
//         let defaultValue = _.find(texWorkshopDefaults[SETTING_TOOLS],
//             tool => tool.name === toolName);

//         if (defaultValue == null)
//             throw `Can't ensure tool ${toolName}, no default value provided!`;

//         let toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj, errors),
//             toolsPath);

//         let tools = jsonc.getNodeValue(toolsNode);
//         let index = _.findIndex(tools, tool => tool.name === toolName);
//         if (index == -1) {
//             obj = jsonc.applyEdits(obj, jsonc.modify(
//                 obj, [...toolsPath, 0], defaultValue,
//                 { ...jsoncFormatting, isArrayInsertion: true }
//             ));
//             return { obj, modified: true };
//         } else {
//             return { obj, modified: false };
//         }
//     };

//     const updateToolCommand = (obj, toolName, newValue) => {
//         let toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj, errors), toolsPath);
//         let tools = jsonc.getNodeValue(toolsNode);
//         let index = _.findIndex(tools, tool => tool.name == toolName);
//         console.log(`Previous ${toolName} cmd: ${tools[index].command}`);

//         toolsNode = null;
//         obj = jsonc.applyEdits(obj,
//             jsonc.modify(obj, [...toolsPath, index, "command"],
//                 newValue, {}
//             )
//         );
//         return obj;
//     }

//     obj = ensureTool(obj, "pdflatex").obj;
//     obj = updateToolCommand(obj, "pdflatex", fullPath);

//     if (biberPath != null) {
//         obj = ensureTool(obj, "biber").obj;
//         obj = updateToolCommand(obj, "biber", biberPath);
//     }

//     console.log("Object is");
//     console.log(jsonc.parseTree(obj, errors));
//     return obj;
// };


export default (props) => {
    let context = useContext(DocusaurusThemeContext);

    let theme = context.isDarkTheme ? darkTheme : lightTheme;
    const [doPdflatexFull, setDoPdflatexFull] = useState(false);
    const [doPdflatexRecipe, setDoPdflatexRecipe] = useState(false);
    const [doSetBiberPath, setDoSetBiberPath] = useState(true);

    const [statusMsg, setStatusMsg] = useState(false);

    const [pdflatexfullpath, setPdflatexfullpath] = useState("");

    //let pdflatexfullpath = useRef();
    let currConfig = useRef();
    let newConfig = useRef();

    const onCheckChange = e => {
        // if (e.checked) {
        // }

        setDoPdflatexFull(!doPdflatexFull);
        let cancel = false;

        // if (pdflatexfullpath.current) {
        //     if (e.checked) {
        //         pdflatexfullpath.current.setAttribute("disabled", "disabled");
        //     } else {
        //         pdflatexfullpath.current.removeAttribute("disabled");
        //     }
        //     // pdflatexfullpath.current.disabled = !e.checked;
        // }

        if (cancel) {
            let target = e.target;

            setTimeout(function () {
                target.checked = doPdflatexFull;
            }, 0);

            e.preventDefault();
            e.stopPropagation();
        }
    };

    let pdflatexFullDisabledStyles = {
        ...(!doPdflatexFull && {
            //backgroundColor: "var(--theme-ui-colors-disabledBackground)",
            color: "var(--theme-ui-colors-disabledForeground)",
        })
    };

    const generateUnsafe = () => {
        setStatusMsg(false);
        if (newConfig.current)
            newConfig.current.value = "";

        let el = currConfig.current;
        if (!el)
            throw "Can't find textarea!";

        let val = el.value;
        if (val.length == 0)
            throw "You need to provide your current config.json first!";

        // let obj = null;
        // try {
        //     //obj = JSON.parse(val);
        //     ///obj = jsoncParse(val);
        //     obj = jsoncParseTree(val);
        // } catch(ex) {
        //     throw `Can't parse the config.json. Have you copied the file completely?
        //     Details: ${ex}`;
        // }

        let obj = val;

        if (doPdflatexFull) {
            ({obj} = ensureTools({obj}));
            let modified = false;
            ({obj, modified} = ensureTool(obj, "pdflatex"));
            if (modified) {
                console.log(`Added default pdflatex`);
            }
            ({obj} = updateToolCommand({obj, toolPredicate: "pdflatex", command: pdflatexfullpath}));

            //obj = configSetPdflatexFullpath(obj, pdflatexfullpath, doSetBiberPath ? biberPath : null) ?? obj;
        }

        if (doPdflatexFull && doSetBiberPath && biberPath != null) {
            ({obj} = ensureTools({obj}));
            let modified = false;
            ({obj, modified} = ensureTool(obj, "biber"));
            if (modified) {
                console.log(`Added default biber`);
            }
            ({obj} = updateToolCommand({obj, toolPredicate: "biber", command: biberPath}));
        }

        newConfig.current.value = obj;
        //newConfig.current.value = JSON.stringify(obj, null, 4);
    };

    const generate = () => {
        setStatusMsg();
        try {
            generateUnsafe();
        } catch (err) {
            setStatusMsg(`${err}`);
            throw err;
        }
    };

    const currConfigKeyDown = (e) => {
        // BEGIN Source: https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea
        // Modified
        if (e.key == 'Tab') {
            e.preventDefault();
            var start = e.target.selectionStart;
            var end = e.target.selectionEnd;

            e.target.value = e.target.value.substring(0, start) +
                "    " + e.target.value.substring(end);

            e.target.selectionStart =
                e.target.selectionEnd = start + 4;
        }
        // END Source

        if (e.key == "Backspace") {
            let val = e.target.value;
            if (e.target.selectionStart == e.target.selectionEnd) {
                let lineStart = val.lastIndexOf("\n", e.target.selectionStart) + 1;
                let termination = val.substring(lineStart,
                    e.target.selectionStart);
                console.log(`Termination is (${termination})`);

                let match = termination.match(/^(?<beforeOnLine>(    |\t)*)(?<removed>\s+)$/);
                if (match != null) {
                    let prevPos = e.target.selectionStart;
                    e.target.value = val.substring(0, lineStart)
                        + match.groups.beforeOnLine + val.substring(e.target.selectionEnd);

                    e.target.selectionStart = prevPos - match.groups.removed.length;
                    e.target.selectionEnd = e.target.selectionStart;
                    e.preventDefault();
                }
            }
        }
    };

    let biberPath = null;
    let pdflatexPathMatch = pdflatexfullpath.match(/(?<before>^.*(\/|\\))pdflatex(?<after>(\.exe)?)$/);
    if (pdflatexPathMatch != null) {
        biberPath = `${pdflatexPathMatch.groups.before}biber${pdflatexPathMatch.groups.after}`;
    }

    return (
        <ThemeProvider theme={theme}>
            <Box as="form" onSubmit={(e) => e.preventDefault()}>
                <Label htmlFor="currConfig" mb={1}>Current <code>settings.json</code></Label>
                <Textarea name="currConfig" id="currConfig" rows={6} mb={3}
                    ref={currConfig} onKeyDown={currConfigKeyDown} />
                <Box>
                    <Label mb={3}>
                        <Checkbox onChange={onCheckChange} checked={doPdflatexFull} />
                        <Box>
                            Set pdflatex to full path
                        </Box>
                    </Label>
                    <Box ml={40} sx={pdflatexFullDisabledStyles}>
                        <Label htmlFor="pdflatexfullpath">Full path to pdflatex</Label>
                        <Input name="pdflatexfullpath" id="pdflatexfullpath" mb={3}
                            disabled={!doPdflatexFull} value={pdflatexfullpath}
                            onChange={e => setPdflatexfullpath(e.target.value)} />

                        <Label {...(!biberPath && {
                            color: "var(--theme-ui-colors-disabledForeground)",
                        })} mb={3}
                        >
                            <Checkbox checked={
                                biberPath ? doSetBiberPath : false}
                                disabled={!doPdflatexFull || !biberPath}
                                onChange={e => setDoSetBiberPath(!doSetBiberPath)} />
                            <Box>
                                Set path for biber to{` `}
                                {biberPath ??
                                    (<span style={{ color: "red" }}>
                                        Can't convert path
                                    </span>)
                                }
                            </Box>
                        </Label>
                    </Box>
                </Box>
                <Box>
                    <Label mb={3}>
                        <Checkbox onChange={e => setDoPdflatexRecipe(e.checked)} checked={doPdflatexRecipe} />
                        <Box>
                            Add pdflatex-only recipe
                        </Box>
                    </Label>
                </Box>
                {statusMsg && (
                    <p style={{ color: "red" }}>{statusMsg.replace(/\r/g, "").split("\n").map((line, index) =>
                    (<React.Fragment key={index}>
                        {line}<br />
                    </React.Fragment>)
                    )}</p>
                )}
                <Button theme={theme} mb={10} onClick={generate}>Generate</Button>

                <Textarea name="newConfig" id="newConfig" ref={newConfig} rows={6} mb={3} />
            </Box>
        </ThemeProvider>
    );

    // return (
    //     // <div style={{ display: "flex", flexFlow: "column nowrap", gap: "5px" }}>
    //         <p>Paste your whole <code>settings.json</code> file in the text box below.</p>
    //         <Textarea theme={theme}>
    //         </Textarea>
    //         <Box theme={theme}>
    //             <Label theme={theme}>
    //                 <Checkbox theme={theme} />

    //                 I'm experiencing
    //             </Label>
    //         </Box>
    //         <Button theme={theme}>Test</Button>
    //     // </div>
    // );
}

// export default (props) => {
//     const { children } = props;

//     const prismTheme = usePrismTheme();
//     // console.log("Dark theme is");
//     // console.log(darkTheme);

//     // theme={darkTheme}
//     return (
//         <>
//         <ThemeProvider theme={null}>
//             Paste your whole <code>settings.json</code> file in the text box below.
//             <Button>Test</Button> 

//             {/* <Textarea>

//             </Textarea>
//             <Label>
//                 <Checkbox defaultChecked={true} />
//             </Label>
//             <Button>Test</Button> */}
//         </ThemeProvider>
//         </>
//     );

//     // return (<Highlight
//     //   {...defaultProps}
//     //   theme={prismTheme}
//     //   code={code}
//     //   language={language}>
//     //   {({className, style, tokens, getLineProps, getTokenProps}) => (
//     //     <code style={props.nobackdrop ? {} : style} className={clsx(className, language)}>
//     //     {tokens.map((line, i) => {
//     //         if (line.length === 1 && line[0].content === '') {
//     //             line[0].content = '\n'; // eslint-disable-line no-param-reassign
//     //         }

//     //         const lineProps = {};// getLineProps({line, key: i});

//     //         return (
//     //         <span key={i} {...lineProps}>
//     //             {line.map((token, key) => (
//     //             <span key={key} {...getTokenProps({token, key})} />
//     //             ))}
//     //         </span>
//     //         );
//     //     })}
//     //     </code>
//     //   )}
//     // </Highlight>);
// }
