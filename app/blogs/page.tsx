'use client'

import { useState, useEffect } from 'react'
import { simpleBlogCard } from '@/lib/interface'
import { client } from '@/lib/sanity'
import Navbar from '@/app/components/Navbar'
import BlogCard from '@/app/components/BlogCard'
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

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `
                    *[_type == 'blog'] | order(_createdAt desc) {
                        title,
                        smallDescription,
                        "currentSlug": slug.current,
                        titleImage
                    }`

        const fetchedData = await client.fetch(query)
        setData(fetchedData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  if (!data) return
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
            Blog
          </div>
          <div className="mt-3 text-xl font-light dark:text-gray-400 text-gray-800">
            Just a blog page I started doing to learn about sanity and content
            management systems
          </div>
        </div>

        <div className="w-screen -ml-5 mt-5 h-[1px] bg-slate-800"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-5 max-w-4xl justify-center mx-auto">
          {data.map(
            (post, idx) =>
              idx % 2 === 0 && (
                <>
                  <BlogCard
                    className={`flex mx-3 ${isDesktop ? 'justify-start' : 'justify-center'}`}
                    post={post}
                  />
                  {data[idx + 1] && (
                    <BlogCard
                      className={`flex mx-3 ${isDesktop ? 'justify-start' : 'justify-center'}`}
                      post={data[idx + 1]}
                      key={idx + 1}
                    />
                  )}
                </>
              )
          )}
        </div>
      </main>
    </motion.div>
  )
}
