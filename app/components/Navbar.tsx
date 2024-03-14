import { motion } from 'framer-motion';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import Menu from "@/app/components/Menu"
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className='flex items-center justify-center relative'
      initial={{
        scale: 0
      }}
      animate={{
        scale: 1
      }}
      transition={{
        duration: 0.5
      }}
    >
      <div className='relative'>
        <div className='absolute inset-0 flex items-center justify-center -z-50'>
          <div className='w-full h-full bg-gradient-to-r from-blue-700 via-orange-500 to-pink-700 opacity-75 blur-3xl' />
        </div>
        <div className={`sm:max-w-3xl md:max-w-4xl w-[80vw] h-14 my-10 rounded-lg bg-white dark:bg-black bg-opacity-50 grid ${isDesktop ? 'grid-cols-3' : 'grid-cols-2'} justify-between items-center`}>
          <div>
            <Link href="/">
              <Image
                src='/avatar.jpg'
                className='rounded-full justify-start items-center mx-5'
                width={40}
                height={40}
                alt='Beanie'
              />
            </Link>
          </div>
          
          {isDesktop && (
            <div className='hidden md:flex items-center gap-x-10 justify-center'>
              <div>
                Dashboard
              </div>
              <div>
                Projects
              </div>
              <div>Blog</div>
            </div>
          )}
          <div className='flex justify-end mx-5'>
            <ModeToggle />
            <Menu></Menu>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
