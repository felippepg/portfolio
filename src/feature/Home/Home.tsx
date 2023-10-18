import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useTypeWriter from 'react-typewriter-hook';
import Title from '../../components/Title';
import Navbar from './components/Navbar';
import TechLists from './components/TechLists';
import ToggleSwitch from './components/ToggleSwitch';

export function Home() {
  const { t } = useTranslation('home');
  const occupation = useTypeWriter(t('occupation'));
  const [isMounted, setIsMounted] = useState(false);
  const controlsImage = useAnimation();
  const controlsText = useAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      controlsImage.start({
        y: 0,
        transition: { duration: 2, ease: 'easeOut' },
      });
      controlsText.start({
        x: 0,
        transition: { duration: 2, ease: 'easeOut' },
      });
    }
  }, [isMounted, controlsImage, controlsText]);

  return (
    <div className="w-full">
      <header className="mt-5 flex justify-between laptop:flex-col laptop:justify-start w-full">
        <ToggleSwitch className="laptop:order-last" />
        <Navbar className="laptop:order-first" />
      </header>
      <Title>{occupation}</Title>
      <main className="flex flex-col laptop:flex-row laptop:justify-between justify-center items-center mt-5 laptop:mt-10">
        <motion.div initial={{ y: '-100vh' }} animate={controlsImage}>
          <img src="/img/me.svg" alt="Felippe Pires" className="max-w-none" />
        </motion.div>

        <motion.div initial={{ x: '-100vw' }} animate={controlsText}>
          <p className="text-orange-thema text-center leading-6 text-sm mt-3 laptop:text-xl font-thin desktop:max-w-2xl">
            {t('description')}
          </p>
        </motion.div>
      </main>
      <TechLists />
    </div>
  );
}
