import React, { Component } from 'react'

import ProductImage from '../assets/images/product-big.png'

import Minus from '../assets/images/icons/minus.svg';
import Plus from '../assets/images/icons/plus.svg';

export default class ThanksPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <section className="thanks">
                        <div className="container-title">
                            Дякуємо!<br />
                            Ваше замовлення надіслано до обробки.
                        </div>
                        <div className="content">
                            <div className="order-details">
                                <table>
                                    <tbody>
                                        <tr className="product">
                                            <th>Товар</th>
                                            <th>Ціна</th>
                                        </tr>
                                        <tr>
                                            <td>Wellco Airfilter SES/W220 Additional <span>x2</span></td>
                                            <td>195 грн.</td>
                                        </tr>
                                        <tr>
                                            <td>Wellco Airfilter SES/W220 Additional <span>x2</span></td>
                                            <td>195 грн.</td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <th>Загальна вартість:</th>
                                            <td>390 грн.</td>
                                        </tr>
                                        <tr>
                                            <th>Доставка:</th>
                                            <td>50 грн.</td>
                                        </tr>
                                        <tr>
                                            <th>Спосіб оплати:</th>
                                            <td>При отриманні (готівка)</td>
                                        </tr>
                                        <tr className="total">
                                            <th>До сплати:</th>
                                            <td>440 грн.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="actions">
                                <a href="/">
                                    <button className="button">
                                        До магазину
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
