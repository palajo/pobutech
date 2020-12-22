import React, { Component } from 'react'

import MenuIcon from '../images/icons/phone.svg';
import CategoryImage from '../images/product.png';

import { NavLink } from 'react-router-dom'
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
                                <NavLink className="main-link" to="/catalog">
                                    <div className="main-ul-icon icon fridge"></div>
                                    Холодильники
                                </NavLink>
                                <div className="sub-ul-container">
                                    <ul className="sub-ul">
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #1
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #2
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #3
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #4
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #5
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #6
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #7
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="main-item">
                                <NavLink className="main-link" to="/catalog">
                                    <div className="main-ul-icon icon washing-machine"></div>
                                    Пральні машини
                                </NavLink>
                                <div className="sub-ul-container">
                                    <ul className="sub-ul">
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #11
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #22
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #33
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #44
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #55
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #66
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #77
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="main-item">
                                <NavLink className="main-link" to="/catalog">
                                    <div className="main-ul-icon icon air-conditioning"></div>
                                    Кондиціонери
                                </NavLink>
                                <div className="sub-ul-container">
                                    <ul className="sub-ul">
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #111
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #222
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #333
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #444
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #555
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #666
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <img src={CategoryImage} alt="category-image" />
                                                Category Title #777
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="main-item">
                                <NavLink className="main-link" to="/catalog">
                                    <div className="main-ul-icon icon vacuum-cleaner"></div>
                                    Пилососи
                                </NavLink>
                            </li>
                            <li className="main-item">
                                <NavLink className="main-link" to="/catalog">
                                    <div className="main-ul-icon icon multicooker"></div>
                                    Мультиварки
                                </NavLink>
                            </li>
                            <li className="main-item">
                                <NavLink className="main-link" to="/catalog">
                                    <div className="main-ul-icon icon freezer"></div>
                                    Морозильні камери
                                </NavLink>
                            </li>
                            <li className="main-item">
                                <NavLink className="main-link" to="/catalog">
                                    <div className="main-ul-icon icon waterheater"></div>
                                    Бойлери
                                </NavLink>
                            </li>
                            <li className="main-item">
                                <NavLink className="main-link" to="/catalog">
                                    <div className="main-ul-icon icon dishwasher"></div>
                                    Посудомийні машини
                                </NavLink>
                            </li>
                            <li className="main-item">
                                <NavLink className="main-link" to="/catalog">
                                    <div className="main-ul-icon icon meat-grinder"></div>
                                    М'ясорубки
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-overlay"></div>
            </div>
        )
    }
}