import React, { useState, useRef, useContext, useEffect, useCallback } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import usePrismTheme from '@theme/hooks/usePrismTheme';
import clsx from "clsx";

import DocusaurusThemeContext from '@theme/ThemeContext';

import { darkTheme, lightTheme } from "./theme"

import _ from "lodash";

import texWorkshopDefaults from "../vscodeconfig/workshopDefaults.module.json";
import texWorkshopExtras from "../vscodeconfig/workshopExtras.module.json";
import * as jsonc from "jsonc-parser";

import {
    Label,
    Input,
    Textarea,
    Checkbox,
    Box,
    Flex,
    Button,
    ThemeProvider,
    Alert
} from 'theme-ui';

const SETTING_TOOLS = "latex-workshop.latex.tools";
const SETTING_RECIPES = "latex-workshop.latex.recipes";

const TOOLS_PATH = [SETTING_TOOLS];
const RECIPES_PATH = [SETTING_RECIPES];


let jsoncFormatting = {
    formattingOptions: {
        tabSize: 4,
        insertSpaces: true
    }
};

const getDefaultTools = () => {
    return texWorkshopDefaults[SETTING_TOOLS];
};
const getDefaultRecipes = () => {
    return texWorkshopDefaults[SETTING_RECIPES];
};

const ensureTools = ({ obj }) => {
    let parseErrors = [];
    let toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj, parseErrors), TOOLS_PATH);
    if (toolsNode == null) {
        toolsNode = getDefaultTools();

        let edits = jsonc.modify(obj, TOOLS_PATH, toolsNode, jsoncFormatting);
        obj = jsonc.applyEdits(obj, edits);
    }
    return { obj, parseErrors };
};

const ensureRecipes = ({ obj }) => {
    let parseErrors = [];
    let recipesNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj, parseErrors), RECIPES_PATH);
    if (recipesNode == null) {
        recipesNode = getDefaultRecipes();

        let edits = jsonc.modify(obj, RECIPES_PATH, recipesNode, jsoncFormatting);
        obj = jsonc.applyEdits(obj, edits);
    }
    return { obj, parseErrors };
};


const ensureTool = (obj, toolName) => {
    let parseErrors;
    ({ obj, parseErrors } = ensureTools({ obj }));

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


const updateTool = ({ obj, toolPredicate, toolUpdate }) => {
    let toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj), TOOLS_PATH);
    let tools = jsonc.getNodeValue(toolsNode);
    if (typeof (toolPredicate) == "string" || toolPredicate instanceof String) {
        let toolName = toolPredicate;
        toolPredicate = tool => tool.name == toolName;
        console.log("Converted predicate");
    }
    console.log("Tools is");
    console.log(tools);

    let index = _.findIndex(tools, toolPredicate);
    console.log(`Update tool found index ${index}`);
    if (index == -1)
        return { obj, found: false };

    const { newValue, path } = toolUpdate(tools[index]);

    toolsNode = null;
    obj = jsonc.applyEdits(obj,
        jsonc.modify(obj, [...TOOLS_PATH, index, ...path],
            newValue, {}
        )
    );
    return { obj, found: false };
};

const updateToolCommand = ({ obj, toolName, command }) => {
    return updateTool({
        obj, toolPredicate: toolName, toolUpdate: origVal => {
            console.log(`Changing command from ${origVal.command} to ` +
                `${command}`);
            return {
                newValue: command,
                path: ["command"]
            };
        }
    });
};

const ensureToolWithCommand = ({ obj, toolName, command }) => {
    let parseErrors;
    ({ obj, parseErrors } = ensureTools({ obj }));

    let modified = false;
    ({ obj, modified } = ensureTool(obj, toolName));
    console.log(`Updating ${toolName} command to ${command}`);
    ({ obj } = updateToolCommand({ obj, toolName, command }));
    return { obj, parseErrors, wasToolAdded: modified };
};

const ensureRecipe = ({ obj, recipeName }) => {
    let parseErrors;
    ({ obj, parseErrors } = ensureRecipes({ obj }));

    let defaultValue = _.find(getDefaultRecipes(),
        recipe => recipe.name === recipeName);

    if (defaultValue == null)
        throw `Can't ensure recipe ${recipeName}, no default value provided!`;

    let recipesNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj), RECIPES_PATH);
    let recipes = jsonc.getNodeValue(recipesNode);

    let index = _.findIndex(recipes, recipe => recipe.name === recipeName);
    if (index == -1) {
        obj = jsonc.applyEdits(obj, jsonc.modify(
            obj, [...RECIPES_PATH, 0], defaultValue,
            { ...jsoncFormatting, isArrayInsertion: true }
        ));
        return { obj, modified: true, parseErrors };
    } else {
        return { obj, modified: false, parseErrors };
    }
}

const addPdflatexDirs = ({obj}) => {
    ({obj} = ensureRecipes({obj}));
    ({obj} = ensureTools({obj}));

    let toolsNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj), TOOLS_PATH);
    let tools = jsonc.getNodeValue(toolsNode);

    let index = _.findIndex(tools, tool => tool.name === "pdflatexDirs");
    if (index == -1) {
        obj = jsonc.applyEdits(obj, jsonc.modify(
            obj, [...TOOLS_PATH, 0], texWorkshopExtras.tools.pdflatexDirs,
            { ...jsoncFormatting, isArrayInsertion: true }
        ));
    }

    let recipesNode = jsonc.findNodeAtLocation(jsonc.parseTree(obj), RECIPES_PATH);
    let recipes = jsonc.getNodeValue(recipesNode);

    index = _.findIndex(recipes, recipe => recipe.name === "pdflatexDirs");
    if (index == -1) {
        obj = jsonc.applyEdits(obj, jsonc.modify(
            obj, [...RECIPES_PATH, 0], texWorkshopExtras.recipes.pdflatexDirs,
            { ...jsoncFormatting, isArrayInsertion: true }
        ));
    }

    return {obj};
};

export default (props) => {
    let context = useContext(DocusaurusThemeContext);

    let theme = context.isDarkTheme ? darkTheme : lightTheme;
    const [doPdflatexFull, setDoPdflatexFull] = useState(false);
    const [doPdflatexRecipe, setDoPdflatexRecipe] = useState(true);
    const [doSetBiberPath, setDoSetBiberPath] = useState(true);
    const [doPdflatexDirs, setDoPdflatexDirs] = useState(false);

    const [statusMsg, setStatusMsg] = useState(false);

    const [pdflatexfullpath, setPdflatexfullpath] = useState("");

    //let pdflatexfullpath = useRef();
    let currConfig = useRef();
    let newConfig = useRef();

    const onCheckChange = e => {
        setDoPdflatexFull(!doPdflatexFull);
        let cancel = false;

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

        let obj = val;

        if (doPdflatexFull) {
            if (pdflatexfullpath == null || pdflatexfullpath.length < 2) {
                throw "Please provide the full path to pdflatex!";
            }

            ({ obj } = ensureToolWithCommand({ obj, toolName: "pdflatex", command: pdflatexfullpath }));

            if (doSetBiberPath && biberPath != null)
                ({ obj } = ensureToolWithCommand({ obj, toolName: "biber", command: biberPath }));
        }

        if (doPdflatexRecipe)
            ({ obj } = ensureRecipe({ obj, recipeName: "pdflatex" }));

        if (doPdflatexDirs)
            ({obj} = addPdflatexDirs({obj}));

        newConfig.current.value = obj;
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
                let lineStart = val.lastIndexOf("\n", e.target.selectionStart - 1) + 1;
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
                <Label htmlFor="currConfig" mb={1}><span>Current <code>settings.json</code></span></Label>
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
                        <Checkbox onChange={e => setDoPdflatexRecipe(e.target.checked)} checked={doPdflatexRecipe} />
                        <Box>
                            Add pdflatex-only recipe
                        </Box>
                    </Label>
                </Box>
                <Box>
                    <Label mb={3}>
                        <Checkbox onChange={e => setDoPdflatexDirs(e.target.checked)} checked={doPdflatexDirs} />
                        <Box>
                            Add pdflatex variation where auxiliary files are put
                            in a different directory to reduce clutter. I call
                            this pdflatexDirs, and I find this quite useful.
                            (MiKTeX only)
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

                <Alert variant="danger" mb={2}>
                    Make sure to back-up your previous settings.json before replacing
                    it with the one below! I can't guarantee this wizard is flawless!
                </Alert>
                <Label htmlFor="currConfig" mb={1}><span>New <code>settings.json</code></span></Label>
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
