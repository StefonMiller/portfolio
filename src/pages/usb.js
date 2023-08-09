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
                    <a href='https://github.com/StefonMiller/Auto-Bootable-USB' target="_blank" rel="noopener noreferrer" style={{color:'#BB86FC'}}>View on Github</a>
                </p>

                <p>One of the additional responsibilities as a Senior Technical Consultant is maintaining our inventory of Windows and macOS installer drives. In order to update these
                    devices, I have to run the Windows Media Creation Tool and macOS createinstallmedia command respectively. This can be time consuming as the 
                    Media Creation Tool downloads a Windows ISO on every execution. Additionally, the createinstallmedia command may need to be executed multiple times if a drive is 
                    partitioned to contain multiple macOS installers. To remedy this issue, I created 2 separate python scripts that automate the entire process.
                </p>

                <p>
                    The Windows script simply prompts the user for the flash drive to format. Once they select a disk, the script formats the drive, mounts an existing Windows ISO, 
                    and transfers the files to the USB before dismounting the ISO. The script itself uses python's subprocess module to automate commands and manipulate their output.
                    Certain parts of the script, such as drive formatting, were accomplished using diskpart's /s flag which allows for execution of commands in a text file. This eliminates
                    any timing issues with inputting commands.
                </p>

                <p>
                    The macOS script allows for the creation of bootable macOS or Linux installers. The script itself is more clean in terms of issuing commands and fetching output, but was a bit more involved to create. 
                    The script first has the user select either macOS or Linux and the target disk before formatting it. For macOS drives, users can select as many versions of macOS as will fit on the drive. From there, 
                    the script will create a separate partition for each version and run the createinstallmedia command using multithreading. For Linux drives, the script will prompt the user for a Linux ISO and convert it
                    to a .img file. From there, the .img file is transferred to the USB.
                </p>

                <p>
                    This project was probably one of my favorites as it both made my job easier and improved my knowledge of scripting in bash and cmd. There are already tons of programs like Rufus that allow you to make bootable Linux ISOs but I 
                    decided to code it myself to add functionality for all major OSes. In the future, I would like to add functionality for automatic downloads of ISO files if none are found as well as a non-CLI UI. 
                </p>
                    

            </Content>
        </div>
    )
}

export default EFTInfo;