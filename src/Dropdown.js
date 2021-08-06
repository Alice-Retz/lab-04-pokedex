import React, { Component } from 'react';

class Dropdown extends Component {
    render() { 
        const { changeEvent, options } = this.props;
        return ( 
            <div className="dropdown-container">
                <select className="dropdown" onChange={changeEvent}>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
         );
    }
}
 
export default Dropdown;