import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ShortListDetails from '../ShortListDetails/ShortListDetails'
import Error from '../Error/Error'
import Body from '../Body/Body'
import Form from '../Form/Organisation/Form'; 

function Nav() {
    return (
        <React.Fragment>
            <Switch>
                 <Route exact path='/' component={Body}/>
                <Route exact path='/shortlist/:id' children={<ShortListDetails />}/>
                <Route path='/add-shortlist' component={Form} />
                {/* <Route path='*' component={Error}/> */}
            </Switch>
        </React.Fragment>
    )
}

export default Nav
