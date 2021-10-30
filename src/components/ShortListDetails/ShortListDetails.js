import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {items as data} from '../../data/short-list'
import SearchTool from '../SearchTool/SearchTool'
import {Grid, Typography, Paper, Button} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import './ShortListDetails.css'

function ShortListDetails() {
    const {id} = useParams()
    const [shortlist, setShortlist] = useState(data[0])

    useEffect(() => {
        // const selecledShortlist = data.find((item)=> item.id === parseInt(id))
        // setShortlist(selecledShortlist)
    }, [])
    return (
        <div id="main-body">
            <Grid container>
                <Grid item sm={12} lg={6}>
                    <h1>{shortlist.title} shortlist</h1>
                    <div id="shortlist-info">
                        <img src={shortlist.photo} className="organisation-photo"/>
                        <span><i style={{color:'black'}}>released by</i> {shortlist.organisation}</span>
                        <CalendarTodayIcon />
                        <span><i style={{color:'black'}}>released</i> {shortlist.releasedDate.slice(0, 16)}</span>
                    </div>
                    <p id="details">{shortlist.details}</p>
                    <Link to='/' component={Button} variant="contained">Back to shortlists</Link>
                </Grid>
                <Grid item sm={12} lg={6}>
                    <Paper style={{'padding': '5%', height: '60vh'}}>
                            <SearchTool searchKey={"name"}/>
                            <p>Matching item ({0})</p>
                      
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ShortListDetails
