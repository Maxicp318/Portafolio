import Badge from 'react-bootstrap/Badge';
import './knowledge.scss';

function main() {
  return (
    <div className='containerMain' id='knowledge'>
        <h2>Comocimientos</h2>
            <div className='containerLenguajes'>
                <Badge className='tags_1' bg='dark'>HTML5</Badge>{' '}
                <Badge className='tags_1' bg='dark'>CSS3</Badge>{' '}
                <Badge className='tags_1' bg='dark'>Java Script</Badge> 
                <Badge className='tags_1' bg='dark'>React.js</Badge>{' '}
                <Badge className='tags_2' bg='dark'>PHP</Badge>{' '}
                <Badge className='tags_3' bg='dark'>Laravel</Badge>{' '}
                <Badge className='tags_4' bg='dark'>MYSQL</Badge>{' '}
                <Badge className='tags_5' bg='dark'>Posgres SQL</Badge>
            </div>
    </div>
  );
}

export default main;