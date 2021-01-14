import React from 'react'

export default function ProductDescription(props) {

    return (
        <div className="product-information-block">
            <div className="product-title-code">
                <div className="product-title">
                    {props.title}
                </div>
                <div className="product-code">
                    Артикул: #{props.productcode}
                </div>
            </div>
            <div className="product-description">
                <p>
                    {props.description}
                </p>
            </div>
            <div className="product-price-cart">
                <div className="product-price">
                    {props.price} <span>грн.</span>
                </div>
                <div className="product-add-to-cart">
                    <button className ="button" onClick={props.handleAddToCart}>В кошик</button>
                    <input type="number" className="quantity" placeholder="1" min="1" step="1" value={props.quantity} onChange={ e => props.setQuantity(e.target.value) } />
                </div>
            </div>
        </div>
    )
}
