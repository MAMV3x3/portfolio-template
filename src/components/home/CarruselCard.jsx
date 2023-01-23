import React from 'react'

function CarruselCard(props) {
    let cardImg = { backgroundImage: `url(https://avatars.githubusercontent.com/u/84602829?v=4)` }
  return (
    <div className='carruselCard' style={cardImg}>{props.name}</div>
  )
}

export default CarruselCard