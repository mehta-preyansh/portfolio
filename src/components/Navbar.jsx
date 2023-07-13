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
      delay: 2.5,
      ease: 'easeOut'
    }
  }
}

const Navbar = ({hasAnimationPlayed}) => {
  return (
    <NavbarContainer variants={navbarVariants} initial={hasAnimationPlayed? 'visible' : 'hidden'} animate='visible'>
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
  left: 0;
  width: 20vw;
  max-width: 56px;
  bottom: 0;
  top:0;
  background-color: var(--english-violet);
  >a{
    font-size: 36px;
    height: 36px;
    text-decoration: none;
    color: var(--dark-purple);
    transition: color 0.3s ease-out;
    &.active{
      color: var(--salmon);
    }
    &:hover{
      color: #996e62;
    }
    &:nth-child(3){
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 5px;
      font-size: 42px;
      align-self: flex-start;
      width: 78px;
      height: 78px;
      border-radius: 50%;
      background-color: var(--english-violet);
    }
  }
`
export default Navbar