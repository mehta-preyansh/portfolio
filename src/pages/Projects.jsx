import React from 'react'
import { styled } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import data from '../resources/projects.json'
import Project from './components/Project'
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'
import { debounce } from 'lodash'

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

const Projects = () => {
  const listOfProjects = data.projects;

  const [{ selectedProject }, dispatch] = useStateProvider()

  const handleNext = debounce(() => {
    let currentInd = listOfProjects.indexOf(selectedProject)
    if (currentInd == listOfProjects.length - 1) {
      const nextProject = listOfProjects[0]
      dispatch({ type: reducerCases.SET_SELECTED_PROJECT, project: nextProject })
    }
    else {
      const nextProject = listOfProjects[listOfProjects.indexOf(selectedProject) + 1]
      dispatch({ type: reducerCases.SET_SELECTED_PROJECT, project: nextProject })
    }
    document.querySelector(".thumbnail")?.classList?.remove("visible")
  }, 300)

  const handlePrev = debounce(() => {
    let currentInd = listOfProjects.indexOf(selectedProject)
    if (currentInd == 0) {
      const prevProject = listOfProjects[listOfProjects.length - 1]
      dispatch({ type: reducerCases.SET_SELECTED_PROJECT, project: prevProject })
    }
    else {
      const prevProject = listOfProjects[listOfProjects.indexOf(selectedProject) - 1]
      dispatch({ type: reducerCases.SET_SELECTED_PROJECT, project: prevProject })
    }
    document.querySelector(".thumbnail")?.classList?.remove("visible")
  }, 300)

  return (
    <ProjectsContainer id='projects'>
      <div className="heading">
        <h1>
          <motion.div variants={oddVariants} initial='hidden' animate='visible'>P</motion.div>
          <motion.div variants={evenVariants} initial='hidden' animate='visible'>r</motion.div>
          <motion.div variants={oddVariants} initial='hidden' animate='visible'>o</motion.div>
          <motion.div variants={evenVariants} initial='hidden' animate='visible'>j</motion.div>
          <motion.div variants={oddVariants} initial='hidden' animate='visible'>e</motion.div>
          <motion.div variants={evenVariants} initial='hidden' animate='visible'>c</motion.div>
          <motion.div variants={oddVariants} initial='hidden' animate='visible'>t</motion.div>
          <motion.div variants={evenVariants} initial='hidden' animate='visible'>s</motion.div>
        </h1>
      </div>
      <div className="projects-container">
        <div className="prev-btn" >
          <BiSolidLeftArrow onClick={handlePrev}></BiSolidLeftArrow>
        </div>
        <AnimatePresence mode='wait'>
          <Project
            key={selectedProject.name}
            name={selectedProject.name}
            image={selectedProject.image}
            description={selectedProject.description}
            tech={selectedProject.tech}
            github={selectedProject.git}
          />
        </AnimatePresence>
        <div className="next-btn" >
          <BiSolidRightArrow onClick={handleNext}></BiSolidRightArrow>
        </div>
      </div>
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: inherit;
  padding: 28px 42px;
  /* user-select: none; */
  *::selection{
    color: var(--salmon);
    background-color: var(--silver);
  }
  .heading{
    color: white;
    overflow: hidden;
    h1>div{
      display: inline-block;
    }
  }
  .projects-container{
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
    .prev-btn, .next-btn{
      width: 36px;
      height: 36px;
      border-radius: 50%;
      svg{
        font-size: 36px;
        filter: drop-shadow(0px 0px 8px var(--salmon));
        color: var(--salmon);
        transform: scale(0.9);
        transition: all 0.3s ease;
        &:hover{
          filter: drop-shadow(0px 0px 16px var(--salmon));
          color: var(--pale-dogwood);
          transform: scaleX(1);
          cursor: pointer;
        }
      }
        
    }
    .project{
      width: 20%;
      min-width: 200px;
      height: 150px;
    }
  }
`
export default Projects