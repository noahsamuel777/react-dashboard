import React, { useState } from 'react'
import './Sidebar.css'

import bolt from '../../images/nut.png'
import { SidebarData } from '../../data/Data'

import { UilBars} from "@iconscout/react-unicons"

import { motion } from 'framer-motion'

const Sidebar = () => {
    const[selected, setSelected] = useState(0)

    const[expanded, setExpanded] = useState(true)


const sidebarVariants = {
  true:{
    left:'0',
  },
  false:{
    left:'-60%'
  }
}
  return (
    <>
    <div className='bars'  style={expanded? {left:'60%' } : {left:'5%'}}
    onClick={()=>setExpanded(!expanded)}
    >
    <UilBars/>
    </div>


    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}` : ''}
    >
   
     { /** logo */}
    <div className="dashboard">
    <img src={bolt} alt="" />
    <h3>Dashboard</h3>
    </div>
    


    {/**menu  */}

    <div className="menu">
   
          {SidebarData.map((item,index)=>{
            return(
                <div
                 key={index}
                  onClick={()=>setSelected(index)}
                 className={selected === index?'menuItem active': 'menuItem'}>
                
                       <item.icon/>
                       <span>
                         {item.heading}
                       </span>
                </div>
            )
          })}
    
    </div>
    
    
    </motion.div>

    </>
  )
}

export default Sidebar