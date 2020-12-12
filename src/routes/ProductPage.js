import React, { Component } from 'react'

import Breadcrumbs from '../assets/components/breadcrumbs'
import ProductBenefits from '../assets/components/product/benefits'
import ProductDescription from '../assets/components/product/description'
import ProductImages from '../assets/components/product/images'
import ProductRecommended from '../assets/components/product/recommended'
import ProductSpecs from '../assets/components/product/specs'

export default class ProductPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumbs />
                    <section className="product">
                        <ProductImages />
                        <ProductDescription />
                        <ProductBenefits />
                    </section>
                    <section className="specs-recommended">
                        <ProductSpecs />
                        <ProductRecommended />
                    </section>
                </div>
            </div>
        )
    }
}
