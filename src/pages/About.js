import React from 'react';
import Hero from '../components/Hero.js'
import Content from '../components/Content.js'

function Aboutpage(props)
{
    return(   
        <div>
            <Hero subTitle={props.title}/>
            <Content fluid={true}>

                <p>I am a Computer Science and Information Science major at the University of Pittsburgh.</p>
                    
                <p>Ever since I got my first PC I've had a passion for tinkering with computer software and hardware. I took up Java in 2013 for a class in high school and fell in love with programming. Since then I've learned and applied a variety of languages to my personal interests, from Python to SQL to Javascript.</p>

                <p>I'm always looking to learn something new! I just finished writing a Discord bot in Python incorporating web scraping, SQL databases, machine learning, and a custom fuzzy string matching algorithm to bring users data on items and skins in the video game Rust.</p>
                
            </Content>
        </div>
    )
}

export default Aboutpage;