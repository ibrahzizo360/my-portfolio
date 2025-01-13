import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xs:pt-20 sm:pt-28 md:pt-40 xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl xs:text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
          >
            Manifesting ideas <br /> in the{" "}
            <span className="text-accent">Digital World</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm xs:text-xs sm:text-base md:text-lg max-w-xs xs:max-w-sm sm:max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-7"
          >
            Ohene-Agyekum Addo-Agyekum is a talented and passionate designer and
            data analyst renowned for his creative prowess and technical
            expertise. With a keen interest in research, he excels at crafting
            visually stunning and functional digital experiences that are
            data-driven and user-centric. Ohene's unique ability to seamlessly
            blend design aesthetics with coding and data analysis allows him to
            bring his clients&apos; visions to life with precision and
            innovation.
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="relative w-full h-full">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-40 h-40 xs:w-48 xs:h-48 sm:w-60 sm:h-60 lg:w-[707px] lg:h-[678px] absolute -bottom-16 sm:-bottom-20 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
