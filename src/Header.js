import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2>This is a Sortable Pokedex with an extra Futurama Page.</h2>
                <NavLink to="/">Home</NavLink><br/>
                <NavLink to="/ListPage">API Fetched List Page</NavLink><br/>
                <NavLink to="/FuturamaPage">Futurama Page</NavLink><br/>  
                <NavLink to="/ArchiveListPage">Archive(Hardcoded)ListPage</NavLink><br/>     
                           
            </div>
        )
    }
}
