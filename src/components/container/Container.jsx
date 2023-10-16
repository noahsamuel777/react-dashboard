import React, { useState } from 'react'
import './Container.css'
import { motion,AnimatePresence } from 'framer-motion'
//react circular progress bar npm
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//close icon
import {UilTimes} from '@iconscout/react-unicons'
//chart
import Chart from 'react-apexcharts'

const Container = (props) => {

const[expanded, setExpanded] = useState(false)

  return (
   <AnimatePresence>
    {expanded?
    (<ExpandedCard  param={props} setExpanded={()=>setExpanded(false)}/>)
    : <Compactcard param={props} setExpanded={()=>setExpanded(true)}/>}
   </AnimatePresence>
  )
}


//structure of compactcard
function Compactcard({param , setExpanded}){
const Png = param.png;
return(

    <motion.div className="compactcard"
    style={{
        background:param.color.backGround,
             boxShadow:param.color.boxShadow
           }}
    onClick={setExpanded}
    // layoutId='expandableCard'
    >
        <div className="radialbar">

            <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
            />
               
            <span  className='hei'>{param.title}</span>


       </div>
          <div className="detail">
          <Png/>
          <span>${param.value}</span>
          <span >Last 24 hrs</span>
          </div>
    
    
    </motion.div>
)

}


//structure of  Expanded function

function ExpandedCard({param,setExpanded}){
    const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
          
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
    return(
             <motion.div className="ExpandedCard"
             style={{
                background:param.color.backGround,
             boxShadow:param.color.boxShadow,
             color:'black'
             }}
            // layoutId='expandableCard'
               
             >

              <div  style={{alignSelf:'flex-end', cursor:'pointer', color:'grey'}}>
              <UilTimes onClick={setExpanded}
             
              />
              </div>

              <span style={{color:'black',fontSize:'26px', fontWeight:'bold', textShadow:'0px 0px 15px  grey'}}>{param.title}</span>
                <div className="chartcontainer">
                   
                <Chart series={param.series}  type='area' options={data.options}/>
                 
                 </div>
                 <span style={{fontSize:'16px',color:'black', boxShadow:'none'}}> last 24 hrs</span>
              

             </motion.div>
    )
}

export default Container