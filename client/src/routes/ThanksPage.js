import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { detailsOrder } from '../redux/actions/orderActions';

export default function ThanksPage(props) {

    const dispatch = useDispatch();
    const orderId = props.match.params.id;

    const orderDetails = useSelector((state) => state.orderDetails);
    const { loading, error, order } = orderDetails;

    useEffect(() => {
        dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]);

    return (
        <div className="container">
            <div className="row">
                {
                    loading ? (
                        <div>Loading..</div>
                    ) : error ? (
                        <div>{error}</div>
                    ) : (
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
                                            {
                                                order.orderItems.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.title}<span>x{item.quantity}</span></td>
                                                        <td>{item.price} грн.</td>
                                                    </tr>
                                                ))
                                            }
                                            
                                            <br />
                                            <tr>
                                                <th>Загальна вартість:</th>
                                                <td>{order.itemsPrice} грн.</td>
                                            </tr>
                                            <tr>
                                                <th>Доставка:</th>
                                                <td>{order.shippingPrice} грн.</td>
                                            </tr>
                                            <tr>
                                                <th>Спосіб оплати:</th>
                                                <td>
                                                    {
                                                        order.shippingAddress.map((shipping) => (
                                                            <>
                                                                {shipping.payment}
                                                            </>
                                                        ))
                                                    }
                                                </td>
                                            </tr>
                                            <tr className="total">
                                                <th>До сплати:</th>
                                                <td>{order.totalPrice} грн.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="actions">
                                    <NavLink to="/">
                                        <button className="button">
                                            До магазину
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </section>
                    )
                }
            </div>
        </div >
    )

}
