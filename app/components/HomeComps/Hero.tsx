import { motion, useAnimate } from "framer-motion";
import * as React from 'react'
import Image from "next/image";
import { Linkedin, Github, LinkIcon } from "lucide-react";
import Link from "next/link";
const TEXTS = [
    {
        text: 'amazing',
        className:
            'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
    },
    {
        text: 'stunning',
        className:
            'bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
    },
    {
        text: 'fantastic',
        className:
            'bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'
    },
    {
        text: 'amazing',
        className:
            'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
    }
]
export const Hero = () => {
    const [scope, animate] = useAnimate();

    React.useEffect(() => {
        animate(
            [
                [scope.current, { y: '0%' }, { duration: 0 }],
                [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
                [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
                [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }]
            ],
            {
                repeat: Number.POSITIVE_INFINITY
            }
        );
    }, [animate, scope]);

    return (
        <div className='md:my-16'>
            <div className='flex flex-col-reverse gap-[10vw] justify-center items-center md:flex-row'>
                <motion.div
                    className='flex flex-col gap-4 md:max-w-xl'
                    initial={{
                        y: 40,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    <h1 className='mx-5 bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text font-title text-2xl font-bold leading-9 text-transparent dark:from-white dark:via-white/90 dark:to-white/70 sm:text-4xl sm:leading-[3.5rem]'>
                        I&apos;m Aarjav, A Kid creating{' '}
                        <div className='inline-grid h-9 overflow-hidden sm:h-[3.5rem]'>
                            <div ref={scope}>
                                {TEXTS.map(({ text, className }, index) => (
                                    <div className={className} key={index}>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>{' '}
                        websites using Next.
                    </h1>
                    <div className='mx-5 text-sm text-muted-foreground'>
                        India • UTC/GMT +5:30
                    </div>
                </motion.div>
                <motion.div
                    className='relative sm:size-20 md:size-28'
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    <Image
                        src='/avatar.jpg'
                        className='rounded-full justify-start '
                        width={112}
                        height={112}
                        alt='Beanie'
                    />
                    <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-0 blur-2xl md:opacity-80' />
                </motion.div>
            </div>
            <motion.div
                initial={{
                    y: 40,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.5
                }}
            >
                <div className="flex justify-center mx-auto text-5xl mt-20 font-semibold">About Me</div>
                <div className="flex justify-center gap-x-40">
                    <div className="max-w-lg ml-5 text-xl sm:text-2xl items-center my-auto mt-10">
                        I'm Aarjav Jain, a 14-year-old living in India. I am a self-taught programmer who loves to code and create things. Currently, I'm diving into Next.js, Nest.js, Prisma, TurboRepo, and some other exciting tooling.
                    </div>
                    <div className="flex flex-col border shadow-xl rounded-lg dark:shadow-none max-h-fit mt-10">
                        <div>
                            <div className="p-5 px-3 justify-start text-2xl font-light flex items-center max-w-sm">
                                <LinkIcon /> &nbsp; Links
                            </div>
                            <div className="flex flex-col my-auto justify-center items-center">
                                <div className="px-3 ml-3 justify-start font-extralight text-xl flex items-center max-w-sm">
                                    <Link href={'https://github.com/BeanieMen'} className="flex place-items-center justify-center mx-auto"><Github /> &nbsp; Github</Link>
                                </div>
                                <div className="px-3 ml-3 justify-start font-extralight text-xl flex items-center max-w-sm">
                                    <Link href={'https://www.linkedin.com/in/aarjav-jain-b2aa23216/'} className="flex place-items-center justify-center mx-auto"><Linkedin /> &nbsp; LinkedIn</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
