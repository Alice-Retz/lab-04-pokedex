import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div>Pokedex</div>
                <div className="links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/pokemon">Pokemon List</NavLink>
                </div>
            </header>
        );
    }
}

export default Header;