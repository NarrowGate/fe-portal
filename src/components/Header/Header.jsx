import styles from "./Header.module.css";
import sites from "../../data/sites";
import { useState } from "react";

const Header = () => {
  let [currentSite, setCurrentSite] = useState(null);
  let [currentOperation, setCurrentOperation] = useState(null);
  let [allOperations, setAllOperations] = useState(null);

  let changeSite = (e) => {
    setCurrentSite(e.target.value);
    let site = sites.find((site) => {
      return +site.id === +e.target.value;
    });
    setCurrentSite(site ? site : null);
    setAllOperations(site && site.operations ? site.operations : null);
  };

  let changeOperation = (e) => {
    setCurrentOperation(e.target.value);
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
        {currentSite ? (
          <div>Site: {currentSite.displayName}</div>
        ) : (
          <div>Site not selected</div>
        )}
        Header
      </div>

      {allOperations ? (
        <div className={styles.item}>
          <select onClick={changeOperation}>
            <option>Select Operations</option>
            {allOperations.map((operation) => {
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
