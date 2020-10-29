import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                This is the header with links!
                <NavLink to="/">Home</NavLink>
                <NavLink to="/ListPageBizzaro">Bizarro</NavLink>
            </div>
        )
    }
}
