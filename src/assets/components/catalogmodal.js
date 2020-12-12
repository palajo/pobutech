import React, { Component } from 'react'

import ProductImage from '../images/product-big.png';

import $ from 'jquery';

export default class CatalogModal extends Component {
    componentDidMount() {
        $('.mobile-category-menu-link').click(function(e) {
            $(this).toggleClass('active');
            $(this).closest('.mobile-category-menu-item').find('.mobile-category-submenu').slideToggle();
        })
    }
    render() {
        return (
            <div class="modal modal-appear catalog-modal" id="catalog" tabindex="-1" role="dialog" aria-labelledby="catalog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                Catalog
                            </div>
                            <div className="modal-close" data-dismiss="modal">
                                <div className="close"></div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <ul className="mobile-category-menu">
                                <li className="mobile-category-menu-item">
                                    <a href="#" className="mobile-category-menu-link">
                                        <div className="mobile-icon phone"></div>
                                        Link #1
                                    </a>
                                    <ul className="mobile-category-submenu">
                                        <li className="mobile-category-menu-item">
                                            <a className="mobile-category-menu-link">
                                                <div className="mobile-category-menu-link-content">
                                                    <div className="mobile-category-menu-image">
                                                        <img className="mobile-category-menu-image" src={ProductImage} />
                                                    </div>
                                                    <div className="mobile-category-menu-title">
                                                        Category Link #1
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mobile-category-menu-item">
                                            <a className="mobile-category-menu-link">
                                                <div className="mobile-category-menu-link-content">
                                                    <div className="mobile-category-menu-image">
                                                        <img className="mobile-category-menu-image" src={ProductImage} />
                                                    </div>
                                                    <div className="mobile-category-menu-title">
                                                        Category Link #2
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mobile-category-menu-item">
                                            <a className="mobile-category-menu-link">
                                                <div className="mobile-category-menu-link-content">
                                                    <div className="mobile-category-menu-image">
                                                        <img className="mobile-category-menu-image" src={ProductImage} />
                                                    </div>
                                                    <div className="mobile-category-menu-title">
                                                        Category Link #3
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mobile-category-menu-item">
                                            <a className="mobile-category-menu-link">
                                                <div className="mobile-category-menu-link-content">
                                                    <div className="mobile-category-menu-image">
                                                        <img className="mobile-category-menu-image" src={ProductImage} />
                                                    </div>
                                                    <div className="mobile-category-menu-title">
                                                        Category Link #4
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mobile-category-menu-item">
                                            <a className="mobile-category-menu-link">
                                                <div className="mobile-category-menu-link-content">
                                                    <div className="mobile-category-menu-image">
                                                        <img className="mobile-category-menu-image" src={ProductImage} />
                                                    </div>
                                                    <div className="mobile-category-menu-title">
                                                        Category Link #5
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mobile-category-menu-item">
                                            <a className="mobile-category-menu-link">
                                                <div className="mobile-category-menu-link-content">
                                                    <div className="mobile-category-menu-image">
                                                        <img className="mobile-category-menu-image" src={ProductImage} />
                                                    </div>
                                                    <div className="mobile-category-menu-title">
                                                        Category Link #6
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mobile-category-menu-item">
                                    <a href="#" className="mobile-category-menu-link">
                                        <div className="mobile-icon phone"></div>
                                        Link #2
                                    </a>
                                </li>
                                <li className="mobile-category-menu-item">
                                    <a href="#" className="mobile-category-menu-link">
                                        <div className="mobile-icon phone"></div>
                                        Link #3
                                    </a>
                                </li>
                                <li className="mobile-category-menu-item">
                                    <a href="#" className="mobile-category-menu-link">
                                        <div className="mobile-icon phone"></div>
                                        Link #4
                                    </a>
                                </li>
                                <li className="mobile-category-menu-item">
                                    <a href="#" className="mobile-category-menu-link">
                                        <div className="mobile-icon phone"></div>
                                        Link #5
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
