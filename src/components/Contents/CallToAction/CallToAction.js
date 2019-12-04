import React from 'react';
import cssAction from './CallToAction.css';

const callToAction = () => {
    return (
        <div className={cssAction.Action}>
            <h3>Register With Us Now! And Get A Toaster For Free!</h3>
            <button>REGISTER NOW!</button>
        </div>
    );
};

export default callToAction;