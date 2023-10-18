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
    <section className="mt-96 element">
      <Title>{t('title')}</Title>
      <h3 className="text-orange-thema text-center mt-10">{t('subtitle')}</h3>

      <div className="w-full mx-auto flex flex-col items-center text-orange-thema">
        {/* Conteúdo da primeira coluna */}
        <div className="w-full flex flex-col laptop:flex-row laptop:justify-between mb-4 p-4">
          <div className="w-full laptop:w-80 desktop:w-96 h-52 bg-blue-300 p-4">
            1
          </div>
          <div className="w-full laptop:w-80 desktop:w-96 h-52 bg-blue-300 p-4">
            2
          </div>
        </div>

        <div className="w-full flex flex-col laptop:flex-row laptop:justify-between mb-4 p-4">
          <div className="w-full laptop:w-80 desktop:w-96 h-52 bg-blue-300 p-4">
            3
          </div>
          <div className="w-full laptop:w-80 desktop:w-96 h-52 bg-blue-300 p-4">
            4
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
