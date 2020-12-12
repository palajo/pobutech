import React, { Component } from 'react'

export default class PagesSidebar extends Component {
    render() {
        return (
            <section className="pages-sidebar">
                <ul>
                    <li>
                        <a href="/delivery">
                            <div className="sidebar-icon delivery"></div>
                            Delivery & Payment
                        </a>
                    </li>
                    <li>
                        <a href="/warranty">
                            <div className="sidebar-icon delivery"></div>
                            Warranty
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="sidebar-icon delivery"></div>
                            Return policy
                        </a>
                    </li>
                    <li>
                        <a href="/business">
                            <div className="sidebar-icon delivery"></div>
                            For business
                        </a>
                    </li>
                    <li>
                        <a href="/contacts">
                            <div className="sidebar-icon delivery"></div>
                            Contacts
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}
