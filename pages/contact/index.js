import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 py-16 sm:py-20 xl:py-32">
      <div className="container mx-auto px-4 sm:px-8 xl:px-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text and Form */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full max-w-[700px] gap-y-8"
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-6">
            Get in <span className="text-accent">touch.</span>
          </h2>
          {/* Form */}
          <motion.form
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 w-full"
          >
            {/* Input Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="input w-full py-3 px-4 rounded-md bg-white/10 text-white placeholder-white/70"
              />
              <input
                type="email"
                placeholder="Email"
                className="input w-full py-3 px-4 rounded-md bg-white/10 text-white placeholder-white/70"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input w-full py-3 px-4 rounded-md bg-white/10 text-white placeholder-white/70"
            />
            <textarea
              placeholder="Message"
              className="textarea w-full py-3 px-4 rounded-md bg-white/10 text-white placeholder-white/70 h-32 resize-none"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[200px] px-6 py-3 text-sm sm:text-base transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-full group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 translate-y-full transition-all duration-500 text-[20px]" />
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
