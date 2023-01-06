
import React, { useState, useEffect } from "react";
//import React from "react";
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
    if(configData[j].matchNumber==1&&configData[j].stat=="reserved"){
        count_of_QAT ++; 
        count_of_ECU ++; 
    }
    if(configData[j].matchNumber==2 &&configData[j].stat=="reserved"){
        count_of_SEN ++; 
        count_of_NED ++;  
    }
    if(configData[j].matchNumber==3 &&configData[j].stat=="reserved"){
        count_of_ENG ++; 
        count_of_IRN ++; 
    }
    if(configData[j].matchNumber==4&&configData[j].stat=="reserved"){
        count_of_USA ++;  
        count_of_WAL ++; 
    }
    if(configData[j].matchNumber==5&&configData[j].stat=="reserved"){
        count_of_AUS ++; 
        count_of_FRA ++; 
    }
    if(configData[j].matchNumber==6&&configData[j].stat=="reserved"){
        count_of_TUN ++; 
        count_of_DEN ++;  
    }
    if(configData[j].matchNumber==7&&configData[j].stat=="reserved"){
        count_of_POL ++; 
        count_of_MEX ++; 
    }
    if(configData[j].matchNumber==8&&configData[j].stat=="reserved"){
        count_of_KSA ++; 
        count_of_ARG ++; 
    }
    if(configData[j].matchNumber==9&&configData[j].stat=="reserved"){
        count_of_CAN ++; 
        count_of_BEL ++;  
    }
    if(configData[j].matchNumber==10&&configData[j].stat=="reserved"){
        count_of_WRS ++; 
        count_of_ESP ++; 
    }
    if(configData[j].matchNumber==11&&configData[j].stat=="reserved"){
        count_of_JPN ++; 
        count_of_GER ++; 
    }
    if(configData[j].matchNumber==12&&configData[j].stat=="reserved"){
        count_of_CRO ++; 
        count_of_MAR ++; 
    }
    if(configData[j].matchNumber==13&&configData[j].stat=="reserved"){
        count_of_CMR ++;
        count_of_SUI ++; 
    }
    if(configData[j].matchNumber==14&&configData[j].stat=="reserved"){
        count_of_PRK ++; 
        count_of_URU ++; 
    }
    if(configData[j].matchNumber==15&&configData[j].stat=="reserved"){
        count_of_GHA ++; 
        count_of_POR++; 
    }
    if(configData[j].matchNumber==16&&configData[j].stat=="reserved"){
        count_of_SRB ++; 
        count_of_BRA ++; 
    }
    if(configData[j].matchNumber==17&&configData[j].stat=="reserved"){
        count_of_WAL ++;
        count_of_IRN ++;  
    }
    if(configData[j].matchNumber==18&&configData[j].stat=="reserved"){
        count_of_SEN ++; 
        count_of_QAT ++;  
    }
    if(configData[j].matchNumber==19&&configData[j].stat=="reserved"){
        count_of_ECU ++; 
        count_of_NED ++; 
    }
    if(configData[j].matchNumber==20&&configData[j].stat=="reserved"){
        count_of_ENG ++; 
        count_of_USA ++; 
    }
    if(configData[j].matchNumber==21&&configData[j].stat=="reserved"){
        count_of_TUN ++; 
        count_of_AUS ++; 
    }
    if(configData[j].matchNumber==22&&configData[j].stat=="reserved"){
        count_of_POL ++; 
        count_of_KSA ++;
    }
    if(configData[j].matchNumber==23&&configData[j].stat=="reserved"){
        count_of_DEN ++;
        count_of_FRA ++;
    }
    if(configData[j].matchNumber==24&&configData[j].stat=="reserved"){
        count_of_ARG ++; 
        count_of_MEX ++; 
    }
    if(configData[j].matchNumber==25&&configData[j].stat=="reserved"){
        count_of_JPN ++;  
        count_of_WRS ++; 
    }
    if(configData[j].matchNumber==26&&configData[j].stat=="reserved"){
        count_of_BEL ++; 
        count_of_MAR ++;
    }
    if(configData[j].matchNumber==27 &&configData[j].stat=="reserved"){
        count_of_CRO ++; 
        count_of_CAN ++;
    }
    if(configData[j].matchNumber==28&&configData[j].stat=="reserved"){
        count_of_ESP ++; 
        count_of_GER ++; 
    }
    if(configData[j].matchNumber==29&&configData[j].stat=="reserved"){
        count_of_CMR++; 
        count_of_SRB++; 
    }
    if(configData[j].matchNumber==30&&configData[j].stat=="reserved"){
        count_of_GHA ++; 
        count_of_PRK++; 
    }
    if(configData[j].matchNumber==31&&configData[j].stat=="reserved"){
        count_of_BRA ++;
        count_of_SUI ++;
    }
    if(configData[j].matchNumber==32&&configData[j].stat=="reserved"){
        count_of_POR ++; 
        count_of_URU ++; 
    }   
    if(configData[j].matchNumber==33&&configData[j].stat=="reserved"){
        count_of_ENG ++; 
        count_of_WAL ++;
    }
    if(configData[j].matchNumber==34&&configData[j].stat=="reserved"){
        count_of_USA ++;
        count_of_IRN ++;  
    }
    if(configData[j].matchNumber==35&&configData[j].stat=="reserved"){
        count_of_SEN ++; 
        count_of_ECU ++; 
    }
    if(configData[j].matchNumber==36&&configData[j].stat=="reserved"){
        count_of_QAT ++; 
        count_of_NED ++; 
    }
    if(configData[j].matchNumber==37&&configData[j].stat=="reserved"){
        count_of_DEN ++;
        count_of_AUS ++;  
    }
    if(configData[j].matchNumber==38&&configData[j].stat=="reserved"){
        count_of_FRA ++; 
        count_of_TUN ++; 
    }
    if(configData[j].matchNumber==39&&configData[j].stat=="reserved"){
        count_of_POL ++; 
        count_of_ARG ++; 
    }
    if(configData[j].matchNumber==40&&configData[j].stat=="reserved"){
        count_of_KSA ++; 
        count_of_MEX ++; 
    }
    if(configData[j].matchNumber==41&&configData[j].stat=="reserved"){
        count_of_BEL ++; 
        count_of_CRO ++; 
    }
    if(configData[j].matchNumber==42&&configData[j].stat=="reserved"){
        count_of_CAN ++; 
        count_of_MAR ++; 
    }
    if(configData[j].matchNumber==43&&configData[j].stat=="reserved"){
        count_of_JPN ++; 
        count_of_ESP ++; 
    }
    if(configData[j].matchNumber==44&&configData[j].stat=="reserved"){
        count_of_GER ++; 
        count_of_WRS ++;
    }
    if(configData[j].matchNumber==45&&configData[j].stat=="reserved"){
        count_of_URU ++; 
        count_of_GHA ++;
    }
    if(configData[j].matchNumber==46&&configData[j].stat=="reserved"){
        count_of_POR ++; 
        count_of_PRK ++;
    }
    if(configData[j].matchNumber==47&&configData[j].stat=="reserved"){
        count_of_SRB ++; 
        count_of_SUI ++;
    }
    if(configData[j].matchNumber==48&&configData[j].stat=="reserved"){
        count_of_BRA ++;
        count_of_CMR ++;  
    }
    
}
//console.log(count_of_res);

const App = () => {

    

/*
return (
<div className="App">
    <h1>{message}</h1>
</div>
);
}
*/
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
        uv: count_of_SRB,
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
