import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import ScrollReveal from 'scrollreveal';
import Title from '../../components/Title';
const AboutMe = () => {
  const { t } = useTranslation('about');
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.element-about', {
      duration: 1000,
      origin: 'top', // Alterado para 'top'
      distance: '100px', // Ajustado para '100px'
      delay: 200,
      opacity: 0,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: true,
    });
  }, []);

  return (
    <section className="mt-24 element-about">
      <Element name="about">
        <div className="flex flex-col items-center laptop:items-start laptop:flex-row w-full laptop:justify-between">
          <div className="text-white laptop:w-5/12">
            <Title>{t('aboutMeTitle')}</Title>
            <p className="leading-7	mt-5 mb-14">{t('aboutMe')}</p>
            <Title>{t('skillsTitle')}</Title>
            <div className="flex flex-col items-center laptop:items-start laptop:justify-between laptop:flex-row mt-5 roboto-serif">
              <div className="mb-5 w-28">
                <h3 className="text-2xl font-bold">Front End</h3>
                <ul>
                  <li>React</li>
                  <li>Next</li>
                  <li>Jest</li>
                  <li>Tailwind CSS</li>
                  <li>Material UI</li>
                  <li>Styled Components</li>
                  <li>Mobile First</li>
                </ul>
              </div>
              <div className="mb-5 w-28">
                <h3 className="text-2xl font-bold">Back End</h3>
                <ul>
                  <li>Java</li>
                  <li>Spring Boot</li>
                  <li>Mysql</li>
                  <li>Docker</li>
                  <li>Microsserviços</li>
                  <li>JUnit</li>
                </ul>
              </div>
              <div className="mb-5 w-28">
                <h3 className="text-2xl font-bold">Outros</h3>
                <ul>
                  <li>UX Design</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white leading-7 mt-5 laptop:mt-2 mb-14 laptop:w-5/12">
            <Title>{t('trajectoryTitle')}</Title>
            <p className="text-orange-thema font-bold mb-3 mt-8">
              {t('midJobTitle')}
            </p>
            <p>{t('midJobDescription')}</p>
            <p className="text-orange-thema font-bold mt-3">
              {t('midJobSkills')}
            </p>

            <p className="text-orange-thema font-bold mb-3 mt-8">
              {t('juniorJobTitle')}
            </p>
            <p>{t('juniorJobDescription')}</p>
            <p className="text-orange-thema font-bold mt-3">
              {t('juniorJobSkills')}
            </p>

            <p className="text-orange-thema font-bold mb-3 mt-8">
              {t('analystJobTitle')}
            </p>
            <p>{t('analystJobDescription')}</p>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default AboutMe;
