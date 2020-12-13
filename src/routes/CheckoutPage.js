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
                                Оформлення замовлення:
                            </div>
                            <div className="checkout-form-block">
                                <div className="checkout-form-block-title">
                                    <div className="step-number">
                                        <img src={Profile} alt="icon-profile" />
                                    </div>
                                    Персональні дані
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>Ваше ім'я:</label>
                                        <input type="text" className="custom-input" placeholder="Петро.." />
                                    </div>
                                    <div className="custom-form-block">
                                        <label>Ваше призвіще:</label>
                                        <input type="text" className="custom-input" placeholder="Моставчук.." />
                                    </div>
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>E-mail:</label>
                                        <input type="text" className="custom-input" placeholder="admin@pobutech.com.ua.." />
                                    </div>
                                    <div className="custom-form-block">
                                        <label>Телефон:</label>
                                        <input type="text" className="custom-input" placeholder="+38 (000) 00 00 000.." />
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-form-block">
                                <div className="checkout-form-block-title">
                                    <div className="step-number">
                                        <img src={Delivery} alt="icon-profile" />
                                    </div>
                                    Доставка
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>Спосіб доставки:</label>
                                        <select className="custom-input custom-select">
                                            <option value="" disabled selected>Choose delivery service..</option>
                                            <option value="novaposhta">Nova Poshta</option>
                                            <option value="justin">Justin</option>
                                            <option value="takeaway">Takeaway</option>
                                        </select>
                                    </div>
                                    <div className="custom-form-block">
                                        <label>Місто:</label>
                                        <input type="text" className="custom-input" placeholder="Львів.." />
                                    </div>
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>Адреса:</label>
                                        <input type="text" className="custom-input" placeholder="вул. Іл. Свенціцького 64..." />
                                    </div>
                                    <div className="custom-form-block">
                                        <label>Номер відділення:</label>
                                        <input type="text" className="custom-input" placeholder="№64" />
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-form-block">
                                <div className="checkout-form-block-title">
                                    <div className="step-number">
                                        <img src={Payment} alt="icon-profile" />
                                    </div>
                                    Оплата
                                </div>
                                <div className="custom-form-row">
                                    <div className="custom-form-block">
                                        <label>Спосіб оплати:</label>
                                        <div className="custom-radio-block">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label for="exampleRadios1">Переказ на каркту (Privatbank)</label>
                                        </div>
                                        <div className="custom-radio-block">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label for="exampleRadios1">Оплата при отриманні</label>
                                        </div>
                                        <div className="custom-radio-block">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label for="exampleRadios1">Оплата в магазині</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="checkout-sumup">
                            <div className="checkout-cart">
                                <div className="container-title">
                                    В кошику:
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
                                                        Артикул: #12352
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
                                                    95 <span>грн.</span>
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
                                                        Артикул: #12352
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
                                                    95 <span>грн.</span>
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
                                        <label>До сплати:</label>
                                        <div>
                                            190 <span>грн.</span>
                                        </div>
                                    </div>
                                    <button className="button" type="submit">Замовити</button>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        )
    }
}
