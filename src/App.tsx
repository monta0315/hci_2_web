import React from "react";
import "./App.css";

const App = () => {
  const [circleColor, setCircleColor] = React.useState("green");
  const [start, setStart] = React.useState(false);
  const [viewDim, setViewDim] = React.useState({ width: 0, height: 0 });
  const [startTime, setStartTime] = React.useState(0);
  const [result, setResult] = React.useState(0);

  React.useEffect(() => {
    const view_width = window.innerWidth;
    const view_height = window.innerHeight;
    setViewDim({ width: view_width, height: view_height });
  }, []);

  const onClickStart = () => {
    setStart(true);
    setResult(0);
    setTimeout(() => {
      setCircleColor("red");
      const start = performance.now();
      setStartTime(start);
    }, 3000);
  };

  const onClickEnd = () => {
    const end = performance.now();
    setResult(end - startTime);
    setCircleColor("green");
    setStart(false);
  };

  return (
    <div className="display">
      <svg width={viewDim.width} height={viewDim.height / 2}>
        <circle
          r={30}
          cx={viewDim.width / 2}
          cy={viewDim.height / 3}
          fill={circleColor}
        />
      </svg>
      {start ? (
        <button onClick={onClickEnd}>click!</button>
      ) : (
        <button onClick={onClickStart}>start!</button>
      )}
      <h1>{"time: " + result + "msec"}</h1>
    </div>
  );
};

export default App;
