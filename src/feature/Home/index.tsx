import { useTranslation } from 'react-i18next';
import useTypeWriter from 'react-typewriter-hook';
import Navbar from './components/Navbar';
import ToggleSwitch from './components/ToggleSwitch';

function Home() {
  const { t } = useTranslation('home');
  const occupation = useTypeWriter(t('occupation'));

  return (
    <div className="w-full">
      <header className="mt-2 flex justify-between laptop:flex-col laptop:justify-start w-full">
        <ToggleSwitch className="laptop:order-last" />
        <Navbar className="laptop:order-first" />
      </header>
      <h1 className="text-orange-thema text-center roboto-serif text-3xl laptop:text-5xl">
        {occupation}
      </h1>
    </div>
  );
}

export default Home;
