import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../images/logo1.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row blocks-row">
                        <div className="block">
                            <div className="footer-logo">
                                <NavLink to="#">
                                    <img src={Logo} alt="footer-logo" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                Корисні посилання
                            </div>
                            <ul className="footer-nav">
                                <li className="nav-item">
                                    <NavLink to="/delivery" className="nav-link">
                                        Доставка та оплата
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/warranty" className="nav-link">
                                        Гарантія
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/return" className="nav-link">
                                        Повернення товару
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/business" className="nav-link">
                                        Для бізнесу
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contacts" className="nav-link">
                                        Контакти
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                Рекомендовані категорії
                            </div>
                            <ul className="footer-nav">
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link">
                                        Холодильники
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link">
                                        Мультиварки
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link">
                                        Посудомийні машини
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link">
                                        Пральні машини
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link">
                                        Бойлери
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                Контакти
                            </div>
                            <ul className="footer-nav informative">
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link">
                                        <div className="footer-icon icon phone"></div>
                                        +38 (000) 00 00 000
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link">
                                        <div className="footer-icon icon phone"></div>
                                        +38 (000) 00 00 000
                                    </NavLink>
                                </li>
                                <div className="space"></div>
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link">
                                        <div className="footer-icon icon clock"></div>
                                        з 9-00 до 18-00
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link">
                                        <div className="footer-icon icon location"></div>
                                        м. Львів, вул. Шевченка 8а
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row creator">
                        <div className="developer">
                            Дизайн та розробка — Webunite.net
                        </div>
                        <div className="copyright">
                            © 2020 «Побутех Львів»
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
