import React, { Component } from 'react'
import Dares from './Components/Dares'
import Guess from './Components/Guess'
import Wink from './Components/Wink'
import FirstToDo from './Components/FirstToDo'
import DareToDo from './Components/DareToDo'
import GuessWho from './Components/GuessWho'
import GuessTheThing from './Components/GuessTheThing'
import NavList from './Components/NavList'
import InvalidLink from './Components/InvalidLink'
import firebase from './firebase.js';
import UserContext from './Components/UserContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
class App extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('data');
    itemsRef.on('value', (snapshot) => {
      let dbData = snapshot.val();
      this.setState({ data: dbData })
    });
  }
  render() {
    console.log(this.state.data)
    return (
      <>
        <UserContext.Provider value={this.state.data}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={NavList} />
              <Route path="/dares" component={Dares} />
              <Route path="/guess" component={Guess} />
              <Route path="/wink" component={Wink} />
              <Route path="/firstToDo" component={FirstToDo} />
              <Route path="/dareToDo" component={DareToDo} />
              <Route path="/guessWho" component={GuessWho} />
              <Route path="/guessTheThing" component={GuessTheThing} />
              <Route path="/:Test" component={InvalidLink} />
            </Switch>
          </BrowserRouter>
        </UserContext.Provider>
      </>
    );
  }
}
export default App;