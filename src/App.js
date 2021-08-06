import React, { Component } from 'react';
import './Styles/App.css';
import PokeList from './pokeList';
import Dropdown from './Dropdown.js';


class App extends Component {
  state = { data: [], loading: true, query: null };

  dropdown1 = [ 'pokemon', 'type', 'shape', 'ability' ];
  dropdown2 = [ 'asc', 'desc' ];

  dropdown1Change = (e) => {
    this.setState({ type: e.target.value });
  };
  dropdown2Change = (e) => {
    this.setState({ direction: e.target.value });
  };

  
  fetchData = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    let dropdown1 = await this.dropdown1Change.value;
    let dropdown2 = await this.dropdown2Change.value;

    if (this.state.query) {
      url = url + `?pokemon=${this.state.query}&sort=${dropdown1}direction=${dropdown2}`;
    }
    
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    this.setState({ data: data.results, loading: false });
  };

  updateQuery = (e) => {
    this.setState({ query: e.target.value });
    console.log(e.target.value);
  };

  componentDidMount() {
    this.fetchData();
  };

  render() { 
    const { loading } = this.state;


    return ( 
      <>
        <h1>Who's that Pokemon?</h1>
        {loading && <p>searching the tall grass...</p>}
         {!loading && (
          <section>
            <Dropdown
              label="sort by"
              id="dropdown1"
              options={this.dropdown1}
              changeEvent={this.dropdown1Change}
              />
            <Dropdown
              label="sort order"
              id="dropdown2"
              options={this.dropdown2}
              changeEvent={this.dropdown2Change}
            />
            <input onChange={this.updateQuery} type="text"></input>
            <button onClick={this.fetchData}>Throw pokeball!</button>        
            <PokeList pokedex={this.state.data} />
          </section>
          )}
      </>
     );
  }
}

export default App;
