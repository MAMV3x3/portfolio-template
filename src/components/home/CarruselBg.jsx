import React from 'react'
import CarruselCard from './CarruselCard';
import './CarruselBg.css'

function CarruselBg(props) {
  let carruselCard = [];
  let carruselPerspectiveCards = {
    carrusel:{
      /*nth child */
    }
  }
    props.proyects.map((val)=>{
        carruselCard.push(<CarruselCard name={val.name} about={val.about} date={val.date} image={val.image[0]}/>)
      }
    )  
  console.log(props.proyects.length)
  return (
    <div className='carrusel'>
      {carruselCard}
    </div>
  )
}

export default CarruselBg