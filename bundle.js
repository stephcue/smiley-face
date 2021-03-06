(function (React, ReactDOM, d3) {
  'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

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

  const mouthArc = d3.arc()
  		.innerRadius(mouthRadius)
  		.outerRadius(mouthRadius + mouthWidth)
  		.startAngle(Math.PI / 2)
  		.endAngle(Math.PI * 3/2);

  const App = () => (
    React.createElement( 'svg', { width: width, height: height },
      React.createElement( 'g', { transform: `translate(${centerX },${centerY / 2})` },
        React.createElement( 'ellipse', { transform: `translate(${leftTieCenterX}, ${leftTieCenterY}) rotate(${-leftTieAngle})`, rx: tieRadiusX, ry: tieRadiusY, fill: "red", stroke: "black", 'stroke-width': tieWidth }),
        React.createElement( 'ellipse', { transform: `translate(${rightTieCenterX}, ${rightTieCenterY}) rotate(${rightTieAngle})`, rx: tieRadiusX, ry: tieRadiusY, fill: "red", stroke: "black", 'stroke-width': tieWidth }),
        React.createElement( 'ellipse', { transform: `translate(${tieCenterX}, ${tieCenterY}) rotate(${tieAngle})`, rx: centerTieRadiusX, ry: centerTieRadiusY, fill: "red", stroke: "black", 'stroke-width': tieWidth }),
        React.createElement( 'circle', {
          r: centerY - strokeWidth / 2, fill: "yellow", stroke: "black", 'stroke-width': strokeWidth }),
        React.createElement( 'circle', { 
          cx: -eyeOffsetX + crazyEye, cy: -eyeOffsetY, r: eyeRadius }),
        React.createElement( 'circle', { 
          cx: eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
        React.createElement( 'path', { d: mouthArc() })
        
      )
    )
  );

  const rootElement = document.getElementById('root');
  ReactDOM.render(React.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBhcmMgfSBmcm9tICdkMyc7XG5cbmNvbnN0IHdpZHRoID0gOTYwO1xuY29uc3QgaGVpZ2h0ID0gNTAwO1xuY29uc3QgY2VudGVyWCA9IHdpZHRoIC8gMjtcbmNvbnN0IGNlbnRlclkgPSBoZWlnaHQgLyAyO1xuY29uc3Qgc3Ryb2tlV2lkdGggPSAyMDtcbmNvbnN0IGV5ZU9mZnNldFggPSA5MDtcbmNvbnN0IGV5ZU9mZnNldFkgPSA3MDtcbmNvbnN0IGV5ZVJhZGl1cyA9IDUwO1xuY29uc3QgY3JhenlFeWUgPSAzMDtcbmNvbnN0IG1vdXRoV2lkdGggPSAyMDtcbmNvbnN0IG1vdXRoUmFkaXVzID0gMTAwO1xuXG5jb25zdCB0aWVSYWRpdXNYID0gNDU7XG5jb25zdCB0aWVSYWRpdXNZID0gODA7XG5cbmNvbnN0IGxlZnRUaWVDZW50ZXJYID0gLTQwO1xuY29uc3QgbGVmdFRpZUNlbnRlclkgPSAzMDA7XG5jb25zdCBsZWZ0VGllQW5nbGUgPSAzMDtcblxuY29uc3QgcmlnaHRUaWVDZW50ZXJYID0gMTAwO1xuY29uc3QgcmlnaHRUaWVDZW50ZXJZID0gMzAwO1xuY29uc3QgcmlnaHRUaWVBbmdsZSA9IDUwO1xuXG5jb25zdCB0aWVDZW50ZXJYID0gMzA7XG5jb25zdCB0aWVDZW50ZXJZID0gMzAwO1xuY29uc3QgdGllQW5nbGUgPSAwO1xuY29uc3QgY2VudGVyVGllUmFkaXVzWCA9IDQ1O1xuY29uc3QgY2VudGVyVGllUmFkaXVzWSA9IDUwO1xuY29uc3QgdGllV2lkdGggPSAxMDtcblxuY29uc3QgbW91dGhBcmMgPSBhcmMoKVxuXHRcdC5pbm5lclJhZGl1cyhtb3V0aFJhZGl1cylcblx0XHQub3V0ZXJSYWRpdXMobW91dGhSYWRpdXMgKyBtb3V0aFdpZHRoKVxuXHRcdC5zdGFydEFuZ2xlKE1hdGguUEkgLyAyKVxuXHRcdC5lbmRBbmdsZShNYXRoLlBJICogMy8yKTtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnRlclggfSwke2NlbnRlclkgLyAyfSlgfT5cbiAgICAgIDxlbGxpcHNlIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2xlZnRUaWVDZW50ZXJYfSwgJHtsZWZ0VGllQ2VudGVyWX0pIHJvdGF0ZSgkey1sZWZ0VGllQW5nbGV9KWB9IFxuICAgICAgICByeD17dGllUmFkaXVzWH0gXG4gICAgICAgIHJ5PXt0aWVSYWRpdXNZfVxuICAgICAgICBmaWxsPVwicmVkXCIgXG4gICAgICAgIHN0cm9rZT1cImJsYWNrXCIgXG4gICAgICAgIHN0cm9rZS13aWR0aD17dGllV2lkdGh9ICBcbiAgICAgIC8+XG4gICAgICA8ZWxsaXBzZSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyaWdodFRpZUNlbnRlclh9LCAke3JpZ2h0VGllQ2VudGVyWX0pIHJvdGF0ZSgke3JpZ2h0VGllQW5nbGV9KWB9IFxuICAgICAgICByeD17dGllUmFkaXVzWH0gXG4gICAgICAgIHJ5PXt0aWVSYWRpdXNZfVxuICAgICAgICBmaWxsPVwicmVkXCIgXG4gICAgICAgIHN0cm9rZT1cImJsYWNrXCIgXG4gICAgICAgIHN0cm9rZS13aWR0aD17dGllV2lkdGh9ICBcbiAgICAgIC8+XG4gICAgICA8ZWxsaXBzZSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt0aWVDZW50ZXJYfSwgJHt0aWVDZW50ZXJZfSkgcm90YXRlKCR7dGllQW5nbGV9KWB9IFxuICAgICAgICByeD17Y2VudGVyVGllUmFkaXVzWH0gXG4gICAgICAgIHJ5PXtjZW50ZXJUaWVSYWRpdXNZfVxuICAgICAgICBmaWxsPVwicmVkXCIgXG4gICAgICAgIHN0cm9rZT1cImJsYWNrXCIgXG4gICAgICAgIHN0cm9rZS13aWR0aD17dGllV2lkdGh9ICBcbiAgICAgIC8+XG4gICAgICA8Y2lyY2xlXG4gICAgICAgIHI9e2NlbnRlclkgLSBzdHJva2VXaWR0aCAvIDIgfVxuICAgICAgICBmaWxsPVwieWVsbG93XCJcbiAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICBzdHJva2Utd2lkdGg9e3N0cm9rZVdpZHRofVxuICAgICAgLz5cbiAgICAgIDxjaXJjbGUgXG4gICAgICAgIGN4PXstZXllT2Zmc2V0WCArIGNyYXp5RXllfVxuICAgICAgICBjeT17LWV5ZU9mZnNldFl9IFxuICAgICAgICByPXtleWVSYWRpdXN9XG4gICAgICAvPlxuICAgICAgPGNpcmNsZSBcbiAgICAgICAgY3g9e2V5ZU9mZnNldFh9IFxuICAgICAgICBjeT17LWV5ZU9mZnNldFl9XG4gICAgICAgIHI9e2V5ZVJhZGl1c31cbiAgICAgIC8+XG4gICAgICA8cGF0aCBkPXttb3V0aEFyYygpfS8+XG4gICAgICBcbiAgICA8L2c+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTsiXSwibmFtZXMiOlsiYXJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7RUFJQSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7RUFDbEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0VBQ25CLE1BQU0sT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7RUFDMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUMzQixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7RUFDdkIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0VBQ3RCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztFQUN0QixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7RUFDckIsTUFBTSxRQUFRLEdBQUcsRUFB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