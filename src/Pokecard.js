import React, { Component } from 'react'

export default class Pokecard extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.pokemon}</h2>
                <img src={this.props.url_image} alt=""/>
                <div className="stat">Attack: {this.props.attack}</div>
                <div className="stat">Defense: {this.props.defense}</div>
                <div className="stat">Type: {this.props.type_1}</div>
            </div>
        )
    }
}
