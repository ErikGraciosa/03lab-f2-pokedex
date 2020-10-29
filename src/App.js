import React, { Component } from 'react'
import './App.css';
import SearchButton from './SearchButton.js';
import Dropdown from './Dropdown.js';
import Input from './Input.js';
import Header from './Header.js';
import Pokecard from './Pokecard';
import pokedex from './data.js';

export default class App extends Component {

  state = {
    filterPokemon: '',
    filterAttach: '',
    filterDefense: '',
    filterType: ''
  }



  inputButton

  render() {
    return (
      <div>
        PokeApp
        <Header />
        <div className="sidebar">
          <Input />
          <SearchButton />
          <Dropdown />
          <Dropdown />
        </div>
        <div className="cards-matrix">
          {
            pokedex.map((single) => 
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
