import React from 'react'
import WorldMap from './WorldMap'

export const Main = () => {
  return (

    <>
    <div className='d-flex '>
    <div className='col-4 mt-20'>
      <ul>
        <li>
            1
        </li>
        <li>
            2
        </li>
        <li>
            3
        </li>
        <li>
            4
        </li>

        <li>
            5
        </li>
        <li>
            6
        </li>
        <li>
            7
        </li>

      </ul>
        
        </div>
        <div className='h-125 w-75 worlddiv '><WorldMap/></div>
    </div>
    </>
  )
}
