import React from "react";
import styles from "./project.module.css"; 

const projects = [
    { name: "Background Removal", tags: ["Image Processing", "Python"], link: "https://bit.ly/3WVA7VL", description: "The Background Removal Project automates the process of removing and replacing image backgrounds. It uses Python with Tkinter for a user-friendly interface and OpenCV for image processing. Users can select images and backgrounds, automatically save the processed images, and easily repeat the process."},
    { name: "BrdOS", tags: ["OS", "System Functions"], link: "https://github.com/jastieee/BrdOS", description: "The BrdOS project aims to deliver a seamless initiative computer environment, prioritizing both user interaction and critical system functions. This Operating System (OS) is designed to meet daily computing needs while offering a distinctive and engaging user experience."},
    { name: "EcoManila", tags: ["UI/UX", "Flutter"], link: "https://github.com/jastieee/EcoManila_Hackathon", description: "EcoManila Rewards is a Recycle Rewards App designed to address the challenges of low recycling participation, illegal dumping, lack of awareness, and limited community engagement among Manila residents. By implementing a task-based reward system, the app aims to incentivize residents to actively collect and recycle waste, contributing to environmental restoration efforts and fostering a cleaner ecosystem."}
];

const openLink = (link) => {
    window.open(link, '_blank');
};

export const Project = () => {
    const seeMore = () => {
        window.open("https://github.com/jastieee", '_blank');
    };

    return (
        <section className={styles.projects} id="project">
            <h2 className={styles.title}>Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className={styles.project}>
                    <h3>{project.name}</h3>
                    <div className={styles.tagContainer}>
                        {project.tags.map((tag, idx) => (
                            <div key={idx} className={styles.tag}>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: project.description }} />
                    <div className={styles.visit}>
                        <button onClick={() => openLink(project.link)}>Visit Project</button>
                    </div>
                </div>
            ))}
            <div className={styles.seeMore}>
                <button onClick={seeMore}>See More</button>
            </div>
        </section>
    );
};
