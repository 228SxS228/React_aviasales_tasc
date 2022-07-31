import React, {FC} from 'react';
import styles from "./navBar.module.css"

const NavBar:FC = () => {
    return(
        <div className={styles.head}>
            <div className={styles.component}>
                <a><p className={styles.text}>Самый дешевый</p></a>
            </div>
            <div className={styles.component}>
                <a><p className={styles.text}>Самый быстрый</p></a>
            </div>
            <div className={styles.component}>
                <a><p className={styles.text}>Оптимальный</p></a>
            </div>
        </div>
    );
};

export default NavBar;