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
	PRODUCT_CREATE_RESET,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAILED,
	PRODUCT_UPDATE_RESET,
} from '../constants/productConstant';

export const productListReducer = (
	state = { products: [], product: {}, loading: true, error: {} },
	action
) => {
	const { type, payload } = action;

	switch (type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: payload,
				loading: false,
			};

		case GET_PRODUCT:
			return {
				...state,
				product: payload,
				loading: false,
			};

		case PRODUCT_FAIL:
			return {
				...state,
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
};

export const productDeleteReducer = (
	state = { loading: false, success: false, error: {} },
	action
) => {
	const { type, payload } = action;

	switch (type) {
		case PRODUCT_DELETE_REQUEST:
			return {
				...state,
				loading: true,
			};

		case PRODUCT_DELETE_SUCCESS:
			return { loading: false, success: true };

		case PRODUCT_DELETE_FAILED:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
};

export const productCreateReducer = (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case PRODUCT_CREATE_REQUEST:
			return { loading: true };
		case PRODUCT_CREATE_SUCCESS:
			return { loading: false, success: true, product: payload };
		case PRODUCT_CREATE_FAILED:
			return { loading: false, error: payload };
		case PRODUCT_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const productUpdateReducer = (state = { product: {} }, action) => {
	const { type, payload } = action;

	switch (type) {
		case PRODUCT_UPDATE_REQUEST:
			return { loading: true };
		case PRODUCT_UPDATE_SUCCESS:
			return { loading: false, success: true, product: payload };
		case PRODUCT_UPDATE_FAILED:
			return { loading: false, error: payload };
		case PRODUCT_UPDATE_RESET:
			return { product: {} };
		default:
			return state;
	}
};
