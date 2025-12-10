import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github, linkedin } from "../assets"; // Add your social icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        {/* Footer Content */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Let's stay in touch</p>
          <h2 className={styles.sectionHeadText}>Waiting for you here</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Feel free to contact me to discuss projects, collaborations, or any opportunity.
        </motion.p>

        {/* Contact Info & Social Links */}
        <div className="mt-20 flex flex-col sm:flex-row justify-between items-center gap-10">
          {/* Contact Info */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.75)}
            className="flex-1"
          >
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-secondary text-sm">EMAIL</p>
                <a
                  href="mailto:louay.abidi@esprit.tn"
                  className="text-white text-lg hover:text-blue-400 transition"
                >
                  louay.abidi@esprit.tn
                </a>
              </div>

              <div>
                <p className="text-secondary text-sm">PHONE</p>
                <a
                  href="tel:+21699256050"
                  className="text-white text-lg hover:text-blue-400 transition"
                >
                  +216 99256050
                </a>
              </div>

              <div>
                <p className="text-secondary text-sm">LOCATION</p>
                <p className="text-white text-lg">Tunis, Tunisia</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            className="flex-1"
          >
            <div className="flex gap-8 justify-start sm:justify-end">
              <a
                href="https://github.com/louayabidi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition transform hover:scale-110"
                title="GitHub"
              >
                <img src={github} alt="GitHub" className="w-8 h-8" />
              </a>

              <a
                href="https://www.linkedin.com/in/louay-abidi-742551289/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition transform hover:scale-110"
                title="LinkedIn"
              >
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 h-[1px] bg-gray-800"></div>

        {/* Bottom Footer */}
        <div className="pb-10 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-secondary text-sm">
            © {currentYear} Louay Abidi. All rights reserved.
          </p>

          <p className="text-secondary text-sm">
            Designed & Built with <span className="text-red-500">❤️</span> by Louay Abidi
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
