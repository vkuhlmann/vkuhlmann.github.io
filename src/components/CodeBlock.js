// Based on: https://mdxjs.com/guides/syntax-highlighting

import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import OrigCodeBlock from "@theme/CodeBlock";
import {TIBasicTryIt} from "../tibasic/tibasic-tryit";

export default (props) => {
    const {children, className} = props;
    const language = className.replace(/language-/, '')
    let code = children;
    if (code.endsWith("\n"))
        code = code.slice(0, code.length - 1);

    if (language.toLowerCase() !== "ti-basic") {
        return OrigCodeBlock(props);
    }

    let codeBlockTitle = props.metastring.match(
        /(^| )title="(?<title>(\\\\|\\"|[^\\"])*?)"( |$)/)?.groups?.title ?? "";
    codeBlockTitle = codeBlockTitle.replaceAll("\\\"", "\"");
    codeBlockTitle = codeBlockTitle.replaceAll("\\\\", "\\");

    let isTryIt = props.metastring.match(/(^| )tryit( |=true( |$)|$)/) != null;

    if (isTryIt) {
        // // return (
        // //     <div class="card" style={{padding:"8px", marginBottom:"40px"}}>
        // //         {codeBlockTitle ?? "Try-it:"}
        // //         <tibasic-tryit>
        // //             <code style={{whiteSpace: "pre"}}>
        // //                 {code}
        // //             </code>
        // //         </tibasic-tryit>
        // //     </div>
        // // );

        return (
            <TIBasicTryIt code={code} title={codeBlockTitle} />
        );
    }

    return (
        <Highlight {...defaultProps} code={code} language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={className} style={{...style, padding: '20px', border: "1px solid red"}}>
            {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                ))}
                </div>
            ))}
            </pre>
        )}
        </Highlight>
    )


}
