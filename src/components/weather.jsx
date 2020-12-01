import React from 'react';
import './weather.css'

class Weather extends React.Component {
    render(){
        return (
            <div id="result">
                <div id="location" className="insideres">
                    <div className="title">
                        Location
                    </div>
                    <div className="res">
                        {this.props.location}
                    </div>
                </div>
                <div id="Temperature" className="insideres">
                    <div className="title">
                        Temperature
                    </div>
                    <div className="res">
                    {this.props.temperature}
                    </div>
                </div>
                <div id="Weather" className="insideres">
                    <div className="title">
                        Weather
                    </div>
                    <div className="res">
                    {this.props.weather}
                    </div>
                </div>
                <div id="Windspeed" className="insideres">
                    <div className="title">
                        Wind Speed
                    </div>
                    <div className="res">
                    {this.props.windSpeed}
                    </div>
                </div>
                <div id="Wind_degree" className="insideres">
                    <div className="title">
                        Wind Degree
                    </div>
                    <div className="res">
                    {this.props.windDegree}
                    </div>
                </div>
                <div id="Wind_dir" className="insideres">
                    <div className="title">
                        Pressure
                    </div>
                    <div className="res">
                    {this.props.pressure}
                    </div>
                </div>
                <div id="Humidity" className="insideres">
                    <div className="title">
                        Humidity
                    </div>
                    <div className="res">
                    {this.props.humidity}
                    </div>
                </div>
                <div id="Visibility" className="insideres">
                    <div className="title">
                        Visibility
                    </div>
                    <div className="res">
                    {this.props.visibility}
                    </div>
                </div>
                
            </div>
        );    
    }
}
export default Weather;