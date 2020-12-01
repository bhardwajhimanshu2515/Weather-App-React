import React from 'react';
import './navbar.css'
function Navbar() {
    return (
        <div id="navbar">
            <div id="logo">
                Weather App
        </div>
            <div id="navlinks">
                <a href="https://github.com/bhardwajhimanshu2515"><span className="fa fa-github"></span></a>
                <a href="https://www.linkedin.com/in/himanshu-bhardwaj-mern-stack-developer/"><span className="fa fa-linkedin"></span></a>
            </div>
        </div>
    );

}
export default Navbar;