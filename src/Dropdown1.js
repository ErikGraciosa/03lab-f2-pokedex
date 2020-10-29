import React, { Component } from 'react'

export default class Dropdown1 extends Component {
    render() {
        return (
            <div>
                <select className="dropdown">
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
        )
    }
}
