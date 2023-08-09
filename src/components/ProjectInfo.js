import React from 'react';
import { useSpring, animated} from 'react-spring';

function ProjectInfo(props)
{

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <animated.div style={style}>
            <p>{props.links}</p>
        </animated.div>
    );
}

export default ProjectInfo;