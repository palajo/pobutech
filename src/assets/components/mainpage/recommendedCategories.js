import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import ProductImage from '../../images/product.png';

export function Block() {
    return(
        <div className="product-block">
            <div className="product-image">
                <NavLink to="/product">
                    <img src={ProductImage} alt="product-image" />
                </NavLink>
            </div>
            <div className="product-title-code">
                <div className="product-title">
                    <NavLink to="/product">
                        Wellco Airfilter SES/W220
                        Additional
                    </NavLink>
                </div>
                <div className="product-code">
                    Акртикул: #12352
                </div>
            </div>
            <div className="product-row">
                <div className="product-price">
                    95 <span>грн.</span>
                </div>
                <NavLink to="#">
                    <div className="product-add-to-cart"></div>
                </NavLink>
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
                <NavLink to="/catalog" className="show-more">Показати більше</NavLink>
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
