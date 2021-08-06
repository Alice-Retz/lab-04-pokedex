import React, { Component } from 'react';
import './Styles/App.css';
import PokeList from './pokeList';


class App extends Component {
  state = { data: [], loading: true, query: null };

  fetchData = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    if (this.state.query) {
      url = url + `?pokemon=${this.state.query}`;
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
