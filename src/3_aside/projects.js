import Button from 'react-bootstrap/Button';
import projects_1 from '../img/projects_1.png'
import './projects.scss';

function aside() {
    return (
        <div className='containerProjects' id='projets'>
            <h2 className='tituloCertificado'>Proyectos</h2>
            <div id="carouselExampleIndicators" className="carousel carousel containerCarruselProjects">
                <div className="carousel-inner containerCarruselProjects">
                    <div class=/*carousel-item*/"active containerItem">
                        <img src={projects_1} className="d-block w-100 imgProjects" alt="..."/>
                        <div class="card containerCard">
                            <div class="card-body cardBody">
                                <h5 class="card-title cardTitle">App 25 Watts</h5>
                                <p class="card-text pText">Aplcacion web desarrollada en el curso de full stack, en MundosE</p>
                                <Button className='buttonCards btn' variant="primary" href='https://pin-fullstack.netlify.app' target="_blank">Ir</Button>  
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
       /* <div className='containerCard' id='projets'>
            <h2 className='tituloCertificado'>Proyectos</h2>
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
        </div>*/
    );
}

export default aside;
