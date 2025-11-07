import { Element } from 'react-scroll';
import { useState } from 'react';
import FondoStudies from '../assets/bg_studies.jpg';
import CertificationsJson from '../../certifications.json';
import Card from '../components/card';

const Studies = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const totalCertifications = CertificationsJson.length;
  const visibleCertifications = CertificationsJson.slice(0, visibleCount);

  const showMore = () => setVisibleCount(totalCertifications);
  const showLess = () => setVisibleCount(2);

  return (
    <Element name="Estudios" className="px-2 flex items-center justify-center">
        <section
            className="w-full py-10 mt-16 flex flex-col items-center rounded-2xl shadow-own-hard 
            bg-cover px-1 gap-4 sm:py-20 md:py-4 md:px-2 md:w-2xl lg:w-5xl"
            style={{backgroundImage: `linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 90%)), url(${FondoStudies})`}}
        >
            <h1 
                className="h-auto w-2xs bg-gradient-own title sm:w-xl md:mb-2 lg:w-4xl"
                data-aos="fade-down-right" data-aos-duration="1500"
            >
                Formacion Academica
            </h1>
            <div 
                className='flex flex-col justify-center items-center gap-4 md:grid md:grid-cols-2 md:gap-4 
                lg:gap-6'
            >
                {
                    visibleCertifications.map((certification) => (
                        <Card key={certification.id} props={certification} />
                    ))
                }
            </div>
            {totalCertifications > 2 && (
                <button
                    onClick={visibleCount === totalCertifications ? showLess : showMore} 
                    className="mt-6 px-6 py-2 rounded-2xl bg-purple-800 text-white hover:bg-purple-600 
                    transition duration-300 tracking-wide"
                    data-aos="zoom-in"
                >
                    {visibleCount === totalCertifications ? "Ver menos" : "Ver más"}
                </button>)
            }
        </section>
    </Element>
  )
}

export default Studies