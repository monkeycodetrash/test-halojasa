import React from 'react';
import cssBenefit from './Benefit.css';

const benefit = () => {
    return (
        <div className={cssBenefit.Benefit}>
            <p>Our Benefit</p>
            <div className={cssBenefit.Flex}>
                <div>
                    <span>1. Easy to maintain</span>
                </div>
                <div>
                    <span>2. Load faster</span>
                </div>
                <div>
                    <span>3. Huge and friendly community</span>
                </div>
            </div>
        </div>
    );
};

export default benefit;