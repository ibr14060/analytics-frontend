
import React from "react";
import "./App.css";
import "./data.json";
import {
PieChart,
Pie,
//Tooltip,
Cell,
CartesianGrid,
XAxis, 
YAxis,
BarChart,
Bar, 

} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";


const getPath = (x: number, y: number, width: number, height: number) => {
return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
} 
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
}, ${y + height}
Z`;
};

const TriangleBar: FunctionComponent<any> = (props: any) => {
const { fill, x, y, width, height } = props;

return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const App = () => {
const data = [
{ stat: "reserved", value: 181 },
{ stat: "canceled", value: 17 },
{ stat: "pending", value: 29 },

];

const dataofmatches = [
{
    name: "QAT",
    uv: 4000,
    pv: 2400,
    amt: 2400
},
{
    name: "ECU",
    uv: 3000,
    pv: 1398,
    amt: 2210
},
{
    name: "ENG",
    uv: 2000,
    pv: 9800,
    amt: 2290
},
{
    name: "IRN",
    uv: 2780,
    pv: 3908,
    amt: 2000
},
{
    name: "SEN",
    uv: 1890,
    pv: 4800,
    amt: 2181
},
{
    name: "NED",
    uv: 2390,
    pv: 3800,
    amt: 2500
},
{
    name: "USA",
    uv: 3490,
    pv: 4300,
    amt: 2100
},
{
    name: "WAL",
    uv: 4000,
    pv: 2400,
    amt: 2400
},
{
    name: "ARG",
    uv: 6000,
    pv: 100008,
    amt: 2210
},
{
    name: "KSA",
    uv: 2000,
    pv: 9800,
    amt: 2290
},
{
    name: "DEN",
    uv: 2780,
    pv: 3908,
    amt: 2000
},
{
    name: "TUN",
    uv: 1890,
    pv: 4800,
    amt: 2181
},
{
    name: "MEX",
    uv: 2390,
    pv: 3800,
    amt: 2500
},
{
    name: "POL",
    uv: 3490,
    pv: 4300,
    amt: 2100
},
{
    name: "FRA",
    uv: 4000,
    pv: 2400,
    amt: 2400
},
{
    name: "AUS",
    uv: 3000,
    pv: 1398,
    amt: 2210
},
{
    name: "MAR",
    uv: 2000,
    pv: 9800,
    amt: 2290
},
{
    name: "CRO",
    uv: 2780,
    pv: 3908,
    amt: 2000
},
{
    name: "GER",
    uv: 1890,
    pv: 4800,
    amt: 2181
},
{
    name: "JPN",
    uv: 2390,
    pv: 3800,
    amt: 2500
},
{
    name: "ESP",
    uv: 3490,
    pv: 4300,
    amt: 2100
},
{
    name: "WRs",
    uv: 4000,
    pv: 2400,
    amt: 2400
},
{
    name: "BEL",
    uv: 3000,
    pv: 100008,
    amt: 2210
},
{
    name: "CAN",
    uv: 2000,
    pv: 9800,
    amt: 2290
},
{
    name: "SUI",
    uv: 2780,
    pv: 3908,
    amt: 2000
},
{
    name: "CMR",
    uv: 1890,
    pv: 4800,
    amt: 2181
},
{
    name: "URU",
    uv: 2390,
    pv: 3800,
    amt: 2500
},
{
    name: "PRK",
    uv: 3490,
    pv: 4300,
    amt: 2100
},
{
    name: "POR",
    uv: 500,
    pv: 9800,
    amt: 2290
},
{
    name: "GHA",
    uv: 2780,
    pv: 3908,
    amt: 2000
},
{
    name: "BRA",
    uv: 1890,
    pv: 4800,
    amt: 2181
},
{
    name: "SRB",
    uv: 2390,
    pv: 3800,
    amt: 2500
},


];
const colors = scaleOrdinal(schemeCategory10).range();
const COLORS = ['#8f8e8e', '#dec672',' #8d0a30'];
return (
<div style={{ textAlign: "center" }}>
    
    <h1 className ="name">Tickets Analytics</h1>
    <div className ="ttt">
    <p2 className ="canceled">canceled</p2>
    <p3 className ="reserved">reserved</p3>
    <p4 className ="pending">pending</p4>
    </div>
    <p5 className ="number">Tickets sold</p5>
    <div className="piechart">
    <PieChart width={270} height={450}>
    <Pie
    data={data}
    cx={120}
    cy={200}
    innerRadius={100}
    outerRadius={120}
    fill="#8884d8"
    paddingAngle={5}
    dataKey="value"
    label
    >
    {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
    </Pie>
    
</PieChart>
</div>
<div className ="barchart">
<BarChart
    width={1500}
    height={450}
    data={dataofmatches}
    margin={{
    top: 20,
    right: 30,
    left: 20,
    bottom: 5
    }}
>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Bar
    dataKey="uv"
    fill="#8884d8"
    shape={<TriangleBar />}
    label={{ position: "top" }}
    >
    {dataofmatches.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
    ))}
    </Bar>
</BarChart>
</div>
    
</div>

);
};

export default App;
