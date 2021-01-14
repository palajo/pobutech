import React from 'react';
import { NavLink } from 'react-router-dom'

import Minus from '../../assets/images/icons/minus.svg';
import Plus from '../../assets/images/icons/plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

export default function CartModal(props) {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="modal modal-appear cart" id="cart" tabindex="-1" role="dialog" aria-labelledby="cart" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            Кошик
                            </div>
                        <div className="modal-close" data-dismiss="modal">
                            <div className="close"></div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="cart-table">
                            <table>
                                <tbody>
                                    {
                                        cartItems.map((item, index) => (
                                            <tr className="cart-product" key={index}>
                                                <td className="cart-product-image">
                                                    <NavLink to={'/product/' + item.product}>
                                                        <img src={'/images/' + item.image} alt={item._id + '-image'} />
                                                    </NavLink>
                                                </td>
                                                <td className="cart-product-title-code">
                                                    <div className="cart-product-title">
                                                        <NavLink to={'/product/' + item.product}>
                                                            {item.title}
                                                        </NavLink>
                                                    </div>
                                                    <div className="cart-product-code">
                                                        Артикул: #{item.productcode}
                                                        </div>
                                                </td>
                                                <td className="cart-product-quantity">
                                                    <div className="input-row">
                                                        <div className="number-button" onClick={(e) =>
                                                            dispatch(
                                                                addToCart(item.product, (item.quantity - 1))
                                                            )
                                                        }>
                                                            <img src={Minus} alt="minus" />
                                                        </div>
                                                        <input 
                                                            type="number"
                                                            className="quantity"
                                                            value={item.quantity}
                                                            onChange={(e) =>
                                                                dispatch(
                                                                    addToCart(item.product, Number(e.target.value))
                                                                )
                                                            }
                                                        >
                                                        </input>
                                                        <div className="number-button" onClick={(e) =>
                                                            dispatch(
                                                                addToCart(item.product, (item.quantity + 1))
                                                            )
                                                        }>
                                                            <img src={Plus} alt="plus" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="cart-product-price">
                                                    <span className="quantity-in-cart">x{item.quantity}</span>
                                                        {item.price} <span>грн.</span>
                                                </td>
                                                <td className="cart-product-price">  
                                                    {item.price * item.quantity} <span>грн.</span>
                                                </td>
                                                <td className="cart-product-actions">
                                                    <div 
                                                        className="cart-product-remove-from-cart"
                                                        onClick={() => handleRemoveFromCart(item.product)} 
                                                    ></div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
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
                                    <label>Загальна вартість:</label>
                                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} <span>грн.</span>
                                </div>
                                <NavLink to="/checkout">
                                    <button className="button">Оформити замовлення</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
