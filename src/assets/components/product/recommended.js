import React, { Component } from 'react'

import ProductImage from '../../images/product-big.png'

export function ProductRecommendedBlock() {
    return(
        <div className="product-block">
            <div className="product-block-row">
                <div className="left-part">
                    <div className="product-image">
                        <a href="#">
                            <img src={ProductImage} alt="product-image" />
                        </a>
                    </div>
                </div>
                <div className="right-part">
                    <div className="product-title-code">
                        <div className="product-title">
                            <a href="#">
                                Wellco Airfilter SES/W220
                                Additional
                            </a>
                        </div>
                        <div className="product-code">
                            Product code: #12352
                        </div>
                    </div>
                    <div className="product-row">
                        <div className="product-price">
                            95 <span>uah</span>
                        </div>
                        <a href="#">
                            <div className="product-add-to-cart"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class ProductRecommended extends Component {
    render() {
        return (
            <section className="recommended-products">
                <div className="container-title">
                    Recommended products
                </div>
                <div className="recommended-products-block">
                    <ProductRecommendedBlock />
                    <ProductRecommendedBlock />
                    <ProductRecommendedBlock />
                    <ProductRecommendedBlock />
                </div>
            </section>
        )
    }
}
