import React from 'react'

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
function cardTypeFunc(num){
    let type = "";
    switch (num){
        case 1:
            type = " big-stretch"
            return type
        case 2:
            type = " v-stretch"
            return type
        case 3:
            type = " h-stretch"
            return type
        case 4:
        case 5:
        case 6:
            return type
        default:
            let rn = randomNumber(6);
            return cardTypeFunc(rn);
    }
}

function cardGallery(props) {
    let cardType = "gallery-card";
    cardType += cardTypeFunc(props.priority);

  return (
    <div className={cardType}>
      <img src={props.image} className= "gallery__img"/>
      <div className='card-technologies'>
        {}
      </div>
    </div>
  )
}

export default cardGallery
