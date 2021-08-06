import React, { Component } from 'react';
import PokeItem from './pokeItem.js';

class PokeList extends Component {
    render() {
        return (
            <ul>
                {this.props.pokedex.map((bulb) => {
                    return <PokeItem key={bulb.pokemon} pokedexEntry={bulb} />;
                })}
            </ul>
        )
    }
}

export default PokeList;