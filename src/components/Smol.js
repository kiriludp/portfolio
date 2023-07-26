import React from 'react';


function Smol(props) {
    const {emoji, text} = props;

    return <li>{emoji} {text}</li>;
}

    

export default Smol;