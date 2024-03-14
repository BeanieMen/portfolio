import * as React from 'react';
import { motion } from "framer-motion";
import { Linkedin, Github, LinkIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const AboutMe = () => {
    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="about-me-container"
        >
            <div className="flex text-6xl justify-center mt-28">About Me</div>

            <div className='flex flex-col gap-[5vw] justify-center items-center md:flex-row mt-10'>
                <span className="mx-5 text-lg md:text-2xl max-w-lg justify-center ">
                    I&apos;m Aarjav Jain, a 14-year-old living in India. I am a self-taught programmer who loves to code and create things. <br /> <br />
                    Currently, I&apos;m diving into Next.js, Prisma, TurboRepo, and some other exciting tooling.
                </span>

                <div className="flex flex-col border items-center my-auto shadow-xl rounded-lg dark:shadow-none max-h-fit  p-5 max-w-fit ">
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
    );
};

export default AboutMe;
