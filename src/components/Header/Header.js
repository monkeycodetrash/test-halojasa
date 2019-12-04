import React from 'react';
import Logo from '../../assets/logo.png';
import cssHeader from './Header.css';

const header = () => {
    return (
        <div className={cssHeader.Header}>
            <div className={cssHeader.WrapHeader}>
                <div>
                    <img src={Logo} alt="Water Company" />
                </div>
                <nav>
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Services</span>
                    <span>Contact Us</span>
                </nav>
            </div>
        </div>
    );
};

export default header;