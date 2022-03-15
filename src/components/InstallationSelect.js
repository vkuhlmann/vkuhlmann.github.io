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
    Alert,
    Radio
} from 'theme-ui';

export default (props) => {
    let context = useContext(DocusaurusThemeContext);

    let theme = context.isDarkTheme ? darkTheme : lightTheme;
    const [OS, setOS] = useState("Windows");

    let showOS = {}
    for (let osPossibilities of ["Windows", "Mac", "Linux"]){
        showOS[`show${osPossibilities}`] = (
            [osPossibilities, "All"].includes(OS)
        );
    }

    const {showWindows, showMac, showLinux} = showOS;
    let differentiateOS = (showWindows + showMac + showLinux) > 1;

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

    return (
        <ThemeProvider theme={theme}>
            <Box as="form" onSubmit={(e) => e.preventDefault()}>
                <Label>
                    <Radio defaultChecked={true}
                        name="os"
                        onChange={e => setOS("Windows")}
                    />
                    Windows
                </Label>
                <Label>
                    <Radio
                        name="os"
                        onChange={e => setOS("Mac")}
                    />
                    Mac
                </Label>
                <Label>
                    <Radio
                    name="os"
                    onChange={e => setOS("Linux")}
                    />
                    Linux
                </Label>
                <Label>
                    <Radio 
                    name="os"
                    onChange={e => setOS("All")}
                    />
                    All
                </Label>
            </Box>

            <p>
                What do we need?
            </p>
            <ol>
                <li>
                    MiKTeX / TeX Live: Contains the logic for compiling your
                    code into a PDF.
                </li>
                <li>
                    VS Code: Code editor, the graphical user interface which
                    you will be interacting with.
                </li>
                <li>
                    LaTeX Workshop extension for VS Code: Adds support for
                    LaTeX is VS Code.
                </li>
                {
                    showWindows &&
                    (<li>
                        Strawberry Perl{differentiateOS && " (Windows)"}:
                        Perl language is necessary for <code>latexmk</code>{" "}
                        script which is used by default by LaTeX workshop. This
                        script improves user-friendliness of compilation
                        process.
                    </li>)
                }
            </ol>

            {OS}



            {/* <Box as="form" onSubmit={(e) => e.preventDefault()}>
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
            </Box> */}
        </ThemeProvider>
    );
}
