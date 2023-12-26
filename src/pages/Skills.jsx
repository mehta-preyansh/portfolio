import React from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'

const oddVariants = {
  hidden: {
    y: 50
  },
  visible: {
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5
    },
    
  }
}
const evenVariants = {
  hidden: {
    y: 50
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      ease: 'easeOut',
      duration: 0.3
    }
  }
}

const Skills = () => {
  return (
    <SkillsContainer id='skills' >
      <div className="heading">
        <h1>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            S
          </motion.div>
          <motion.div
            variants={evenVariants}
            initial="hidden"
            animate="visible"
          >
            k
          </motion.div>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            i
          </motion.div>
          <motion.div
            variants={evenVariants}
            initial="hidden"
            animate="visible"
          >
            l
          </motion.div>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            l
          </motion.div>
          <motion.div
            variants={evenVariants}
            initial="hidden"
            animate="visible"
            style={{ color: "#DB8B75" }}
          >
            S
          </motion.div>
          <motion.div variants={oddVariants} initial="hidden" animate="visible" style={{ color: "#DB8B75" }}
          >
            e
          </motion.div>
          <motion.div variants={evenVariants} initial="hidden" animate="visible" style={{ color: "#DB8B75" }}
          >
            t
          </motion.div>
        </h1>
      </div>
      <div className="skill-container">
        
      </div>
    </SkillsContainer>
  )
}
const SkillsContainer = styled(motion.div)`
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
  .heading {
    color: white;
    overflow: hidden;
    h1 > div {
      display: inline-block;
    }
  }
  .skill-container {
    align-self: center;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    padding: 12px 28px;
    gap: 22px;
    height: 80%;
    width: 100%;
    border-radius: 10px;
  }
`
export default Skills