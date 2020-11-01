import React, { Component } from 'react'
import fetch from 'superagent';
import Spinner from './Spinner.js';

export default class DetailsPage extends Component {
    state = {
        pokemonData: ''
    }
    
    fetchPokemon = async () => {
        const newFetch = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params._id}`);
        this.setState({
            pokemonData: newFetch.body
          })
      }
    
      componentDidMount = async () => {
        await this.fetchPokemon();
      }


    render() {
        console.log(this.state.pokemonData)
        return (
            <div>

                {this.state.pokemonData.length === 0
            ? <Spinner />
            : <div>           
                    <h2>{`${this.state.pokemonData.pokemon}`}</h2>
                    <img src={this.state.pokemonData.url_image} alt="pokemon"/>
                    <h2>{`Height: ${this.state.pokemonData.height}`}</h2>
                    <h2>{`Weight: ${this.state.pokemonData.weight}`}</h2>
                    <h2>{`Type: ${this.state.pokemonData.type_1}`}</h2>
                    <h2>{`Other Type: ${this.state.pokemonData.type_2}`}</h2>
                    <h2>{`Attack: ${this.state.pokemonData.attack}`}</h2>
                    <h2>{`Defense: ${this.state.pokemonData.defense}`}</h2>
                    <h2>{`Speed: ${this.state.pokemonData.speed}`}</h2>
                    <h2>{`Egg Group: ${this.state.pokemonData.egg_group_1}`}</h2>
              </div>
            }
            </div>
        )
    }
}
