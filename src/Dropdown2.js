import React, { Component } from 'react'

export default class Dropdown2 extends Component {
    render() {
        return (
            <div>
                <select className="dropdown">
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="type">Type</option>
                </select>
            </div>
        )
    }
}
