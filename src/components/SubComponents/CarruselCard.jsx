import React from 'react'

function CarruselCard(props) {
    let cardImg = { 
        transform: `rotateY(${props.position[0]}deg) translateZ(${props.position[1]}px)`,
        backgroundImage: `url(https://avatars.githubusercontent.com/u/84602829?v=4)`        
    }
  return (
    <div className='carruselCard' style={cardImg}>{props.name}</div>
  )
}

export default CarruselCard