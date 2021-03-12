import React from 'react';
import Container from 'react-bootstrap/Container';
import List from '../components/List.js';
import Hero from '../components/Hero.js'

function Projectpage(props)
{
    return(   
        
        <React.Fragment>
            <Hero subTitle={props.title}/>
            <Container>
                <List />
            </Container>
        </React.Fragment>
        
        
    )
}

export default Projectpage;