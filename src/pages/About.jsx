import React, { useRef } from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { AboutCard } from './components/AboutCard';

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
  const ref = useRef(null)
  const radius = 100
  const aboutMe = [{
    id: 0,
    heading: "Childhood",
    description: "Born and brought up in the pink city of Rajasthan - Jaipur. Whether immersed in imaginative play or captivated by the pages of a book, my childhood laid the foundation for a lifelong passion for learning and creativity.",
    image: ""
  }, {
    id: 1,
    heading: "Schooling",
    description: "Completed my high school journey from NIMS International school. Throughout my school years, I embraced a passion for learning, excelling academically, and actively participating in various pursuits. These experiences fostered a well-rounded approach to education.",
    image: ""
  }, {
    id: 2,
    heading: "Interests",
    description: "My diverse interests span the realms of nature, photography, video games, football, exploration, technology, and music. From capturing the beauty of the natural world to delving into the immersive realms of technology and gaming, my pursuits reflect a dynamic blend of curiosity and passion.",
    image: ""
  }, {
    id: 3,
    heading: "College",
    description: "My college journey at IIT Ropar has been a transformative experience marked by academic rigor, collaborative projects, and a vibrant campus life. The dynamic environment at IIT Ropar continues to fuel my passion for innovation and excellence, shaping me into a well-rounded individual.",
    image: ""
  }, {
    id: 4,
    heading: "Aspirations",
    description: "My aspirations revolve around a continuous pursuit of learning and exploration, both personally and professionally. As I embark on my career journey, I aspire to integrate my passions into my work. Striving to be a source of inspiration for others, I aim to contribute meaningfully to my field while maintaining a balanced and fulfilling life.",
    image: ""
  }, {
    id: 5,
    heading: "Tech Stack",
    description: "MERN, TNT, React native, Firebase, NoSQL and SQL databases, Api development, JS Backend Development, Version control, Kotlin, Python, Data science",
    image: ""
  }]
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
      <div className="about-container" ref={ref}>
        {
          aboutMe.map(aboutMeItem => {
            const angle =  Math.PI*2*((aboutMeItem.id+0.2)/6)
            const x = radius* Math.cos(angle)
            const y = radius* Math.sin(angle)
            return (
              <AboutCard key={aboutMeItem.id} constraints={ref} initialOffset={{x,y}} heading={aboutMeItem.heading} description={aboutMeItem.description} image={aboutMeItem.image}/>
            )
          })
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
    align-items: center;
    justify-content: center;
    padding: 12px 28px;
    gap: 22px;
    height: 80%;
    width: 100%;
    border-radius: 10px;
  }

`
export default About