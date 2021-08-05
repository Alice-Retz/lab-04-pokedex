import React, { Component } from 'react';
import PokeItem from './pokeItem.js';

class PokeItem extends Component {
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

export default PokeItem;