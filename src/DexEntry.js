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
        console.log(this.props.match);
        const { id } = this.props.match.params;
        const { data } = this.state;
        return (
            <section>
                <h1>{data.pokemon}</h1>
                <div className="pokedex-entry">
                    <img src={data.url_image} alt="an official illustration of hte pokemon {data.pokemon}" />
                </div>
            </section>
        );
    }
}

export default dexEntry;