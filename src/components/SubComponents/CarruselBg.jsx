import React from 'react'
import CarruselCard from './CarruselCard';
import './CarruselBg.css'


function CarruselBg(props) {
  let carruselCard = [];
  let cardNum = 0;
  // transform: `rotateY(${cardNum * (360/props.proyects.length)})`
    props.proyects.map((val)=>{
        carruselCard.push(<CarruselCard name={val.name} about={val.about} date={val.date} image={val.image[0]} position={[cardNum * (360/props.proyects.length), 500]}/>)
        cardNum++;
      }
    )  
  console.log(props.proyects.length)
  return (
    <div className='carrusel-all'>
      <div className='carrusel'>
        <div className="middleStuff">
          <h1>Hola morro</h1>
        </div>
        {carruselCard}
      </div>
    </div>
  )
}

export default CarruselBg