import React, { Component } from 'react'
import fetch from 'superagent';
import Pokecard from './Pokecard.js';

export default class FuturamaPage extends Component {

    state = {
        quotes: [],
    }

    componentDidMount = async () => {
        const response = await fetch.get('https://futuramaapi.herokuapp.com/api/quotes');
        this.setState({
            quotes: response.body
        });
    }

    render() {
        return (
            <div>
                <div className="cards-matrix">
                    {
                        this.state.quotes.map((single) => 
                        <Pokecard 
                            pokemon={single.character}
                            url_image={single.image}
                            attack={single.quote}
                            type_1={'empty'}
                            defense={'empty'}/>)
                    }
                </div>
            </div>
        )
    }
}
