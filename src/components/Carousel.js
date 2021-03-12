import React from 'react';
import cambot from '../assets/discord.png';
import poke from '../assets/poke.png';
import eft from '../assets/eft.png';
import Card from './Card.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component 
{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            items: 
            [
                {
                    id: 0,
                    title: 'CamBot',
                    subTitle: 'Discord bot incorporating web scraping, SQL, and ML',
                    imgSrc: cambot,
                    link: '/cambot',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Pokémon Leveler',
                    subTitle: 'Pokémon leveler written in Python',
                    imgSrc: poke,
                    link: '/project2',
                    selected: false
                },
                {
                    id: 2,
                    title: 'EFT Drop Idler',
                    subTitle: 'Chrome Extension that idles for Twitch drops',
                    imgSrc: eft,
                    link: '/eft',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false: true;

        items.forEach(item => {
            if(item.id !== id)
            {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click = {(e => this.handleCardClick(item.id, e))} key = {item.id} />
        })
    }

    render()
    {
        return(
            
        <Container fluid={true}>
            <Row className="justify-content-around pad-bottom"> 
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
        );
    }
}

export default Carousel;