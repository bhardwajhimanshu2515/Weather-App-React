import React from 'react';
import './weather.css'
function Weather() {
    return (
        <div id="result">
            <div id="location" class="insideres">
                <div class="title">
                    Location
                </div>
                <div class="res">
                    {this.props.location.name}
                </div>
            </div>
            <div id="Temperature" class="insideres">
                <div class="title">

                </div>
                <div class="res">

                </div>
            </div>
            <div id="Weather" class="insideres">
                <div class="title">

                </div>
                <div class="res">

                </div>
            </div>
            <div id="Windspeed" class="insideres">
                <div class="title">

                </div>
                <div class="res">

                </div>
            </div>
            <div id="Wind_degree" class="insideres">
                <div class="title">

                </div>
                <div class="res">

                </div>
            </div>
            <div id="Wind_dir" class="insideres">
                <div class="title">

                </div>
                <div class="res">

                </div>
            </div>
            <div id="Humidity" class="insideres">
                <div class="title">
                </div>
                <div class="res">

                </div>
            </div>
            <div id="Visibility" class="insideres">
                <div class="title">

                </div>
                <div class="res">

                </div>
            </div>
        </div>
    );

}
export default Weather;