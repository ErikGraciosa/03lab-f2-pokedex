import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <div>
                    <br/>
                    Sort
                    <br/>
                    <select className="dropdown" onChange={this.props.updateDirection}>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
                <div>
                    <br/>
                    By what stat?
                    <br/>
                    <select className="dropdown" onChange={this.props.updateFilterType}>
                        <option value="attack">Attack</option>
                        <option value="defense">Defense</option>
                        <option value="type_1">Type</option>
                    </select>
                </div>
            </div>
        )
    }
}
