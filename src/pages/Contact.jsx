import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillMail, AiFillInstagram } from "react-icons/ai";

const oddVariants = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};
const evenVariants = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <div className="heading">
        <h1>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            C
          </motion.div>
          <motion.div
            variants={evenVariants}
            initial="hidden"
            animate="visible"
          >
            o
          </motion.div>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            n
          </motion.div>
          <motion.div
            variants={evenVariants}
            initial="hidden"
            animate="visible"
          >
            t
          </motion.div>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            a
          </motion.div>
          <motion.div
            variants={evenVariants}
            initial="hidden"
            animate="visible"
          >
            c
          </motion.div>
          <motion.div variants={oddVariants} initial="hidden" animate="visible">
            t
          </motion.div>
        </h1>
      </div>
      <div className="contact-container">
        <div className="left-section">
          <p>
            Hello there! Thank you for stopping by. I'm thrilled at the
            possibility of working together and bringing your ideas to life.
            Whether you have a project in mind or just want to say hello, I'd
            love to hear from you.
          </p>
          <p>
            Let's stay connected! Feel free to reach out on these platforms :
          </p>
          <div className="social-icons">
            <div className="social-address">
              <AiFillMail />
              <span>preyansh.dev@gmail.com</span>
            </div>
            <div className="social-address">
              <AiFillLinkedin />
              <span>
                <a
                  href="https://www.linkedin.com/in/preyansh-mehta007/"
                  target="_blank"
                >
                  preyansh-mehta007
                </a>
              </span>
            </div>
            <div className="social-address">
              <AiFillInstagram />
              <span>
                <a
                  href="https://www.instagram.com/ka_me_ha._me_haa/"
                  target="_blank"
                >
                  ka_me_ha._me_haa
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="form-wrapper">
            <form action="https://formspree.io/f/mgegwoyo" method="POST">
              <input
                type="text"
                name="Email"
                placeholder="Email"
                required
                autoComplete="off"
              />
              <input
                type="text"
                name="Name"
                placeholder="Name"
                required
                autoComplete="off"
              />
              <textarea
                name="Message"
                placeholder="Type your message here"
                cols="30"
                rows="6"
              ></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};
const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: inherit;
  padding: 28px 42px;
  /* user-select: none; */
  *::selection {
    color: var(--salmon);
    background-color: var(--silver);
  }
  .heading {
    color: white;
    overflow: hidden;
    h1 > div {
      display: inline-block;
    }
  }
  .contact-container {
    align-self: center;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    padding: 12px 28px;
    gap: 22px;
    height: 80%;
    width: 100%;
    border-radius: 10px;
    .left-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 100%;
      > * {
        padding: 8px 12px;
      }
      .social-icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        .social-address {
          padding: 8px 0px;
          width: 100%;
          display: flex;
          gap: 10px;
          align-items: center;
          a {
            text-decoration: none;
            color: #bebbbb;
            font-weight: 900;
          }
          svg {
            width: 32px;
            height: 32px;
            transition: all 0.3s ease-out;
          }
        }
        .social-address:has(a:hover) > svg {
          color: #e0dcdc;
          scale: 1.1;
        }
      }
    }
    .right-section {
      width: 50%;
      display: flex;
      justify-content: center;
      .form-wrapper > form {
        width: 100%;
        height: 100%;
        background-color: #5c417f9f;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        padding: 8px 12px;
        button:hover {
          background-color: #fac8b7;
          color: #332545;
          cursor: pointer;
        }
        input,
        textarea,
        button {
          background: none;
          background-color: #332545;
          border: 1px solid #fac8b7;
          margin: 8px 4px;
          padding: 8px 12px;
          color: #fac8b7;
          transition: all 0.1s ease;
          &:focus {
            outline: none;
          }
        }
        input,
        button {
          padding: 8px 12px;
        }
        textarea {
          resize: none;
          &::-webkit-scrollbar {
            width: 6px;
          }
          
          &::-webkit-scrollbar-track {
            background: transparent;
          }
          
          &::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 3px;
          }
        }
      }
    }
  }
`;
export default Contact;
