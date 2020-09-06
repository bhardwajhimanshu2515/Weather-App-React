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
            weather: [],
            loaded: true,
            isSearching: false
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {

    }

    continue = (e) => {
        const { location } = this.state;
        const rawurl = 'http://api.weatherstack.com/current?access_key=ed465f7922533af2f7bc404a4f1f497f&query=' + location;
        const url = rawurl;
        e.preventDefault();
        if (location.length < 1) {
            return alert('Enter the details');
        }
        else {
            this.setState({ isSearching: true });
            if (this.state.isSearching === true) {
                this.setState({ loaded: false });
            }
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ weather: [data], loaded: true });
                    //toast
                    if(data){
                        toast.success("Data Fetched Successfully");
                      }

                })
                .catch(err => console.log("error ", err))

        }
    };
    render() {

        console.log(this.state.weather);
        const weather =
            this.state.weather.length > 0 ?
                this.state.weather.map(item => (<Weather location={item.location.name} temperature={item.current.temperature} weather={item.current.weather_descriptions[0]} windSpeed={item.current.wind_speed} windDegree={item.current.wind_degree} windDir={item.current.wind_dir} humidity={item.current.humidity} visibility={item.current.visibility} />
                ))
                : <span></span>
        return (
            <div id="container">
                <div class="searchicon">
                    <input type="search" placeholder="Enter City !!" type="text" name="location" value={this.state.location} onChange={this.handleChange}></input>
                    <label class="icon">
                        <button onClick={this.continue} id="btn"><span class="fa fa-search"></span></button>
                    </label>
                </div>
                <div>
                    <Loader loaded={this.state.loaded}>{weather}</Loader>    
                </div>

            </div>
        );
    }
}
export default Container;