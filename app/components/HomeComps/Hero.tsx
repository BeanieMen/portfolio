import { motion, useAnimate } from 'framer-motion';
import * as React from 'react';
import Image from 'next/image';

const TEXTS = [
  {
    text: 'amazing',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]',
  },
  {
    text: 'stunning',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]',
  },
  {
    text: 'fantastic',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]',
  },
  {
    text: 'amazing',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]',
  },
];

export const Hero = () => {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        [scope.current, { y: '0%' }, { duration: 0 }],
        [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate, scope]);

  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mx-5">
      <div className="md:my-16 mx-auto max-w-4xl">
        <div
          className={`flex ${isDesktop ? 'flex-row' : 'flex-col-reverse'
            } gap-[10vw] justify-center items-center relative`}
        >
          <motion.div
            className="flex flex-col gap-4"
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="flex flex-col">
              <h1 className="bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text font-title text-2xl font-bold leading-9 text-transparent dark:from-white dark:via-white/90 dark:to-white/70 sm:text-4xl sm:leading-[3.5rem]">
                I&apos;m Aarjav, A Kid creating{' '}
                <div className="inline-grid h-9 overflow-hidden sm:h-[3.5rem]">
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
              <div className="text-sm">India • UTC/GMT +5:30</div>
            </div>
          </motion.div>
          <motion.div
            className={`${isDesktop ? 'size-24' : 'size-20'}`}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className={`relative ${isDesktop ? 'mx-5' : ''}`}>
              <Image
                src="/avatar.jpg"
                className="object-cover rounded-full mt-5"
                width={200}
                height={200}
                alt="Beanie"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-0 blur-2xl md:opacity-80 -z-50 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
