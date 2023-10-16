import React from 'react'
import './Containers.css'
import { CardsData } from '../../data/Data'
import Container from '../container/Container'

const Containers = () => {
  return (
    <div className='Containers'>
    
    {CardsData.map((card,id)=>{
        return(

            <div className="parentcontainer">
            
            <Container
            title={card.title}
            value={card.value}
            color={card.color}
            png={card.png}
            series={card.series}
            barValue={card.barValue}
            
            />
            
            </div>
        )
    })}
    
    
    </div>
  )
}

export default Containers