import React from 'react';
import './container.css'
import Weather from './weather';
import { toast, ToastContainer } from 'react-toastify';

var Loader = require('react-loader');
class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: "",
            weather: []
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {

    }

    continue = async (e) => {
        e.preventDefault();
        const { location } = this.state;
        const rawurl = 'http://api.weatherstack.com/current?access_key=d8fefab56305f5a343b0eab4f837fec1&query=' + location;
        const url = rawurl;
        e.preventDefault();
        if (location.length < 1) {
            return alert('Enter the details');
        }
        else {
            
            fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+this.state.location+"&lat=0&lon=0&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "c8cb6b8cccmshc02b57f0b5a8c98p1516cdjsnb64d72a5ad33",
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                }
            })
                .then(async response => {
                   return response.json();
                })
                .then(data=>{
                    this.setState({weather:[data]})
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };
    render() {
        const weather =
            this.state.weather.length > 0 ?
                this.state.weather.map(item => (<Weather location={item.name} temperature={item.main.temp} weather={item.weather[0].description} windSpeed={item.wind.speed} windDegree={item.wind.deg} pressure={item.main.pressure} humidity={item.main.humidity} visibility={item.visibility} />
                ))
                : <span></span>
        return (
            <div id="container">
                <div className="searchicon">
                    <input type="search" placeholder="Enter City !!" type="text" name="location" value={this.state.location} onChange={this.handleChange}></input>
                    <label className="icon">
                        <button onClick={this.continue} id="btn"><span className="fa fa-search"></span></button>
                    </label>
                </div>
                <div>
                    {weather}
                </div>

            </div>
        );
    }
}
export default Container;