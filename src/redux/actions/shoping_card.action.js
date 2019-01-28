import axios from 'axios';

const LOAD_ALL = '[Shopping Card] Load All';
const LOAD_ALL_SUCCESS = '[Shopping Card] Load All Success';
const ADD_NEW = '[Shopping Card] Add Product To Shopping Card';
const ITEM_ADDED_SUCCESSFULLY = '[Shopping Card] Item Added Successfully';
const ITEM_REMOVED_SUCCESSFULLY = '[Shopping Card] Item Removed Successfully';

function fetchAll() {
    return axios.get('http://localhost:3001/orders');
}

function addItem(productId, quantity) {
    return axios.post('http://localhost:3001/orders', {
        productId, quantity
    })
}

function removeItem(order) {
    return axios.delete(`http://localhost:3001/orders/${order.id}`);
}

export const load_all_success = content => ({
    type: LOAD_ALL_SUCCESS,
    payload: content
});

export const item_added_successfully = content => ({
    type:  ITEM_ADDED_SUCCESSFULLY,
    payload: content
});

export const item_removed_successfully = content => ({
    type:  ITEM_REMOVED_SUCCESSFULLY,
    payload: content
});

export const load_all = () => {
    return function (dispatch) {
        return fetchAll().then(result => dispatch(load_all_success(result.data)))
    }
};

export const add_item = (product, quantity = 1) => {
    return function (dispatch) {
        return addItem(product.id, quantity).then(result => dispatch(item_added_successfully(result.data)))
    }
};

export const remove_item = (order) => {
    return function (dispatch) {
        return removeItem(order).then(result => {
            dispatch(item_removed_successfully(order))
        })
    }
};

export default {
    LOAD_ALL,
    LOAD_ALL_SUCCESS,
    ADD_NEW,
    ITEM_ADDED_SUCCESSFULLY,
    ITEM_REMOVED_SUCCESSFULLY
}