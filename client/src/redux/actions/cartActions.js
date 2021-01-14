import Axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const addToCart = (productId, quantity) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            title: data.title,
            image: data.image,
            price: data.price,
            productcode: data.productcode,
            product: data._id,
            quantity
        }
    });
    
    alert(`${data.title} x${quantity} added to cart!`);

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId) => (dispatch, getState) => {

    dispatch({ 
        type: CART_REMOVE_ITEM,
        payload: productId
    });
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

};

export const saveShippingAddress = (data) => (dispatch) => {

    dispatch({ 
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    });

    localStorage.setItem('shippingAddress', JSON.stringify(data));

  };