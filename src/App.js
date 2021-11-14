import React, { Component } from 'react'
import { Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import AddUser from './components/AddUser'


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to ABC bank</h1>
                </header>
                <BrowserRouter>
                    <nav>
                        <ul className='nav-list'>
                            <li><Link to='home'>Home page</Link></li>
                            <li><Link to='adduser'>Add user</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/adduser' component={AddUser} />
                        <Route render={() => (<Redirect to={{ pathname: '/' }} />)} />
                    </Switch>
                </BrowserRouter>
                <footer>
                    Copyright
                </footer>
            </div>
        )
    }
}

export default App