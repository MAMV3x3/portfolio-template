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
            let rn = 4;
            return cardTypeFunc(rn);
    }
}

function cardGallery(props) {
    let cardType = "gallery-card";
    let technologiesItems = [];
    let technologiesColor = {
        "C#":"#1506F6",
        "C++":"#0641F6",
        "C":"#0660F6",
        "Python":"#12F606",
        "JavaScript":"#F6EE06",
        "Java":"#F60630",
        "HTML":"#F6B306",
        "CSS":"#06D1F6",
        "Matlab":"#F63106",
        "R":"#4006F6",
        "Arduino":"#049ECC",
        "VHDL":"#93A4AA",
        ".NET":"#ab45ff",
        "":""
    }
    
    let iconTechnologie = (technologie) =>{
        let iconColor = technologiesColor[technologie];
        return(
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 49 49">
            <g id="Ellipse_1" data-name="Ellipse 1" fill={iconColor} stroke="none" stroke-width="1">
                <circle cx="24.5" cy="24.5" r="24.5" stroke="none"/>
                <circle cx="24.5" cy="24.5" r="24" fill="none"/>
            </g>
        </svg>)
    }

    /* load card type and make it so doesn't refresh */

    cardType += cardTypeFunc(props.priority);
    
    props.technologies.map((val)=>{
        technologiesItems.push(
            <div className='card-technologies__item'>
                {iconTechnologie(val)}
                {<div className='technologie-name'>{val}</div>}
            </div>
        );
    });

    const [show, setShow] = React.useState(true);

    return (
        <div className={cardType}>
            {/* <div className='gallery-images'>
                <img src={props.image} className= "gallery__img"/>
            </div> */}
            {
                show ? <div className='card-content' style={{
                    backgroundImage: `url(${props.image})`, 
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'block',
                }} onClick={() => setShow(!show)}>
                <div className='card-technologies'>
                    {technologiesItems}
                </div>
                </div>
                : null             
            }
            {
                show ? null :
                <div className="card-reveal" onClick={() => setShow(!show)}>
                <div className="card-title">
                    <span className='card-title__title'>
                        <h2>{props.name}</h2>
                    </span>
                    <div className="icon__container">
                        <a href={props.github} target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div className='card-title__date'>
                        <i className="far fa-calendar-alt"></i>
                        <p>{props.date}</p>
                    </div>
                </div>
                <div className="card-description">
                    <p>{props.about}</p>
                </div>
                {/* github link */}
                </div>
            }
            <div className="show-more" onClick={() => setShow(!show)}>
                <i className="fa fa-chevron-right"></i> Show more
            </div>
        </div>
  )
}

export default cardGallery
