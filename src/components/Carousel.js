import React from 'react';
import cambot from '../assets/discord.png';
import poke from '../assets/maze.png';
import eft from '../assets/usb.png';
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
                    subTitle: 'Discord bot incorporating web scraping, SQL,\n and ML to provide data on the video game Rust',
                    imgSrc: cambot,
                    link: '/portfolio#/cambot',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Pathfinding Comparison',
                    subTitle: "Comparison of pathfinding algorithms on \n mazes generated with Eller\'s algorithm",
                    imgSrc: poke,
                    link: '/portfolio#/path',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Automatic USB Installers',
                    subTitle: 'Scripts that automatically create bootable OS installers',
                    imgSrc: eft,
                    link: '/portfolio#/usb',
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