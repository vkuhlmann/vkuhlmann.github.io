import React, { useState, useRef, useContext, useEffect, useCallback } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import usePrismTheme from '@theme/hooks/usePrismTheme';
import clsx from "clsx";

import DocusaurusThemeContext from '@theme/ThemeContext';

import { darkTheme, lightTheme } from "./theme"

import CodeBlock from "@theme/CodeBlock";
//import latexdocument from "./latexdocument.txt";

import _ from "lodash";

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

export default (props) => {
    let context = useContext(DocusaurusThemeContext);

    let theme = context.isDarkTheme ? darkTheme : lightTheme;
    // const [doPdflatexFull, setDoPdflatexFull] = useState(false);
    // const [doPdflatexRecipe, setDoPdflatexRecipe] = useState(true);
    // const [doSetBiberPath, setDoSetBiberPath] = useState(true);
    // const [doPdflatexDirs, setDoPdflatexDirs] = useState(false);

    const [statusMsg, setStatusMsg] = useState(false);

    // const [pdflatexfullpath, setPdflatexfullpath] = useState("");

    //let pdflatexfullpath = useRef();
    let currConfig = useRef();
    let newConfig = useRef();

    // const onCheckChange = e => {
    //     setDoPdflatexFull(!doPdflatexFull);
    //     let cancel = false;

    //     if (cancel) {
    //         let target = e.target;

    //         setTimeout(function () {
    //             target.checked = doPdflatexFull;
    //         }, 0);

    //         e.preventDefault();
    //         e.stopPropagation();
    //     }
    // };
    const generate = () => {
        setStatusMsg();
        try {
            //generateUnsafe();
        } catch (err) {
            setStatusMsg(`${err}`);
            throw err;
        }
    };

    const [isDutch, setIsDutch] = useState(false);
    const [isIncludeTheorem, setIsIncludeTheorem] = useState(false);

    let code = isIncludeTheorem ? documentCode : documentCodeWithoutTheorem;
    if (isDutch) {
        code = code.replace(/\[english\]\{babel\}/, "[dutch]{babel}");
        code = code.replace(/Hello everyone!/, "Hallo iedereen!");
        code = code.replace(/Introduction/, "Introductie");
        code = code.replace(/My document/, "Mijn document");
        code = code.replace(/author\{Me\}/, "author\{Ik\}");
    }

    return (
        <ThemeProvider theme={theme}>
            <Box as="form" onSubmit={(e) => e.preventDefault()}>
                <Label mb={3}>
                    <Checkbox checked={
                        isDutch}
                        onChange={e => setIsDutch(!isDutch)} />
                    <Box>
                        Dutch
                    </Box>
                </Label>
                <Label mb={3}>
                    <Checkbox checked={
                        isIncludeTheorem}
                        onChange={e => setIsIncludeTheorem(!isIncludeTheorem)} />
                    <Box>
                        Include Theorem, Lemma etc.
                    </Box>
                </Label>

                {/* <Alert variant="danger" mb={2}>
                    Make sure to back-up your previous settings.json before replacing
                    it with the one below! I can't guarantee this wizard is flawless!
                </Alert> */}
                {/* <Label htmlFor="currConfig" mb={1}><span>New <code>settings.json</code></span></Label>
                <Textarea name="newConfig" id="newConfig" ref={newConfig} rows={6} mb={3} /> */}

                {statusMsg && (
                    <p style={{ color: "red" }}>{statusMsg.replace(/\r/g, "").split("\n").map((line, index) =>
                    (<React.Fragment key={index}>
                        {line}<br />
                    </React.Fragment>)
                    )}</p>
                )}
            </Box>
            <CodeBlock children={code} language="latex" className="language-latex"
            metastring={"latex"} />
        </ThemeProvider>
    );
}

let documentCode = '\\documentclass[a4paper]{article}\n\n\\usepackage[utf8]{inputenc}\n\\usepackage[margin=2.54cm]{geometry}\n\n\\usepackage{amsmath,amssymb,amsthm}\n\\usepackage{commath,mathtools}\n\\usepackage{parskip}\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\\usepackage[english]{babel}\n\\usepackage[bookmarksnumbered]{hyperref}\n\n\\newtheorem{theorem}{Theorem}[section]\n\\newtheorem{lemma}[theorem]{Lemma}\n\n\\theoremstyle{definition}\n\\newtheorem{example}[theorem]{Example}\n\\newtheorem{definition}[theorem]{Definition}\n\n\\theoremstyle{remark}\n\\newtheorem{remark}[theorem]{Remark}\n\n\\theoremstyle{definition}\n\\newtheorem*{note}{Note}\n\n\n\\title{My document}\n\\author{Me}\n\\date{September 2021}\n\n\\setcounter{secnumdepth}{2}\n\n\\begin{document}\n    \\maketitle\n\n    \\tableofcontents\n    %\\newpage\n    \\section{Introduction}\n\n    Hello everyone!\n\n    \\subsection{A subsection}\n    \\subsubsection{A subsubsection}\n\n    \\begin{theorem}\n        AA\n        \\begin{proof}\n            BB\n        \\end{proof}\n    \\end{theorem}\n\n    \\begin{lemma}[CC]\n        DD\n    \\end{lemma}\n\n    \\section{Another section}\n\n    \\begin{definition}\n        EE\n    \\end{definition}\n\\end{document}\n';
let documentCodeWithoutTheorem = '\\documentclass[a4paper]{article}\n\n\\usepackage[utf8]{inputenc}\n\\usepackage[margin=2.54cm]{geometry}\n\n\\usepackage{amsmath,amssymb,amsthm}\n\\usepackage{commath,mathtools}\n\\usepackage{parskip}\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\\usepackage[english]{babel}\n\\usepackage[bookmarksnumbered]{hyperref}\n\n\\title{My document}\n\\author{Me}\n\\date{September 2021}\n\n\\setcounter{secnumdepth}{2}\n\n\\begin{document}\n    \\maketitle\n\n    \\tableofcontents\n    \\section{Introduction}\n\n    Hello everyone!\n\\end{document}\n';
