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
                                    <img src={MenuIcon} alt="menu-icon" />
                                    Brake system
                                </a>
                                <div>
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
                                    <img src={MenuIcon} alt="menu-icon" />
                                    Engine
                                </a>
                                <div>
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
                                    <img src={MenuIcon} alt="menu-icon" />
                                    Filters
                                </a>
                                <div>
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
                                    <img src={MenuIcon} alt="menu-icon" />
                                    Suspension
                                </a>
                            </li>
                            <li className="main-item">
                                <a className="main-link" href="/catalog">
                                    <img src={MenuIcon} alt="menu-icon" />
                                    Belt / Chain Drive
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
