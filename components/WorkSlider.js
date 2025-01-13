import { useState } from "react";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination } from "swiper";
// Framer Motion and Image
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  const [clickCount, setClickCount] = useState({});

  const handleImageClick = (index, link) => {
    setClickCount((prevState) => {
      const newCount = (prevState[index] || 0) + 1;
      if (newCount === 2 && link) {
        window.open(link, "_blank"); // Navigate to the URL
      }
      return { ...prevState, [index]: newCount };
    });
  };

  const workSlides = {
    slides: [
      {
        images: [
          {
            title: "Game",
            path: "/Game.jpeg",
            link: "https://www.figma.com/community/file/1460435303484429065/game-ui-by-ohene",
          },
          {
            title: "Hydrasens",
            path: "/Hydrasens.jpeg",
            link: "https://www.figma.com/community/file/1457433142105833589/hydrasens",
          },
          {
            title: "SelfVibe",
            path: "/SelfVibe.jpeg",
            link: "https://www.figma.com/community/file/1457116496232200158/self-vibe",
          },
          {
            title: "Game",
            path: "/Game.jpeg",
          },
        ],
      },
    ],
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => {
              const uniqueIndex = `${slideIndex}-${imageIndex}`; // Unique key for tracking
              return (
                <div
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group h-[200px] w-full sm:h-[250px] sm:w-[300px] lg:h-[300px] lg:w-[350px] rounded-xl"
                  key={imageIndex}
                  onClick={() => handleImageClick(uniqueIndex, image.link)}
                >
                  <div className="flex flex-1 items-center justify-center relative overflow-hidden group h-full w-full">
                    <Image
                      src={image.path}
                      width={500}
                      style={{ resizeMode: "cover" }}
                      height={300}
                      alt={image.title}
                    />
                    {/* Overlay gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-l
                    from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                    group-hover:opacity-80 transition-all duration-700"
                    ></div>
                    {/* Title */}
                    <div
                      className="absolute bottom-0 translate-y-full 
                    group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"
                    >
                      <div
                        className="flex items-center gap-x-2 text-[13px]
                      tracking-[0.2em]"
                      >
                        {/* Title Part 1 */}
                        <div className="delay-100">LIVE</div>
                        {/* Title Part 2 */}
                        <div
                          className="translate-y-[500%] group-hover:translate-y-0
                        transition-all duration-300 delay-150"
                        >
                          RESOURCE
                        </div>
                        {/* Icon */}
                        <div
                          className="text-lg translate-y-[500%] 
                        group-hover:translate-y-0 transition-all duration-300 delay-200"
                        >
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
