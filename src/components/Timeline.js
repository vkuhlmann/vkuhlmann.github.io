import React, {useEffect, useRef} from "react";
import clsx from "clsx";
import _ from "lodash";

function Timeline(props) {
    let events = [
        { from: 2018, to: 2020, title: "A", track: 0 },
        { from: 2020, to: 2021, title: "B", track: 1 }
    ];

    function toFullDate(date, { isUpperBound = false, resolution = "day" } = {}) {
        let m = date.toString().match(/^(?<year>\d{4})(-\d{2})?$/);
        let year = parseInt(m.groups.year);
        let month = parseInt(m.groups.month);

        let res = {
            "year": 0,
            "month": 1
        }[resolution];

        if (resolution < 1)
            month = NaN;

        if (isNaN(month)) {
            if (isUpperBound)
                year++;
            month = 1;
            // day = 1;
        } else if (isNaN(day)) {
            if (isUpperBound)
                month++;
            year += Math.floor((month - 1) / 12);
            month = ((month - 1) % 12) + 1;
            // day = 1;
        }
        // else if (isNaN(day)) {

        // }
        if (res >= 1)
            return `${year}-${month}`;
        else
            return `${year}`;
    }

    for (let obj of events) {
        obj["from"] = `${obj['from']}`;
        obj["to"] = `${obj['to']}`;

        let resolution = "month";
        obj["fromIncl"] = toFullDate(obj["from"],
            { isUpperBound: false, resolution: resolution });
        obj["toExcl"] = toFullDate(obj["to"],
            { isUpperBound: true, resolution: resolution });
    }

    console.log(events);

    let dates = _(events)
        .map(event => [event.fromIncl, event.toExcl])
        .flattenDepth()
        .sortBy()
        .sortedUniq()
        .value();

    let levelMap =
        _.fromPairs(
            _(dates)
                .clone()
                .reverse()
                .map((val, index, col) => {
                    return [val, index];
                })
        );

    let trackCount = events.length;

    const trackWidth = 10;
    const trackSpacing = 3;

    function getTrackX(trackIndex) {
        let left = trackIndex * (trackWidth + trackSpacing) + 40;
        let right = left + trackWidth;
        return [left, right];
    }

    let levelHeight;

    function getLevelHeight(level) {
        return level * 30;
    }

    function getEventY(from, to) {
        let maxY = getLevelHeight(levelMap[from]);
        let minY = getLevelHeight(levelMap[to]);
        return [minY, maxY];
    }

    let viewBoxMinX = getTrackX(0)[0];
    viewBoxMinX = 0;

    let target = useRef(null);
    let connector = useRef(null);
    let svg = useRef(null);

    useEffect(() => {
        let targetBoundingRect = target.current.getBoundingClientRect();
        let targetPos = svg.current.createSVGPoint();
        targetPos.x = targetBoundingRect.x;
        targetPos.y = targetBoundingRect.y;

        let gotoPos = targetPos.matrixTransform(svg.current.getScreenCTM().inverse());
        console.log(gotoPos);

        // connector.current.setAttribute("d", `M 10 10 L 50 20`);
        connector.current.setAttribute("d", `M 10 10 L ${gotoPos.x} ${gotoPos.y}`);

        // console.log("Current connector:")
        // console.log(connector.current);
    });

    return (
        <>
            <svg viewBox={`${viewBoxMinX} 0 ${getTrackX(trackCount - 1)[1]} 100`}
                style={{ width: "10%" }} ref={svg}>
                {/* <rectangle x="0" y="0" width="100%" height="100%" fill="#eee" /> */}
                <rect
                    style={{ x: "0", y: "0", width: "100%", height: "100%", fill: "#eee" }}
                />
                {
                    _(dates).map((val, index) => {
                        // BEGIN Source: https://stackoverflow.com/questions/4991171/auto-line-wrapping-in-svg-text
                        // Modified
                        return (<foreignObject key={index} x="0" y="0" width="150" height="200">
                            <p xmlns="http://www.w3.org/1999/xhtml">Text goes here</p>
                        </foreignObject>);
                        // END Source
                        return <div style={{ x: 0, y: 0 }}>{getLevelHeight(levelMap[val])}</div>
                    }).value()
                }
                {
                    _(events).map((val, index) => {
                        let [minX, maxX] = getTrackX(val.track);
                        let [minY, maxY] = getEventY(val.fromIncl, val.toExcl);

                        // return <rect key={index} x={0} y={0} width={20} height={60} fill={"red"} />
                        return <rect key={index} x={minX} y={minY} width={maxX - minX}
                            height={maxY - minY} fill={"red"} />
                    }).value()
                }
                <path d="M 10 10 L 30 10" stroke="orange" style={{strokeWidth: 3}} ref={connector} />
                <circle cx="10" cy="10" r={3} fill="blue" />
            </svg>

            <div>
                <span ref={target}>Iets van text</span>
            </div>            
        </>
    );
}

export default Timeline;
