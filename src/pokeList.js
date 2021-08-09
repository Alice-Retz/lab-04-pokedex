import React, { Component } from 'react';
import PokeItem from './pokeItem.js';

class PokeList extends Component {
    render() {
        return (
            <div className="poke-list">
                {this.props.pokedex.map((bulb) => {
                    return <PokeItem key={bulb.pokemon} pokedexEntry={bulb} />;
                })}
            </div>
        )
    }
}

export default PokeList;