import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from '../components/nav/nav';
import Foto_perfil from '../img/Foto_perfil.png'
import './who_I_am.scss';

function Header() {
  return (
        <header id='who_i_am'>
            <div className='container'>
            <img className="perfil" src={Foto_perfil} alt="foto_perfil"/>      
            <Button className='btn-descarga' variant="primary" href='https://drive.google.com/file/d/1pZrLZb4lVB-Ljf--09xKtLyb_Z2yHWk0/view?usp=sharing' target="_blank">Descargar Cv</Button>     
            <Nav/>
            <h1>Hola, soy Maximiliano Perez</h1>
            <p>Un estudiante de la carrera tecnico superior en
                programacion en el instituto superior Teclab. Una
                persona apasionada en el aprendisaje; Cuento con gran motivación para avanzar en mi carrera
                profesional y me destaco por mi compromiso y
                responsabilidad. 
                Mi objetivo es encontrar una empresa que me permita aplicar mis conocimientos o
                adquirir nuevos que sirvan para la productividad de la misma.
            </p>
            </div>
        </header>
    )  
}

export default Header;