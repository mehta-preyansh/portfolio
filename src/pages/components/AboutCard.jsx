import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


export const AboutCard = ({
  image,
  heading,
  description,
}) => {
  return (
    <AboutCardContainer>
      <div className="heading">{heading}</div>
      <div className="image-wrapper">
        <img className="about-image" src={image} draggable={false} />
      </div>
      <div className="description" >{description}</div>
    </AboutCardContainer>
  );
};

const AboutCardContainer = styled(motion.div)`
  transition: scale 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    >.description{
      height: 65%;
    }
  }
  &:nth-child(2n){
    align-self: flex-end;
  }
  width: 250px;
  height: 100%;
  overflow: hidden;
  background-color: rgba(195, 153, 229, 0.1);
  backdrop-filter: blur(3px);
  box-shadow: 10px 10px 20px rgba(0,0,0,0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  .heading{
    padding: 4px 0px;
    font-size: 26px;
    overflow: hidden;
    color: #db8b75;
    font-weight: 600;
  }
  .description{
    overflow: hidden;
    width: 100%;
    height: 0px;
    transition: height 0.3s ease-out;
    font-size: 14px;
    text-align: center;
  }
  .image-wrapper{
    width: 50%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    .about-image{
      width:100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
