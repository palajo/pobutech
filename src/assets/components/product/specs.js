import React, { Component } from 'react'

function ProductSpecsBlock() {
    return(
        <div className="specifications-block">
            <div className="specifications-row">
                <div className="specifications-title">
                    <span>Особливості</span>
                </div>
                <div className="specifications-value">
                    <ul>
                        <li>
                            <a href="#">
                                Корисна потужність: 18 кВт
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ККД: >89%
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Захист: IPX4D
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
                    Характеристики
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
