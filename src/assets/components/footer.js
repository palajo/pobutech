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
                                For Clients
                            </div>
                            <ul className="footer-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Delivery & Payment
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Warranty
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Service center
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        About us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                For Clients
                            </div>
                            <ul className="footer-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Delivery & Payment
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Warranty
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Service center
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        About us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                For Clients
                            </div>
                            <ul className="footer-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Delivery & Payment
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Warranty
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Service center
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        About us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row creator">
                        <div className="developer">
                            Дизайн и разработка — Palaj
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
