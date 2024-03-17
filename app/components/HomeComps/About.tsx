import * as React from 'react'
import { Button } from '@/components/ui/button'
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
    <div className="mx-5">
      <div className="max-w-4xl mx-auto">
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
          <div
            className={
              isDesktop
                ? 'hidden'
                : 'flex flex-row items-center my-auto shadow-xl rounded-lg dark:shadow-none max-h-fit'
            }
          >
            <div className="flex flex-row justify-center gap-5 items-center">
              <div className="flex justify-start font-extralight text-xl max-w-md">
                <Link
                  href={'https://github.com/BeanieMen'}
                  className="flex items-center justify-start"
                >
                  <Github />
                  <span className="ml-2">Github</span>
                </Link>
              </div>
              <div className="flex justify-start font-extralight text-xl max-w-md">
                <Link
                  href={'https://www.linkedin.com/in/aarjav-jain-b2aa23216/'}
                  className="flex items-center justify-start"
                >
                  <Linkedin />
                  <span className="ml-2">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          {isDesktop && (
            <div className="hidden md:flex flex-col items-center my-auto shadow-xl rounded-lg dark:shadow-none max-h-fit">
              <div className="flex flex-col gap-5">
                <div className="justify-start font-extralight text-xl mb-5 flex items-center max-w-md">
                  <Link
                    href={'https://github.com/BeanieMen'}
                    className="flex  justify-start "
                  >
                    <Github /> &nbsp; Github
                  </Link>
                </div>
                <div className="justify-start font-extralight text-xl flex items-center max-w-md">
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
        <div className="flex justify-center mt-10 mx-auto">
          <Link href="/about">
            <Button className="h-10 rounded-xl border bg-white text-black hover:invert hover:bg- border-stone-500">
              Know more about me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
