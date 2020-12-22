import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Breadcrumbs from '../assets/components/breadcrumbs'
import ProductImage from '../assets/images/product-big.png';

import $ from 'jquery';


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
                    Артикул: #12352
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
                                                <NavLink to="#">
                                                    First option
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="#">
                                                    Second option
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="#">
                                                    Third option
                                                </NavLink>
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
                                            <NavLink to="#">
                                                <label>
                                                    Samsung
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    LG
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    Electrolux
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    Sony
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-block">
                                    <div className="sidebar-block-label">Бренд:</div>
                                    <ul>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    Samsung
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    LG
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    Electrolux
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    Sony
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-block">
                                    <div className="sidebar-block-label">Бренд:</div>
                                    <ul>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    Samsung
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    LG
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    Electrolux
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#">
                                                <label>
                                                    Sony
                                                    <input type="checkbox" className="custom-checkbox" />
                                                    <span class="checkmark"></span> 
                                                </label>
                                            </NavLink>
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
                                    <NavLink to="#" className="active" exact>
                                        1
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" exact>
                                        2
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" exact>
                                        3
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" exact>
                                        4
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" exact>
                                        5
                                    </NavLink>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </>
        )
    }
}
