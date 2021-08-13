import React, { Component } from 'react';
import PokeList from './pokeList.js';
import './Styles/pokeContainer.css';
import Loader from 'react-loader-spinner';



class pokeContainer extends Component {
    state = { data: [], loading: true, query: null, sortOrder: 'asc', sortType: 'pokemon', page: 1, lastPage: 1, };
    
componentDidMount() {
    this.fetchData();
  };
  
  fetchData = async () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
  }
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    let searchParams = new URLSearchParams();
    searchParams.set('page', this.state.page);

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
    const lastPage = Math.ceil(data.count / data.perPage);

  setTimeout(() => {
      this.setState({ data: data.results, loading: false, lastPage  });
    }, 1000);
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

  nextPage = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.fetchData();
  }

  prevPage = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.fetchData();
  }
  
  goToLast = async () => {
    await this.setState({ page: this.state.lastPage });
    this.fetchData();
  }

  searchPokemon = async () => {
    await this.setState({ page: 1 });
    this.fetchData();
  }

  render() { 
    const { loading, sortOrder, sortType } = this.state;

    return ( 
      <div id="view-pokedex">
        <section id="nav">
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
        </section>
        <div className="page-controls">
              {this.state.page > 1 && (
                  <button onClick={this.prevPage}>Prev</button>
              )}
              {this.state.page < this.state.lastPage && (
                  <>
                      <button onClick={this.nextPage}>Next</button>
                      <button onClick={this.goToLast}>Last Page</button>
                  </>
              )}
          </div>
          <h4>CURRENT PAGE: {this.state.page} | LAST PAGE: {this.state.lastPage}</h4>
          {loading && ( 	<Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />)}
          {!loading && (
          <section className="pokemon-list">
              <PokeList pokedex={this.state.data} />
          </section>
        )}
      </div>
     );
  }
}

export default pokeContainer;