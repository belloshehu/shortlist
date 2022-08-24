import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header/Header'
import {Grid, Paper} from '@mui/material'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Nav from './components/Navigation/Nav'
import ShortListDetails from './components/ShortListDetails/ShortListDetails'
import Error from './components/Error/Error'
import {Switch, Route} from 'react-router-dom'
import Form from '../src/components/Form/Organisation/Form'; 
import LoginForm from '../src/components/Form/Login/LoginForm';
import ShortlistForm from '../src/components/Form/ShortlistForm/ShortlistForm';
import UpdateShortlistForm from '../src/components/Form/ShortlistForm/UpdateShortlistForm';
import Dashboard from '../src/components/Dashboard/Dashboard';
import UpdateProfileForm from './components/Form/Organisation/UpdateProfileForm';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    // check if user is authenticated
    const token = localStorage.getItem('token') ? true: false;
    setIsLogged(token)
  }, [])
  return (
    <div className="App">
      <Header/>
      <Switch>
            <Route path='/' component={Body} exact/>
            <Route path='/dashboard' component={Dashboard} exact />
            <Route path='/shortlist/all/:id' children={<ShortListDetails />} exact/>
            <Route path='/shortlist-edit/:id' component={UpdateShortlistForm}/>
            <Route path='/add-shortlist' component={isLogged? ShortlistForm:LoginForm} exact/>
            <Route path='/organisation-update/:id' component={UpdateProfileForm}/>
            <Route path='/login' component={LoginForm} exact />
            <Route path='/signup' component={Form} exact />
            <Route path='*' component={Error}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
