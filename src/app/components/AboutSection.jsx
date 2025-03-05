"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>Languages:</strong> <em>Python, C++, Typescript, SQL(Postgres), Javascript and HTML/CSS.</em></li>
        <li><strong>Frameworks:</strong> <em>Next.js, React, Node.js, Flask, FastAPI, Express.js and Django.</em></li>
        <li><strong>Libraries:</strong> <em>TensorFlow, PyTorch, NumPy, Pandas, T5, Bert, Scikit-Learn, Hugging Face and Matplotlib</em></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>M.Sc of Computer Science:</strong><em> State University of New York at Buffalo</em></li>
        <li><strong>B.Sc of Computer Science:</strong><em> Manipal University Jaipur</em></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I’m Utkarsh Rana, a Master’s student passionate about building innovative AI-driven full stack solutions.
          </p>

          <ul className="list-disc pl-6 text-base lg:text-lg text-[#ADB7BE]">
            <li>👉I Craft full stack platforms with modern stacks like Next.js, TypeScript, Javascript and Convex for speed and scalability.</li>
            <li>👉I’ve built ML pipelines bringing AI out of notebooks and into real-world solutions.</li>
            <li>👉My passion for Generative AI led me to create tools that combine upcoming technologies with my knowledge for real-world solutions</li>
          </ul>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
