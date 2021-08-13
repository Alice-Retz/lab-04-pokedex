import React, { Component } from 'react';
import './Styles/DexEntry.css';
import Loader from 'react-loader-spinner';

class dexEntry extends Component {
    state = { data: {}, loading: true };

    
    loadData = async () => {
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setTimeout(() => {
            this.setState({ data, loading: false });
          }, 1000);
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        const { loading, data } = this.state;
        return (
        <>
        {loading && ( 	<Loader type="Puff" color="pink" height={80} width={80} />)}
        {!loading && (
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
        )};
        </>
        );
    }
}

export default dexEntry;