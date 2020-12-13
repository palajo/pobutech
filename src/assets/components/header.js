import React, { Component } from 'react'

import MenuIcon from '../images/icons/menu.svg';
import CartIcon from '../images/icons/cart.svg';
import SearchIcon from '../images/icons/search.svg';

import Logo from '../images/logo1.svg';
import Menu from './menu';
import CartModal from './cart/modal';

import $ from 'jquery';
import MobileMenu from './mobilemenu';

export default class Header extends Component {
    componentDidMount() {
        $('.open-catalog').click(function(){
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
        });
        $('.menu-overlay').click(function(){
            $('.open-catalog').toggleClass('active');
            $('.menu').toggleClass('active');
        });
        $('.open-menu').click(function(){
            $(this).toggleClass('active');
            $('.mobile-menu').toggleClass('active');
            $("body").css("overflow", "hidden");
        });
        $('.close-mobile-menu').click(function(){
            $('.open-menu').toggleClass('active');
            $('.mobile-menu').toggleClass('active');
            $("body").css("overflow", "visible");
        });
    }
    render() {
        return (
            <>
                <header>
                    <div className="top-row">
                        <div className="container">
                            <div className="row">
                                <ul>
                                    <li>
                                        <a href="/delivery">Доставка та оплата</a>
                                    </li>
                                    <li>
                                        <a href="/warranty">Гарантія</a>
                                    </li>
                                    <li>
                                        <a href="/return">Повернення товару</a>
                                    </li>
                                    <li>
                                        <a href="/business">Для бізнесу</a>
                                    </li>
                                    <li>
                                        <a href="/contacts">Контакти</a>
                                    </li>
                                </ul>
                                <a href="#" className="contact-phone">+38 (000) 00 00 000</a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <div className="container">
                            <div className="row">
                                <div className="left-block">
                                    <div className="icon-block open-menu">
                                        <div className="icon">
                                            <img src={MenuIcon} alt="menu-icon" />
                                        </div>
                                        <label>Меню</label>
                                    </div>

                                    <div className="icon-block open-catalog">
                                        <div className="icon">
                                            <img src={MenuIcon} alt="catalog-icon" />
                                        </div>
                                        <label>Каталог</label>
                                    </div>
                                    <div className="logo">
                                        <a href="/">
                                            <img src={Logo} alt="site-logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="right-block">
                                    <div className="icon-block">
                                        <div className="icon">
                                            <img src={SearchIcon} alt="catalog-icon" />
                                        </div>
                                        <label>Пошук</label>
                                    </div>
                                    <div className="icon-block" data-target="#cart" data-toggle="modal">
                                        <div className="icon">
                                            <img src={CartIcon} alt="catalog-icon" />
                                        </div>
                                        <label>Кошик</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Menu />
                <MobileMenu />
                <CartModal />
            </>
        )
    }
}
