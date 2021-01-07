import React, { Component } from 'react'
import Dares from './Components/Dares'
import Guess from './Components/Guess'
import Wink from './Components/Wink'
import NavList from './Components/NavList'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NavList} />
            <Route path="/dares" component={Dares} />
            <Route path="/guess" component={Guess} />
            <Route path="/wink" component={Wink} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
