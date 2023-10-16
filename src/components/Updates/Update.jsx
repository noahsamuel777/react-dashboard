import React from 'react'
import './Update.css'
import { UpdateData } from '../../data/Data'


const Update = () => {
  return (
    <div className="update">
    {UpdateData.map((elem)=>{
        return(
            <div className="updates">
              <img src={elem.img} alt="" />
               <div className="noti">
              <div  style={{marginBottom:'0.5rem', }}>
              <span>{elem.name}</span>
              <span> {elem.noti}</span>
              
              </div>
              <span>{elem.time}</span>
        </div>
            
                      
                             
                     
            </div>
        )
    })}
    </div>
  )
}

export default Update