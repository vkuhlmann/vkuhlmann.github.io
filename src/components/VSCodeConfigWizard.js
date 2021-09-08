import React, { useState, useRef, useContext, useEffect, useCallback } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import usePrismTheme from '@theme/hooks/usePrismTheme';
import clsx from "clsx";

import DocusaurusThemeContext from '@theme/ThemeContext';

// import { Button, Checkbox, Label, Textarea, ThemeProvider } from 'theme-ui'
// // import { Button, Checkbox, Label, Textarea } from 'rebass'
import { darkTheme, lightTheme } from "./theme"
//import styles from "../scss/ticode.module.scss";

// import { Checkbox, Button, Label, Textarea, Box } from '@theme-ui/components';
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
    Slider,
    Box,
    Flex,
    Button,
    ThemeProvider
  } from 'theme-ui'

// import { useTheme as useThemeEmotion, ThemeProvider, withTheme as withThemeEmotion } from '@emotion/react'
// import theme from '@rebass/preset'

// import Button from "./themeui/Button"


// const Button = (props) => {
//     return (
//         <button className={clsx(styles["button-action"])} onClick={props.onClick} {...props}>
//             {props.children}
//         </button>
//     );
// }

export default (props) => {
    let context = useContext(DocusaurusThemeContext);

    let theme = context.isDarkTheme ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="username">Username</Label>
            <Input name="username" id="username" mb={3} />
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" mb={3} />
            <Box>
                <Label mb={3}>
                    <Checkbox />
                    Remember me
                </Label>
            </Box>
            <Label htmlFor="sound">Sound</Label>
            <Select name="sound" id="sound" mb={3}>
                <option>Beep</option>
                <option>Boop</option>
                <option>Blip</option>
            </Select>
            <Label htmlFor="comment">Comment</Label>
            <Textarea name="comment" id="comment" rows={6} mb={3} />
            <Flex mb={3} theme={theme}>
                <Label theme={theme}>
                    <Radio name="letter" /> Alpha
                </Label>
                <Label theme={theme}>
                    <Radio name="letter" /> Bravo
                </Label>
                <Label theme={theme}>
                    <Radio name="letter" /> Charlie
                </Label>
            </Flex>
            <Label  theme={theme}>Slider</Label>
            <Slider mb={3} theme={theme} />
            <Button theme={theme}>Submit</Button>
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
