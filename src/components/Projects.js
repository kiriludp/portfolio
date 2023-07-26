import React from 'react';


function Project(props) {
    const {image, title} = props;

    return (
        <div className="projs">
            <h1>{title}</h1>
            <p>{image}</p>
        </div>
    )
        
}

    

export default Project;