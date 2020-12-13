import React, { Component } from 'react'

export default class PagesSidebar extends Component {
    render() {
        return (
            <section className="pages-sidebar">
                <ul>
                    <li>
                        <a href="/delivery">
                            <div className="sidebar-icon icon delivery"></div>
                            Доставка та оплата
                        </a>
                    </li>
                    <li>
                        <a href="/warranty">
                            <div className="sidebar-icon icon warranty"></div>
                            Гарантія
                        </a>
                    </li>
                    <li>
                        <a href="/return">
                            <div className="sidebar-icon icon return"></div>
                            Повернення товару
                        </a>
                    </li>
                    <li>
                        <a href="/business">
                            <div className="sidebar-icon icon business"></div>
                            Для бізнесу
                        </a>
                    </li>
                    <li>
                        <a href="/contacts">
                            <div className="sidebar-icon icon contacts"></div>
                            Контакти
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}
