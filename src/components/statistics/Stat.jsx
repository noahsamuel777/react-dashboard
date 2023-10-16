import React, { useState } from "react";
import Chart from "react-apexcharts";

function Stat() {
  const [options,] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  });

  const [series, ] = useState([
    {
      name: "series-1",
      data: [30, 40, 80, 50, 70, 30, 70, 91,78,54,34,60]
    }
  ]);

  return (<div className="main">
    <h3>Over View</h3>
    <div style={{color:'black',  backgroundColor:'white', borderRadius:'10px'}} className="app">
    
      <div className="row">
        <div  className="mixed-chart">
          <Chart 
          
            options={options}
            series={series}
            type="bar"
            
           
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Stat;
