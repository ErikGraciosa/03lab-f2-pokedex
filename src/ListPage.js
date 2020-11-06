import React, { Component } from 'react'
// import './App.css';
import SearchButton from './SearchButton.js';
import Sort from './Sort.js';
import Input from './Input.js';
import Pokecard from './Pokecard';
import fetch from 'superagent';
import Spinner from './Spinner.js';
import { Link } from 'react-router-dom';



export default class ListPage extends Component {

  state = {
    appliedFilter: '',
    filterPokemon: '',
    filterType: 'attack',
    direction: 'asc',
    pokemonData: [],
    totalPages: 41,
    currentPage: 1
  }

  updateFromInput = e => {
    this.setState({
      filterPokemon: e.target.value,
    });
  }

  clickHandler = async () => {
    await this.setState({
      appliedFilter: this.state.filterPokemon,
      currentPage: 1
    })
    await this.fetchPokemonByPage();
  }

  updateDirection = async (e) => {
    await this.setState({
      direction: e.target.value,
    })
    this.fetchPokemonByPage();
  }

  updateFilterType = async (e) => {
    await this.setState({
      filterType: e.target.value,
    })
    this.fetchPokemonByPage();
  }

  clickLink = async (single) => {
    this.props.history.push(`/${single._id}`);
  }

  increasePage = async () => {
    await this.setState({
      pokemonData: [],
      currentPage: this.state.currentPage + 1
    })
    await this.fetchPokemonByPage();
  }

  decreasePage = async () => {
    await this.setState({
      pokemonData: [],
      currentPage: this.state.currentPage - 1
    });
    await this.fetchPokemonByPage();
  }

  fetchPokemonByPage = async () => {
    const newFetch = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.appliedFilter}&sort=${this.state.filterType}&direction=${this.state.direction}&perPage=20&page=${this.state.currentPage}`);
    this.setState({
      pokemonData: newFetch.body.results
    })
  }

  componentDidMount = async () => {
    await this.fetchPokemonByPage();
  }
    
  render() {
    console.log(this.state.pokemonData);
    return (
      <div className="page-display">
        <div className="sidebar">
          <div>
            <div>{`Page:${this.state.currentPage} of ${this.state.totalPages}`}</div>
            {
              this.state.currentPage !== 1 && <button onClick={this.decreasePage}> Back</button>
            }
            {
              this.state.pokemonData.length % 20 === 0 && <button onClick={this.increasePage}>Next</button>
            }
          </div>
          <br/>
          <Input updateFromInput={this.updateFromInput} />
          <SearchButton clickHandler={this.clickHandler}/>
          <Sort updateDirection={this.updateDirection} 
                updateFilterType={this.updateFilterType}/>
        </div>
        <div className="cards-matrix">
          {
            this.state.pokemonData.length === 0
            ? <Spinner />
            : this.state.pokemonData.map((single) => 
              <Link to={`/${single._id}`}>
                <Pokecard 
                  onClick={(e) => this.clickLink(single)}
                  pokemon={single.pokemon}
                  url_image={single.url_image}
                  attack={single.attack}
                  type_1={single.type_1}
                  defense={single.defense}/>
              </Link>)
          }
        </div>
      </div>
    )
  }
}
