import { motion } from 'framer-motion';

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
        <div className="sm:max-w-xl md:max-w-2xl w-[80vw] h-14 my-10 rounded-md bg-black bg-opacity-50 flex justify-center items-center" />
      </div>
    </motion.div>
  );
}
