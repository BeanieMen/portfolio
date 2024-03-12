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
      <div className='relative min-w-10'>
        <div className='absolute min-w-10 inset-0 flex items-center justify-center -z-50 bg-gradient-to-tl w-[60vw] px-[5vw] from-blue-700 to-pink-700 via-orange-700 opacity-75 blur-3xl md:opacity-60'/>
        <div className="w-[60vw] h-14 my-10 min-w-10 rounded-md bg-black bg-opacity-50 flex justify-center items-center"/>
      </div>
    </motion.div>
  );
}
