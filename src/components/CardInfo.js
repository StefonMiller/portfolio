import React from 'react';
import { useSpring, animated} from 'react-spring';

function CardInfo(props)
{

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <animated.div className="carousel-card-info" style={style}>
            <p className="carousel-card-title white-text">{props.title}</p>
            <p className="carousel-card-sub-title">{props.subTitle}</p>
            <a href={props.link} style={{color:'#BB86FC'}}>Check it out!</a>
        </animated.div>
    );
}

export default CardInfo;