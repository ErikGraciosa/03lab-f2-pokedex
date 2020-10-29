import React, { Component } from 'react'

export default class SearchButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.clickHandler}>Search</button>
            </div>
        )
    }
}
