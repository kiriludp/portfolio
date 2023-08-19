import React from 'react';
import {Box} from '@mui/material';
import './Timeline.css';


export default function(props) {

    const {education, diploma, skills} = props;
    const height="400px";
    const width=props.height * 2;
    const styles= {
        name: {
            fontSize: "40px",
        },
        items: {
            fontSize: '30px',
            fontStyle: 'italic'
        }
    }

    return(
        <Box className='card'>
            <Box component={'li'}>
                
            </Box>
        </Box>


    )
}
