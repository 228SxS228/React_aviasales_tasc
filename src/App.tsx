import React, { FC } from "react";
import Cards from "./components/cards/Cards";
import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navBar/NavBar";
import styles from "./App.module.css";

const App: FC = () => {
    return (
        <div>
            <div className={styles.leftBar}>
                <LeftBar />
            </div>
            <div className={styles.bar}>
                <NavBar />
            </div>
            <div className={styles.main}>
                <Cards />
            </div>
        </div>
    );
};

export default App;
