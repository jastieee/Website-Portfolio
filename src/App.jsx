import styles from './App.module.css';
import { Header } from './header/header';
import { NaviBar } from './navigation/naviBar';
import { About } from './about/about';
import { Project } from './project/project';
import { Contacts } from './contact/contact';

function App() {
    return<div className={styles.App}>
        <NaviBar />
        <Header />
        <About />
        <Project />
        <Contacts />
    </div>;
}

export default App
