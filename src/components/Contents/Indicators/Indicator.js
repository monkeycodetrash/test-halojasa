import React from 'react';
import cssIndicator from './Indicator.css';

const indicator = () => {
    return (
        <div className={cssIndicator.Indicator}>
            <p>Quality Of Our Products</p>
            <div className={cssIndicator.Flex}>
                <div>
                    <p>Testimonial</p>
                    <span>After using this product, my weight drop 6 kg.</span>
                </div>
                <div>
                    <p>Social Media</p>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                </div>
                <div>
                    <p>Awards</p>
                    <span>In 2018 & 2019 we won best product awards and best innovative products.</span>
                </div>
            </div>
        </div>
    );
};

export default indicator;