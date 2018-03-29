import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      note: '',
      notes: []
    };
  }

  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h1 className="home-title"> Welcome to Flask-React </h1>
          <p> A boilerplate for a React web app with a Flask backend </p>
        </header>
      </div>
    );
  }
}
