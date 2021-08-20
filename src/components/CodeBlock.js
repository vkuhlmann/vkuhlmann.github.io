// Source: https://mdxjs.com/guides/syntax-highlighting

import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

export default ({children, className}) => {
    const language = className.replace(/language-/, '')

    return (
        <Highlight {...defaultProps} code={exampleCode} language={language}>
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
