import React from 'react'
import {Paper, Typography, Button} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Business from '@mui/icons-material/Business';
import {Link, BrowserRouter as Router} from 'react-router-dom'
import './ShortList.css'
import {Badge} from '@mui/material'

function ShortList(props) {
    const {_id, title, organisation, dateReleased, dateExpired, photo, searchField} = props
    return (
        <React.Fragment>
            <Paper sx={{my:1, p:1}}>
                <Typography sx={{fontWeight: 'bold'}}>{title.toUpperCase()} shortlist</Typography>
                <div id="shortlist-info" color="secondary">
                    <img src={photo} id="organisation-photo"/>
                    <small>{}</small>
                    <CalendarTodayIcon />
                    <small>released: {dateReleased.slice(0, 10)}</small>
                    <small>expires: {dateExpired.slice(0, 10)}</small>
                    <small>search field: {searchField}</small>
                    <Link to={`/shortlist/${_id}`}  
                        component={Button}
                        variant="contained"
                        sx={{mr:0, ml:'auto'}}
                    >
                        Open
                    </Link>
                </div>
            </Paper>
        </React.Fragment>
    )
}

export default ShortList
