import React, {useState, useEffect} from 'react'
import {Grid, Paper, Typography,Button} from '@mui/material'
import './Body.css'
import ShortList from '../ShortList/ShortList'
import SearchIcon from '@mui/icons-material/Search';
import SearchTool from '../SearchTool/SearchTool'
import {items as data} from '../../data/short-list'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Body() {
    const [items, setItems] = useState(data)
    const [listSize, setListSize] = useState(data.length)
    const [shortlists, setShortlists] = useState([])

    const getAllShortlists = async() =>{
        try{
            const {data} = await axios.get('http://localhost:8000/shortlist/all')
            console.log(data.shortlists) 
            setShortlists(data.shortlists)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getAllShortlists()
    }, [])
    return (
        <div id="main-body">
            <Grid container spacing={2}>
                <Grid item xm={12} lg={6}>
                    <h1>Publish your shortlist with ShortListed</h1>
                    <p>
                        Pusblishing your shortlist with <b>ShortListed</b> saves you
                        setup cost and allows you to concentrate on what matters most. 
                        You don't have to hire a developer or setup a new website to publish your list. We are always there for your organisation
                    </p>
                    <Link 
                        variant='contained' 
                        component={Button} 
                        to='/add-shortlist'>
                        Add your shortlist
                    </Link>
                </Grid>
                <Grid item sm={12} lg={6}>
                    <div className="search-tool" style={{'padding': '5%'}}>
                        <SearchTool searchKey="organisation or program title"/>
                        <p>Available shortlists ({shortlists.length})</p>
                        {
                            shortlists.map((shortlist)=>{
                                return(
                                <ShortList 
                                    {...shortlist}
                                />
                                )
                            })
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
