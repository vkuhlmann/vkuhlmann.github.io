import React, { useState, useRef, useContext, useEffect, useCallback } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import usePrismTheme from '@theme/hooks/usePrismTheme';
import clsx from "clsx";

import DocusaurusThemeContext from '@theme/ThemeContext';

import { darkTheme, lightTheme } from "./theme"

import _ from "lodash";

import styles from "../scss/global.module.scss";

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

export default props => {
    let context = useContext(DocusaurusThemeContext);
    const [contents, setContents] = useState(<span>Not available</span>);

    const generateEmail = () => {
        console.log("Styles is");
        console.log(styles);

        let monospaceStyle = {fontFamily: "'Courier New', Courier, monospace"};

        return (<>
        <span style={monospaceStyle}>
            vincent.
        </span>
        <span className={styles["visually-hidden"]} style={{userSelect: "none"}}>
            incent.
        </span>
        <span style={monospaceStyle}>
            kuhlma{["", "", ""].join("n")}
        </span>
        <span style={monospaceStyle}>
            {String.fromCharCode(64)}
        </span>
        <span style={monospaceStyle}>
            {`${"hotmail"}.com`}
        </span>
        </>);
    };

    useEffect(() => {
        setContents(generateEmail());
    }, []);

    let theme = context.isDarkTheme ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            {!props.inline && (<span>E-mail: </span>)}
            {contents}
            {props.endwithdot && <span style={{userSelect: "none"}}>.</span>}
        </ThemeProvider>
    );
};
