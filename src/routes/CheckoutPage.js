import React, { Component } from 'react'

import ProductImage from '../assets/images/product-big.png'

import Minus from '../assets/images/icons/minus.svg';
import Plus from '../assets/images/icons/plus.svg';

import Profile from '../assets/images/icons/profile.svg';
import Delivery from '../assets/images/icons/delivery.svg';
import Payment from '../assets/images/icons/payment.svg';

export default class CheckoutPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="checkout" action="/thanks">
                        <section className="checkout-form">
                            <div className="container-title">
                                Checkout:
                            </div>
                            <div className="checkout-form-block">
                                <div className="checkout-form-block-title">
                                    <div className="step-number">
                                        <img src={Profile} alt="icon-profile" />
                                    </div>
                                    Personal information
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>First name:</label>
                                        <input type="text" className="custom-input" placeholder="Alexander.." />
                                    </div>
                                    <div className="custom-form-block">
                                        <label>Last name:</label>
                                        <input type="text" className="custom-input" placeholder="Alexander.." />
                                    </div>
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>E-mail address:</label>
                                        <input type="text" className="custom-input" placeholder="admin@pobutech.com.ua.." />
                                    </div>
                                    <div className="custom-form-block">
                                        <label>Phone number:</label>
                                        <input type="text" className="custom-input" placeholder="+38 (000) 00 00 000.." />
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-form-block">
                                <div className="checkout-form-block-title">
                                    <div className="step-number">
                                        <img src={Delivery} alt="icon-profile" />
                                    </div>
                                    Delivery information
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>Delivery service:</label>
                                        <select className="custom-input custom-select">
                                            <option value="" disabled selected>Choose delivery service..</option>
                                            <option value="novaposhta">Nova Poshta</option>
                                            <option value="justin">Justin</option>
                                            <option value="takeaway">Takeaway</option>
                                        </select>
                                    </div>
                                    <div className="custom-form-block">
                                        <label>Delivery city:</label>
                                        <input type="text" className="custom-input" placeholder="Lviv.." />
                                    </div>
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>Delivery address:</label>
                                        <input type="text" className="custom-input" placeholder="Il. Sventsitskogo 64 st..." />
                                    </div>
                                    <div className="custom-form-block">
                                        <label>Post office:</label>
                                        <input type="text" className="custom-input" placeholder="Post office #64" />
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-form-block">
                                <div className="checkout-form-block-title">
                                    <div className="step-number">
                                        <img src={Payment} alt="icon-profile" />
                                    </div>
                                    Payment information
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>Payment type:</label>
                                        <div className="custom-radio-block">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label for="exampleRadios1">Bank transfer (Privatbank)</label>
                                        </div>
                                        <div className="custom-radio-block">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label for="exampleRadios1">Pay on receive</label>
                                        </div>
                                        <div className="custom-radio-block">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label for="exampleRadios1">Pay in store</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="checkout-sumup">
                            <div className="checkout-cart">
                                <div className="container-title">
                                    In cart:
                                </div>
                                <div className="cart-table">
                                    <table>
                                        <tbody>
                                            <tr className="cart-product">
                                                <td className="cart-product-image">
                                                    <a href="#">
                                                        <img src={ProductImage} alt="cart-product-image" />
                                                    </a>
                                                </td>
                                                <td className="cart-product-title-code">
                                                    <div className="cart-product-title">
                                                        <a href="#">
                                                            Wellco Airfilter SES/W220
                                                            Additional
                                                        </a>
                                                    </div>
                                                    <div className="cart-product-code">
                                                        Product code: #12352
                                                    </div>
                                                </td>
                                                <td className="cart-product-quantity">
                                                    <div className="input-row">
                                                        <div className="number-button">
                                                            <img src={Minus} alt="minus"/>
                                                        </div>
                                                        <input type="number" className="quantity" min="1" max="25" step="1" placeholder="1"></input>
                                                        <div className="number-button">
                                                            <img src={Plus} alt="plus"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="cart-product-price">
                                                    95 <span>uah</span>
                                                </td>
                                                <td className="cart-product-actions">
                                                    <div className="cart-product-remove-from-cart"></div>
                                                </td>
                                            </tr>
                                            <tr className="cart-product">
                                                <td className="cart-product-image">
                                                    <a href="#">
                                                        <img src={ProductImage} alt="cart-product-image" />
                                                    </a>
                                                </td>
                                                <td className="cart-product-title-code">
                                                    <div className="cart-product-title">
                                                        <a href="#">
                                                            Wellco Airfilter SES/W220
                                                            Additional
                                                        </a>
                                                    </div>
                                                    <div className="cart-product-code">
                                                        Product code: #12352
                                                    </div>
                                                </td>
                                                <td className="cart-product-quantity">
                                                    <div className="input-row">
                                                        <div className="number-button">
                                                            <img src={Minus} alt="minus"/>
                                                        </div>
                                                        <input type="number" className="quantity" min="1" max="25" step="1" placeholder="1"></input>
                                                        <div className="number-button">
                                                            <img src={Plus} alt="plus"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="cart-product-price">
                                                    95 <span>uah</span>
                                                </td>
                                                <td className="cart-product-actions">
                                                    <div className="cart-product-remove-from-cart"></div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="checkout-confirm">
                                <div className="cart-total-button">
                                    <div className="total-price">
                                        <label>Total cost:</label>
                                        <div>
                                            190 <span>uah</span>
                                        </div>
                                    </div>
                                    <button className="button" type="submit">Confirm order</button>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        )
    }
}
