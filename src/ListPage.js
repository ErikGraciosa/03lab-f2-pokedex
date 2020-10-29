import React, { Component } from 'react'
// import './App.css';
import SearchButton from './SearchButton.js';
import Dropdown1 from './Dropdown1.js';
import Dropdown2 from './Dropdown2.js';
import Input from './Input.js';
import Pokecard from './Pokecard';
import pokedex from './data.js';



export default class App extends Component {

  state = {
    appliedFilter: '',
    filterPokemon: '',
    filterAttack: '',
    filterDefense: '',
    filterType: ''
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

  dropdown1 = ['ascending', 'decending'];

  render() {
    console.log(this.state.filterPokemon);
    console.log('this is the filter' + this.appliedFilter)
    return (
      <div>
        PokeApp
        <div className="sidebar">
          <Input updateFromInput={this.updateFromInput} />
          <SearchButton clickHandler={this.clickHandler}/>
          <Dropdown1 />
          <Dropdown2 />
        </div>
        <div className="cards-matrix">
          {
            pokedex.filter((items) => {
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
