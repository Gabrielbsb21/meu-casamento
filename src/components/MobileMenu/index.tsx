

import { useState } from 'react';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import { FaBars, FaTimes } from 'react-icons/fa';
import CustomDrawerComponent from './CustomDrawer';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} className="text-black" aria-label='Abrir menu'>
        <FaBars size={24} />
      </IconButton>
      <CustomDrawerComponent
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <div className="flex justify-end p-4">
          <IconButton onClick={toggleDrawer(false)} className="text-white" aria-label='Fechar menu'>
            <FaTimes size={24} />
          </IconButton>
        </div>
        <nav className="h-full p-4">
          <ul className='flex flex-col gap-8 pl-5'>
            <li>
              <Link href="/" className='font-medium text-xl text-white'>Início</Link>
            </li>
            <li>
              <Link href="/#about" className='font-medium text-xl text-white'>Sobre</Link>
            </li>
            <li>
              <Link href="/#events" className='font-medium text-xl text-white'>Eventos</Link>
            </li>
            <li>
              <Link href="/#gallery" className='font-medium text-xl text-white'>Galeria</Link>
            </li>
            <li>
              <Link href="/#rsvp" className='font-medium text-xl text-white'>RSVP</Link>
            </li>
            <li>
              <Link href="/#contact" className='font-medium text-xl text-white'>Contato</Link>
            </li>
          </ul>
        </nav>
      </CustomDrawerComponent>
    </div>
  );
};

export default MobileMenu;

