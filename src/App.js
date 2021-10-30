import React, {useEffect} from 'react';
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
import Dashboard from '../src/components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
            <Route path='/' component={Body} exact/>
            <Route path='/dashboard' component={Dashboard} exact />
            <Route path='/shortlist/:id' children={<ShortListDetails />} exact/>
            <Route path='/add-shortlist' component={ShortlistForm} exact/>
            <Route path='/login' component={LoginForm} exact />
            <Route path='/signup' component={Form} exact />
            <Route path='*' component={Error}/>
      </Switch>
      <Footer sx={{height:'100px', py:2, 'backgroundColor':'black' }}/>
    </div>
  );
}

export default App;
