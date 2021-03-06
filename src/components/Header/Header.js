import React from 'react';
import Logo from '../../assets/logo.png';
import cssHeader from './Header.css';

const header = (props) => {
    return (
        <div className={cssHeader.Header}>
            <div className={cssHeader.WrapHeader}>
                <div>
                    <img src={Logo} alt="Water Company" />
                </div>
                <div className={cssHeader.Menu}>
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Services</span>
                    <span>Contact Us</span>
                </div>
                <label 
                    className={cssHeader.Hamburger}
                    onClick={props.clicked}>
                        &#9776;
                </label>
            </div>
        </div>
    );
};

export default header;