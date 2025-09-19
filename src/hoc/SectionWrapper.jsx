import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} w-full max-w-full mx-auto relative z-0`}
      >
       
        <span id={idName} className="block absolute top-0"></span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
