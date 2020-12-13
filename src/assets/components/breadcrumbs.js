import React, { Component } from 'react'

export default class Breadcrumbs extends Component {
    render() {
        return (
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <a href="#">
                            Головна
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Категорія
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Підкатегорія
                        </a>
                    </li>
                    <li>
                        <a href="#" className="active">
                            Сторінка товару
                        </a>
                    </li>
                </ul>
            </section>
        )   
    }
}
