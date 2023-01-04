import React from 'react';
import d3 from 'd3'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
var data = [{name: "Alex", share: 20.70}, 
                    {name: "Shelly", share: 30.92},
                    {name: "Clark", share: 15.42},
                    {name: "Matt", share: 13.65},
                    {name: "Jolene", share: 19.31}];
<><script src="https://d3js.org/d3.v4.min.js"></script>
<svg width="500" height="400"></svg></>
 var svg = d3.select("svg"),
 width = svg.attr("width"),
 height = svg.attr("height"),
 radius = 200;
 var ordScale = d3.scaleOrdinal()
.domain(data)
.range(['#ffd384','#94ebcd','#fbaccc','#d3e0ea','#fa7f72']);
var pie = d3.pie().value(function(d) { 
      return d.share; 
      });

      var arc = d3.selectAll("arc")
      .data(pie(data))
.enter();
var path = d3.arc()
                     .outerRadius(radius)
                     .innerRadius(0);

        arc.append("path")
           .attr("d", path)
           .attr("fill", function(d) { return ordScale(d.data.name); });
           var label = d3.arc()
                      .outerRadius(radius)
                      .innerRadius(0);
            
        arc.append("text")
           .attr("transform", function(d) { 
                    return "translate(" + label.centroid(d) + ")"; 
            })
           .text(function(d) { return d.data.name; })
           .style("font-family", "arial")
           .style("font-size", 15);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = 'https://example.com/analytics';

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

reportWebVitals(sendToAnalytics);
reportWebVitals();
