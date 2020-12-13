import React, { Component } from 'react'

import MenuIcon from '../images/icons/phone.svg';
import CategoryImage from '../images/product.png';

import $ from 'jquery';

export default class Menu extends Component {
    componentDidMount() {
        $('ul.main-ul > li.main-item').hover(function() {
            $('ul.main-ul > li.main-item').removeClass('active');
            $(this).addClass('active');
        })
    }

    render() {
        return (
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <ul className="main-ul">
                            <li className="main-item active">
                                <a className="main-link" href="/catalog">
                                    <div className="main-ul-icon icon fridge"></div>
                                    Холодильники
                                </a>
                                <div className="sub-ul-container">
                                    <ul className="sub-ul">
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #3
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #4
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #5
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #6
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #7
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="main-item">
                                <a className="main-link" href="/catalog">
                                    <div className="main-ul-icon icon washing-machine"></div>
                                    Пральні машини
                                </a>
                                <div className="sub-ul-container">
                                    <ul className="sub-ul">
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #11
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #22
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #33
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #44
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #55
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #66
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #77
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="main-item">
                                <a className="main-link" href="/catalog">
                                    <div className="main-ul-icon icon air-conditioning"></div>
                                    Кондиціонери
                                </a>
                                <div className="sub-ul-container">
                                    <ul className="sub-ul">
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #111
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #222
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #333
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #444
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #555
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #666
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #777
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="main-item">
                                <a className="main-link" href="/catalog">
                                    <div className="main-ul-icon icon vacuum-cleaner"></div>
                                    Пилососи
                                </a>
                            </li>
                            <li className="main-item">
                                <a className="main-link" href="/catalog">
                                    <div className="main-ul-icon icon multicooker"></div>
                                    Мультиварки
                                </a>
                            </li>
                            <li className="main-item">
                                <a className="main-link" href="/catalog">
                                    <div className="main-ul-icon icon freezer"></div>
                                    Морозильні камери
                                </a>
                            </li>
                            <li className="main-item">
                                <a className="main-link" href="/catalog">
                                    <div className="main-ul-icon icon waterheater"></div>
                                    Бойлери
                                </a>
                            </li>
                            <li className="main-item">
                                <a className="main-link" href="/catalog">
                                    <div className="main-ul-icon icon dishwasher"></div>
                                    Посудомийні машини
                                </a>
                            </li>
                            <li className="main-item">
                                <a className="main-link" href="/catalog">
                                    <div className="main-ul-icon icon meat-grinder"></div>
                                    М'ясорубки
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-overlay"></div>
            </div>
        )
    }
}