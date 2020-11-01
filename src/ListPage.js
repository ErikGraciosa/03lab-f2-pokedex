import React, { Component } from 'react'
// import './App.css';
import SearchButton from './SearchButton.js';
import Sort from './Sort.js';
import Input from './Input.js';
import Pokecard from './Pokecard';
import fetch from 'superagent';
import Spinner from './Spinner.js';



export default class App extends Component {

  state = {
    appliedFilter: '',
    filterPokemon: '',
    filterType: 'attack',
    direction: 'asc',
    pokemonData: [],
  }

  updateFromInput = e => {
    this.setState({
      filterPokemon: e.target.value,
    });
  }

  clickHandler = async () => {
    await this.setState({
      appliedFilter: this.state.filterPokemon,
    })
    this.fetchPokemon();
  }

  updateDirection = async (e) => {
    await this.setState({
      direction: e.target.value,
    })
    this.fetchPokemon();
  }

  updateFilterType = async (e) => {
    await this.setState({
      filterType: e.target.value,
    })
    this.fetchPokemon();
  }

  //Blueprint for the api call, just need to change the query parameters via user input that is set in state. Should call state here.

  fetchPokemon = async () => {
    const newFetch = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.appliedFilter}&sort=${this.state.filterType}&direction=${this.state.direction}&perPage=500`);
    
    this.setState({
      pokemonData: newFetch.body
    })
  }

  componentDidMount = async () => {
    await this.fetchPokemon();
}

    
  render() {
    //COOL ZONE
    console.log('this is the response' + JSON.stringify(this.state.pokemonData))
    console.log(this.state);
    

    return (
      <div className="page-display">
        <div className="sidebar">
          <Input updateFromInput={this.updateFromInput} />
          <SearchButton clickHandler={this.clickHandler}/>
          <Sort updateDirection={this.updateDirection} 
                updateFilterType={this.updateFilterType}/>
        </div>
        <div className="cards-matrix">
          {
            this.state.pokemonData.length === 0
            ? <Spinner />
            : this.state.pokemonData.results.map((single) => 
              <Pokecard 
                pokemon={single.pokemon}
                url_image={single.url_image}
                attack={single.attack}
                type_1={single.type_1}
                defense={single.defense}/>)
          }
        </div>
      </div>
    )
  }
}
