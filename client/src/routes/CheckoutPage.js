import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask';

import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../redux/actions/cartActions';

import CheckoutCart from '../components/cart/checkout/cart';

import Profile from '../assets/images/icons/profile.svg';
import Delivery from '../assets/images/icons/delivery.svg';
import Payment from '../assets/images/icons/payment.svg';
import { createOrder } from '../redux/actions/orderActions';
import { ORDER_CREATE_RESET } from '../redux/constants/orderConstants';

export default function CheckoutPage(props) {

    /* fields states */
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const [deliveryService, setDeliveryService] = useState();
    const [city, setCity] = useState();
    const [address, setAddress] = useState();
    const [department, setDepartment] = useState();

    const [payment, setPayment] = useState();


    /* calculate total values */
    const cart = useSelector((state) => state.cart);

    const toPrice = (num) => Number(num.toFixed(2));
    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
    );
    cart.shippingPrice = toPrice(0);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice;


    /* handle form submit */
    const dispatch = useDispatch();

    const orderCreate = useSelector((state) => state.orderCreate);
    const {success, order} = orderCreate;

    const submitHandler = (e) => {

        e.preventDefault();
        
    };

    useEffect(() => {
        if (success) {
            props.history.push(`/order/${order._id}`);
            dispatch(
                {
                    type: ORDER_CREATE_RESET 
                }
            )
        }
    }, [dispatch, order, props.history, success]);


    const handlePlaceOrder = () => {
        dispatch(
            saveShippingAddress({
                firstName,
                lastName,
                email,
                phone,
                deliveryService,
                city,
                address,
                department,
                payment
            })
        )
        dispatch(
            createOrder({...cart, orderItems: cart.cartItems})
        )
    }



    return (
        <div className="container" onSubmit={submitHandler}>
            <div className="row">
                <form className="checkout">
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
                                    <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="Петро.."
                                        name="firstname"

                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-block">
                                    <label>Ваше призвіще:</label>
                                    <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="Моставчук.."
                                        name="lastname"

                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="custom-form-row">
                                <div className="custom-form-block">
                                    <label>E-mail:</label>
                                    <input
                                        type="text"
                                        className="custom-input"

                                        placeholder="admin@pobutech.com.ua.."
                                        name="email"

                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-block">
                                    <label>Телефон:</label>
                                    <InputMask 
                                        className="custom-input"
                                        placeholder="+38 (000) 00 00 000.."
                                    
                                        mask="+38 (999) 99 99 999" 
                                        name="phone"

                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}

                                        required
                                    />
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
                                    <select
                                        className="custom-input custom-select"

                                        value={deliveryService}
                                        onChange={(e) => setDeliveryService(e.target.value)}
                                        
                                        required
                                    >
                                        <option value="" disabled selected>Choose delivery service..</option>
                                        <option value="novaposhta">Nova Poshta</option>
                                        <option value="justin">Justin</option>
                                        <option value="takeaway">Takeaway</option>
                                    </select>
                                </div>
                                <div className="custom-form-block">
                                    <label>Місто:</label>
                                    <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="Львів.."
                                        name="city"

                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        
                                        required
                                    />
                                </div>
                            </div>
                            <div className="custom-form-row">
                                <div className="custom-form-block">
                                    <label>Адреса:</label>
                                    <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="вул. Іл. Свенціцького 64..."
                                        name="address"

                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        
                                        required
                                    />
                                </div>
                                <div className="custom-form-block">
                                    <label>Номер відділення:</label>
                                    <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="№64"
                                        name="postoffice"

                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        
                                        required
                                    />
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
                                    <select
                                        className="custom-input custom-select"
                                        name="payment"

                                        value={payment}
                                        onChange={(e) => setPayment(e.target.value)}
                                        
                                        required
                                    >
                                        <option value="" disabled selected>Choose payment method..</option>
                                        <option value="novaposhta">PayPal</option>
                                        <option value="justin">VISA / Mastercard</option>
                                        <option value="takeaway">Cash on delivery</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="checkout-sumup">
                        <CheckoutCart />
                        <div className="checkout-confirm">
                            <div className="cart-total-button">
                                <div className="total-price">
                                    <label>До сплати:</label>
                                    <div>
                                        {cart.totalPrice} <span>грн.</span>
                                    </div>
                                </div>
                                <button className="button" type="submit" onClick={handlePlaceOrder}>Замовити</button>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}
