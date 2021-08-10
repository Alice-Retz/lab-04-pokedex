import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Styles/pokeItem.css';



class PokeItem extends Component {
    render() {
        const { pokedexEntry } = this.props;
        return ( 
            <div className="dex-entry">
                <Link to={`/pokemon/${this.props.pokedexEntry._id}`}>
                    <h3>{pokedexEntry.pokemon}</h3>
                    <div className="pokemon">
                        <img src={pokedexEntry.url_image} alt="An official illustration of the pokemon {mon.pokemon}."></img>
                        
                    </div>
                </Link>
            </div>
         );
    }
}
 
export default PokeItem;