import * as React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function AboutMe() {
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
    <div className='mx-5'>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="about-me-container max-w-4xl mx-auto"
      >
        <div className="flex text-4xl font-bold justify-center mt-28">
          About Me
        </div>

        <div className="flex flex-col gap-[10vw] justify-center items-center md:flex-row mt-10">
          <span className="text-lg md:text-2xl max-w-2xl justify-center ">
            I&apos;m Aarjav Jain, a 14-year-old living in India. I am a
            self-taught programmer who loves to code and create things. <br />{' '}
            <br />
            Currently, I&apos;m diving into Next.js, Prisma, TurboRepo, and some
            other exciting tooling.
          </span>
          {!isDesktop ? (
            <div className="flex flex-col items-center my-auto shadow-xl rounded-lg dark:shadow-none max-h-fit p-5 max-w-fit ">
              <div className="flex justify-center items-center mr-10">
                <div className="px-3 ml-3 justify-start font-extralight text-xl flex items-center max-w-sm">
                  <Link
                    href={'https://github.com/BeanieMen'}
                    className="flex  justify-start "
                  >
                    <Github /> &nbsp;
                    <span className="ml-1">github</span>
                  </Link>
                </div>
                <div className="px-3 ml-3 justify-start font-extralight text-xl flex items-center max-w-sm">
                  <Link
                    href={'https://www.linkedin.com/in/aarjav-jain-b2aa23216/'}
                    className="flex  justify-start"
                  >
                    <Linkedin /> &nbsp;
                    <span className="ml-1">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center my-auto shadow-xl rounded-lg dark:shadow-none max-h-fit  p-5 max-w-fit ">
              <div className="flex flex-col">
                <div className="px-3 ml-3 justify-start font-extralight text-xl mb-5 flex items-center max-w-md">
                  <Link
                    href={'https://github.com/BeanieMen'}
                    className="flex  justify-start "
                  >
                    <Github /> &nbsp; Github
                  </Link>
                </div>
                <div className="px-3 ml-3 justify-start font-extralight text-xl flex items-center max-w-md">
                  <Link
                    href={'https://www.linkedin.com/in/aarjav-jain-b2aa23216/'}
                    className="flex justify-start"
                  >
                    <Linkedin /> &nbsp;
                    <span className="ml-1">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
