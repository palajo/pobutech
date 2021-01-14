import React from 'react'
import { Formik } from 'formik';
import InputMask from 'react-input-mask';

import Profile from '../assets/images/icons/profile.svg';
import Delivery from '../assets/images/icons/delivery.svg';

export default function TestPage() {

    return (
        <div className="container">
            <div className="row">
                <Formik
                    initialValues={{ email: '', password: ''}}
                    validate={ values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                        /* and other goodies */
                    }) => (
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

                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="custom-form-row">
                                        <div className="custom-form-block">
                                            <label>
                                                E-mail:  
                                                [{errors.email && touched.email && errors.email}]
                                            </label>
                                            <input
                                                className="custom-input"
                                                placeholder="admin@pobutech.com.ua.."

                                                type="email"
                                                name="email"

                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}

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

                                            />
                                        </div>
                                        <div className="custom-form-block">
                                            <label>Номер відділення:</label>
                                            <input
                                                type="text"
                                                className="custom-input"
                                                placeholder="№64"
                                                name="postoffice"

                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="button" type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </section>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )

}
