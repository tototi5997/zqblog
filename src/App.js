import logo from './logo.svg';
import React from 'react'
import './App.css';
// import {Link} from 'react-router-dom'

export default class App extends React.Component {
  //点击跳转页面
  handleClick=()=>{
    window.open('/#/home')
    window.close('/');
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to ZhangQian's Blog!
        </p>
        <a
          className="App-link"
          href=""
          // target="_blank"
          rel="noopener noreferrer"
          onClick={this.handleClick}
        >
          Learn More
        </a>
        {/* <Link to='/test'>Learn More</Link> */}
      </header>
    </div>
  );
  }
}


