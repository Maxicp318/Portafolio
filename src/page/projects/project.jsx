import React from 'react'
import Btn from '../../components/buttons/button'
import styles from './project.module.css'

const Project = ({ img, title,description, text, web, codigo }) => {
  return (
    <div className={styles.container}>
        <img className={styles.img} src={img} alt={description}/>
        <div>
            <h2 className={styles.text}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <div className={styles.containerBtn}>
              <Btn addStyle={styles.Btn} props="Web" link={web} pagina="_blank" />
              <Btn addStyle={styles.Btn} props="Codigo" link={codigo} pagina="_blank" />
            </div>
        </div>
    </div>
  )
}

export default Project
