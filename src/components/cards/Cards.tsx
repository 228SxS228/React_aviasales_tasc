import React, { FC } from "react";
import styles from "./cards.module.css";

const Cards: FC = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.up}>
                <div className={styles.prise}>13 400 Р</div>
                <div className={styles.img}>
                    <img src="./img/s7-Airlines-logo.png" alt="s7" />
                </div>
            </div>
            <div className={styles.down}>
                <div className={styles.component}>
                    <div>
                        <p className={styles.text}>MOW - HKT</p>
                        <p className={styles.text2}>10:45 - 8:00</p>
                    </div>
                    <div>
                        <p className={styles.text}>MOW - HKT</p>
                        <p className={styles.text2}>11:20 - 00:50</p>
                    </div>
                </div>
                <div className={styles.component}>
                    <div>
                        <p className={styles.text}>В ПУТИ</p>
                        <p className={styles.text2}>21ч 15м</p>
                    </div>
                    <div>
                        <p className={styles.text}>В ПУТИ</p>
                        <p className={styles.text2}>13ч 30м</p>
                    </div>
                </div>
                <div className={styles.component}>
                    <div>
                        <p className={styles.text}>2 ПЕРЕСАДКИ</p>
                        <p className={styles.text2}>HKG, JNB</p>
                    </div>
                    <div>
                        <p className={styles.text}>1 ПЕРЕСАДКА</p>
                        <p className={styles.text2}>HKG</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
