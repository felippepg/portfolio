import { AnimatePresence, motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch';

function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="mt-2 flex justify-between w-full">
        <ToggleSwitch />
        <div className="laptop:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#FF9900"
            size={62}
          />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="bg-gray-800 text-orange-thema fixed top-0 left-0 h-screen w-3/4"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              >
                <ul className="flex flex-col items-center justify-center h-full">
                  <li className="my-4">Home</li>
                  <li className="my-4">Meus projetos</li>
                  <li className="my-4">Sobre mim</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}

export default Home;
