import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Profile from './components/Profile'
import ProfileLite from '../resources/profileLite.jpg'

const Index = () => {
  return (
    <>
      <IndexContainer id='index'>
        <div className="description">
          <section className='summary'>
            <motion.div className="heading" >
              <h1>Welco<span>me</span></h1>
            </motion.div>
            <p>
              I am <b>Preyansh Mehta</b>, a front-end developer based in India. As a front-end web developer embarking on my journey, I'm thrilled to dive into the ever-evolving world of web development. I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX. I love Nature, Photography and Gaming.
            </p>
            <p>
              Feel free to explore my portfolio and get in touch to discuss how I can help bring your web development project to life. Let's create something amazing together!
            </p>
          </section>
          <div className="image-container">
            <div className="image"  style={{backgroundImage: `url(${ProfileLite})`}}>
              <Profile/>
            </div>
          </div>
        </div>
      </IndexContainer>
    </>
  )
}
const IndexContainer = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 42px;
  *::selection {
    color: var(--salmon);
    background-color: var(--silver);
  }
  .description{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 42px;
    .summary{
      word-spacing: 8px;
      width: 50%;
      line-height: 32px;
      .heading{
        color: white;
        padding: 12px 6px;
        font-size: 28px;
        span{
          color: var(--salmon);
        }
      }
      p{
        padding: 12px;
      }
    }
  .image-container{
    min-width: 296px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    .image{
      background-size: 346px;
      background-position: left;
      background-repeat: no-repeat;
      width: 256px;
      height: 256px;
      color: black;
      border-radius: 50%;
      border: 5px solid var(--pale-dogwood);
      box-shadow: 
      0 0 40px var(--silver), 
      inset 0 0 40px var(--silver);
      overflow: hidden;
      animation: floating 5s ease-in-out 0s infinite;
      transition: all 0.5s ease-in-out;
      &:hover{
        width: 266px;
        height: 266px;
      }
      @keyframes floating {
        0% { transform: translate(0px,  0px); }
        50%  { transform: translate(10px, 15px); }
        100%   { transform: translate(0px, 0px); }    
      }
    }
  }
}
`
export default Index