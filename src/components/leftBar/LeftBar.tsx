import React, { FC } from "react";
import styles from "./leftBar.module.css";

const LeftBar: FC = () => {
    return (
        <div className={styles.head}>
            <p className={styles.text}>КОЛИЧЕВСТВО ПЕРЕСАДОК</p>
            <div className={styles.component}>
                <label htmlFor="">
                    <input type="checkbox" />
                </label>
                <div>Все</div>
            </div>
            <div className={styles.component}>
                <label htmlFor="">
                    <input type="checkbox" />
                </label>
                <div>Без пересадок</div>
            </div>
            <div className={styles.component}>
                <label htmlFor="">
                    <input type="checkbox" />
                </label>
                <div>1 пересадка</div>
            </div>
            <div className={styles.component}>
                <label htmlFor="">
                    <input type="checkbox" />
                </label>
                <div>2 пересадки</div>
            </div>
            <div className={styles.component}>
                <label htmlFor="">
                    <input type="checkbox" />
                </label>
                <div>3 пересадки</div>
            </div>
        </div>
    );
};

export default LeftBar;
