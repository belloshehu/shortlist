import React, {useState, useEffect} from 'react'
import {Grid, Paper, Typography,Button} from '@mui/material'
import {TextField, InputAdornment, IconButton, Badge} from '@mui/material'
import './Body.css'
import ShortList from '../ShortList/ShortList'
import SearchIcon from '@mui/icons-material/Search';
import SearchTool from '../SearchTool/SearchTool'
import {items as data} from '../../data/short-list'
import Loading from '../Loading/Loading'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Body() {
    const [shortlists, setShortlists] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllShortlists = async() =>{
        try{
            const {data} = await axios.get('http://localhost:8000/shortlist/all')
            setShortlists(data.shortlists)
            setIsLoading(false)
        }catch(error){
            console.log(error)
            setIsLoading(true)
        }
    }
    useEffect(() => {
        getAllShortlists()
    }, [])
    
    if(isLoading){
        return(
            <Loading />
        )
    }
    else{
        return (
            <div id="main-body">
                <Grid container spacing={1}>
                    <Grid item xm={12} lg={12}>
                        <h1 id="landing-page">Publish your shortlist with ShortListed</h1>
                    </Grid>
                    <Grid item xm={12} lg={12}>
                        <p>
                            Pusblishing your shortlist with <b>ShortListed</b> saves you
                            setup cost and allows you to concentrate on what matters most. 
                            You don't have to hire a developer or setup a new website to publish your list. We are always there for your organisation
                        </p>
                    </Grid>
                    <Grid item xm={12} lg={6}>
                        <h4>Total shortlists<Badge color='secondary' badgeContent={shortlists.length} />
                        <Link 
                            variant='contained' 
                            component={Button} 
                            to='/add-shortlist'>
                            create shortlist
                        </Link>
                        </h4>
                    </Grid>
                    <Grid item xm={12} lg={6}>
                        <SearchTool searchKey={"organisation name or shortlist title"} id="search-tool" position="end"/>
                    </Grid>
                    <Grid item lg={12}><hr /></Grid>
                    {
                                    
                        shortlists.map((shortlist)=>{
                            return(
                                <Grid item xm={12} lg={12}>
                                    <ShortList 
                                    {...shortlist}
                                    />
                                </Grid>
                            )
                        })
                    }
                    
                </Grid>
            </div>
        )
    }
}
