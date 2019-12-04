import React from 'react';
import cssTitle from './Title.css';

const title = () => {
    return (
        <div className={cssTitle.Title}>
            <div>
                <h1>ABC COMPANY</h1>
                <h2>Strive towards a better future</h2>
            </div>
        </div>
    );
}

export default title;