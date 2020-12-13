import React, { Component } from 'react'

import ProductImage from '../../images/product.png';

export function Block() {
    return(
        <div className="product-block">
            <div className="product-image">
                <a href="/product">
                    <img src={ProductImage} alt="product-image" />
                </a>
            </div>
            <div className="product-title-code">
                <div className="product-title">
                    <a href="/product">
                        Wellco Airfilter SES/W220
                        Additional
                    </a>
                </div>
                <div className="product-code">
                    Акртикул: #12352
                </div>
            </div>
            <div className="product-row">
                <div className="product-price">
                    95 <span>грн.</span>
                </div>
                <a href="#">
                    <div className="product-add-to-cart"></div>
                </a>
            </div>
        </div>
    )
}

export function Container() {
    return(
        <div className="recommended-container">
            <div className="recommended-title-row">
                <div className="category-title">
                    <div className="category-icon icon freezer"></div>
                    Морозильні камери
                </div>
                <a href="/catalog" className="show-more">Показати більше</a>
            </div>
            <div className="recommended-products">
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
        </div>
    )
}

export default class RecommendedCategories extends Component {
    render() {
        return (
            <div className="container recommended-categories">
                <div className="row">
                    <div className="container-title">
                        Рекомендовані категорії:
                    </div>
                    <Container />
                    <Container />
                    <Container />
                </div>
            </div>
        )
    }
}
