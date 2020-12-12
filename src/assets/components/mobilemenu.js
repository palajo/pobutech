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
                                    <div className="mobile-icon phone"></div>
                                    Mainpage
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="#" data-target="#catalog" data-toggle="modal">
                                    <div className="mobile-icon phone"></div>
                                    Catalog
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="/delivery">
                                    <div className="mobile-icon phone"></div>
                                    Delivery & Payment
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="/warranty">
                                    <div className="mobile-icon phone"></div>
                                    Warranty
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="#">
                                    <div className="mobile-icon phone"></div>
                                    Return policy
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="/business">
                                    <div className="mobile-icon phone"></div>
                                    For business
                                </a>
                            </li>
                            <li className="mobile-item">
                                <a className="mobile-link" href="/contacts">
                                    <div className="mobile-icon phone"></div>
                                    Contacts
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
