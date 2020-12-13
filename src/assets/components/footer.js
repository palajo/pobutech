import React, { Component } from 'react'

import Logo from '../images/logo1.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row blocks-row">
                        <div className="block">
                            <div className="footer-logo">
                                <a href="#">
                                    <img src={Logo} alt="footer-logo" />
                                </a>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                Корисні посилання
                            </div>
                            <ul className="footer-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Доставка та оплата
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Гарантія
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Повернення товару
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Для бізнесу
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Контакти
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                Рекомендовані категорії
                            </div>
                            <ul className="footer-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Холодильники
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Мультиварки
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Посудомийні машини
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Пральні машини
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Бойлери
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                Контакти
                            </div>
                            <ul className="footer-nav informative">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <div className="footer-icon icon phone"></div>
                                        +38 (000) 00 00 000
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <div className="footer-icon icon phone"></div>
                                        +38 (000) 00 00 000
                                    </a>
                                </li>
                                <div className="space"></div>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <div className="footer-icon icon clock"></div>
                                        з 9-00 до 18-00
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <div className="footer-icon icon location"></div>
                                        м. Львів, вул. Шевченка 8а
                                    </a>
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
