import React, { Component } from 'react'

import ProductImage from '../../images/product-big.png';

import Minus from '../../images/icons/minus.svg';
import Plus from '../../images/icons/plus.svg';

export default class CartModal extends Component {
    render() {
        return (
            <div class="modal modal-appear cart" id="cart" tabindex="-1" role="dialog" aria-labelledby="cart" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                Cart
                            </div>
                            <div className="modal-close" data-dismiss="modal">
                                <div className="close"></div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="cart-table">
                                <table>
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
                                </table>
                            </div>
                            <div className="cart-totals">
                                <div className="cart-discount">
                                    <label>Have promo-code?</label>
                                    <div className="promo-code-block">
                                        <input type="text" className="promo-code" placeholder="Promo-code.." />
                                        <button className="promo-code-submit" type="submit">Activate</button>
                                    </div>
                                </div>
                                <div className="cart-total-button">
                                    <div className="total-price">
                                        <label>Total cost:</label>
                                        190 <span>uah</span>
                                    </div>
                                    <a href="/checkout">
                                        <button className="button">Proceed to checkout</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
