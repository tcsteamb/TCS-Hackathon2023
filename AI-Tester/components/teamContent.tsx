"use client";

import { motion, useAnimation } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

type team = {
    name: string;
    icon: React.ComponentType<{ size: number; style: React.CSSProperties }>;
    role: string;
  };

interface TeamContentProps {
    index: number;
    team: team;
}

export default function TeamContent({
    index,
    team
}: TeamContentProps) {
    const controls = useAnimation();

    const handleHoverStart = (index: number) => {
        controls.start({
            translateY: -50,
        });
    };

    const handleHoverEnd = (index: number) => {
        controls.start({
            translateY: 0,
        });
    };


    return (
        <motion.li
            className="border rounded-xl border-[#8fce00] px-5 py-3 bg-white/10 text-white flex items-center gap-2 group transition-opacity duration-300 ease-in-out hover:opacity-0 overflow-hidden min-w-[160px]"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            custom={index}
            onHoverStart={() => handleHoverStart(index)}
            onHoverEnd={() => handleHoverEnd(index)}
        >
            {team.icon && <team.icon size={24} style={{ color: '#ffd864' }} />}
            <div className="text-center grid place-items-center relative">
                <motion.div animate={controls}>
                    <motion.span >{team.name}</motion.span>
                    <motion.span className="absolute top-[50px] left-0 w-full h-full opacity-100" >
                        {team.role}
                    </motion.span>
                </motion.div>
            </div>
        </motion.li>
    );
}