import Badge from 'react-bootstrap/Badge';
import './technicalKnowledgeAndSoftSkills.scss';

function main() {
  return (
    <div className='containerMain' id='knowledge'>
        <h2 className='titulosContainerMain'>Comocimientos Tecnicos</h2>
            <div className='containerLenguajes'>
                <Badge className='tags_1' bg= 'bs-light-bg-subtle'>HTML5</Badge>{' '}
                <Badge className='tags_1' bg= 'bs-light-bg-subtle'>CSS3</Badge>{' '}
                <Badge className='tags_1' bg= 'bs-light-bg-subtle'>Java Script</Badge> 
                <Badge className='tags_1' bg= 'bs-light-bg-subtle'>React.js</Badge>{' '}
                <Badge className='tags_2' bg= 'bs-light-bg-subtle'>PHP</Badge>{' '}
                <Badge className='tags_3' bg= 'bs-light-bg-subtle'>Laravel</Badge>{' '}
                <Badge className='tags_4' bg= 'bs-light-bg-subtle'>MYSQL</Badge>{' '}
                <Badge className='tags_5' bg= 'bs-light-bg-subtle'>Posgres SQL</Badge>
                <Badge className='tags_6' bg= 'bs-light-bg-subtle'>Git-GitHub</Badge>
                <Badge className='tags_7' bg= 'bs-light-bg-subtle'>Java</Badge>
            </div>

            <h2 className='titulosContainerMain'>Habilidades Blandas</h2>
            <div className='containerLenguajes'>
            <Badge className='tags_1' bg= 'bs-light-bg-subtle'>Responsabilidad</Badge>{' '}
                <Badge className='tags_1' bg= 'bs-light-bg-subtle'>Actitud positiva</Badge>{' '}
                <Badge className='tags_1' bg= 'bs-light-bg-subtle'>Flexibilidad</Badge> 
                <Badge className='tags_1' bg= 'bs-light-bg-subtle'>Trabajo en equipo</Badge>{' '}
                <Badge className='tags_2' bg= 'bs-light-bg-subtle'>Organizacion</Badge>{' '}
                <Badge className='tags_3' bg= 'bs-light-bg-subtle'>Proactividad</Badge>{' '}
                <Badge className='tags_4' bg= 'bs-light-bg-subtle'>Escucha activa</Badge>{' '}
                <Badge className='tags_5' bg= 'bs-light-bg-subtle'>Empatia</Badge>
            </div>
    </div>
    
  );
}

export default main;