import React, { Component } from 'react'
// import './App.css';
import SearchButton from './SearchButton.js';
import Sort from './Sort.js';
import Input from './Input.js';
import Pokecard from './Pokecard';
import fetch from 'superagent';



export default class App extends Component {

  state = {
    appliedFilter: '',
    filterPokemon: '',
    filterType: 'attack',
    direction: 'ascending',
    pokemonData: [],
  }

  updateFromInput = e => {
    this.setState({
      filterPokemon: e.target.value,
    });
  }

  clickHandler = () => {
    this.setState({
      appliedFilter: this.state.filterPokemon,
    })
  }

  updateDirection = (e) => {
    this.setState({
      direction: e.target.value,
    })
  }

  updateFilterType = (e) => {
    this.setState({
      filterType: e.target.value,
    })
  }

  //Blueprint for the api call, just need to change the query parameters via user input that is set in state. Should call state here.
  componentDidMount = async () => {
    const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=&defense=50');
    this.setState({
      pokemonData: response.body
    })
}

    
  render() {
    //COOL ZONE
    console.log('this is the response' + JSON.stringify(this.state.pokemonData))

    

    return (
      <div className="page-display">
        <div className="sidebar">
          <Input updateFromInput={this.updateFromInput} />
          <SearchButton clickHandler={this.clickHandler}/>
          <Sort updateDirection={this.updateDirection} updateFilterType={this.updateFilterType}/>
        </div>
        <div className="cards-matrix">
          {
            this.state.pokemonData.length === 0
            ? 'still loading from API'
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
