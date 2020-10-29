import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
                <input placeholder="search here" onChange={this.props.updateFromInput}></input>
            </div>
        )
    }
}
