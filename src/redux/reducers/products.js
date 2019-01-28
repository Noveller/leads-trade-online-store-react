import actionTypes from '../actions/product.action';

const initialState = {
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.LOAD_ALL_SUCCESS: {

            return {...state, items: action.payload};
        }

        case actionTypes.ADD_PRODUCT: {

            const { id, content } = action.payload;

            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            }

        }
        default:
            return state;
    }
}