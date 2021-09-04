// Based on: https://mdxjs.com/guides/syntax-highlighting
// Based on: @docusaurus/theme-classic/src/theme/CodeBlock/index.ts

import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import usePrismTheme from '@theme/hooks/usePrismTheme';
import clsx from "clsx";

export default (props) => {
    const {children} = props;
    //const language = className.replace(/language-/, '')
    const language = props.language ?? "latex";
    // console.log("Children are");
    // console.log(children);
    let code = props.code ?? children.props.children;

    const prismTheme = usePrismTheme();

    // return (
    //     <Highlight {...defaultProps} code={code} language={language}>
    //     {({className, style, tokens, getLineProps, getTokenProps}) => (
    //         <pre className={className} style={{...style, padding: '20px', border: "1px solid red"}}>
    //         {tokens.map((line, i) => (
    //             <div key={i} {...getLineProps({line, key: i})}>
    //             {line.map((token, key) => (
    //                 <span key={key} {...getTokenProps({token, key})} />
    //             ))}
    //             </div>
    //         ))}
    //         </pre>
    //     )}
    //     </Highlight>
    // )

    return (<Highlight
      {...defaultProps}
      theme={prismTheme}
      code={code}
      language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <code style={props.nobackdrop ? {} : style} className={clsx(className, language)}>
        {tokens.map((line, i) => {
            if (line.length === 1 && line[0].content === '') {
                line[0].content = '\n'; // eslint-disable-line no-param-reassign
            }

            const lineProps = {};// getLineProps({line, key: i});

            return (
            <span key={i} {...lineProps}>
                {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
                ))}
            </span>
            );
        })}
        </code>
      )}
    </Highlight>);
}
