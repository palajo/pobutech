import React from 'react'
import { useSelector } from 'react-redux';

export default function CheckoutTotals(props) {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <div className="checkout-confirm">
            <div className="cart-total-button">
                <div className="total-price">
                    <label>До сплати:</label>
                    <div>
                        {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} <span>грн.</span>
                    </div>
                </div>
                <button className="button" type="submit" onClick={props.handlePlaceOrder}>Замовити</button>
            </div>
        </div>
    )

}
