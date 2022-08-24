import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import SearchTool from '../SearchTool/SearchTool'
import {Grid, Typography, Paper, Button} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Loading from '../Loading/Loading'
import './ShortListDetails.css'
import axios from 'axios';

function ShortListDetails() {
    const {id} = useParams()
    const [shortlist, setShortlist] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    
    const getShortlist = async() => {
        try{
            const {data} = await axios.get(`http://localhost:8000/shortlist/all/${id}`)
            setShortlist(data.shortlist)
            setIsLoading(!isLoading)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getShortlist();
    }, [])

    if (isLoading){
        return(
            <Loading />
        )
    }
    else{
        return (
            <div id="main-body">
                <Grid container spacing={1}>
                    <Grid item sm={12} lg={6}>
                        <h1>{shortlist.title} shortlist</h1>
                        <div className="date-section">
                            <CalendarTodayIcon />
                            <span className="date-released"><i>released</i> {shortlist.dateReleased.slice(0, 10)}</span>|
                            <span className="date-expired"><i>expires</i> {shortlist.dateExpired.slice(0, 10)}</span><br/> 
                        </div>
                        <div id="org-section">
                            <span className="org-name"><i>Released by </i>{shortlist.organisation}</span><br />
                        </div>
                        <div id="description">            
                            <p>
                                <img src={shortlist.photo} className="organisation-photo"/>
                                {shortlist.description}
                            </p>
                        </div>
                        <div>
                            <Link 
                                to='/' 
                                component={Button} 
                                variant="contained"
                            >Back to shortlists</Link>
                        </div>
                    </Grid>
                    <Grid item sm={12} lg={6}>
                        <Paper style={{'padding': '5%', height: '60vh'}}>
                                <h2>Search using {shortlist.searchField}</h2>
                                <SearchTool searchKey={shortlist.searchField}/>
                                <p>Matching item ({0})</p>
                        
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ShortListDetails
