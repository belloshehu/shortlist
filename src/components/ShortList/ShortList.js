import React from 'react'
import {Paper, Typography, Button} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Edit } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search'
import Business from '@mui/icons-material/Business';
import {Link, BrowserRouter as Router} from 'react-router-dom'
import './ShortList.css'

function ShortList(props) {
    const {_id, title, organisation, dateReleased, dateExpired, photo, searchField} = props
    return (
        <React.Fragment>
            <Paper sx={{my:1, p:1}} style={{backgroundColor: "#000322",  color: "white"}}>
                <Typography sx={{fontWeight: 'bold'}}>{title.toUpperCase()} shortlist</Typography>
                <div id="shortlist-info" color="secondary">
                    <img src={photo} id="organisation-photo"/>
                    <small>{}</small>
                    <CalendarTodayIcon />
                    <small>released: {dateReleased.slice(0, 10)}</small> |
                    <CalendarTodayIcon />
                    <small>expires: {dateExpired.slice(0, 10)}</small> |
                    <SearchIcon />
                    <small>search field: {searchField}</small>
                    {
                        localStorage.getItem("token") &&
                        <Link to={`/shortlist-edit/${_id}`}  
                            edge="end"
                            sx={{margin:"0px 10px 0px 20px"}} 
                        >
                            <Edit  />
                        </Link>
                    }
                    <Link to={`/shortlist/all/${_id}`}  
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
