import React from 'react';
import CardInfo from './CardInfo.js';
import { MDBView, MDBMask} from "mdbreact";

function Card(props)
{
    return(
        <div className="d-inline-block carousel-card" onClick={(e) => props.click(props.item)}>
            <MDBView hover className = "carousel-card-image">
                <img className="carousel-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                <MDBMask className="flex-center" overlay="black-strong">
                    <p className="white-text">{props.item.title}</p>
                </MDBMask>
            </MDBView>
            { props.item.selected && <CardInfo subTitle={props.item.subTitle} link={props.item.link}/>}
        </div>
        
    );
}

export default Card;