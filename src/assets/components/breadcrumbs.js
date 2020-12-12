import React, { Component } from 'react'

export default class Breadcrumbs extends Component {
    render() {
        return (
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <a href="#">
                            Mainpage
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Category
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Subcategory
                        </a>
                    </li>
                    <li>
                        <a href="#" className="active">
                            Product title
                        </a>
                    </li>
                </ul>
            </section>
        )   
    }
}
