import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectList from './ProjectList.js';
import Project2 from '../assets/project2.pdf';
import Project3 from '../assets/project3.pdf';

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
                    title: 'Personal Projects(Various years)',
                    links: 
                    <ul> 
                        <li><a class="itemlink" href="https://github.com/StefonMiller/stefonmiller.github.io" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Personal website using HTML/CSS/JS(2019)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/SHiFT-Code-Manager" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Redeemable code manager using Google Sheets API and PyQT Framework(2019)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CamBot" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Discord bot incorporating web scraping in Python(2020)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/STU-Speed-Testing-Utility" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Internet speed tester that exports results to a MySQL server(2020)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/stefonmiller.github.io" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Improved portfoio website using React(2020)</a></li> 
                        <li><a class="itemlink" href="https://github.com/StefonMiller/EFT-Drop-Idler" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Chrome extension that idles for Twitch drops(2020)</a></li>
                        <li><a class="itemlink" href="https://stefonmiller.github.io/Pathfinding-Comparison/" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Comparison of DFS, BFS, and A* in real-time using mazes generated with Eller's Algorithm(2021)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/Auto-Bootable-USB" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Script that automatically creates bootable macOS, Linux, and Windows installers (2021)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/wordle-solver" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Algorithm that uses statistical analysis to solve Wordle puzzles. Solutions posted to Twitter (2022)</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/LBAL-Automator" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Bot that plays and wins the slot machine rougelike Luck Be a Landlord (2023)</a></li>
                    </ul>,
                    isHidden: false,
                    id: 17
                    
                },
                {
                    title: 'CS1656: Intro to data science with Python, SQL, Neo4j(2021)',
                    links: [
                        <ul>
                            <li><a class="itemlink" href="https://github.com/cs1656-fall2021/project1-StefonMiller" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Downloading and manipulating bicycle rental data with python</a></li>
                            <li><a class="itemlink" href="https://github.com/cs1656-fall2021/project2-StefonMiller" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Querying a database using SQL</a></li>
                            <li><a class="itemlink" href="https://github.com/cs1656-fall2021/project3-StefonMiller" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Construction of a user-based recommender system with python</a></li>
                            <li><a class="itemlink" href="https://github.com/cs1656-fall2021/project4-StefonMiller" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Querying a graph database using Neo4j</a></li>
                            <li><a class="itemlink" href="https://github.com/cs1656-fall2021/project56-StefonMiller" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Construction of an end-to-end data pipeline(data cleaning, organizing, visualizing, and clustering) with python</a></li>
                            </ul>
                        ],
                    isHidden: false,
                    id: 16
                },
                {
                    title: 'CS1660: Introduction to Cloud Computing with Java, Python, Docker(2021)',
                    links: [
                        <ul>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/cs1660-final-project" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Using GCP Dataproc clusters with Hadoop to construct and query inverted indices</a></li>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/CS1660-Bonus" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Deployment of a sentiment analysis microservice on GCP with Kubernetes</a></li>
                            </ul>
                        ],
                    isHidden: false,
                    id: 15
                },
                {
                    title: 'CS1550: Operating Systems with C, Java(2021)',
                    links: [
                        <ul>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/CS1550/tree/main/Project%201" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Implementation of semaphores via syscalls</a></li>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/CS1550/tree/main/Project%202" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Multithreaded simulation of a museum using condition variables</a></li>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/CS1550/tree/main/Project%203" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Virtual memory simulation with OPT and LRU algorithms</a></li>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/CS1550/tree/main/Project%204" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Implementation of a file system using FUSE</a></li>
                        </ul>
                        ],
                    isHidden: false,
                    id: 14
                },
                {
                    title: 'ENGCMP0600: Technical Writing(2021)',
                    links: [
                        <ul>
                            <li><a class="itemlink" href="https://docs.google.com/document/d/1qOpPJnjiar70NNVvkyq6aUSFInQNQObQjtjbif81wi4/edit" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Proposal document using technical writing conventions</a></li>
                            <li><a class="itemlink" href={Project2} target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Safety document using Adobe InDesign</a></li>
                            <li><a class="itemlink" href={Project3} target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Infographic using Adobe InDesign and Illustrator</a></li>
                            <li><a class="itemlink" href="https://github.com/ericanderson2/CryptoTracker" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Group project developing a cryptocurrency monitoring website</a></li>
                            <li><a class="itemlink" href="https://docs.google.com/document/d/1AXX-_rY9h1J6EE5YDPze53iLE6ueWIFPAa6NOhaLZRM/edit" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Usability study report</a></li>
                        </ul>
                        ],
                    isHidden: false,
                    id: 13
                },
                {
                    title: 'IS1540: Data Engineering with Python, MySQL(2021)',
                    links: [
                        <li><a class="itemlink" href="https://github.com/StefonMiller/IS1540-Group-Project" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Group project implementing a data pipeline using an ODB and data warehouse</a></li>
                    ],
                    isHidden: false,
                    id: 12
                },
                {
                    title: 'CS1555: Database Management Systems with PostgresSQL(2021)',
                    links: [
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS1555-Group7" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Group project utilizing JDBC to implement an investment application</a></li>
                    ],
                    isHidden: false,
                    id: 11
                },
                {
                    title: 'CS1632: Introduction to Software QA with Java(2020)',
                    links: [
                        <ul>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/CS1632-Deliverable-2" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Completion of a program using a test-driven development approach</a></li>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/CS1632-Deliverable-3" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Automated black-box testing of a web application using Selenium</a></li>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/CS1632-Deliverable-4" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Performance optimization using profiling and pinning tests</a></li>
                            <li><a class="itemlink" href="https://github.com/StefonMiller/CS1632-Deliverable-5" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Development of a GUI application using test-driven development and automated testing</a></li>
                        </ul>
                    ],
                    isHidden: false,
                    id: 10
                },
                {
                    title: 'CS0334: Intermediate Web Design with PHP, Javascript(2020)',
                    links: [
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0334" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Pittsburgh Destinations website showcasing PHP and SQL connectivity</a></li>
                    ],
                    isHidden: false,
                    id: 9
                },
                {
                    title: 'INFOSCI1022: Database Management Systems with MySQL(2020)',
                    links: [
                        <li><a class="itemlink" href="https://github.com/StefonMiller/IS1022-Database-Management-Systems" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Creation of an entity-relation model later used for a personal project</a></li>
                    ],
                    isHidden: false,
                    id: 8
                },
                {
                    title: 'CS0134: Intro to Website Design and Development(2019)',
                    links: 
                    <ul>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0134/tree/master/Project1" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Demonstration of content pages and navigation with HTML/CSS</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0134/tree/master/Project2" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Conversion calculator with Naive/Advanced user features</a></li>
                    </ul>
                    ,isHidden: false,
                    id: 7
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
                    id: 6
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
                    id: 5
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
                    id: 4
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
                    id: 3
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
                    id: 2
                },
                {
                    title: 'CS0007: Intro to Computer Programming with Java(2013)',
                    links: 
                    <ul>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0007/tree/master/Project1" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Library implementation using classes</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0007/tree/master/Project2" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Unit converter utilizing GUI and events</a></li>
                        <li><a class="itemlink" href="https://github.com/StefonMiller/CS0007/tree/master/Project3" target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>Integration of sound and images into GUI</a></li>
                    </ul>,
                    isHidden: false,
                    id: 1
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