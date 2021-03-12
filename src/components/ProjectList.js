import React from 'react';
import ProjectInfo from './ProjectInfo.js';

function ProjectList(props)
{
    return(
        <div onClick={(e) => props.click(props.item)}>
            <p className="projTitle">{props.item.title}</p>
            { props.item.isHidden && <ProjectInfo links={props.item.links}/>}
        </div>
        
    );
}

export default ProjectList;