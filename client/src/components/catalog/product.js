import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { addToCart } from '../../redux/actions/cartActions'

export default function ProductBlock(props) {
    const dispatch = useDispatch();

    return (
         <div className="product-block" key={props._id}>
            <div className="product-image">
                <NavLink to={`/product/${props._id}`}>
                    <img src={'/images/' + props.image} alt={props.image + '-image'} />
                </NavLink>
            </div>
            <div className="product-title-code">
                <div className="product-title">
                    <NavLink to={`/product/${props._id}`}>
                        {props.title}
                    </NavLink>
                </div>
                <div className="product-code">
                    Артикул: #{props.productcode}
                </div>
            </div>
            <div className="product-row">
                <div className="product-price">
                    {props.price} <span>грн.</span>
                </div>
                <NavLink to="#">
                    <div className="product-add-to-cart" onClick={
                        (e) =>
                        dispatch(
                            addToCart(props._id, 1)
                        )
                    }></div>
                </NavLink>
            </div>
        </div>
    )
}
