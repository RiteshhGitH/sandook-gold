import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import  NotFound  from './views/not-found'
import NavigationLinks from './components/navigation-links'
import Home from './views/home'
import DigitalGold from './views/digital-gold'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={NotFound} exact path="/not-found" />
        <Route component={Home} exact path="/" />
        <Route component={DigitalGold} exact path="/digital-gold" />
        <Route component ={NavigationLinks} exact path="/about" />
        <Route component={NotFound} path="**" />

        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
