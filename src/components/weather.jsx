import React from 'react';
import './weather.css'

class Weather extends React.Component {
    render(){
        return (
            <div id="result">
                <div id="location" class="insideres">
                    <div class="title">
                        Location
                    </div>
                    <div class="res">
                        {this.props.location}
                    </div>
                </div>
                <div id="Temperature" class="insideres">
                    <div class="title">
                        Temperature
                    </div>
                    <div class="res">
                    {this.props.temperature}
                    </div>
                </div>
                <div id="Weather" class="insideres">
                    <div class="title">
                        Weather
                    </div>
                    <div class="res">
                    {this.props.weather}
                    </div>
                </div>
                <div id="Windspeed" class="insideres">
                    <div class="title">
                        Wind Speed
                    </div>
                    <div class="res">
                    {this.props.windSpeed}
                    </div>
                </div>
                <div id="Wind_degree" class="insideres">
                    <div class="title">
                        Wind Degree
                    </div>
                    <div class="res">
                    {this.props.windDegree}
                    </div>
                </div>
                <div id="Wind_dir" class="insideres">
                    <div class="title">
                        Wind Direction
                    </div>
                    <div class="res">
                    {this.props.windDir}
                    </div>
                </div>
                <div id="Humidity" class="insideres">
                    <div class="title">
                        Humidity
                    </div>
                    <div class="res">
                    {this.props.humidity}
                    </div>
                </div>
                <div id="Visibility" class="insideres">
                    <div class="title">
                        Visibility
                    </div>
                    <div class="res">
                    {this.props.visibility}
                    </div>
                </div>
                
            </div>
        );    
    }
}
export default Weather;