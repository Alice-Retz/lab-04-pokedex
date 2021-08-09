import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Styles/pokeItem.css';



class PokeItem extends Component {
    render() {
        const { mon } = this.props;
        return ( 
            <div className="dex-entry">
                <Link to={`/pokemon/${this.props.mon._id}`}>
                    <h3>{mon.pokemon}</h3>
                    <div className="pokemon">
                        <img src={mon.url_image} alt="An official illustration of the pokemon {mon.pokemon}."></img>
                    </div>
                </Link>
            </div>
         );
    }
}
 
export default PokeItem;