import React, {useEffect, useRef} from "react";
import clsx from "clsx";
import _ from "lodash";
import styled from "styled-components";
import {Card} from "rebass";

let ExperienceContainer = styled.li`
    //background-color:orange;
    padding:10px;
`;

function formatDate(date, {technical=false} = {}) {
    let m = date.match(/present(?<suffix>[*0-9]*)/)
    if (m != null)
        return `Present${m.groups.suffix}`;

    if (technical)
        return date;

    let dateObj = new Date(date)
    return dateObj.toLocaleString("en-US", {year: "numeric", month: "long"})
}

function FormattedDate(props) {
    const {children, technical=true} = props;
    const date = children;

    let formatted = formatDate(date, {technical});
    
    if (technical)
        return formatted;

    return (
        <span style={{display: "inline-block", minWidth: "7.7em", textAlign: "right"}}>
            {formatted}
        </span>
    );
}

function Experience(props) {
    let technical = true;

    let DateDisplay = (props) => FormattedDate({technical, ...props});

    return (
        <Card>
            {/* <span>{formatDate(props.from, {technical})}{` - `}
            {formatDate(props.to, {technical})}</span> */}
            <span>
                <DateDisplay>{props.from}</DateDisplay>
                {`\u2003-\u2003`}
                <DateDisplay>{props.to}</DateDisplay>
            </span>
            :{` `}
            <span>{props.title}</span>{` at `}
            <span>{props.organization}</span>
        </Card>
    )

    // return (
    //     <ExperienceContainer>
    //         <span>{formatDate(props.from)} - {formatDate(props.to)}</span>:{` `}
    //         <span>{props.title}</span>{` at `}
    //         <span>{props.organization}</span>
    //     </ExperienceContainer>
    // )
}

export default Experience;
