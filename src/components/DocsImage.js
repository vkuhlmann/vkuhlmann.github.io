// Based on: https://mdxjs.com/guides/syntax-highlighting
// Based on: @docusaurus/theme-classic/src/theme/CodeBlock/index.ts

import React, { useContext } from 'react'
import clsx from "clsx";
import useTheme from '@theme/hooks/useTheme';
import ThemeContext from '@theme/ThemeContext';

export default (props) => {
    const {src} = props;
    let padding = "0px";
    //console.log(`Pad parameter is ${props.pad}`);
    if (props.pad) {
        padding = "15px";
    }

    let themeContext = useContext(ThemeContext);
    let isDarkTheme = themeContext.isDarkTheme;

    let backgroundColor = "hsl(0, 0%, 80%)";
    if (!isDarkTheme)
        backgroundColor = "hsl(0, 0%, 100%)";

    return (<div style={{
        backgroundColor,
        marginBottom: "10px"
    }}>
        <img src={src} style={{
            padding,
            width: "90%",
            width: `calc(100% - (${padding})*2)`,
        }} />
    </div>);
}
