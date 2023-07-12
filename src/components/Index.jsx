import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden:{
    y: '100vh'    
  },
  visible:{
    y:0
  }
}

const Index = () => {
  const name = <motion.span variants={containerVariants} initial='hidden' animate='visible'>PREYAN<span style={{ color: "var(--salmon)" }}>SH</span></motion.span>
  return (
    <IndexContainer>
      {name}
    </IndexContainer>
  )
}
const IndexContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  span{
    font-size: 36px;
  }
`
export default Index