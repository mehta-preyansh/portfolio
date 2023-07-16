import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Profile from '../resources/profile.jpg'

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
            <div className="image">
              <img src={Profile} alt="" />
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
      width: 256px;
      height: 256px;
      color: black;
      border-radius: 50%;
      border: 5px solid var(--pale-dogwood);
      overflow: hidden;
      box-shadow: 
        0 0 40px var(--silver), 
        inset 0 0 40px var(--silver);
      animation-name: floating;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      transition: all 0.5s ease-in-out;
      transform-origin: center;
      &:hover{
        width: 266px;
        height: 266px;
      }
      @keyframes floating {
        0% { transform: translate(0px,  0px); }
        50%  { transform: translate(10px, 15px); }
        100%   { transform: translate(0px, 0px); }    
      }
      img{
        scale: 1.2;
        transition: all 1s ease-in-out;
        width: 346px;
        object-fit: cover;
        object-position: center;
        &:hover{
          scale: 1;
        }
      }
    }
  }
}
`
export default Index