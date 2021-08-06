import React, { Component } from 'react';
import './Styles/App.css';
import PokeList from './pokeList';


class App extends Component {
  state = { data: [], loading: true, query: null, sortOrder: 'asc', sortType: 'pokemon' };
  
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
      searchParams.set(this.state.sortSearch, this.state.query);
    }
    if (this.state.sortOrder) {
      searchParams.set('sort', this.state.sortType);
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

  updateSearch = (e) => {
    this.setState({ sortSearch: e.target.value });
  };

  updateType = (e) => {
    this.setState({ sortType: e.target.value });
  };

  updateSort = (e) => {
    this.setState({ sortOrder: e.target.value});
  };


  render() { 
    const { loading, sortOrder, sortType } = this.state;

    return ( 
      <>
        <h1>Who's that Pokemon?</h1>
          <select label="search by" defaultValue={sortType} onChange={this.updateSearch}>
            <option value="pokemon">Search by</option>
            <option value="pokemon">Name</option>
            <option value="type_1">Primary Type</option>
            <option value="shape">Shape</option>
            <option value="ability_1">Most Common Ability</option>
            <option value="height">Height</option>
            <option value="egg_group_1">Egg Group</option>
          </select>
          <select label="sort by" defaultValue={sortType} onChange={this.updateType}>
            <option value="pokemon">Sort by</option>
            <option value="pokemon">Name</option>
            <option value="type_1">Primary Type</option>
            <option value="shape">Shape</option>
            <option value="ability_1">Most Common Ability</option>
            <option value="height">Height</option>
            <option value="egg_group_1">Egg Group</option>
          </select>
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
