import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import dexEntry from './DexEntry.js';
import pokeContainer from './pokeContainer.js';
import './Styles/App.css';


class App extends Component {
  render() { 
    return ( 
      <section className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/pokemon/:id" component={dexEntry} />
            <Route path="/pokemon" component={pokeContainer} />
            <Route path="/" compnent={Home} />
          </Switch>
        </BrowserRouter>
      </section>
      
     );
  }
}

export default App;

