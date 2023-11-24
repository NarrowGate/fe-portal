import styles from "./Header.module.css";
import sites from "../../data/sites";
import { useReducer } from "react";

const initialState = {
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

const Header = () => {
  let [state, dispatch] = useReducer(reducer, initialState);

  let changeSite = (e) => {
    let site = sites.find((site) => {
      return +site.id === +e.target.value;
    });
    dispatch({ type: "SET_CURRENT_SITE", payload: site });
    dispatch({ type: "SET_ALL_OPERATIONS", payload: site });
  };

  let changeOperation = (e) => {
    dispatch({ type: "SET_CURRENT_OPERATION", payload: e.target.value });
  };

  return (
    <div className={styles.headerWrap}>
      <div className={styles.item}>
        <select onChange={changeSite}>
          <option>Select site</option>
          {sites.map((site) => {
            return (
              <option key={site.id} value={site.id}>
                {site.displayName}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.item}>
        Site:
        {state.currentSite ? (
          <div>Site: {state.currentSite.displayName}</div>
        ) : (
          <div>Site not selected</div>
        )}
        Header
      </div>

      {state.allOperations ? (
        <div className={styles.item}>
          <select onClick={changeOperation}>
            <option>Select Operations</option>
            {state.allOperations.map((operation) => {
              return (
                <option key={operation.id} value={operation.id}>
                  {operation.displayName}
                </option>
              );
            })}
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
