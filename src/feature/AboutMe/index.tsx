import { Element } from 'react-scroll';
import Title from '../../components/Title';

const AboutMe = () => {
  return (
    <section className="mt-24">
      <Element name="about">
        <div className="flex flex-col laptop:flex-row w-full laptop:justify-between">
          <div>
            <Title>Sobre Mim</Title>
          </div>
          <div>
            <Title>Trajetória</Title>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default AboutMe;
