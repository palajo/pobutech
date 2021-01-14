import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { detailsProduct } from '../redux/actions/productActions'

import ProductBenefits from '../components/product/benefits'
import ProductDescription from '../components/product/description'
import ProductImages from '../components/product/images'
import ProductRecommended from '../components/product/recommended'
import ProductSpecs from '../components/product/specs'
import Breadcrumbs from '../components/breadcrumbs'
import { addToCart } from '../redux/actions/cartActions'
import Loading from '../components/notices/loading'

export default function ProductPage(props) {

    const dispatch = useDispatch();
    const productId = props.match.params.id;

    const [quantity, setQuantity] =  useState(1); 
    
    const handleAddToCart = () => {
        dispatch(
            addToCart(productId, quantity)
        )
    }

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect( () => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    return (
        <div className="container">
            <div className="row">
                {
                    loading ? (
                        <Loading />
                    ) : error ? (
                        <div>{error}</div>
                    ) : (
                        <>                      
                            <section className="product">
                                <ProductImages 
                                    image={product.image} 
                                />
                                <ProductDescription
                                    title={product.title}
                                    productcode={product.productcode}
                                    description={product.description}
                                    price={product.price}
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                    handleAddToCart={handleAddToCart}
                                />
                                <ProductBenefits />
                            </section>
                            <section className="specs-recommended">
                                <ProductSpecs />
                                <ProductRecommended />
                            </section>
                        </>
                    )
                }
            </div>
        </div>
    )
}
