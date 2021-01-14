import React from 'react'
import PagesSidebar from '../components/pages/sidebar'

import Location from '../assets/images/icons/location.svg';

export default function ContactsPage() {
    return (
        <div className="container">
            <div className="row">
                <section className="pages-double-section">
                    <PagesSidebar />
                    <section className="content">
                        <div className="container-title">
                            Контакти:
                            </div>
                        <div className="content-content">
                            <div className="content-block">
                                <label>
                                    Some label:
                                    </label>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                            </div>

                            <div className="contacts-row">
                                <div className="contacts-block">
                                    <div className="icon-block open-catalog">
                                        <div className="icon">
                                            <img src={Location} alt="location-icon" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <label>Телефон:</label>
                                            +38 (000) 00 00 000
                                        </div>
                                </div>
                                <div className="contacts-block">
                                    <div className="icon-block open-catalog">
                                        <div className="icon">
                                            <img src={Location} alt="location-icon" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <label>Телефон:</label>
                                            +38 (000) 00 00 000
                                        </div>
                                </div>
                                <div className="contacts-block">
                                    <div className="icon-block open-catalog">
                                        <div className="icon">
                                            <img src={Location} alt="location-icon" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <label>Телефон:</label>
                                            +38 (000) 00 00 000
                                        </div>
                                </div>
                                <div className="contacts-block">
                                    <div className="icon-block open-catalog">
                                        <div className="icon">
                                            <img src={Location} alt="location-icon" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <label>Телефон:</label>
                                            +38 (000) 00 00 000
                                        </div>
                                </div>
                                <div className="contacts-block">
                                    <div className="icon-block open-catalog">
                                        <div className="icon">
                                            <img src={Location} alt="location-icon" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <label>Телефон:</label>
                                            +38 (000) 00 00 000
                                        </div>
                                </div>
                                <div className="contacts-block">
                                    <div className="icon-block open-catalog">
                                        <div className="icon">
                                            <img src={Location} alt="location-icon" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <label>Телефон:</label>
                                            +38 (000) 00 00 000
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}
