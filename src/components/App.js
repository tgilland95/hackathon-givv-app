import './App.css'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'

import AdminLayout from './AdminLayout/AdminLayout'
import EmployeeLayout from './EmployeeLayout/EmployeeLayout'
import EmployerLayout from './EmployerLayout/EmployerLayout'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div>
        <Switch >
          <Route exact path="/" component={Login} />
          <Route exact path="/admin/" component={AdminLayout} />
          <Route exact path="/employee/" component={EmployeeLayout} />
          <Route exact path="/employer" component={EmployerLayout} />
        </Switch>
      </div>
    )
  }
}

export default App
