import React, {useEffect} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
import './Header.css'
import {useSelector, useDispatch} from 'react-redux';
import {toggleIsLoggedIn} from '../../features/shortlist/shortlistSlice'

function Header() {
    const isLoggedIn = useSelector((state)=>state.shortlist.isLoggedIn);
    const dispatch  = useDispatch();

    const logout = (e) =>{
        localStorage.removeItem('token');
        dispatch(toggleIsLoggedIn(false));
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(toggleIsLoggedIn(false));
        }else{
            dispatch(toggleIsLoggedIn(true));
        }
    }, [])
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: "left", fontFamily: 'monospace' }}
                >
                    <Link to="/" sx={{color: "white", textDecorations: "none"}}>Sightek | shortListed</Link>
                   
                </Typography>
                { !isLoggedIn &&
                    <Link 
                        sx={{mr:1, backgroundColor: 'white', color:'#000322'}} 
                        variant="contained"
                        to='/login'
                        component={Button}>Login
                    </Link>
                }

                { !isLoggedIn && 
                    <Link 
                        sx={{backgroundColor: 'white', color:'#000322'}} 
                        variant="contained"
                        to='/signup'
                        component={Button}>Signup
                    </Link>
                }
                { isLoggedIn &&
                    <Link 
                        sx={{mr:1, backgroundColor: 'white', color:'#000322'}} 
                        variant=""
                        to='/dashboard'
                        component={Button}>Dashboard
                    </Link>
                }
                { isLoggedIn &&
                    <Link 
                        sx={{mr:1, backgroundColor: 'white', color:'#000322'}} 
                        variant="contained"
                        to='/'
                        onClick={logout}
                        component={Button}>Logout
                    </Link>
                }
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header
