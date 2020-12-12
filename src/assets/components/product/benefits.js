import React, { Component } from 'react'

import BenefitIcon from '../../images/icons/truck.svg';

export default class ProductBenefits extends Component {
    render() {
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
}
