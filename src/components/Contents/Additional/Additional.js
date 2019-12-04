import React from 'react';
import cssAdditional from './Additional.css';

const additional = () => {
    return (
        <div className={cssAdditional.Additional}>
            <div className={cssAdditional.flex}>
                <div>
                    <p>Check out our Blog!</p>
                    <span><a href="#">How to drink water</a></span>
                    <span><a href="#">Our product is the best</a></span>
                    <span><a href="#">How to start a kickstarter</a></span>
                </div>
                <div>
                    <p>Company Event</p>
                    <span><a href="#">Event Schedule</a></span>
                    <span><a href="#">Product Launches</a></span>
                    <span><a href="#">Announcement</a></span>
                </div>
                <div>
                    <p>Join Our Newsletter</p>
                    <div>
                        <input type="email" />
                        <button>Join</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default additional;