import React, { useRef } from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { AboutCard } from './components/AboutCard';
import { data as aboutMe } from '../resources/aboutMe';

const oddVariants = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};
const evenVariants = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const About = () => {
  return (
    <AboutContainer id='about'>
      <div className="heading">
        <h1>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            A
          </motion.div>
          <motion.div
            variants={evenVariants}
            initial="hidden"
            animate="visible"
          >
            b
          </motion.div>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            o
          </motion.div>
          <motion.div
            variants={evenVariants}
            initial="hidden"
            animate="visible"
          >
            u
          </motion.div>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            t
          </motion.div>
          <motion.div
            variants={evenVariants}
            initial="hidden"
            animate="visible"
            style={{ color: "#DB8B75" }}
          >
            M
          </motion.div>
          <motion.div variants={oddVariants} initial="hidden" animate="visible" style={{ color: "#DB8B75" }}
          >
            e
          </motion.div>
        </h1>
      </div>
      <div className="about-container">
        {
          aboutMe.map(aboutMeItem => <AboutCard key={aboutMeItem.id} heading={aboutMeItem.heading} description={aboutMeItem.description} image={aboutMeItem.image} />
          )
        }
      </div>
    </AboutContainer>
  )
}
const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: inherit;
  padding: 28px 42px;
  
  /* user-select: none; */
  *::selection {
    color: var(--salmon);
    background-color: var(--silver);
  }
  >.heading {
    color: white;
    overflow: hidden;
    h1 > div {
      display: inline-block;
    }
  }
  .about-container {
    display: flex;
    overflow: hidden;
    align-items: flex-start;
    justify-content: center;
    padding: 12px 28px;
    gap: 22px;
    height: 80vh;
    width: 100%;
    border-radius: 10px;
    box-shadow: inset 0px 0px 100px 10px rgba(0,0,0,0.1);
  }

`
export default About