import React from 'react'
import { HashRouter,Route } from 'react-router-dom'
import App from './App';
import TestPage from './pages/test';
import Home from './pages/home'

export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <Route exact path='/' component={App}></Route>
                <Route path='/home' component={Home}></Route> 
            </HashRouter>
        );
    }
}