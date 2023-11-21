"use client";

import Image from 'next/image'
import React from 'react'
import faceImg from "@/public/logo512.png";
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className='flex items-center justify-center'>
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <motion.div
                            className='border-[0.35rem] border-[#8fce00] overflow-hidden'
                            initial={{ borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" }}
                            animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"] }}
                            transition={{
                                repeat: Infinity, repeatType: "loop", duration: 5,
                            }}>
                            <Image src={faceImg} alt="Alejandro portrait" width={512} height={512} quality={95} priority={true}
                                className='h-80 w-80 object-cover shadow-xl' />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">
                    Hello, I'm your
                    <span className="text-[#8fce00]"> AI Tester</span>
                    , a tool that uses artificial intelligence to automatically create test cases for web based solutions.
                </span>
            </motion.h1>
        </section>
    )
}
