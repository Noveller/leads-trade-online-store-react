import axios from 'axios'

const ADD_PRODUCT = '[Product] Add Product';
const LOAD_ALL = '[Product] Load All Products';
const LOAD_ALL_SUCCESS = '[Product] Load All Products Success';
const GET_ALL = '[Product] Get All Products';


function fetchProducts() {
    return axios.get('http://localhost:3001/products');
}

export const loadAllSuccess = content => ({
    type: LOAD_ALL_SUCCESS,
    payload: content
});

export const load_all = () => {
    return function (dispatch) {
        return fetchProducts().then(
            products => {
                return dispatch(loadAllSuccess(products.data))
            }
        )
    }
};

export const addTodo = content => ({
    type: ADD_PRODUCT,
    payload: { content }
});

export default {ADD_PRODUCT, LOAD_ALL, LOAD_ALL_SUCCESS, GET_ALL}