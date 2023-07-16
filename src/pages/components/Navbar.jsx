import React from 'react'
import { styled } from 'styled-components'
import {BiHomeAlt2, BiInfoCircle, BiMailSend, BiBulb, BiCodeBlock} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const navbarVariants = {
  hidden: {
    x: -100
  },
  visible: {
    x:0,
    transition : {
      type: "spring",
      damping: 8,
      mass: 1,
      stiffness: 100,
      delay: 2.5,
      ease: 'easeOut'
    }
  }
}

const Navbar = ({hasAnimationPlayed}) => {
  return (
    <NavbarContainer variants={navbarVariants} initial=  {hasAnimationPlayed ? 'visible' : 'hidden'} animate='visible'>
      <NavLink to='skills'>
        <BiBulb/>
      </NavLink>
      <NavLink to='projects'>
        <BiCodeBlock/>
      </NavLink>
      <NavLink to='index'>
        <BiHomeAlt2/>
      </NavLink>
      <NavLink to='about'>
        <BiInfoCircle/>
      </NavLink>
      <NavLink to='contact'>
        <BiMailSend/>
      </NavLink>
    </NavbarContainer>
  )
}
const NavbarContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  left: 0px;
  width: 20vw;
  max-width: 56px;
  background-color: var(--english-violet);
  >a{
    font-size: 36px;
    width: 92px;
    height: 92px;
    text-decoration: none;
    color: var(--dark-purple);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    &.active{
      font-size: 42px;
      border-radius: 50%;
      background-color: var(--english-violet);
      color: var(--pale-dogwood);
    }
    &:not(.active):hover{
      color: var(--salmon);
    }
  }
`
export default Navbar