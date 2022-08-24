import React from 'react'
import { CircularProgress } from '@mui/material';

function Loading() {
    const style = {
        marginTop:  "10%", 
    }
    return (
        <div style={style}>
            <CircularProgress color="primary"/>
            <h3>Loading...</h3>
        </div>
    )
}

export default Loading
