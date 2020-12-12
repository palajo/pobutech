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
                            Thank you!<br />
                            Your order has been received.
                        </div>
                        <div className="content">
                            <div className="order-details">
                                <table>
                                    <tbody>
                                        <tr className="product">
                                            <th>Product</th>
                                            <th>Price</th>
                                        </tr>
                                        <tr>
                                            <td>Wellco Airfilter SES/W220 Additional <span>x2</span></td>
                                            <td>195 uah</td>
                                        </tr>
                                        <tr>
                                            <td>Wellco Airfilter SES/W220 Additional <span>x2</span></td>
                                            <td>195 uah</td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <th>Subotal:</th>
                                            <td>390 uah</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping:</th>
                                            <td>50 uah</td>
                                        </tr>
                                        <tr>
                                            <th>Payment method:</th>
                                            <td>Cash on delivery</td>
                                        </tr>
                                        <tr className="total">
                                            <th>Total:</th>
                                            <td>440 uah</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="actions">
                                <a href="/">
                                    <button className="button">
                                        Back to mainpage
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
