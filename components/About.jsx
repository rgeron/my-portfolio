import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4> */}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center gap-16 my-20"
      >
        {/* Bio section - centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full text-center"
        >
          <p className="mb-4 mx-auto max-w-3xl font-Ovo text-lg">
            I am a data science enthusiast with a strong background in
            mathematics, statistics, and quantitative finance. Currently
            pursuing a double degree at HEC Paris and ENSAE, I leverage machine
            learning and predictive modeling to solve complex business problems.
            I think analytically, work efficiently, and deliver actionable insights.
          </p>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(
              ({ icon, iconDark, title, description, programLogo }, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 list-none"
                  key={index}
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                  {programLogo && (
                    <div className="mt-3">
                      <Image
                        src={programLogo}
                        alt={`${title} Logo`}
                        className="w-16 h-auto"
                      />
                    </div>
                  )}
                </motion.li>
              )
            )}
          </motion.div> */}
        </motion.div>

        {/* Image and Tools section side by side */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 lg:gap-20">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-72 sm:w-96 rounded-3xl max-w-none self-center"
          >
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full rounded-3xl"
            />
          </motion.div>

          {/* Achievements section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1 max-w-xl"
          >
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="text-center lg:text-left mt-4 mb-8 text-gray-700 font-Ovo dark:text-white/80 text-xl"
            >
              Highlights
            </motion.h4>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 border border-gray-300 rounded-xl dark:border-white/20">
                <p className="text-3xl font-bold text-gray-800 dark:text-white">#30,000</p>
                <p className="text-sm text-gray-600 dark:text-white/70">Polymarket Global Ranking</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-xl dark:border-white/20">
                <p className="text-3xl font-bold text-gray-800 dark:text-white">#1,500</p>
                <p className="text-sm text-gray-600 dark:text-white/70">Economics Category</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-xl dark:border-white/20">
                <p className="text-3xl font-bold text-gray-800 dark:text-white">115/120</p>
                <p className="text-sm text-gray-600 dark:text-white/70">TOEFL iBT Score</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-xl dark:border-white/20">
                <p className="text-3xl font-bold text-gray-800 dark:text-white">3.9</p>
                <p className="text-sm text-gray-600 dark:text-white/70">GPA at HEC Paris</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
