"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "WARP.IT",
    description: "WARP.IT lets you build and deploy professional websites in under a minute with AI-powered automation.",
    image: "/images/projects/1.png",
    tag: ["Web"],
    gitUrl: "https://github.com/utkarshranaa/WARP.IT.git",
    previewUrl: "https://warpit.vercel.app/",
  },
  {
    id: 2,
    title: "MailGenie",
    description: "An AI-powered Next.js tool that effortlessly transforms prompts into professional email drafts.",
    image: "/images/projects/2.png",
    tag: ["Web"],
    gitUrl: "https://github.com/utkarshranaa/MailGenie.git",
    previewUrl: "https://mailgenie-eight.vercel.app/",
  },
  {
    id: 3,
    title: "Imagine.AI",
    description: "A responsive platform that generates AI-powered images from user prompts, built with Next.js and TypeScript",
    image: "/images/projects/3.png",
    tag: ["Web"],
    gitUrl: "https://github.com/utkarshranaa/Imagine.AI.git",
    previewUrl: "https://imagineai-ten.vercel.app/",
  },
  {
    id: 4,
    title: "GenGuess",
    description: "An AI-powered name gender prediction using NLP and machine learning models, deployed on Streamlit.🚀",
    image: "/images/projects/4.png",
    tag: ["ML"],
    gitUrl: "https://github.com/utkarshranaa/GenGuess.git",
    previewUrl: "https://genguess.streamlit.app/",
  },
  {
    id: 5,
    title: "Paraphraser.io",
    description: "Paraphraser.io is a T5 transformer-based paraphrase generation model fine-tuned on the PAWS dataset for fluent and diverse text rewriting.",
    image: "/images/projects/5.png",
    tag: [ "ML"],
    gitUrl: "https://github.com/utkarshranaa/Paraphraser.io.git",
    previewUrl: "https://github.com/utkarshranaa/Paraphraser.io.git",
  },
  
  {
    id: 6,
    title: "SkillScan.AI",
    description: "AI-powered resume classification tool that leverages NLP, TF-IDF, and machine learning models to categorize resumes into job roles with high accuracy.",
    image: "/images/projects/6.png",
    tag: [ "ML"],
    gitUrl: "https://github.com/utkarshranaa/SkillScan.AI.git",
    previewUrl: "https://skillscan-ai.streamlit.app/",
  },
  
  {
    id: 7,
    title: "NeuroScanNet",
    description: "NeuroScanNet is a deep learning-based brain tumor classification model using EfficientNetB1 and Grad-CAM for high accuracy and interpretability. It classifies MRI scans into four tumor types with 98.85% accuracy.",
    image: "/images/projects/7.png",
    tag: [ "ML"],
    gitUrl: "https://github.com/utkarshranaa/NeuroScanNet-Brain-Tumor-Identification-Using-EfficientNet-Grad-CAM.git",
    previewUrl: "https://github.com/utkarshranaa/NeuroScanNet-Brain-Tumor-Identification-Using-EfficientNet-Grad-CAM.git",
  },
  
  {
    id: 8,
    title: "RL_Stock_Trade",
    description: "A Reinforcement Learning-based stock trading model that simulates buy, sell, and hold decisions using historical stock data.",
    image: "/images/projects/8.png",
    tag: [ "ML"],
    gitUrl: "https://github.com/utkarshranaa/RL_Stock_Trading_Model.git",
    previewUrl: "https://github.com/utkarshranaa/RL_Stock_Trading_Model.git",
  },
  {
    id: 9,
    title: "Image Classification Using VGG-16 and ResNet-18 in PyTorch",
    description: "Implemented VGG-16 and ResNet-18 for image classification using PyTorch",
    image: "/images/projects/9.png",
    tag: ["ML"],
    gitUrl: "https://github.com/utkarshranaa/Image-Classification-Using-VGG-16-and-ResNet-18.git",
    previewUrl: "https://github.com/utkarshranaa/Image-Classification-Using-VGG-16-and-ResNet-18.git",
  },
  {
    id: 10,
    title: "MediVision.AI",
    description: "MediVision.AI is an AI-powered medical assistant using LLMs, speech, and vision analysis for diagnosis.",
    image: "/images/projects/10.png",
    tag: ["GenAI"],
    gitUrl: "https://github.com/utkarshranaa/MediVision.AI.git",
    previewUrl: "https://huggingface.co/spaces/utkarshranaa/MediVision.AI",
  },
  {
    id: 11,
    title: "Recap-It",
    description: "Recap-It is an AI-powered text summarization tool using DistilBART-CNN, Gradio, and Hugging Face Transformers for fast and accurate summaries.",
    image: "/images/projects/11.png",
    tag: ["GenAI"],
    gitUrl: "https://github.com/utkarshranaa/Recap-It.git",
    previewUrl: "https://huggingface.co/spaces/utkarshranaa/Recap-It",
  },
  {
    id: 12,
    title: "ItinerAI",
    description: "ItinerAI is a multiagent AI-powered travel planner that generates personalized day trip itineraries based on user preferences.",
    image: "/images/projects/12.png",
    tag: ["GenAI"],
    gitUrl: "https://github.com/utkarshranaa/ItinerAI.git",
    previewUrl: "https://huggingface.co/spaces/utkarshranaa/ItinerAI",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("Web");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="GenAI"
          isSelected={tag === "GenAI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
