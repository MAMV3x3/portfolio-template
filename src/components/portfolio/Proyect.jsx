import React from 'react'
import './Proyect.css'

function Proyect(props) {
  return (
    <div className='proyect'>
      <div className='text'>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
      </div>
      <div className='image'>
        <img src={props.image}/>
      </div>
    </div>
  )
}

export default Proyect
