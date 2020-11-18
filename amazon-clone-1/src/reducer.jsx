export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }; //that is ,whatever the basket initially
        //had plus what item the basket decided to add to the basket
    }
};
