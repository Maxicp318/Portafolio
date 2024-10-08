import React from 'react'
import styles from './contact.module.css'
import perfil from '../../public/img/Foto_Perfil_1.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Contacto</h2>
      <div className={styles.container2}>
        <img className={styles.containerImg} alt="foto perfil" src={perfil} />
        <ul>
          <li className={styles.li}><WhatsAppIcon fontSize='medium'/>
            <a href="https://api.whatsapp.com/send?phone=3518109801" rel='noreferrer' target='blank'>351-8109801</a>
          </li>
          <li className={styles.li}><AlternateEmailIcon fontSize='medium'/>
            <a href="mailto:maxiperez283@gmail.com" rel="noreferrer" target='_blank'>maxiperez283@gmail.com</a>
          </li>
          <li className={styles.li}><LinkedInIcon fontSize='medium'/> 
            <a href="https://www.linkedin.com/in/maxi-perez-3a0953228" rel="noreferrer"
               target='_blank'>www.linkedin.com/in/maxi-perez-3a0953228</a>
          </li> 
          <li className={styles.li}><GitHubIcon fontSize='medium'/> 
            <a href="https://github.com/Maxicp318" rel="noreferrer"
               target='_blank'>https://github.com/Maxicp318</a>
          </li>                      
        </ul>
      </div>
    </div>
  )
}

export default contact
