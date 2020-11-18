export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    switch ((state, action)) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;
