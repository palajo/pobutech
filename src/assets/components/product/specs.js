import React, { Component } from 'react'

function ProductSpecsBlock() {
    return(
        <div className="specifications-block">
            <div className="specifications-row">
                <div className="specifications-title">
                    <span>Spec title</span>
                </div>
                <div className="specifications-value">
                    <ul>
                        <li>
                            <a href="#">
                                Specifications Uno
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Specifications Uno
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Specifications Uno
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default class ProductSpecs extends Component {
    render() {
        return (
            <section className="specs">
                <div className="container-title">
                    Specifications
                </div>
                <div className="specifications">
                    <ProductSpecsBlock />
                    <ProductSpecsBlock />
                    <ProductSpecsBlock />
                    <ProductSpecsBlock />
                </div>
            </section>
        )
    }
}
