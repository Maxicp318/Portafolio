import { useState } from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

function Nav(){
    const [isOpen, setIsOpen] = useState(false);

    const menuToggle = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <button className={`hamburger hamburger--vortex ${styles.btn}`} onClick={menuToggle} type="button">
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>
            <aside className={`${styles.containerAside} ${isOpen? `${styles.isActive}`:''}`} >
                <ul className={styles.containerUl}>
                    <li className={styles.containerLi}>
                        <Link className={styles.containerLink} onClick={menuToggle} to={'/'}>¿Quien Soy?</Link>
                    </li>
                    <li className={styles.containerLi}>
                        <Link className={styles.containerLink} onClick={menuToggle} to={'/knowledge'}>Conocimientos</Link>
                    </li>
                    <li className={styles.containerLi}>
                        <Link className={styles.containerLink} onClick={menuToggle} to={'/certifications'}>Certificaciones</Link>
                    </li>
                    <li className={styles.containerLi}>
                        <Link className={styles.containerLink} onClick={menuToggle} to={'/projects'}>Proyectos</Link>
                    </li>
                    <li className={styles.containerLi}>
                        <Link className={styles.containerLink} onClick={menuToggle} to={'/contacts'}>Contactos</Link>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Nav;