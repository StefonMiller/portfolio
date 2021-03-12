import React from 'react';
import Hero from '../components/Hero.js'
import Content from '../components/Content.js'

function Project3Info(props)
{
    return(   
        <div>
            <Hero subTitle={props.title}/>
            <Content fluid={true}>

                <p>
                    <a href='https://github.com/StefonMiller/Pokemon-Leveler' target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>GitHub repo</a>
                </p>

                <p>This is a Python project I am currently working on that is essentially a bot that levels up a user's pokémon in any of the gen 3 games(Ruby, Sapphire, Emerald). The script opens an emulator and loads a rom with pywingui and 
                    checks if there is currently a saved game. If not it goes through the file creation process. Once in game, the bot will look for a grass patch and start to level up pokémon in it.
                </p>

                <p>
                    I plan to add functionality for shiny pokémon as well as pokémon in the user's PC.
                </p>

            </Content>
        </div>
    )
}

export default Project3Info;