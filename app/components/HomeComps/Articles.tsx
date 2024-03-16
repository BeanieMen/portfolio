import * as React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Articles() {
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
    >
      <div className="flex text-4xl font-bold justify-center mt-28">
        Latest Articles
      </div>

      
    </motion.div>
  )
}

