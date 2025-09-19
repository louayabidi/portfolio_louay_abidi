import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { lessonsLearned } from "../constants";

const LessonCard = ({ index, title, description }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full max-w-[360px] mx-auto"
  >
    <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{title}</h3>
    <div className="mt-2">
      <p className="text-white text-[14px] sm:text-[16px] tracking-wider">
        {description}
      </p>
    </div>
  </motion.div>
);

const LessonsLearned = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px] sm:min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Growth Over the Years</p>
          <h2 className={styles.sectionHeadText}>What I Have Learned.</h2>
        </motion.div>
      </div>
      <div
        className={`pb-14 ${styles.paddingX} flex flex-wrap gap-6 sm:gap-8 justify-center`}
      >
        {lessonsLearned.map((lesson, index) => (
          <LessonCard key={lesson.title} index={index} {...lesson} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(LessonsLearned, "LessonsLearned");