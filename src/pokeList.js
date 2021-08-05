import React, { Component } from 'react';
import PokeItem from './pokeItem.js';

class PokeList extends Component {
    render() {
        return (
            <ul>
                {this.props.characters.map((char) => {
                    return <PokeItem key={char.Name} character={char} />;
                })}
            </ul>
        )
    }
}

export default PokeList;