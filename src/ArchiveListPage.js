import React, { Component } from 'react'
// import './App.css';
import SearchButton from './SearchButton.js';
import Sort from './Sort.js';
import Input from './Input.js';
import Pokecard from './Pokecard';
import pokedex from './data.js';
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
      pokemonData: JSON.stringify(response.body)
    })
}

    
  render() {
    //COOL ZONE
    console.log('this is the response' + this.state.pokemonData)

    const sortedPokedex = pokedex.sort((a, b) => {
      if (this.state.direction === 'ascending') {
        if(this.state.filterType === 'type_1') {
          return a[this.state.filterType].localeCompare(b[this.state.filterType])
        } else {
          return a[this.state.filterType] - b[this.state.filterType];
        }    
      } else {
        if(this.state.filterType === 'type_1') {
          return b[this.state.filterType].localeCompare(a[this.state.filterType])
        } else {
          return b[this.state.filterType] - a[this.state.filterType];
        } 
      }
    });

    return (
      <div className="page-display">
        <div className="sidebar">
          <Input updateFromInput={this.updateFromInput} />
          <SearchButton clickHandler={this.clickHandler}/>
          <Sort updateDirection={this.updateDirection} updateFilterType={this.updateFilterType}/>
        </div>
        <div className="cards-matrix">
          {
            sortedPokedex.filter((items) => {
              if (!this.state.appliedFilter) 
                return true;
              if (items.pokemon === this.state.appliedFilter)
                return true;

              return false;
            })
            .map((single) => 
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
