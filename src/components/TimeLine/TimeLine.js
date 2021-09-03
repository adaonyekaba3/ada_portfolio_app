import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About me - My Journey So Far</SectionTitle>
      <SectionText>
        Hello, my name is Ada and I'm currently pursuing a masters degree in computer science with the hope of becoming a Front-end software developer.
        I spent the better part of my Bachelors in medical device development labs that focused on mechanical design control components and exploratory research at New Jersey Institute of Technology.

        I was involved in complex projects that focused on hemostasis, regenerative medicine and simulating human biological systems using embedded systems
        programming in C and  arduino circuits. Throughout development of these systems, I found software engineering to be one of the most enjoyable and rewarding
        facets of programming devices for medical advancement. It was then that I realized my greater love for software development over medical device innovation.
        I was truly changed by how I think, see the world and solve problems; and still continue in pursuit of new skills to feed my new found passions. Each day forward
        continues to be a new journey into my interests in machine learning and virtual/augmented reality. I have truly found my niche in software where
        my creativity as an inventor can truly shine, while also learning and working alongside like-minded individuals in technology. All I can say is
        "the world of computer science has truly become my oyster"!
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
            <CarouselItem
              index={index}
              id={`carousel_item-${index}`}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
            >
            <CarouselItemTitle>
              {item.year}
                <CarouselItemImg
                  width="208"
                  height="6"
                  viewBox="0 0 208 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                    fill="url(#paint0_linear)"
                    fill-opacity="0.33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-4.30412e-10"
                      y1="0.5"
                      x2="208"
                      y2="0.500295"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop
                        offset="0.79478"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </CarouselItemImg>
            </CarouselItemTitle>
            <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton 
          key={index}
          index={index}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
