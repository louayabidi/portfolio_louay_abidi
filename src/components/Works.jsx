import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="bg-tertiary rounded-2xl shadow-card hover:shadow-2xl transition-all overflow-hidden flex flex-col w-full sm:w-[360px]"
      style={{ minHeight: "auto", visibility: "visible", display: "flex" }}
    >
      {/* Image */}
      <div className="relative w-full h-[230px] bg-gray-600 flex items-center justify-center overflow-hidden flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onLoad={() => {
              setImageLoaded(true);
              console.log(`✓ Image loaded for ${name}`);
            }}
            onError={(e) => {
              console.error(`✗ Image failed to load for ${name}:`, image);
              e.target.style.display = "none";
            }}
          />
        ) : (
          <div className="text-white text-xs">No image provided</div>
        )}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-600 flex items-center justify-center text-white text-xs pointer-events-none">
            Loading...
          </div>
        )}

        <div className="absolute top-3 right-3 flex gap-2 z-10">
          {source_code_link && (
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black/70 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-black/90 transition"
              title="Source Code"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2" />
            </button>
          )}
          {live_demo_link && (
            <a
              href={live_demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs transition"
            >
              Live
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-lg mb-3">{name}</h3>
        
        <div className={`text-gray-300 text-sm mb-4 flex-grow ${expanded ? "" : "line-clamp-3"}`}>
          <p className="leading-relaxed">
            {description}
          </p>
        </div>

        {/* Expand/Collapse Button */}
        {description && description.length > 150 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-400 hover:text-blue-300 text-xs font-medium mb-4 transition text-left"
          >
            {expanded ? "Show less ▲" : "Show more ▼"}
          </button>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags && tags.map((tag, idx) => (
            <span
              key={`${name}-tag-${idx}`}
              className={`text-xs px-2 py-1 rounded-full bg-black/30 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  useEffect(() => {
    console.log("Projects loaded:", projects.length);
    if (projects.length > 0) {
      console.log("First project image:", projects[0].image);
    }
    setProjectsLoaded(true);
  }, []);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mon travail</p>
        <h2 className={styles.sectionHeadText}>Projets.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Voici une sélection de projets récents qui mettent en avant mes compétences en développement full-stack,
          intelligence artificielle et web sémantique.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 w-full" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "28px", justifyItems: "center" }}>
        {projectsLoaded && displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <ProjectCard
              key={`proj-${index}-${project.name}`}
              index={index}
              name={project.name}
              description={project.description}
              tags={project.tags}
              image={project.image}
              source_code_link={project.source_code_link}
              live_demo_link={project.live_demo_link}
            />
          ))
        ) : (
          <div className="text-white text-xl col-span-full py-10">
            {projectsLoaded ? "No projects found" : "Loading..."}
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <div className="mt-12 w-full flex justify-center">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "Voir moins" : `Voir tous les projets (${projects.length})`}
        </motion.button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");