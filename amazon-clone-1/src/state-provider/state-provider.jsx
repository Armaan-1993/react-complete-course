import React, { createContext, useContext, UseReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    <StateProvider.Provider value={UseReducer(reducer, initialState)}>
        {children}
    </StateProvider.Provider>;
};

export const useStateValue = () => useContext(StateContext);
