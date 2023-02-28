import React from 'react'
import WorldMap from './WorldMap'
import Aside from './Aside'

export const Main = () => {
  return (


    <div className=' row'>
    <div className='col-md-4'>
      <Aside/>
      
        
        </div>
        <div className=' worlddiv col-md-8'><WorldMap/></div>
    </div>

  )
}
