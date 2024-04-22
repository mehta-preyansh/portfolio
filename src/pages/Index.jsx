import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Profile from "./components/Profile";
import ProfileLite from "../resources/profileLite.jpg";

const Index = () => {
  return (
    <>
      <IndexContainer id="index">
        <div className="description">
          <section className="summary">
            <motion.div className="heading">
              <h1>
                Welco<span>me</span>
              </h1>
            </motion.div>
            <p>
              I am <b>Preyansh Mehta</b>, a developer based in India. As a
              developer embarking on my journey, I'm thrilled to dive into the
              ever-evolving world of development. I'm passionate about
              cutting-edge, pixel-perfect, beautiful interfaces and intuitively
              implemented UX. I love Nature, Photography and Gaming.
            </p>
            <p>
              Feel free to explore my portfolio and get in touch to discuss how
              I can help bring your web development project to life. Let's
              create something amazing together!
            </p>
          </section>
          <div className="image-container">
            <div
              className="image"
              style={{ backgroundImage: `url(${ProfileLite})` }}
            >
              <Profile />
            </div>
          </div>
        </div>
      </IndexContainer>
    </>
  );
};
const IndexContainer = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 42px;
  *::selection {
    color: var(--salmon);
    background-color: var(--silver);
  }
  .description {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    .summary {
      word-spacing: 8px;
      width: 50%;
      line-height: 32px;
      .heading {
        color: white;
        padding: 12px 6px;
        font-size: 3vw;
        span {
          color: var(--salmon);
        }
      }
      p {
        font-size: 2vmin;
        padding: 12px;
      }
    }
    .image-container {
      min-width: 200px;
      width: 30%;
      aspect-ratio: 1/1;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .image {
        background-size: 346px;
        background-position: left;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        color: black;
        border-radius: 50%;
        border: 5px solid var(--pale-dogwood);
        box-shadow: 0 0 40px var(--silver), inset 0 0 40px var(--silver);
        overflow: hidden;
        animation: floating 5s ease-in-out 0s infinite;
        transition: all 0.5s ease-in-out;
        &:hover {
          width: 120%;
        }
        @keyframes floating {
          0% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(10px, 15px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
      }
    }
    @media screen and (max-width: 425px) {
      flex-direction: column;
      .summary {
        width: 100%;
        line-height: 20px;
        .heading {
          font-size: 12px;
        }
        p {
          font-size: 10px;
        }
      }
      .image-container {
        min-width: 196px;
      }
    }
  }
`;
export default Index;
