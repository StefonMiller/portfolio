import React from 'react';
import Hero from '../components/Hero.js'
import Content from '../components/Content.js'

function Aboutpage(props)
{
    return(   
        <div>
            <Hero subTitle={props.title}/>
            <Content fluid={true}>

                    <p>I am an Assigned Support Engineer at Coupa Software.</p>
                    
                    <p>Ever since I got my first PC I've had a passion for tinkering with computer software and hardware. I took up Java in 2013 for a class in high school and fell in love with programming. Since then I've learned and applied a variety of languages to my personal interests.</p>
    
                    <p>I have a deep passion for applying my programming background to pain points in current processes. I am an innovator at heart, and am always integrating new knowledge with my experience to provide value both in and out of my role through best practices and operations improvements.</p>
    
                    <p>My background in data/computer science allows me to gather and analyze data to determine current challenges that are being faced. With this knowledge and my programming background, I am able to develop and deploy solutions that improve productivity and provide meaningful value.</p>
    
                    <p>During my career at Coupa Software, I have archited multiple workflows/tools to improve the day-to-day activities of my colleagues. These processes are currently in use globally, across functional teams.</p>
    
            </Content>
        </div>
    )
}

export default Aboutpage;