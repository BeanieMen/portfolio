'use client'

import { Hero } from '@/app/components/HomeComps/Hero'
import { useAnimation, motion, useAnimate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import * as React from 'react'
import About from '@/app/components/HomeComps/About'
import Navbar from '@/app/components/Navbar'
import Articles from '@/app/components/HomeComps/Articles'
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
        visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, translateY: '5%', transition: { duration: 1 } },
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
      <Hero />
      <About />
      <Articles/>
    </div>
  )
}
