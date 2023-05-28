import './certifications.scss';
import CertificadoAuxiliarDeProgramacion from '../img/CertificadoAuxiliarDeProgramacion.jpg';
import CertificadoDeFullStack from '../img/CertificadoDeFullStack.png';
import Backend_1_Introducción_a_Java from '../img/Backend_1_Introducción_a_Java.jpeg'

function main2(){

    return (
        <div className='containerCertifications' id='certifications'>
            <h2 className='tituloCertificado'>Certificaciones</h2>
            <div id="carouselExampleIndicators" className="carousel carousel-dark slide containerCarrusel">
                <div className="carousel-inner containerCarrusel">
                <div class="carousel-item active">
                        <img src={CertificadoAuxiliarDeProgramacion} className="d-block w-100 certificacionAux" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={CertificadoDeFullStack} class="d-block w-100 certificacionFullStack" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={Backend_1_Introducción_a_Java} class="d-block w-100 certificacionIntroJava" alt="..."/>
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
    );
}

export default main2;