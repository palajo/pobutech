import Axios from 'axios';
import { PRODUCT_CATEGORY_LIST_FAIL, PRODUCT_CATEGORY_LIST_REQUEST, PRODUCT_CATEGORY_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = ({pageNumber = '', title = '', category = '', order = '', min = 0, max = 0}) => async (dispatch) => {

	dispatch({
		type: PRODUCT_LIST_REQUEST,
	});

	try { 
		const { data } = await Axios.get(`/products?pageNumber=${pageNumber}&title=${title}&category=${category}&min=${min}&max=${max}&order=${order}`)
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload: error.message
		});
	}

}

export const listProductCategories = () => async (dispatch) => {
	dispatch({
		type: PRODUCT_CATEGORY_LIST_REQUEST
	});
	try {
		const { data } = await Axios.get(`/products/categories/`);
		dispatch({ 
			type: PRODUCT_CATEGORY_LIST_SUCCESS,
			payload: data 
		});
	} catch (error) {
		dispatch({ 
			type: PRODUCT_CATEGORY_LIST_FAIL, 
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};



export const detailsProduct = (productId) => async (dispatch) => {

	dispatch({ 
		type: PRODUCT_DETAILS_REQUEST, 
		payload: productId 
	});

	try {
		const { data } = await Axios.get(`/products/${productId}`);
		dispatch({ 
			type: PRODUCT_DETAILS_SUCCESS, 
			payload: data 
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};