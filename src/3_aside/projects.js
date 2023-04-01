import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projects_1 from '../img/projects_1.png'
import './projects.scss';

function aside() {
    return (
        <div className='containerCard' id='projets'>
            <Card className='cards'>
                <Card.Img variant="top" src={projects_1} />
                <Card.Body className='cardBody'>
                    <Card.Title className='cardTitle'>App 25 Watts</Card.Title>
                    <Card.Text className='cardText'>
                        Aplcacion web desarrollada en el curso de full stack, en MundosE
                    </Card.Text>
                    <Button className='buttonCards' variant="primary" href='https://pin-fullstack.netlify.app' target="_blank">Ir</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default aside;
