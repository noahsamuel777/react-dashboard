import React from 'react'
import './Main.css'
import Containers from '../containers/Containers'
import Table from '../Table/Table'
import Stat from '../statistics/Stat'

const Main = () => {
  return (
    <div className='Main'>
    <h1 style={{marginBottom:'10px'}}>Dash board</h1>
 
    <Containers/>

      <Stat/>
              
    <Table/> 
    
    </div>
  )
}

export default Main