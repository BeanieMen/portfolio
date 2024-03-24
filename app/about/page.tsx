'use client'
import Navbar from '@/app/components/Navbar'
import { motion } from 'framer-motion'
import Footer from '../components/HomeComps/Footer'

export default function About() {
  return (
    <main>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-5"
      >
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

        <div className="mt-10">
          <div className="text-2xl font-bold justify-between max-w-4xl mx-auto">
            WHOAMI
          </div>
        </div>
        <div className="mt-5">
          <div className="text-xl justify-between max-w-4xl mx-auto font-extralight">
            I&apos;m a freshman in highschool in India. I am 14 and learning
            Typescript, Next.JS, React.JS, Node.JS
            <br />
            <br />I started learning web development as a new years resolution
            of 2024. as I already had some experience with typescript as i
            contributed to open source, learning about react and next JS
            wasn&apos;t a big a challenge
          </div>
        </div>

        <div className="mt-20">
          <div className="text-2xl font-bold justify-between max-w-4xl mx-auto">
            ABOUT THIS SITE
          </div>
        </div>

        <div className="mt-5">
          <div className="text-xl justify-between max-w-4xl mx-auto font-extralight">
            <ul className="list-disc ml-5">
              <li className="mt-3">Framework: NextJS</li>
              <li className="mt-3">Deployment: Vercel</li>
              <li className="mt-3">Styling: Tailwind CSS</li>
              <li className="mt-3">Blog: Sanity</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <Footer />
    </main>
  )
}
