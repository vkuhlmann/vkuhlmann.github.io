import React from "react";
import clsx from "clsx";
import _ from "lodash";

function Timeline(props) {
    let events = [
        {from: 2018, to: 2020, title: "A", track: 0},
        {from: 2020, to: 2021, title: "B", track: 1}
    ];

    function toFullDate(date, {isUpperBound=false, resolution="day"}={}) {
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
            {isUpperBound: false, resolution: resolution});
        obj["toExcl"] = toFullDate(obj["to"],
            {isUpperBound: true, resolution: resolution});
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

    const trackWidth = 20;
    const trackSpacing = 10;
    
    function getTrackX(trackIndex) {
        let left = trackIndex * (trackWidth + trackSpacing);
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

    return (
        <svg viewBox={`${getTrackX(0)[0]} 0 ${getTrackX(trackCount - 1)[1]} 100`}
            style={{width: "10%"}}>
            {/* <rectangle x="0" y="0" width="100%" height="100%" fill="#eee" /> */}
            <rect
                style={{x: "0", y: "0", width: "100%", height: "100%", fill: "#eee"}}
            />
            {
                _(events).map((val, index) => {
                    let [minX, maxX] = getTrackX(val.track);
                    let [minY, maxY] = getEventY(val.fromIncl, val.toExcl);

                    // return <rect key={index} x={0} y={0} width={20} height={60} fill={"red"} />
                    return <rect key={index} x={minX} y={minY} width={maxX-minX}
                        height={maxY-minY} fill={"red"} />
                }).value()
            }
        </svg>
    );
}

export default Timeline;
