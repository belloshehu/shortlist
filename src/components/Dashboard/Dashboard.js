import React, {useState, useEffect} from 'react'
import {Person, Persons} from '@mui/icons-material'
import {Grid, Tabs, Tab, Button, Typography} from '@mui/material'
import {Link} from 'react-router-dom';
import ShortlistForm from '../Form/ShortlistForm/ShortlistForm';
import {useSelector, useDispatch} from 'react-redux'
import {setShowShortlistForm} from '../../features/shortlist/shortlistSlice'
import axios from 'axios'
import ShortList from '../ShortList/ShortList'
import {Badge} from '@mui/material'

function Dashboard() {
    const user = useSelector((state) => state.shortlist.user)
    const showShortlistForm = useSelector((state) => state.shortlist.showShortlistForm)
    const dispatch = useDispatch()
    const [tab, setTab] = useState(0)
    const [userShortlists, setUserShortlists] = useState([])
    
    const handleChange = (e, newValue) =>{
        // dispatch(playSound())
        // dispatch(changeTab(newValue));
        setTab(newValue)
    }
    const getShortlists = async() =>{
        try{
            const {data} = await axios.get(`http://localhost:8000/shortlist/user`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUserShortlists(data.shortlists)
            console.log(data.shortlists)
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getShortlists();
    }, [])
    return (
        <div id="main-body">
            { showShortlistForm && <ShortlistForm />}
            <Grid container spacing={0}>
                <Grid userShortlists xm={4}>
                    <h2>Dashboard | {user.name} </h2>
                </Grid>
                <Grid userShortlists xm={8}>
                    <Tabs
                        className='tabs'
                        // theme={darkTheme}
                        indicatorColor='primary'
                        textColor='primary'
                        style={{color:'white'}}
                        value={tab}
                        onChange={handleChange}
                    
                    > 
                        <Tab label='Profile' className='tab'/>
                        <Tab label='Shortlists' className='tab' />
                    </Tabs>
                </Grid>
            </Grid>
            {
                tab === 0?  
                ( 
                    <Grid container>
                        <Grid sm={12} >
                            <Typography>{user.name}</Typography>
                            <p>{user.email}</p>
                            <Link 
                                variant="contained" 
                                component={Button}
                                to={`/organisation-update/${user._id}`}
                            >Edit profile</Link>
                        </Grid>

                   </Grid>
                ):
                (
                   <Grid container>
                        <Grid sm={12} >
                            <p>Total shortlists
                            <Badge color='secondary' badgeContent={userShortlists.length} />
                            <Link 
                                variant="contained" 
                                component={Button}
                                onClick={(e) => dispatch(setShowShortlistForm(true))}
                            >
                            Add shortlist
                            </Link>
                            </p>
                        </Grid>
                        {
                            userShortlists.map((userShortlist)=>{
                                return(
                                    <Grid item sm={12}>
                                        <ShortList 
                                            {...userShortlist}
                                        />
                                    </Grid>
                                )
                            })
                        }

                   </Grid>
                )
            }
        </div>
    )
}

export default Dashboard
