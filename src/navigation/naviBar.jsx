import React, { useState} from "react";
import styles from "./naviBar.module.css";
import { getImageUrl } from "../utilities";

export const NaviBar = () => {
    return (
        <nav className={styles.navibar}>
            <a href="/">
                <img className={styles.logo} src={getImageUrl("logo1.png")} alt="header" />
            </a>
            <div className={styles.menu}>
                <ul className={styles.items}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
