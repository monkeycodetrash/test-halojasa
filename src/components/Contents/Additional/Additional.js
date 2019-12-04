import React from 'react';
import cssAdditional from './Additional.css';

const additional = () => {
    return (
        <div className={cssAdditional.Additional}>
            <div className={cssAdditional.Wrap}>
                <div className={cssAdditional.Flex}>
                    <div>
                        <p>Check out our Blog!</p>
                        <span><a>How to drink water</a></span>
                        <span><a>Our product is the best</a></span>
                        <span><a>How to start a kickstarter</a></span>
                    </div>
                    <div>
                        <p>Company Event</p>
                        <span><a>Event Schedule</a></span>
                        <span><a>Product Launches</a></span>
                        <span><a>Announcement</a></span>
                    </div>
                    <div>
                        <p>Join Our Newsletter</p>
                        <div>
                            <input type="email" />
                            <button>JOIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default additional;