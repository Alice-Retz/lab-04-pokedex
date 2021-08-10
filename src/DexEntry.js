import React, { Component } from 'react';
import './Styles/DexEntry.css';

class dexEntry extends Component {
    state = { data: {} };

    loadData = async () => {
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ data });
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        const { data } = this.state;
        return (
            <div id="pokedex-page">
                <h2>{data.pokemon}</h2>
                <div className="pokedex-entry">
                    <img src={data.url_image} alt="an official illustration of hte pokemon {data.pokemon}" />
                    <ul>
                        <li>Type: {this.state.data.type_1}, {this.state.data.type_2}</li>
                        <li>Shape: {this.state.data.shape}</li>
                        <li>Abilities: {this.state.data.ability_1}, {this.state.data.ability_2}, {this.state.data.ability_hidden} (hidden ability)</li>
                        <li>Height: {this.state.data.height}</li>
                        <li>Egg Group: {this.state.data.egg_group_1}, {this.state.data.egg_group_2}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default dexEntry;