import React from 'react';
import Hero from '../components/Hero.js'
import Content from '../components/Content.js'

function EFTInfo(props)
{
    return(   
        <div>
            <Hero subTitle={props.title}/>
            <Content fluid={true}>

                <p>
                    <a href='https://github.com/StefonMiller/EFT-Drop-Idler' target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>GitHub repo</a>
                </p>

                <p>This is a Chrome Extension(written in JavaScript) that idles for Escape From Tarkov Twitch Drops for the June 2020 Twitch drops event. The extension itself was made in ~4 hours. There are many things I would change if I had the time, 
                    however the event was announced with such short notice development took place hours before the drops started and was actively worked on throughout the event. I wanted to publish the extension to 
                    the Chrome store, but the turnaround time on publishing took too long so I ended up just distributing the software to my group of friends.</p>
                    
                <p> The drop idler gets a list of the top 100 streamers currently broadcasting EFT using Twitch API. From there it cross references that list with a static list of streamers that have drops enabled for a given day, which was released by Battlestate Games prior to the event. 
                    The streamer that has drops enabled with the most viewers is selected and that stream is opened in a new tab. This routine executes every 30 minutes and only opens a new tab if there is not stream with drops enabled opened 
                    to prevent creating a new tab every 30 mins. For this event, the streams with drops enabled switched at 12:00 MSK, so I had to convert timezones to switch streams at the correct times. </p>

            </Content>
        </div>
    )
}

export default EFTInfo;