"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI for Marketing",
    description: "₫500,000",
    image: "/images/projects/1.png",
    tag: ["Tất cả", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Chương trình Marketing Fundamental",
    description: "₫2,800,000",
    image: "/images/projects/2.png",
    tag: ["Tất cả", "Thông dụng"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "SÁT HẠCH KỸ NĂNG",
    description: "₫3,198,000",
    image: "/images/projects/3.png",
    tag: ["Tất cả", "Thông dụng"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Fundamental Developer",
    description: "₫18,400,000",
    image: "/images/projects/4.png",
    tag: ["Tất cả", "Thông dụng"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "AI Developer",
    description: "₫29,000,000",
    image: "/images/projects/5.png",
    tag: ["Tất cả", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Tất cả");
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
        Khóa học đang bán
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tất cả"
          isSelected={tag === "Tất cả"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Thông dụng"
          isSelected={tag === "Thông dụng"}
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
