import React from 'react';
import Hero from '../components/Hero.js'
import Content from '../components/Content.js'
import SkinUpdate from '../assets/rustskins.gif'


function CambotInfo(props)
{
    return(   
        <div>
            <Hero subTitle={props.title}/>
            <Content fluid={true}>

                <p>
                    <a href='https://github.com/StefonMiller/CamBot' target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>View on Github</a>
                </p>

                <p>CamBot is a Discord bot written in Python that utilizes web scraping, machine learning, and SQL to collect and maintain data on the video game Rust. This was my first experience with Python, which I grew to love over time. 
                    The project itself took around 6 months of on and off development before I fixed most bugs and added all of the features I wanted. It was deployed to over 50 Discord servers with a total userbase of close to 2,000. For 
                    some of the more technical details, see below:</p>

                <p>The data itself is scraped from <a href='https://www.rustlabs.com' target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Rustlabs</a>, a website dedicated to collecting and updating information on Rust after every update.
                    Unfortunately, the website currently doesn't have an API so accessing information on every(~3000) item requires a traversal of each item's page. Since item stats/data only update on a monthly basis, I migrated the 
                    web scraping, which was initially done for every command, to an update script that runs whenever new items are added or stats are updated. This provides users with quick access to the data while ensuring correctness.
                </p>

                <p>
                    CamBot also stores skin information, which is not readily available from the Rustlabs site. I really wanted to get initial prices on skins so users could monitor their investments to see how much certain skins increased/decreased over time.
                    Getting initial prices of any new skins was easy, as I could just scrape the item store every week and enter the information into the database. I ended up creating a script that checks the item store for any updates and updates the database if any
                    changes are found. Getting data from older skins, however, was more of a hassle.</p>
                    
                
                <p> The Rust item store works in a weird way. Every week, new skins are sold for an initial price and have a 1 week cooldown before they can be sold on the Steam market. This leads to a rather large discrepancy between the first prices on the 
                    Steam marketplace and what the initial price of the actual item was. To get the actual initial prices, I had to improvise. I utilized 2 sources programatically to get the information I needed: the Wayback Machine, my own personal purchase history. 
                    To do this, I scraped all archives of the Rust item store from the Wayback Machine. As you can imagine, the website only had a few entries for the item store. From there, I scraped my own steam purchase history from the item store and was able to get a few new initial prices, but not a 
                    complete history. The bulk of the initial item prices were manually entered from the(close to 200) videos from Youtuber ThatGermanGuy, who does weekly skin showcases. One caveat to this is that he never consistently mentions the prices, which led to some
                    gaps that I later had to fill out based on the general prices of skins. Once the initial prices were completed getting current prices was relatively simple. To ensure prices are always up to date, I scrape the steam market place entry
                    for whatever skin is being looked up on every call. Although this is slower than storing and querying the data, the performance loss is pretty minute and it ensures all prices are current.
                </p>

                <p>
                    With the skin data, I wanted to try my hand at machine learning in order to try to predict the prices of any new items that are released. I initially scraped the image of every Rust skin on the Steam marketplace and utilized the data I had
                    already collected on initial price, release date, etc. From the images I collected the distribuion of colors across all pixels for each image. The model I ended up creating used initial price, release date, and the color distribution with a 
                    linear regression algorithm to create a best-fit model for the data. The model itself ended up with an accuracy of about .5 which, while not excellent, was pretty good for a volatile market much like the one for Rust skins. I then took the 
                    module I had created and used it to predict the prices of any new skins that come out 1 year after purchase. Although it is currently impossible to determine the true accuracy of the model, some skins that I would not see retaining value
                    are predicted to lose value which is promising.
                </p>
                <img src={SkinUpdate} alt="Example of updated skins" height="200px" width="600px"/>
                <p>
                    Once I had all of the information on items and skins in the SQLite database, implementing commands for the bot itself was a matter of executing an SQL query and formatting the output. Some commands I ended up adding were more involved, 
                    particularly for the more server-oriented commands. An example of this would be the scrap system, which awards users in voice channels 1 scrap every 10 minutes. The system also manages the roles of all users in the server
                    and promotes/demotes them whenever their scrap count breaks a certain threshold. 
                </p>

                <p>
                    Overall, this project was a lot of fun to build! I found myself awake at night thinking of all the cool things I could implement. This was one of my more inspired projects as it is for a game I enjoy playing and I felt as 
                    though the code I was writing would be useful to a good amount of people.
                </p>

            </Content>
        </div>
    )
}

export default CambotInfo;