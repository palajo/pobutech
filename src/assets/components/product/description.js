import React, { Component } from 'react'

export default class ProductDescription extends Component {
    render() {
        return (
            <div className="product-information-block">
                <div className="product-title-code">
                    <div className="product-title">
                        Wellco Airfilter SES/W220
                    </div>
                    <div className="product-code">
                        Article: 0052345
                    </div>
                </div>
                <div className="product-description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                    </p>
                </div>
                <div className="product-price-cart">
                    <div className="product-price">
                        345 <span>uah</span>
                    </div>
                    <div className="product-add-to-cart">
                        <button className="button">Add to cart</button>
                        <input type="number" className="quantity" placeholder="1" min="1" step="1" /> 
                    </div>
                </div>
            </div>
        )
    }
}
