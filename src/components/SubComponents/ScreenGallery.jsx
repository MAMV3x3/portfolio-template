import React from 'react'
import GalleryCard from './GalleryCard';
import './GalleryCard.css';

function ScreenGallery(props) {
    let galleryCards = [];
    props.proyects.map((val)=>{
        galleryCards.push(<GalleryCard name={val.name} about={val.about} date={val.date} image={val.image[0]}/>)
      }
    )  
  return (
    <div className='gallery'>
        {galleryCards}
    </div>
  )
}

export default ScreenGallery