import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PagesSidebar() {
    return (
        <section className="pages-sidebar">
            <ul>
                <li>
                    <NavLink to="/delivery">
                        <div className="sidebar-icon icon delivery"></div>
                            Доставка та оплата
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/warranty">
                        <div className="sidebar-icon icon warranty"></div>
                            Гарантія
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/return">
                        <div className="sidebar-icon icon return"></div>
                            Повернення товару
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/business">
                        <div className="sidebar-icon icon business"></div>
                            Для бізнесу
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">
                        <div className="sidebar-icon icon contacts"></div>
                            Контакти
                        </NavLink>
                </li>
            </ul>
        </section>
    )
}
