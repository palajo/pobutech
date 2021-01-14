import React from 'react'

import ProductImage from '../assets/images/product-big.png';

import $ from 'jquery';

export default function CatalogModal() {

    $(document).ready(function () {
        $('.mobile-category-menu-link').click(function (e) {
            $(this).toggleClass('active');
            $(this).closest('.mobile-category-menu-item').find('.mobile-category-submenu').slideToggle();
        })
    });

    return (
        <div className="modal modal-appear catalog-modal" id="catalog" tabindex="-1" role="dialog" aria-labelledby="catalog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            Каталог
                            </div>
                        <div className="modal-close" data-dismiss="modal">
                            <div className="close"></div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <ul className="mobile-category-menu">
                            <li className="mobile-category-menu-item">
                                <a href="#" className="mobile-category-menu-link">
                                    <div className="mobile-icon icon fridge"></div>
                                        Холодильники
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
                                    <div className="mobile-icon icon washing-machine"></div>
                                        Пральні машини
                                    </a>
                            </li>
                            <li className="mobile-category-menu-item">
                                <a href="#" className="mobile-category-menu-link">
                                    <div className="mobile-icon icon air-conditioning"></div>
                                        Кондиціонери
                                    </a>
                            </li>
                            <li className="mobile-category-menu-item">
                                <a href="#" className="mobile-category-menu-link">
                                    <div className="mobile-icon icon vacuum-cleaner"></div>
                                        Пилососи
                                    </a>
                            </li>
                            <li className="mobile-category-menu-item">
                                <a href="#" className="mobile-category-menu-link">
                                    <div className="mobile-icon icon multicooker"></div>
                                        Мультиварки
                                    </a>
                            </li>
                            <li className="mobile-category-menu-item">
                                <a href="#" className="mobile-category-menu-link">
                                    <div className="mobile-icon icon freezer"></div>
                                        Морозильні камери
                                    </a>
                            </li>
                            <li className="mobile-category-menu-item">
                                <a href="#" className="mobile-category-menu-link">
                                    <div className="mobile-icon icon waterheater"></div>
                                        Бойлери
                                    </a>
                            </li>
                            <li className="mobile-category-menu-item">
                                <a href="#" className="mobile-category-menu-link">
                                    <div className="mobile-icon icon dishwasher"></div>
                                        Посудомийні машини
                                    </a>
                            </li>
                            <li className="mobile-category-menu-item">
                                <a href="#" className="mobile-category-menu-link">
                                    <div className="mobile-icon icon meat-grinder"></div>
                                        М'ясорубки
                                    </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
