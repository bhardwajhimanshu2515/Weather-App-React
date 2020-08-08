import React from 'react';
import './container.css'
import Weather from './weather';
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

    continue = (e) => {

        const { location } = this.state;
        const rawurl = 'http://api.weatherstack.com/current?access_key=d8fefab56305f5a343b0eab4f837fec1&query=' + location;
        const url = rawurl;
        e.preventDefault();
        if (location.length < 1) {
            return alert('Enter the details');
        }
        else {
                fetch(url)
                    .then(response => response.json())
                    .then(data =>{
                        this.setState({weather:[data]});
                    })
                    .catch(err => console.log("error ",err)) 
        }
    };
    render() {
        console.log(this.state.weather);
        const weather =
        this.state.weather.length> 0 ? 
        this.state.weather.map(item => (<Weather location={item.location.name} temperature={item.current.temperature} weather={item.current.weather_descriptions[0]} windSpeed={item.current.wind_speed} windDegree={item.current.wind_degree} windDir={item.current.wind_dir} humidity={item.current.humidity} visibility={item.current.visibility} />
            ))
        :<span></span>
        return (
            <div id="container">
                <div class="searchicon">
                    <input type="search" placeholder="Enter City !!" type="text" name="location" value={this.state.location} onChange={this.handleChange}></input>
                    <label class="icon">
                        <button onClick={this.continue}><span class="fa fa-search"></span></button>
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