import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

// Project Card Component
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="xs:w-[250px] w-full flex justify-center"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-4 rounded-2xl w-full shadow-lg"
      >
        {/* Image */}
        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-2 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Name & Description */}
        <div className="mt-4">
          <h3 className="text-white font-bold text-[20px] sm:text-[22px]">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[12px] sm:text-[13px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Works Section
const Works = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Heading */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px] sm:min-h-[180px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 ${styles.paddingX} text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] text-center mx-auto`}
      >
        Following projects showcase my skills and experience through real-world
        examples. Each project includes links to code repositories and live demos.
        It reflects my ability to solve complex problems, work with different
        technologies, and manage projects effectively.
      </motion.p>

      {/* Projects Grid */}
      <div className={`pb-14 ${styles.paddingX} flex flex-wrap gap-5 sm:gap-6 justify-center`}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "Works");
