import React from 'react';
import cssIndicator from './Indicator.css';

const indicator = () => {
    return (
        <div className={cssIndicator.Indicator}>
            <p>Quality Of Our Products</p>
            <div className={cssIndicator.Flex}>
                <div className={cssIndicator.Testi}>
                    <p>Testimonial</p>
                    <div>
                        <span>Andrew</span>
                        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <span>"After using this product, my weight drop 6 kg."</span>
                    </div>
                </div>
                <div className={cssIndicator.Social}>
                    <p>Social Media</p>
                    <span>
                        <a>Facebook</a>
                    </span>
                    <span>
                        <a>Twitter</a>
                    </span>
                    <span>
                        <a>Instagram</a>
                    </span>
                </div>
                <div className={cssIndicator.Awards}>
                    <p>Awards</p>
                    <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span>In 2018 & 2019 we won best product awards and best innovative products.</span>
                </div>
            </div>
        </div>
    );
};

export default indicator;