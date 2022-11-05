import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './nav.scss';

function nav() {
    return (
        <div className='containerNav'>
            <Nav className='nav'>
                <Nav.Item>
                    <Nav.Link className='link' href="#who_i_am">¿Quien soy?</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='link' href='#knowledge'>Conocimientos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='link' href="#projets">Proyectos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='link' href="#contacts">Contactos</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
  }

  export default nav;