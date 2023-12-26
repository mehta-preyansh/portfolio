import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutCard = ({
  image,
  heading,
  description,
  constraints,
  initialOffset,
}) => {
  return (
    <AboutCardContainer
      drag
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragConstraints={constraints}
      dragElastic={0.5}
      while={{ cursor: "grabbing" }}
      initialOffset={initialOffset}
    >
      <div className="heading">{heading}</div>
      <div className="image-wrapper">{image}</div>
      <div className="description">{description}</div>
    </AboutCardContainer>
  );
};

const AboutCardContainer = styled(motion.div)`
  &:hover {
    cursor: grab;
  }
  translate: ${props => `${props.initialOffset.x}px ${props.initialOffset.y}px`};
  position: absolute;
  width: 250px;
  overflow: hidden;
  background-color: #5c417f9f;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  .heading{
    font-size: 26px;
    overflow: hidden;
    color: #db8b75;
    font-weight: 600;
  }
  .description{
    width: 100%;
    height: 50%;
    font-size: 14px;
  }
  .image-wrapper{
    width: 50%;
    aspect-ratio: 1/1;
  }
`;
