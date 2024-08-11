import React, { useState, useEffect } from 'react';
import styles from './header.module.css';

const anim = [
    { t: "D_", ms: 75 },
    { t: "De_", ms: 75 },
    { t: "Dev_", ms: 75 },
    { t: "Deve_", ms: 75 },
    { t: "Develo_", ms: 75 },
    { t: "Develop_", ms: 75 },
    { t: "Develope_", ms: 75 },
    { t: "Developer_", ms: 75 },
    { t: "Developer _", ms: 75 },
    { t: "Developer |_", ms: 75 },
    { t: "Developer | _", ms: 75 },
    { t: "Developer | D_", ms: 75 },
    { t: "Developer | Da_", ms: 75 },
    { t: "Developer | Dat_", ms: 75 },
    { t: "Developer | Data_", ms: 75 },
    { t: "Developer | Data _", ms: 75 },
    { t: "Developer | Data S_", ms: 75 },
    { t: "Developer | Data Sc_", ms: 75 },
    { t: "Developer | Data Sci_", ms: 75 },
    { t: "Developer | Data Scie_", ms: 75 },
    { t: "Developer | Data Scien_", ms: 75 },
    { t: "Developer | Data Scient_", ms: 75 },
    { t: "Developer | Data Scienti_", ms: 75 },
    { t: "Developer | Data Scientis_", ms: 75 },
    { t: "Developer | Data Scientist_", ms: 75 },
    { t: "Developer | Data Scientist", ms: 5000 },
    { t: "Developer | Data Scientis_", ms: 75 },
    { t: "Developer | Data Scienti_", ms: 75 },
    { t: "Developer | Data Scient_", ms: 75 },
    { t: "Developer | Data Scien_", ms: 75 },
    { t: "Developer | Data Scie_", ms: 75 },
    { t: "Developer | Data Sci_", ms: 75 },
    { t: "Developer | Data Sc_", ms: 75 },
    { t: "Developer | Data S_", ms: 75 },
    { t: "Developer | Data _", ms: 75 },
    { t: "Developer | Data_", ms: 75 },
    { t: "Developer | Dat_", ms: 75 },
    { t: "Developer | Da_", ms: 75 },
    { t: "Developer | D_", ms: 75 },
    { t: "Developer | _", ms: 75 },
    { t: "Developer |_", ms: 75 },
    { t: "Developer _", ms: 75 },
    { t: "Developer_", ms: 75 },
    { t: "Develope_", ms: 75 },
    { t: "Develop_", ms: 75 },
    { t: "Develo_", ms: 75 },
    { t: "Deve_", ms: 75 },
    { t: "Dev_", ms: 75 },
    { t: "De_", ms: 75 },
    { t: "D_", ms: 75 },
    { t: "_", ms: 75 },
    { t: "D_", ms: 75 },
    { t: "De_", ms: 75 },
    { t: "Dev_", ms: 75 },
    { t: "Deve_", ms: 75 },
    { t: "Develo_", ms: 75 },
    { t: "Develop_", ms: 75 },
    { t: "Develope_", ms: 75 },
    { t: "Developer", ms: 3000 },
    { t: "Develope_", ms: 75 },
    { t: "Develop_", ms: 75 },
    { t: "Develo_", ms: 75 },
    { t: "Deve_", ms: 75 },
    { t: "Dev_", ms: 75 },
    { t: "De_", ms: 75 },
    { t: "D_", ms: 75 },
    { t: "_", ms: 75 },
    { t: "D_", ms: 75 },
    { t: "Da_", ms: 75 },
    { t: "Dat_", ms: 75 },
    { t: "Data_", ms: 75 },
    { t: "Data _", ms: 75 },
    { t: "Data S_", ms: 75 },
    { t: "Data Sc_", ms: 75 },
    { t: "Data Sci_", ms: 75 },
    { t: "Data Scie_", ms: 75 },
    { t: "Data Scien_", ms: 75 },
    { t: "Data Scient_", ms: 75 },
    { t: "Data Scienti_", ms: 75 },
    { t: "Data Scientis_", ms: 75 },
    { t: "Data Scientist", ms: 3000 },
    { t: "Data Scientis_", ms: 75 },
    { t: "Data Scienti_", ms: 75 },
    { t: "Data Scient_", ms: 75 },
    { t: "Data Scien_", ms: 75 },
    { t: "Data Scie_", ms: 75 },
    { t: "Data Sci_", ms: 75 },
    { t: "Data Sc_", ms: 75 },
    { t: "Data S_", ms: 75 },
    { t: "Data _", ms: 75 },
    { t: "Data_", ms: 75 },
    { t: "Dat_", ms: 75 },
    { t: "Da_", ms: 75 },
    { t: "D_", ms: 75 },
    { t: "_", ms: 75 },
];

export const Header = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timeout;
        const updateText = () => {
            const step = anim[index];
            setText(step.t);
            timeout = setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % anim.length);
            }, step.ms);
        };
        updateText();
        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <section className={styles.text}>
            <div>
                <h2 className={styles.text}>{text}</h2>
                <h1 className={styles.title}>Hey, it's Jhustie</h1>
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.botBlur}></div>
        </section>
    );
};