import React from 'react';
import cssTitle from './Title.css';

const title = () => {
    return (
        <div className={cssTitle.Title}>
            <div>
                <h1>WATER COMPANY</h1>
                <h2>GET THE BEST QUALITY WATER HERE</h2>
            </div>
        </div>
    );
}

export default title;