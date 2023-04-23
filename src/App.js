import { useEffect, useRef, useState } from "react";
import ColumnChart from "./ColumnChart";
import fakeData, { DEFAULT_HIGHT, randomNumber } from "./data";
import "./index.css";

function App() {
    const [dataChart, setDataChart] = useState(() => fakeData());
    const [dataChartFilter, setDataChartFilter] = useState([]);
    const [time, setTime] = useState(1);
    const refChart = useRef();
    const inputRef = useRef();
    const OY = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    useEffect(() => {
        setInterval(() => {
            setTime((item) => item + 1);
        }, 1000);
        refChart.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        setDataChart((item) => {
            const length = item.length;
            const number = randomNumber();
            if (length === 3600) {
                item.shift();
                return [...item, { value: number, time: time }];
            }
            return [...item, { value: number, time: time }];
        });
        if (dataChartFilter.length === 0) {
            const flavoursScrollWidth = refChart.current.scrollWidth;
            refChart.current.scrollTo(flavoursScrollWidth + 100, 0);
        }
    }, [time]);

    const handleFilter = () => {
        const valueInput = inputRef.current.value;
        const indexData = dataChart.findIndex(
            (item) => item.time === Number(valueInput)
        );
        if (indexData > -1) {
            const newData = dataChart.slice(indexData, indexData + 50);
            console.log(indexData, newData);
            setDataChartFilter(newData);
        }
        refChart.current.scrollTo(0, 0);
    };

    const handleClearFilter = () => {
        setDataChartFilter([]);
        inputRef.current.value = "";
    };

    return (
        <div className="App">
            {/* <BoxCheckTime /> */}
            <h2
                style={{
                    textAlign: "center",
                    margin: "50px 0 0 0",
                }}
            >
                {time}s
            </h2>
            <div
                className="chart"
                ref={refChart}
                style={{ height: `${100 * 4 + 50}px` }}
            >
                {OY.map((oy, index) => (
                    <div
                        className="oy"
                        key={index}
                        style={{
                            transform: `translate(-35px, -${
                                oy * DEFAULT_HIGHT
                            }px)`,
                        }}
                    >
                        {oy}
                    </div>
                ))}
                {dataChartFilter.length > 0
                    ? dataChartFilter.map((chart, index) => (
                          <ColumnChart key={index} chart={chart} />
                      ))
                    : dataChart.map((chart, index) => (
                          <ColumnChart key={index} chart={chart} />
                      ))}
            </div>
            <div className="box-filter">
                <span>Nhập thời gian tìm (s): </span>
                <input type="number" ref={inputRef} />
                <button onClick={handleFilter}>Tìm kiếm</button>
                <button onClick={handleClearFilter}>Clear</button>
            </div>
        </div>
    );
}

export default App;
