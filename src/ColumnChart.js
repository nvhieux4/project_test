import React from "react";
import { DEFAULT_HIGHT } from "./data";

export default function ColumnChart({ chart }) {
    return (
        <div className="wrapper">
            <span>
                {typeof chart.time === "string" ? "" : `${chart.time}s`}
            </span>
            <div
                className="column"
                style={{ height: `${chart.value * DEFAULT_HIGHT}px` }}
            >
                <span>{chart.value}</span>
            </div>
        </div>
    );
}
