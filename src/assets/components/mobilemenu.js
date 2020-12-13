import React, { Component } from 'react'

import Logo from '../images/logo1.svg';
import CatalogModal from './catalogmodal';

export default class MobileMenu extends Component {
    render() {
        return (
            <>
            <div className="mobile-menu">
                <div className="container">
                    <div className="row">
                        <div className="logo-close">
                            <div className="logo">
                                <img src={Logo} alt="mm-logo" />
                            </div>
                            <div className="close close-mobile-menu"></div>
                        </div>
                        <ul className="mobile-ul">
                            <li className="mobile-item">
                                <a className="mobile-link" href="/">
                                    <div className="mobile-icon icon home"></div>
                                    Головна
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="#" data-target="#catalog" data-toggle="modal">
                                    <div className="mobile-icon icon catalog"></div>
                                    Каталог
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="/delivery">
                                    <div className="mobile-icon icon delivery"></div>
                                    Доставка та оплата
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="/warranty">
                                    <div className="mobile-icon icon warranty"></div>
                                    Гарантія
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="/return">
                                    <div className="mobile-icon icon return"></div>
                                    Повернення товару
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="/business">
                                    <div className="mobile-icon icon business"></div>
                                    Для бізнесу
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="/contacts">
                                    <div className="mobile-icon phone"></div>
                                    Контакти
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CatalogModal />
            </>
        )
    }
}
