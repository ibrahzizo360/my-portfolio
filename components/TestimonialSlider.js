// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Amina Kone',
    position: 'Customer',
    message:
      'The service was exceptional and the product exceeded my expectations. I will definitely recommend it to others!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Kwame Mensah',
    position: 'Customer',
    message:
      'A truly remarkable experience! The team was professional and attentive to all my needs.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Fatima Diallo',
    position: 'Customer',
    message:
      'I am thoroughly impressed with the quality and efficiency of the service. Thank you for making my experience memorable.',
  },
];


// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

//import swiper react componenets
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper  styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from 'next/image';

import {FaQuoteLeft} from 'react-icons/fa';

const TestimonialSlider = () => {
  return <Swiper
  navigation={true}
  pagination={{
    clickable : true,
  }}
  modules={[Navigation, Pagination]}
  className='h-[400px]'
  >
    {
      testimonialData.map((person, index) => {
        return <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full
          px-16'>
            {/* avatar, name, position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center
            items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/* avatar */}
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} className='rounded-full'/>
                </div>
                {/* name */}
                <div className='text-lg'>{person.name}</div>
                {/* position */}
                <div className='text-[12px] uppercase font-extralight
                tracking-widest'>{person.position}</div>
              </div>
            </div>
            {/* quote and message */}
            <div className='flex-1 flex flex-col justify-center
            before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
            xl:before:h-[200px] relative xl:pl-20'>
              {/* quote icon */}
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto
                md:mx-0'/>
              </div>
              {/* message */}
              <div className='xl:text-lg text-center md:text-left'>
                {person.message}
              </div>
            </div>
          </div>

        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default TestimonialSlider;

