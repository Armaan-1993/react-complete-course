import React, { createContext, UseContext, useReducer } from "react";

//Prepared our data layer

export const StateContext = createContext();

//Wrap our app and provide the Data layer

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

export const userStateValue = () => UseContext(StateContext);
