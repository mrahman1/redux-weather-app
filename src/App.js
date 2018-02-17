import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherTable from './containers/WeatherTable'
import { connect } from 'react-redux'
import {getWeather} from './actions/index.js'

class App extends Component {

  componentDidMount(){
    this.props.getWeather()
  }

  render() {
    console.log('state: ', this.props)
    return (
      <div>
        <WeatherTable/>
        <h1> hi </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps,{getWeather})(App);
