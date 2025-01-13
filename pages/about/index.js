import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMiro,
  SiR,
  SiOpencv,
  SiTensorflow,
  SiArduino,
  SiMakerbot,
} from "react-icons/si";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

// Data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Data Analysis",
        icons: [<FaPython />, <SiOpencv />, <SiTensorflow />, <SiR />],
      },
      {
        title: "Product Design",
        icons: [
          <FaFigma />,
          <SiMiro />,
          <SiFramer />,
          <SiArduino />,
          <SiMakerbot />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "UGASS Hackathon, University of Ghana - Winner", stage: "2023" },
      {
        title: "Statsbank Hackathon, Ghana Statistical Services - Finalist",
        stage: "2023",
      },
      {
        title: "7th Global Design for Education, China - Semi-finalist",
        stage: "2024",
      },
      {
        title: "African Technology Forum AI Challenge, OpenAI - Participant",
        stage: "2024",
      },
      {
        title: "Digital Public Goods Contest, UNICEF - Participant",
        stage: "2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "UX/UI Designer (Intern) - Lastmal Inc.", stage: "2021 - 2022" },
      {
        title: "UX/UI Designer - Change Promotions Limited",
        stage: "2022 - 2023",
      },
      {
        title: "Head of Data Strategies - Atempong TV",
        stage: "2022 - 2023",
      },
      { title: "Product Designer - Flexi Payments Inc.", stage: "2023 - 2024" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Google UX Design Certificate - Google Inc.", stage: "2023" },
      {
        title: "BSc. Statistics & Computer Science - University of Ghana",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-16 sm:py-20 xl:py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-y-8 gap-x-6">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 xl:px-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-4"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="text-sm sm:text-base xl:text-lg text-white/70 leading-relaxed max-w-xl mx-auto xl:mx-0 mb-6"
          >
            Ohene-Agyekum Addo-Agyekum is a talented designer and data analyst
            known for his creative and technical skills. He excels in creating
            visually stunning, data-driven, and user-centric digital
            experiences. With a passion for research, Ohene seamlessly blends
            design aesthetics with coding and data analysis, bringing his
            clients' visions to life with precision and innovation.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="flex justify-around max-w-xs sm:max-w-md mx-auto xl:mx-0 text-center gap-x-6"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold text-accent">
                <CountUp start={0} end={3} duration={5} /> +
              </div>
              <div className="text-xs uppercase">Years of Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-accent">
                <CountUp start={0} end={12} duration={5} /> +
              </div>
              <div className="text-xs uppercase">Satisfied Clients</div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="flex flex-col w-full xl:max-w-[48%] px-4"
        >
          {/* Tabs */}
          <div className="flex justify-center xl:justify-start gap-x-4 mb-4 text-sm sm:text-base xl:text-lg">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize ${
                  index === itemIndex
                    ? "text-accent border-b-2 border-accent"
                    : "text-white/70"
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          {/* Tab Content */}
          <div className="flex flex-col gap-y-4 items-center xl:items-start text-white/60">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col md:flex-row items-center gap-x-4 text-sm sm:text-base"
              >
                <div className="font-light">{item.title}</div>
                <div className="hidden md:block">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4 text-xl">{item.icons}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
