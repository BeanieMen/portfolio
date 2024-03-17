'use client'

import { useState, useEffect } from 'react'
import { simpleBlogCard } from '@/lib/interface'
import Navbar from '@/app/components/Navbar'
import { motion } from 'framer-motion'

export default function Blog() {
  const [data, setData] = useState<simpleBlogCard[] | null>(null)

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mx-5"
    >
      <main>
        <Navbar />
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-start text-5xl font-semibold mt-3">
            About
          </div>
          <div className="mt-3 text-xl font-light dark:text-gray-400 text-gray-800">
            👋 Hi there! I am Beanie.
          </div>
        </div>
        <div className="w-screen -ml-5 mt-5 h-[1px] bg-slate-800"></div>


        <div className='mx-5 mt-10'>
          <div className="text-2xl font-bold justify-between max-w-4xl mx-auto">
            WHOAMI
          </div>
        </div>
      </main>
    </motion.div>
  )
}
