import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
const loaderVariants = {
  initial: {
    pathLength: 0
  },
  final: {
    pathLength: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: 'easeInOut'
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      delay:1,
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Loader = () => {

  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate('index', {replace: false})
    },1500)
  },[])

  return (
    <LoaderContainer variants={loaderVariants} exit='exit'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <motion.path d="M30 100 V20 H70 V60 H30 Z" stroke="var(--pale-dogwood)" stroke-width="2" fill="none" variants={loaderVariants} initial='initial' animate='final'/>
      </svg>
    </LoaderContainer>
  )
}
const LoaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
export default Loader