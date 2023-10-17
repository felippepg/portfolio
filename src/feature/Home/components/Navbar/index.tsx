import { AnimatePresence, motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import Options from './Options';

const Navbar = ({ className }: any) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={className}>
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
              className="bg-gray-800 fixed top-0 left-0 h-screen w-3/4"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            >
              <Options />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden laptop:flex laptop:flex-col laptop:items-start">
        <Options />
      </div>
    </div>
  );
};

export default Navbar;
