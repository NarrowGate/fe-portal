import { createContext } from "react";
import { useReducer } from "react";
import sitesData from "../data/sites";

const initialState = {
  sites: sitesData,
  currentSite: null,
  currentOperation: null,
  allOperations: null,
};

const reducer = (state, action) => {
  if (action.type === "SET_CURRENT_SITE") {
    let site = action.payload ? action.payload : null;
    return {
      ...state,
      currentSite: site,
    };
  }

  if (action.type === "SET_ALL_OPERATIONS") {
    let operations = action.payload ? action.payload.operations : null;
    return {
      ...state,
      allOperations: operations,
    };
  }

  if (action.type === "SET_CURRENT_OPERATION") {
    let operation = action.payload;
    return {
      ...state,
      currentOperation: operation,
    };
  }

  return { state, action };
};

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  let value = useReducer(reducer, initialState);
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
