import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import Header from './Header.js';
import FuturamaPage from './FuturamaPage.js';
import HomePage from './HomePage.js';
import './App.css';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                    <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/ListPage" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/FuturamaPage" 
                            exact
                            render={(routerProps) => <FuturamaPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}