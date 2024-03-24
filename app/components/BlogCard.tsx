import { urlFor } from '@/lib/sanity'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { simpleBlogCard } from '@/lib/interface'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
interface Props {
  post: simpleBlogCard
  className?: string
}

export default function BlogCard({ post, className }: Props) {
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
    <div className={className}>
      <Link href={'/blogs/' + post.currentSlug}>
        <motion.div
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.95 }}
          className="justify-center"
        >
          <Card className="border-0 dark:border-stone-800 dark:border w-full max-w-[414px] mx-auto relative flex flex-col bg-white dark:bg-black shadow-2xl dark:shadow-none h-[425px]">
            <div>
              <Image
                src={urlFor(post.titleImage).url()}
                alt="image"
                width={400}
                height={400}
                className="rounded-t-lg h-[250px] w-full max-w-screen object-cover flex justify-center mx-auto"
              />
            </div>
            <div className="flex flex-grow justify-center items-center">
              <CardContent className="flex flex-col items-center">
                <div>
                  <h3 className="text-xl line-clamp-2 font-bold">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                    {post.smallDescription}
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </Link>
    </div>
  )
}
