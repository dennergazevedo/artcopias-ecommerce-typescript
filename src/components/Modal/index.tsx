/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// import { Container } from './styles';

/** Interfaces */
interface IProps {
  isToggled: boolean;
  children: any;
}

const Modal: React.FC<IProps> = ({ isToggled, children }: IProps) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: '30px',
              left: '50%',
              transform: 'translate3d(-50%, 0,0)',
              zIndex: 20,
            }}
          >
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 30 }}>
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
