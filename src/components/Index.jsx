import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const containerVariants = {
  
}

const Index = () => {
  const name = <motion.span variants={containerVariants} animate='animationTitle'>PREYAN<span style={{ color: "var(--salmon)" }}>SH</span></motion.span>
  return (
    <>
      <IndexContainer>
        {name}
      </IndexContainer>
    </>
  )
}
const IndexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  span{
    font-size: 36px;
    letter-spacing: 0.3em;
  }
`
export default Index