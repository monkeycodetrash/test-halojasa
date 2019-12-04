import React from 'react';
import cssBenefit from './Benefit.css';

const benefit = () => {
    return (
        <div className={cssBenefit.Benefit}>
            <p>Our Benefit</p>
            <div className={cssBenefit.Flex}>
                <div>
                    <div>
                        1. Easy to maintain
                    </div>
                    <div>"You do not need to buy anything! Just buy our product and get rid everything"</div>
                </div>
                <div>
                    <div>
                        2. Load faster
                    </div>
                    <div>"Everything load faster with our product! You can load a script and it will load faster!"</div>
                </div>
                <div>
                    <div>
                    3. Huge and friendly community
                    </div>
                    <div>"Join our huge and friendly community! And get one elegant toaster for free!"</div>
                </div>
                <div>
                    <div>
                    4. Get free gift every month
                    </div>
                    <div>"Get free gift every month if you join us!"</div>
                </div>
                <div>
                    <div>
                    5. Redeem Points
                    </div>
                    <div>"Reedem your points and choose your own price!"</div>
                </div>
            </div>
        </div>
    );
};

export default benefit;