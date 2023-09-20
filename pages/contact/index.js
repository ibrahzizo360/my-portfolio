import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Contact = () => {
  return <div className="h-full bg-primary/30">
    <div className="container mx-auto px-32 text-center xl:text-left flex
    items-center justify-center h-full">
      {/* text and form */}
      <motion.div 
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className="flex flex-col w-full max-w-[700px]">
        {/* text */}
        <h2 className="h2 mb-8 xl:mb-0">
          Get in <span className="text-accent">touch.</span>
        </h2>
        {/* form */}
        <motion.form 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex-1 flex flex-col gap-6 w-full mx-auto">
          {/* input group */}
          <div className="flex gap-x-6 w-full">
            <input type='text' placeholder="name" className="input"/>
            <input type='text' placeholder="email" className="input"/>
          </div>
          <input type='text' placeholder="subject" className="input"/>
          <textarea placeholder="message" className="textarea"/>
          <button className="btn rounded-full border border-white/50 max-w-[170px]
          px-8 transition-all duration-300 flex items-center justify-center
          overflow-hidden hover:border-accent group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
            transition-all duration-500">
              Let's talk
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
            group-hover:-translate-y-0 group-hover:opacity-100 transition-all
            duration-300 absolute text-[22px]"/>
          </button>
        </motion.form>
      </motion.div>
    </div>
  </div>;
};

export default Contact;
