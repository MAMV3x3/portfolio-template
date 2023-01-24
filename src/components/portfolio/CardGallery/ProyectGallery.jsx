import React from 'react'
import CardGallery from './CardGallery'
import './ProyectGallery.css'


function ProyectGallery(props) {
  
  let galleryCard = [];
    props.proyects.map((val)=>{
        galleryCard.push(<CardGallery priority={val.priority} name={val.name} about={val.about} date={val.date} image={val.image[0]} technologies={val.technologies}/>)
      }
    )  
  return (
    <div className='gallery'>
      {galleryCard}
    </div>
  )
}

export default ProyectGallery