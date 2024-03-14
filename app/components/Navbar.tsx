import { motion } from 'framer-motion';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';

export default function Navbar() {
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
        <div className="sm:max-w-3xl md:max-w-4xl w-[80vw] h-[72px] my-10 rounded-lg bg-black bg-opacity-50 grid grid-cols-3 justify-between items-center">
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
          <div className='flex items-center justify-center'>
            Dashboard
          </div>
          <div className='flex justify-end mx-5'><ModeToggle /></div>
        </div>
      </div>
    </motion.div>
  );
}
