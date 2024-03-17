import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'
import { simpleBlogCard } from '@/lib/interface'
import BlogCard from '../BlogCard'

export default function Blogs() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [data, setData] = useState<simpleBlogCard[] | null>(null)

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
        *[_type == "blog"] | order(_createdAt desc) [0..1] {
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
  else {
    return (
      <div className="mx-5">
        <div className=" max-w-4xl mx-auto">
          <div className="flex text-4xl font-bold justify-center mt-28">
            Latest Blogs
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-5 max-w-4xl justify-center mx-auto">
            {
              <>
                <BlogCard
                  className={`flex mx-3 ${isDesktop ? 'justify-start' : 'justify-center'}`}
                  post={data[0]}
                />
                <BlogCard
                  className={`flex mx-3 ${isDesktop ? 'justify-start' : 'justify-center'}`}
                  post={data[1]}
                />
              </>
            }
          </div>
          <div className="flex justify-center mt-10 mx-auto">
            <Link href="/blogs">
              <Button className="h-10 rounded-xl border bg-white text-black hover:invert hover:bg- border-stone-500">
                See all Blogs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
