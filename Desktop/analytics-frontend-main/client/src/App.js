
import React from "react";
import "./App.css";

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
var count_of_can =0;
var count_of_pen =0;
var count_of_res =0;
var count_of_QAT=0;
//var count_of_QAT=0;
var count_of_ECU=0;
var count_of_ENG=0;
var count_of_IRN=0;
var count_of_SEN=0;
var count_of_NED=0;
var count_of_USA=0;
var count_of_WAL=0;
var count_of_ARG=0;
var count_of_KSA=0;
var count_of_DEN=0;
var count_of_TUN=0;
var count_of_MEX=0;
var count_of_POL=0;
var count_of_FRA=0;
var count_of_AUS=0;
var count_of_MAR=0;
var count_of_CRO=0;
var count_of_GER=0;
var count_of_JPN=0;
var count_of_ESP=0;
var count_of_WRS=0;
var count_of_BEL=0;
var count_of_CAN=0;
var count_of_SUI=0;
var count_of_CMR=0;
var count_of_URU=0;
var count_of_PRK=0;
var count_of_POR=0;
var count_of_GHA=0;
var count_of_BRA=0;
var count_of_SRB=0;

const configData = require('./data.json');
//console.log(configData.length);
//console.log(configData[0].stat);

for (var i=0;i<configData.length;i++){
  //  console.log(configData[i]);
    
if(configData[i].stat=="canceled"){
    count_of_can ++; 
}
if(configData[i].stat=="pending"){
    count_of_pen ++; 
}
if(configData[i].stat=="reserved"){
    count_of_res ++; 
}

}
for( var j=0;j<configData.length;j++){
    if(configData[j].homeTeam=="Qatar"||configData[j].awayTeam=="Qatar"){
        count_of_QAT ++; 
    }
    if(configData[j].homeTeam=="Ecuador"||configData[j].awayTeam=="Ecuador"){
        count_of_ECU ++; 
    }
    if(configData[j].homeTeam=="England"||configData[j].awayTeam=="England"){
        count_of_ENG ++; 
    }
    if(configData[j].homeTeam=="Iran"||configData[j].awayTeam=="Iran"){
        count_of_IRN ++; 
    }
    if(configData[j].homeTeam=="Senegal"||configData[j].awayTeam=="Senegal"){
        count_of_SEN ++; 
    }
    if(configData[j].homeTeam=="Netherlands"||configData[j].awayTeam=="Netherlands"){
        count_of_NED ++; 
    }
    if(configData[j].homeTeam=="USA"||configData[j].awayTeam=="USA"){
        count_of_USA ++; 
    }
    if(configData[j].homeTeam=="Wales"||configData[j].awayTeam=="Wales"){
        count_of_WAL ++; 
    }
    if(configData[j].homeTeam=="Argentina"||configData[j].awayTeam=="Argentina"){
        count_of_ARG ++; 
    }
    if(configData[j].homeTeam=="Saudi Arabia"||configData[j].awayTeam=="Saudi Arabia"){
        count_of_KSA ++; 
    }
    if(configData[j].homeTeam=="Denmark"||configData[j].awayTeam=="Denmark"){
        count_of_DEN ++; 
    }
    if(configData[j].homeTeam=="Tunisia"||configData[j].awayTeam=="Tunisia"){
        count_of_TUN ++; 
    }
    if(configData[j].homeTeam=="Mexico"||configData[j].awayTeam=="Mexico"){
        count_of_MEX ++; 
    }
    if(configData[j].homeTeam=="Poland"||configData[j].awayTeam=="Poland"){
        count_of_POL ++; 
    }
    if(configData[j].homeTeam=="France"||configData[j].awayTeam=="France"){
        count_of_FRA ++; 
    }
    if(configData[j].homeTeam=="Australia"||configData[j].awayTeam=="Australia"){
        count_of_AUS ++; 
    }
    if(configData[j].homeTeam=="Morocco"||configData[j].awayTeam=="Morocco"){
        count_of_MAR ++; 
    }
    if(configData[j].homeTeam=="Croatia"||configData[j].awayTeam=="Croatia"){
        count_of_CRO ++; 
    }
    if(configData[j].homeTeam=="Germany"||configData[j].awayTeam=="Germany"){
        count_of_GER ++; 
    }
    if(configData[j].homeTeam=="Japan"||configData[j].awayTeam=="Japan"){
        count_of_JPN ++; 
    }
    if(configData[j].homeTeam=="Spain"||configData[j].awayTeam=="Spain"){
        count_of_ESP ++; 
    }
    if(configData[j].homeTeam=="Costa Rica"||configData[j].awayTeam=="Costa Rica"){
        count_of_WRS ++; 
    }
    if(configData[j].homeTeam=="Belgium"||configData[j].awayTeam=="Belgium"){
        count_of_BEL ++; 
    }
    if(configData[j].homeTeam=="Canada"||configData[j].awayTeam=="Canada"){
        count_of_CAN ++; 
    }
    if(configData[j].homeTeam=="Switzerland"||configData[j].awayTeam=="Switzerland"){
        count_of_SUI ++; 
    }
    if(configData[j].homeTeam=="Cameroon"||configData[j].awayTeam=="Cameroon"){
        count_of_CMR ++; 
    }
    if(configData[j].homeTeam=="Uruguay"||configData[j].awayTeam=="Uruguay"){
        count_of_URU ++; 
    }
    if(configData[j].homeTeam=="Korea Republic"||configData[j].awayTeam=="Korea Republic"){
        count_of_PRK ++; 
    }
    if(configData[j].homeTeam=="Portugal"||configData[j].awayTeam=="Portugal"){
         count_of_POR++; 
    }
    if(configData[j].homeTeam=="Ghana"||configData[j].awayTeam=="Ghana"){
        count_of_GHA ++; 
    }
    if(configData[j].homeTeam=="Brazil"||configData[j].awayTeam=="Brazil"){
        count_of_BRA ++; 
    }
    if(configData[j].homeTeam=="Serbia"||configData[j].awayTeam=="Serbia"){
        count_of_res ++; 
    }   
}
//console.log(count_of_res);

const App = () => {
 //   var x=40;
const data = [
{ stat: "reserved", value: count_of_res },
{ stat: "canceled", value: count_of_can },
{ stat: "pending", value: count_of_pen },

];

const dataofmatches = [
{
    name: "QAT",
    uv: count_of_QAT,
    pv: 2400,
    amt: 2400
},
{
    name: "ECU",
    uv: count_of_ECU,
    pv: 1398,
    amt: 2210
},
{
    name: "ENG",
    uv: count_of_ENG,
    pv: 9800,
    amt: 2290
},
{
    name: "IRN",
    uv: count_of_IRN,
    pv: 3908,
    amt: 2000
},
{
    name: "SEN",
    uv: count_of_SEN,
    pv: 4800,
    amt: 2181
},
{
    name: "NED",
    uv: count_of_NED,
    pv: 3800,
    amt: 2500
},
{
    name: "USA",
    uv: count_of_USA,
    pv: 4300,
    amt: 2100
},
{
    name: "WAL",
    uv: count_of_WAL,
    pv: 2400,
    amt: 2400
},
{
    name: "ARG",
    uv: count_of_ARG,
    pv: 100008,
    amt: 2210
},
{
    name: "KSA",
    uv: count_of_KSA,
    pv: 9800,
    amt: 2290
},
{
    name: "DEN",
    uv: count_of_DEN,
    pv: 3908,
    amt: 2000
},
{
    name: "TUN",
    uv: count_of_TUN,
    pv: 4800,
    amt: 2181
},
{
    name: "MEX",
    uv: count_of_MEX,
    pv: 3800,
    amt: 2500
},
{
    name: "POL",
    uv: count_of_POL,
    pv: 4300,
    amt: 2100
},
{
    name: "FRA",
    uv: count_of_FRA,
    pv: 2400,
    amt: 2400
},
{
    name: "AUS",
    uv: count_of_AUS,
    pv: 1398,
    amt: 2210
},
{
    name: "MAR",
    uv: count_of_MAR,
    pv: 9800,
    amt: 2290
},
{
    name: "CRO",
    uv: count_of_CRO,
    pv: 3908,
    amt: 2000
},
{
    name: "GER",
    uv: count_of_GER,
    pv: 4800,
    amt: 2181
},
{
    name: "JPN",
    uv: count_of_JPN,
    pv: 3800,
    amt: 2500
},
{
    name: "ESP",
    uv: count_of_ESP,
    pv: 4300,
    amt: 2100
},
{
    name: "WRs",
    uv: count_of_WRS,
    pv: 2400,
    amt: 2400
},
{
    name: "BEL",
    uv: count_of_BEL,
    pv: 100008,
    amt: 2210
},
{
    name: "CAN",
    uv: count_of_CAN,
    pv: 9800,
    amt: 2290
},
{
    name: "SUI",
    uv: count_of_SUI,
    pv: 3908,
    amt: 2000
},
{
    name: "CMR",
    uv: count_of_CMR,
    pv: 4800,
    amt: 2181
},
{
    name: "URU",
    uv: count_of_URU,
    pv: 3800,
    amt: 2500
},
{
    name: "PRK",
    uv: count_of_PRK,
    pv: 4300,
    amt: 2100
},
{
    name: "POR",
    uv: count_of_POR,
    pv: 9800,
    amt: 2290
},
{
    name: "GHA",
    uv: count_of_GHA,
    pv: 3908,
    amt: 2000
},
{
    name: "BRA",
    uv: count_of_BRA,
    pv: 4800,
    amt: 2181
},
{
    name: "SRB",
    uv: count_of_res,
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
    outerRadius={125}
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
