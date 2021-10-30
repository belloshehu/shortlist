import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
function Error() {
    return (
        <div>
            <h1>Route does not exist </h1>
            <Link to='/' component={Button}>Back to home</Link>
        </div>
    )
}

export default Error
