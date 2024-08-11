import React, { useState, useEffect } from 'react';
import { getImageUrl } from "../utilities";
import styles from "./about.module.css";

const calculateAge = () => {
    const year = 2003;
    const month = 3;
    const day = 27;

    const birthDate = new Date(Date.UTC(year, month, day));
    const now = new Date();

    const ageInMilliseconds = now - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year

    return ageInYears.toString().substring(0, 15);
};

export const About = () => {
    const [age, setAge] = useState(calculateAge());

    useEffect(() => {
        const interval = setInterval(() => {
            setAge(calculateAge());
        }, 50); 

        return () => clearInterval(interval);
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = './images/Cruz_Jhustie-CV.pdf';
        link.download = 'Cruz_Jhustie-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className={styles.all} id='about'>
            <h2 className={styles.about}>About Me</h2>
            <div className={styles.img}>
                <img src={getImageUrl("mae.jpg")} alt="Me as in me" />
            </div>
            <p className={styles.paragraph}>
                I am <b>Jhustie Mae</b>, a <b>{age}</b> year old student based in Metro Manila. I am a <b>4th-year Computer Engineering</b> student passionate about <b>Data Science</b>, <b>Data Engineering</b>, and <b>Cybersecurity</b>. I enjoy learning new things to expand my knowledge. I am also an active member of tech communities like <b>GDSC PLM</b> and <b>AWSCC Haribon</b>.
                <br />
                <br />
                I have experience in <b>Cybersecurity</b>, focusing on the principles of the <b>CIA triad</b>, and in <b>Data Engineering</b>. Some of my knowledge has been applied in my subjects, such as using <b>Python for image processing</b>. Additionally, I have experience in front-end with Qt, React, and Tailwind.
            </p>
            <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleDownload}>
                        Download my Resume
                    </button>
            </div>
        </section>
    );
};
