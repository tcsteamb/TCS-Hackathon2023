"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import FormComponent from '../component-forms/form-component'

export default function Projects() {
  const { ref } = useSectionInView("Test Generator", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Test Generator"</SectionHeading>
      <h2 className='mt-5'>Form Component</h2>
      <FormComponent />
    </section>
  );
}