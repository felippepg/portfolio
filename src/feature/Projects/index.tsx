import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';
import Title from '../../components/Title';

const Projects = () => {
  const { t } = useTranslation('projects');
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.element', {
      duration: 3000,
      origin: 'left',
      distance: '50px',
      delay: 3,
      opacity: 0,
      scale: 0,
      reset: true,
    });
  }, []);

  return (
    <section className="mt-80 laptop:mt-96 element">
      <Title>{t('title')}</Title>
      <h3 className="text-orange-thema text-center mt-10">{t('subtitle')}</h3>

      <div className="w-full mx-auto flex flex-col items-center text-orange-thema mt-5">
        <div className="w-full flex flex-col laptop:flex-row laptop:justify-between mb-4 p-0">
          <div className="w-full laptop:w-80 desktop:w-96 p-1 h-52 mb-5">
            <h1 className="text-orange-thema text-center pb-5">Repo Radar</h1>

            <img
              className="w-full h-full object-cover"
              width="auto"
              src="/img/repo-radar.svg"
              alt="Imagem do projeto Repo Radar"
            />
          </div>
          <div className="w-full laptop:w-80 desktop:w-96 p-1 h-52 mt-5">
            <h1 className="text-orange-thema pb-5 text-center">
              Sorteador de Amigo Secreto
            </h1>

            <img
              className="w-full h-full object-cover"
              width="auto"
              src="/img/sorteador.svg"
              alt="Imagem do projeto Sorteador"
            />
          </div>
        </div>

        <div className="w-full flex flex-col laptop:flex-row laptop:justify-between mb-4 p-0">
          <div className="w-full laptop:w-80 desktop:w-96 p-1 h-52 mt-5">
            <h1 className="text-orange-thema pb-5 text-center">
              Voll Med - API
            </h1>

            <img
              className="w-full h-full object-cover"
              width="auto"
              src="/img/vol-med.svg"
              alt="Imagem do projeto Voll Med API"
            />
          </div>
          <div className="w-full laptop:w-80 desktop:w-96 p-1 h-52 mt-10">
            <h1 className="text-orange-thema pb-5 text-center">Piresfood</h1>

            <img
              className="w-full h-full object-cover"
              width="auto"
              src="/img/piresfood.svg"
              alt="Imagem do projeto Piresfood"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;