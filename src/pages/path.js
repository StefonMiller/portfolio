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
                    <a href='https://stefonmiller.github.io/Pathfinding-Comparison/' target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>View Site</a>
                    <br></br>
                    <a href='https://github.com/StefonMiller/Pathfinding-Comparison' target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>View on Github</a>

                </p>

                <p>
                    This project utilizes javascript to generate mazes using Eller's algorithm and then displays the real-time results of various pathfinding
                    algorithms (DFS, BFS, and A*). Eller's algorithm is a very interesting maze generation algorithm utilizing set theory. The mazes generated 
                    are done so in linear time and are guaranteed to be "perfect". This means that any maze generated will not only be performant, it will be guaranteed
                    to be solvable by the pathfinding algorithms, which was perfect for this project.
                </p>

                <p>
                    After implementing the maze generation, I begin adding various pathfinding algorithms to traverse the mazes. I wanted the program to demonstrate
                    the difference between the algorithms in real-time, so I wrote the initialization function to run each algorithm at the same time. The documentation
                    on DFS, BFS, and A* is very available but the JS-specific implementation wasn't as easy to find. After a fair bit of debugging the recursive calls
                    for DFS I was able to get it working. After finishing DFS, BFS was relatively simple and A* wasn't nearly as hard. 
                </p>

                <p>
                    If I were to revisit this project there are some bugs I would love to fix, namely with resetting the maze during execution. I would also like to move the 
                    project to React once I am more comfortable with the framework. However, I am proud of what I wrote and learned a lot about Javascript in the process!
                </p>

            </Content>
        </div>
    )
}

export default Project3Info;