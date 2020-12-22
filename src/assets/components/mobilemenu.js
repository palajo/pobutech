import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

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
                                <NavLink className="mobile-link" to="/">
                                    <div className="mobile-icon icon home"></div>
                                    Головна
                                </NavLink>
                            </li>
                            <li className="mobile-item">
                                <NavLink className="mobile-link" to="#" data-target="#catalog" data-toggle="modal">
                                    <div className="mobile-icon icon catalog"></div>
                                    Каталог
                                </NavLink>
                            </li>
                            <li className="mobile-item">
                                <NavLink className="mobile-link" to="/delivery">
                                    <div className="mobile-icon icon delivery"></div>
                                    Доставка та оплата
                                </NavLink>
                            </li>
                            <li className="mobile-item">
                                <NavLink className="mobile-link" to="/warranty">
                                    <div className="mobile-icon icon warranty"></div>
                                    Гарантія
                                </NavLink>
                            </li>
                            <li className="mobile-item">
                                <NavLink className="mobile-link" to="/return">
                                    <div className="mobile-icon icon return"></div>
                                    Повернення товару
                                </NavLink>
                            </li>
                            <li className="mobile-item">
                                <NavLink className="mobile-link" to="/business">
                                    <div className="mobile-icon icon business"></div>
                                    Для бізнесу
                                </NavLink>
                            </li>
                            <li className="mobile-item">
                                <NavLink className="mobile-link" to="/contacts">
                                    <div className="mobile-icon phone"></div>
                                    Контакти
                                </NavLink>
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
