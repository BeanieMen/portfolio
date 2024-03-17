'use client'

import { Hero } from '@/app/components/HomeComps/Hero'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import * as React from 'react'
import About from '@/app/components/HomeComps/About'
import Navbar from '@/app/components/Navbar'
import Blogs from '@/app/components/HomeComps/Blogs'
import Footer from '@/app/components/HomeComps/Footer'

function ScrollAnimation({ children }: any) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hidden: { opacity: 0, y: '15%', transition: { duration: 0.5 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function home() {
  return (
    <div>
      <Navbar />
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Blogs />
      </ScrollAnimation>
      <Footer />
    </div>
  )
}
