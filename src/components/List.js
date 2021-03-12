import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectList from './ProjectList.js';

class List extends React.Component 
{

    constructor(props)
    {
        super(props);
        this.state = 
        {

            items: 
            [
                {
                    title: 'CS0007: Intro to Computer Programming with Java(2013)',
                    links: 
                    <ul>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0007/tree/master/Project1" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Library implementation using classes</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0007/tree/master/Project2" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Unit converter utilizing GUI and events</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0007/tree/master/Project3" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Integration of sound and images into GUI</a></li>
                    </ul>,
                    isHidden: false,
                    id: 0
                },
                {
                    title: 'CS0401: Intermediate Programming with Java(2015)',
                    links: 
                    <ul>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0401/tree/master/Assig1" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Basic control strucure demonstrated through a pie shop</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0401/tree/master/Assig2" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Implementation of a gambling site with user classes</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0401/tree/master/Assig3" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Gameshow program demonstrating OOP and file manipulation</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0401/tree/master/Assig4" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Custom ballot display program using GUI</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0401/tree/master/Assig5" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Paint program using GUI and canvas</a></li>
                    </ul>,
                    isHidden: false,
                    id: 1
                },
                {
                    title: 'CS0445: Data Structures with Java(2015)',
                    links: 
                    <ul>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0445/tree/master/Assig1" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Completed skeleton of RandIndexQueue</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0445/tree/master/Assig2" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Implementation of custom stringbuilder</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0445/tree/master/Assig3" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Implementation and comparison of second stringbuilder</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0445/tree/master/Assig4" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Implementation and analysis of a grid solving algorithm</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0445/tree/master/Assig5" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Implementation of Huffman compression</a></li>
                    </ul>,
                    isHidden: false,
                    id: 2
                },
                {
                    title: 'CS0447: Computer Organization and Assembly with MIPS(2016)',
                    links: 
                    <ul>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0447/tree/master/Project%201" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Simon Says in MIPS</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0447/tree/master/Project%202" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Cash register program</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0447/tree/master/Project%203" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Recursive backtracking Sudoku solver</a></li>
                    </ul>,
                    isHidden: false,
                    id: 3
                },
                {
                    title: 'CS0449: System Software with C(2017)',
                    links: 
                    <ul>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0449/tree/master/project1" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Rock paper scissors in C and a bitmap image flipper</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0449/tree/master/project2" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Debugging provided code, and documenting my findings</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0449/tree/master/project3" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Custom implementation of malloc</a></li>
                    </ul>,
                    isHidden: false,
                    id: 4
                },
                {
                    title: 'CS1501: Algorithm Implementation with Java(2019)',
                    links: 
                    <ul>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS1501/tree/master/Assignment%202" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Implementation of a Hybrid TrieST</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS1501/tree/master/Assignment%203" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Implementation of LZW compression</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS1501/tree/master/Assignment%204" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Secure chat client using different encryption methods</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS1501/tree/master/Assignment%205" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Graph traversing/manipulation algorithm representing a network</a></li>
                    </ul>,
                    isHidden: false,
                    id: 5
                },
                {
                    title: 'CS0134: Intro to Website Design and Development(2019)',
                    links: 
                    <ul>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0134/tree/master/Project1" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Demonstration of content pages and navigation with HTML/CSS</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0134/tree/master/Project2" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Conversion calculator with Naive/Advanced user features</a></li>
                    </ul>
                    ,isHidden: false,
                    id: 6
                },
                {
                    title: 'INFOSCI1022: Database Management Systems with SQL(2020)',
                    links: [
                        <li><a class="itemlink" href="https://github.com/StefonMiller/IS1022-Database-Management-Systems" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Creation of a model databased later used for CamBot</a></li>
                    ],
                    isHidden: false,
                    id: 7
                },
                {
                    title: 'Personal Projects(Various years)',
                    links: 
                    <ul> 
                        <li><a class="itemlink" href="https://github.com/StefonMiller/stefonmiller.github.io" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Personal website using HTML/CSS/JS(2019)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/SHiFT-Code-Manager" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Redeemable code manager using Google Sheets API and PyQT Framework(2019)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CamBot" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Discord bot incorporating web scraping in Python(2020)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/STU-Speed-Testing-Utility" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Internet speed tester that exports results to a MySQL server(2020)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/stefonmiller.github.io" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Improved portfoio website using React(2020)</a></li> 
                        <li><a class="itemlink" href="https://github.com/StefonMiller/Pokemon-Leveler" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Python script that levels a user's pokémon(2020)</a></li> 
                    </ul>,
                    isHidden: false,
                    id: 8
                    
                }

            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items.forEach(item => {
            if(item.id === id && item.isHidden === false)
            {
                item.isHidden = true;
            }
            else if(item.id === id && item.isHidden === true)
            {
                item.isHidden = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <ProjectList item={item} click = {(e => this.handleCardClick(item.id, e))} key = {item.id} />
        })
    }

    render()
    {
        return(
            <Container fluid={true}>
                {this.makeItems(this.state.items)}
            </Container>
        );
    }
}

export default List;