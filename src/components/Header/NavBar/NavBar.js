import React from 'react';
import navBar from './NavBar.css';

const menus = (props) => {
    return (
        <div className={navBar.Menu}>
            <span onClick={props.clicked}><a>X</a></span>
            <span>Home</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Contact Us</span>
        </div>
    )
};

export default menus;