import './App.css';

import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom/'

import GivvNav from './Nav/Nav'

class App extends Component {
  render() {
    return (
      <div>
      <GivvNav />      
        {/* <Switch row>
          <Route exact path='/' component={TyHome}/>
          <Route exact path='/Resume/' component={TyResume}/>        
          <Route exact path='/About/' component={TyAbout}/>        
        </Switch>         */}
        
        </div>
    );
  }
}

export default App;
