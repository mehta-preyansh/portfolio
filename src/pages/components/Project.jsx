import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import {BiLogoGithub} from 'react-icons/bi'
import { useStateProvider } from '../../utils/StateProvider'


const containerVariants = {
  initial: {
    opacity: 0
  },
  animate:{
    opacity: 1,
    transition: {
      duration: 0.3,
    }
  },
  exit: {
    opacity:0,
    transition: {
      duration: 0.3,
    }
  }
}

const Project = ({ name, image, tech, description, github }) => {
  const [{selectedProject}] = useStateProvider();
  // console.log(selectedProject)
  const mouse = {x: 0, y: 0};
  useEffect(()=>{
    const imageBox = document.querySelector('.thumbnail-image');
    imageBox.addEventListener('mousemove', (e)=>{ 
      mouse.x = e.clientX - e.target.getBoundingClientRect().left ; 
      mouse.y = e.clientY - e.target.getBoundingClientRect().top; 
      var posX = parseInt((mouse.x) - (imageBox.offsetWidth / 2));
      var posY = parseInt((mouse.y) - (imageBox.offsetHeight / 2));
      imageBox.style.boxShadow = `${posX/-75}px ${posY/-50}px 8px var(--dark-purple-neon)`;
    },false);
  },[])

  const handleDropDown = ()=>{
    document.querySelector(".thumbnail").classList.toggle("visible")
  }

  return (
    <ProjectContainer variants={containerVariants} initial='initial' animate='animate' exit = 'exit'>
      <div className="left-section">
        <div className="details">
          <p>
            {description}
          </p>
        </div>
        <ul className='tech'>
          {tech.map((ele,ind) => <li key={ind}>{ele}</li>)}
        </ul>
      </div>
      <div className="partition"/>
      <div className="right-section">
        <div className="thumbnail">
          <img className='thumbnail-image' src={image} alt=""/>
          <a className="link" href={github} target='_blank'>
            <BiLogoGithub  />
          </a>
        </div>
        <div className="title">
          <h1 onClick={handleDropDown}>
            {name}
          </h1>
        </div>
      </div>
    </ProjectContainer>
  )
}
const ProjectContainer = styled(motion.div)`
  height: 100%;
  display: grid;
  gap: 12px;
  grid-template-columns: 1.5fr 1px 1fr;
  align-items: center;
  width: 80%;
  text-shadow: 0px 0px 4px var(--dark-purple-neon);
  >*{
    height: 70%;
    transition: color 0.3s ease;
  }
  .left-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:hover{
      color: white;
    }
    .details{
      margin-bottom: 12px;
    }
    .tech{
      list-style-type: none;
      display: flex;
      gap: 6px;
      li{
        padding: 6px 12px;
        background-color: var(--english-violet);
        border-radius: 6px;
        width: fit-content;
        transition: all 0.2s ease;
        cursor: default;
        &:hover{
          text-shadow: none;
          color: var(--salmon);
        }
      }
    }
  }
  .partition{
    width: 0.1px;
    background-color: var(--salmon);
    box-shadow: 0px 0px 4px var(--pale-dogwood);
  }
  .right-section{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 12px;
    .thumbnail{
      width: 100%;
      padding: 8px;
      margin-bottom: 12px;
      position: relative;
      img{
        width: 100%;
        box-shadow: 0px 0px 12px var(--dark-purple-neon);
        object-fit: cover;
        border-radius: 12px;
        transition: filter 0.5s ease;
        transition: opacity 0.5s ease;
      }
      .link{
        cursor: pointer;
        opacity: 0;
        position: absolute;
        transition: all 0.5s ease;
        top:50%;
        left: -10%;
        translate: -50% -50%;
        width: 56px;
        height: 56px;
        color: white;
        svg{
          font-size: 56px;
        }
      }
      &.visible{
        &+.title>h1{
          &::before{
            transform: scaleX(1);
          }
        }
        .link{
          opacity: 1;
          left: 50%;
          &:hover{
            color: white;
            filter: drop-shadow(0px 0px 4px white);
          }
        }
      }
      &.visible img{
        opacity: 0.4;
        filter: blur(1px);
      }
    }
    .title{
      width: fit-content;
      border-radius: 24px;
      padding: 8px 12px;
      h1{
        position: relative;
        transition: all 0.3s ease;
        font-size: clamp(12px, 3vw, 24px);
        cursor: default;
        &:hover{
          cursor: pointer;
          color: white;
        }
        &::before{
          content: '';
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background-color: var(--salmon);
          transition: all 0.3s ease;
          transform: scaleX(0);
          transform-origin: center;
        }
      }
    }
  }
  
`
export default Project