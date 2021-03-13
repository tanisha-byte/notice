import { createContext, useReducer } from "react";

// reducer - A function which updates the state

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTICE":
      return { ...state, notices: action.payload };

    default:
      return state;
  }
};

// initial state
const initialState = {
  notices: [],
};

// create context
const Context = createContext({});

// create provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
