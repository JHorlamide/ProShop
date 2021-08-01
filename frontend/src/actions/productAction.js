import * as api from '../api/productApi';
import { setAlert } from './alertAction';
import {
	GET_PRODUCTS,
	GET_PRODUCT,
	PRODUCT_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAILED,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAILED,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAILED,
} from '../constants/productConstant';

/* Get all products */
export const getProducts = (source) => {
	return async (dispatch) => {
		try {
			const { data } = await api.getProducts(source);
			dispatch({
				type: GET_PRODUCTS,
				payload: data,
			});
		} catch (error) {
			if (error.response && error.response.data.message) {
				dispatch(setAlert(error.response.data.message, 'danger'));
				dispatch({
					type: PRODUCT_FAIL,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				});
			}
		}
	};
};

/* Get single product */
export const getProduct = (productId, source) => {
	return async (dispatch) => {
		try {
			const { data } = await api.getProduct(productId, source);

			dispatch({
				type: GET_PRODUCT,
				payload: data,
			});
		} catch (error) {
			if (error.response && error.response.data.message) {
				console.log('Error from product action:', error.response);
				dispatch(setAlert(error.response.data.message, 'danger'));
				dispatch({
					type: PRODUCT_FAIL,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				});
			}
		}
	};
};

/* Delete product | Admin User Only */
export const deleteProduct = (productId) => {
	return async (dispatch, getState) => {
		try {
			dispatch({ type: PRODUCT_DELETE_REQUEST });

			const {
				userLogin: { userInfo },
			} = getState();

			const { data } = await api.deleteProduct(productId, userInfo.token);

			dispatch({ type: PRODUCT_DELETE_SUCCESS });

			dispatch(setAlert(data.message, 'success'));
		} catch (error) {
			if (error.response && error.response.data.message) {
				console.log('Error from product action:', error.response);
				dispatch(setAlert(error.response.data.message, 'danger'));
				dispatch({
					type: PRODUCT_DELETE_FAILED,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				});
			}
		}
	};
};

export const createProduct = (productDate) => {
	return async (dispatch, getState) => {
		try {
			dispatch({ type: PRODUCT_CREATE_REQUEST });
			const {
				userLogin: { userInfo },
			} = getState();

			const { data } = await api.createProduct(
				productDate,
				userInfo.token
			);

			dispatch({ type: PRODUCT_CREATE_SUCCESS, product: data });
		} catch (error) {
			if (error.response && error.response.data.message) {
				console.log('Error from product action:', error.response);
				dispatch(setAlert(error.response.data.message, 'danger'));
				dispatch({
					type: PRODUCT_CREATE_FAILED,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				});
			}
		}
	};
};

/* Update product | Admin User Only */
export const updateProduct = (productData, productId) => {
	return async (dispatch, getState) => {
		try {
			dispatch({ type: PRODUCT_UPDATE_REQUEST });

			const {
				userLogin: { userInfo },
			} = getState();

			const { data } = await api.updateProduct(
				productData,
				productId,
				userInfo.token
			);

			dispatch({ type: PRODUCT_UPDATE_SUCCESS });

			dispatch(setAlert(data.message, 'success'));
		} catch (error) {
			if (error.response && error.response.data.message) {
				dispatch(setAlert(error.response.data.message, 'danger'));
				dispatch({
					type: PRODUCT_UPDATE_FAILED,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				});
			}
		}
	};
};
