import React, { Component } from 'react'
import Breadcrumbs from '../assets/components/breadcrumbs'
import ProductImage from '../assets/images/product-big.png';

import $ from 'jquery';


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
                    Артикул: #12352
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

export default class CatalogPage extends Component {
    componentDidMount() {
        $('.filters-button').click(function(){
            $('.sidebar').slideToggle();
        })
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <Breadcrumbs />
                        <button className="filters-button">
                            ФІЛЬТРИ
                        </button>
                        <section className="sidebar-catalog">
                            <div className="category-header">
                                <div className="category-title">
                                    <div className="category-icon icon fridge"></div>
                                    Холодильники
                                </div>
                                <div className="category-sort">
                                    <div className="dropdown sort">
                                        <button type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Релевантність</button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li>
                                                <a href="#">
                                                    First option
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Second option
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Third option
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section className="sidebar">
                                <div className="sidebar-block">
                                    <div className="sidebar-block-label">Бренд:</div>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    Samsung
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    LG
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    Electrolux
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    Sony
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-block">
                                    <div className="sidebar-block-label">Бренд:</div>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    Samsung
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    LG
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    Electrolux
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    Sony
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-block">
                                    <div className="sidebar-block-label">Бренд:</div>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    Samsung
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    LG
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    Electrolux
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label>
                                                    Sony
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section className="catalog">
                                <div className="catalog-products">
                                    <Block />
                                    <Block />
                                    <Block />
                                    <Block />
                                    <Block />
                                    <Block />
                                    <Block />
                                    <Block />
                                    <Block />
                                    <Block />
                                    <Block />
                                    <Block />
                                </div>
                            </section>
                        </section>
                        <section className="pagination">
                            <ul>
                                <li>
                                    <a href="#" className="active">
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        4
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        5
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </>
        )
    }
}
