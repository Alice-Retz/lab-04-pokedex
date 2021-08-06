import React, { Component } from 'react';



class PokeItem extends Component {
    render() {
        return ( 
            <li>
                <h3>{this.props.pokedexEntry.pokemon}</h3>
                <p><img height="200px" alt={this.props.pokedexEntry.pokedex} src={this.props.pokedexEntry.url_image} /></p>
                <ul>Type: {this.props.pokedexEntry.type_1}, {this.props.pokedexEntry.type_2}</ul>
                <ul>Shape: {this.props.pokedexEntry.shape}</ul>
                <ul>Abilities: {this.props.pokedexEntry.ability_1}, {this.props.pokedexEntry.ability_2}, {this.props.pokedexEntry.ability_hidden} (hidden ability)</ul>
                <ul>Height: {this.props.pokedexEntry.height}</ul>
                <ul>Egg Group: {this.props.pokedexEntry.egg_group_1}, {this.props.pokedexEntry.egg_group_2}</ul>
            </li>
         );
    }
}
 
export default PokeItem;