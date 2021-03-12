import React from "react";
import ReactDOM from "react-dom";
import { arc } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 70;
const eyeRadius = 50;
const crazyEye = 30;
const mouthWidth = 20;
const mouthRadius = 100;

const tieRadiusX = 45;
const tieRadiusY = 80;

const leftTieCenterX = -40;
const leftTieCenterY = 300;
const leftTieAngle = 30;

const rightTieCenterX = 100;
const rightTieCenterY = 300;
const rightTieAngle = 50;

const tieCenterX = 30;
const tieCenterY = 300;
const tieAngle = 0;
const centerTieRadiusX = 45;
const centerTieRadiusY = 50;
const tieWidth = 10;

const mouthArc = arc()
		.innerRadius(mouthRadius)
		.outerRadius(mouthRadius + mouthWidth)
		.startAngle(Math.PI / 2)
		.endAngle(Math.PI * 3/2);

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX },${centerY / 2})`}>
      <ellipse transform={`translate(${leftTieCenterX}, ${leftTieCenterY}) rotate(${-leftTieAngle})`} 
        rx={tieRadiusX} 
        ry={tieRadiusY}
        fill="red" 
        stroke="black" 
        stroke-width={tieWidth}  
      />
      <ellipse transform={`translate(${rightTieCenterX}, ${rightTieCenterY}) rotate(${rightTieAngle})`} 
        rx={tieRadiusX} 
        ry={tieRadiusY}
        fill="red" 
        stroke="black" 
        stroke-width={tieWidth}  
      />
      <ellipse transform={`translate(${tieCenterX}, ${tieCenterY}) rotate(${tieAngle})`} 
        rx={centerTieRadiusX} 
        ry={centerTieRadiusY}
        fill="red" 
        stroke="black" 
        stroke-width={tieWidth}  
      />
      <circle
        r={centerY - strokeWidth / 2 }
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
      />
      <circle 
        cx={-eyeOffsetX + crazyEye}
        cy={-eyeOffsetY} 
        r={eyeRadius}
      />
      <circle 
        cx={eyeOffsetX} 
        cy={-eyeOffsetY}
        r={eyeRadius}
      />
      <path d={mouthArc()}/>
      
    </g>
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);