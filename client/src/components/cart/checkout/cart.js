import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { removeFromCart } from '../../../redux/actions/cartActions';

export default function CheckoutCart() {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="checkout-cart">
            <div className="container-title">
                В кошику:
            </div>
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
        </div>
    )

}
