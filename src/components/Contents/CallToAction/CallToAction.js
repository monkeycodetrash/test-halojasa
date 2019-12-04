import React from 'react';
import cssAction from './CallToAction.css';

const callToAction = () => {
    return (
        <div className={cssAction.Action}>
            <h3>Find out more about us</h3>
            <button>Click Here</button>
        </div>
    );
};

export default callToAction;