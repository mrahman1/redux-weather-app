import React from 'react';
import { connect } from "react-redux";

class WeatherTable extends React.Component{
  render(){
    let temp = null;
    Object.keys(this.props.weather).length !== 0 ? temp = this.props.weather.main.temp : null
    console.log(temp)
    return(
      <div>
        <h1> Weather Chart </h1>
        <h2> {temp} </h2>
      </div>
    )
  }
}


let mapStateToProps = weather => {
  return weather;
};


export default connect(mapStateToProps)(WeatherTable);
