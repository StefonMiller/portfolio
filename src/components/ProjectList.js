import React from 'react';
import ProjectInfo from './ProjectInfo.js';

function ProjectList(props)
{
    return(
        <div>
            <p className="projTitle" onClick={(e) => props.click(props.item)}>{props.item.title}</p>
            { props.item.isHidden && <ProjectInfo links={props.item.links}/>}
        </div>
        
    );
}

export default ProjectList;