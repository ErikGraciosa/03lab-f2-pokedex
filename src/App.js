import React, { Component } from 'react'
import './App.css';
import SearchButton from './SearchButton.js';
import Dropdown from './Dropdown.js';
import Input from './Input.js';
import Header from './Header.js';
import Pokecard from './Pokecard';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="sidebar">
          <Input />
          <SearchButton />
          <Dropdown />
          <Dropdown />
        </div>
        <div>
          <Pokecard />
        </div>




      </div>
    )
  }
}
