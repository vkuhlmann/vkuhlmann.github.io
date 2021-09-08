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
import {parse as jsoncParse, parseTree as jsoncParseTree, findNodeAtLocation as
    jsoncFindNodeAtLocation,
    modify as jsoncModify } from "jsonc-parser";

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

const configSetPdflatexFullpath = (obj, fullPath) => {
    // let tools = obj[SETTING_TOOLS] ?? texWorkshopDefaults[SETTING_TOOLS];
    
    // let res = _.find(tools, tool => tool.name == "pdflatex");
    // res.command = fullPath;

    // obj["latex-workshop.latex.tools"] = tools;
    // return obj;

    let toolsPath = `['${SETTING_TOOLS}']`;
    toolsPath = [SETTING_TOOLS];

    let rootNode = jsoncParseTree(obj);

    let toolsNode = jsoncFindNodeAtLocation(rootNode, toolsPath);
    console.log("Toolsnode is");
    console.log(toolsNode);
    if (toolsNode == null) {
        toolsNode = texWorkshopDefaults[SETTING_TOOLS];
        let edits = jsoncModify(obj, toolsPath, toolsNode, {});
        console.log("Edits are");
        console.log(edits);
    }

    console.log("Object is");
    console.log(obj);

};


export default (props) => {
    let context = useContext(DocusaurusThemeContext);

    let theme = context.isDarkTheme ? darkTheme : lightTheme;
    const [doPdflatexFull, setDoPdflatexFull] = useState(false);
    const [doPdflatexRecipe, setDoPdflatexRecipe] = useState(false);
    const [statusMsg, setStatusMsg] = useState(false);

    const [pdflatexfullpath, setPdflatexfullpath] = useState("D:\\Programs\\TeX\\pdflatex.exe");

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

            setTimeout(function() {
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

        if (doPdflatexFull)
            obj = configSetPdflatexFullpath(obj, pdflatexfullpath) ?? obj;
        
        //newConfig.current.value = JSON.stringify(obj, null, 4);


    };

    const generate = () => {
        setStatusMsg();
        try {
            generateUnsafe();
        } catch(err) {
            setStatusMsg(`${err}`);
            throw err;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box as="form" onSubmit={(e) => e.preventDefault()}>
                <Label htmlFor="currConfig">Current <code>settings.json</code></Label>
                <Textarea name="currConfig" id="currConfig" rows={6} mb={3}
                    ref={currConfig} />
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
                    <p style={{color: "red"}}>{statusMsg.replace(/\r/g, "").split("\n").map((line, index) => 
                        (<React.Fragment key={index}>
                            {line}<br/>
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
