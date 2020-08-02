import React from 'react';
import './container.css'
class Container extends React.Component {
    render() {
        return (
            <div id="container">
                <div class="searchicon">
                    <input type="search" placeholder="Enter City !!"></input>
                        <label class="icon">
                            <span class="fa fa-search"></span>
                        </label>
                </div>      
            </div>
        );
    }
}
export default Container;