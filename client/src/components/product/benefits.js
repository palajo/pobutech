import React from 'react'

import BenefitIcon from '../../assets/images/icons/truck.svg';

export default function ProductBenefits() {
    return (
        <div className="product-benefits-block">
            <div className="benefit-block">
                <div className="benefit-row">
                    <img src={BenefitIcon} alt="benefit-icon" />
                    <p>
                        The fastest delivery <br />
                            you ever had!
                        </p>
                </div>
            </div>
            <div className="benefit-block">
                <div className="benefit-row">
                    <img src={BenefitIcon} alt="benefit-icon" />
                    <p>
                        The fastest delivery <br />
                            you ever had!
                        </p>
                </div>
            </div>
            <div className="benefit-block">
                <div className="benefit-row">
                    <img src={BenefitIcon} alt="benefit-icon" />
                    <p>
                        The fastest delivery <br />
                            you ever had!
                        </p>
                </div>
            </div>
        </div>
    )
}
