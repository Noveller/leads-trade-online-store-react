import actionTypes from '../actions/shoping_card.action'
const initialState = {
    items: []
};

export default function (state = initialState, action) {

    switch (action.type) {

        case actionTypes.LOAD_ALL_SUCCESS: {
            return { ...state, items: action.payload }
        }

        case actionTypes.ITEM_ADDED_SUCCESSFULLY: {
            return { ...state, items: [...state.items, action.payload] }
        }

        case actionTypes.ITEM_REMOVED_SUCCESSFULLY: {

            return {
                ...state,
                items: [
                    ...state.items.filter(item => item.id !== action.payload.id)
                ]
            }

        }

        default: {
            return state;
        }

    }

}