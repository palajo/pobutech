import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Breadcrumbs extends Component {
    render() {
        return (
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            Головна
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category" exact>
                            Категорія
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/subcatergory" exact>
                            Підкатегорія
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/subcatergory/prodcuct" className="active" exact>
                            Сторінка товару
                        </NavLink>
                    </li>
                </ul>
            </section>
        )   
    }
}
