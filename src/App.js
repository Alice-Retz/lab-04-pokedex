import React, { Component } from 'react';
import './Styles/App.css';
import PokeList from './pokeList';


class App extends Component {
  state = { data: [], loading: true, query: null, sortOrder: 'asc' };
  
  componentDidMount() {
    this.fetchData();
  };
  
  fetchData = async () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
  }
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    let searchParams = new URLSearchParams();
    searchParams.set('perPage', 50);

    if (this.state.query) {
      searchParams.set('pokemon', this.state.query);
    }
    if (this.state.sortOrder) {
      searchParams.set('sort', 'pokemon');
      searchParams.set('direction', this.state.sortOrder);
    }

    url = url + `?${searchParams.toString()}`;
    
    let response = await fetch(url);
    let data = await response.json();

    this.setState({ data: data.results, loading: false });
  };

  updateQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  updateSort = (e) => {
    this.setState({ sortOrder: e.target.value});
  };


  render() { 
    const { loading, sortOrder } = this.state;

    return ( 
      <>
        <h1>Who's that Pokemon?</h1>
          <select defaultValue={sortOrder} onChange={this.updateSort}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <input onChange={this.updateQuery} type="text"></input>
          <button onClick={this.fetchData}>Throw pokeball!</button>        
          {loading && <p>searching the tall grass...</p>}
          {!loading && (
            <PokeList pokedex={this.state.data} />
          )}
      </>
     );
  }
}

export default App;
