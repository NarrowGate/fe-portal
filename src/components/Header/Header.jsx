import { useContext } from "react";

import styles from "./Header.module.css";
import { SiteContext } from "../../contexts/site.jsx";

const Header = () => {
  let [siteState, dispatch] = useContext(SiteContext);
  let changeSite = (e) => {
    let site = siteState.sites.find((site) => {
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
          {siteState.sites.map((site) => {
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
        {siteState.currentSite ? (
          <div>Site: {siteState.currentSite.displayName}</div>
        ) : (
          <div>Site not selected</div>
        )}
        Header
      </div>

      {siteState.allOperations ? (
        <div className={styles.item}>
          <select onClick={changeOperation}>
            <option>Select Operations</option>
            {siteState.allOperations.map((operation) => {
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
