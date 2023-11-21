"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <span>
        <p className="mb-3">
          I'm specializing in <span className="font-medium text-[#8fce00]">Behavior-Driven Development (BDD)</span> and tailored for <span className="font-medium text-[#8fce00]">Typescript</span> developers. It seamlessly integrates into workflows, providing pre-built code for efficient test case execution—a valuable asset for precision in testing processes.
        </p>

        <p className="mb-3">
          At my core, leverages <span className="font-medium text-[#8fce00]">Artificial intelligence</span> to revolutionize test case generation, reducing manual effort for <span className="font-medium text-[#8fce00]">QA experts</span>. This innovative approach not only speeds up testing but also enhances overall software reliability and quality.
        </p>

        <p>I has been created uniting artificial intelligence and software development to create an intelligent automated testing solution.</p>

        <p><span className="font-medium text-[#8fce00]">TCS - Hackaton 2023</span> Project B</p>
      </span>

    </motion.section>
  );
}