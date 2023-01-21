import React from 'react'
import Proyect from './Proyect'
import './Proyect.css'

function HoriziontalList(props) {
    let proyectsCard = [];
    props.proyects.map((val)=>{
        proyectsCard.push(<Proyect name={val.name} about={val.about} date={val.date} image={val.image}/>)
    })
  return (
    <div className='horizontal-list'>
        {proyectsCard}
    </div>
  )
}

export default HoriziontalList