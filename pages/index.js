
import Avatar from '../components/Avatar';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn'
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';


const Home = () => {
  return (
  <div className="bg-primary/60 h-full">
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30
    to-black/10'>
      <div className="text-center flex flex-col justify-center xl:pt-40
      xl:text-left h-full container mx-auto">
      {/* title */}
      <motion.h1 
      variants = {fadeIn('down', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className="h1">
        Manifesting ideas <br /> in the {' '}
        <span className='text-accent'>Digital World</span>
      </motion.h1>
      {/* subtitle */}
      <motion.p 
        variants = {fadeIn('down', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-7">
        I'm an adept full-stack developer and technical writer based in Ghana, committed to creating exceptional digital experiences.
        Proficient in simplifying technical concepts for diverse audiences, I excel in both front-end and back-end development, guaranteeing efficient and user-friendly projects.
        My focus is on delivering digital excellence and translating ideas into engaging web applications.
      </motion.p>
      {/* button */}
      <div className="flex justify-center xl:hidden relative">
        <ProjectsBtn  />
      </div>
      <motion.div variants = {fadeIn('down', 0.4)}
       initial='hidden'
       animate='show'
       exit='hidden'
       className='hidden xl:flex'>
        <ProjectsBtn />
      </motion.div>
      </div>
    </div>
    {/* image */}
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      {/* bg img */}
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
       xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
      </div>
      {/* particles */}
      <ParticlesContainer />
      {/* avatar img */}
      <motion.div 
      variants = {fadeIn('up', 0.5)}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{duration: 1, ease: 'easeInOut'}}
      className='w-full h-full max-w-[707px] max-h-[678px] absolute -bottom-32
       lg:bottom-0 lg:right-[8%]'>
        <Avatar />
      </motion.div>
    </div> 
  </div>
  );
};

export default Home;
