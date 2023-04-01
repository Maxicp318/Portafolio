import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import './contacts.scss';

function Contacts() {
  const [open, setOpen] = useState(false);

  return (
    <div className='containerFooter' id='contacts'>
        <>
            <Button className='containerButton'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
            Contactos
            </Button> 
            <div>
                <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                    <Card  className='containerCardContacts'>
                        <ul>
                            <li>Tel: <br/> 351-8109801</li>
                            <li>Mail: <br/> maxiperez283@gmail.com</li>
                            <li>linkedin: <br/><a href="https://www.linkedin.com/in/maxi-perez-3a0953228">www.linkedin.com/in/maxi-perez-3a0953228</a></li>                     
                        </ul>
                    </Card>
                </div>
                </Collapse>
            </div>
        </>
    </div>
  );
}

export default Contacts;
