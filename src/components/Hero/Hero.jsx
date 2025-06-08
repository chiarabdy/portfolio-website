// src/components/Hero/Hero.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// A simple animation for the text to fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// This is our main full-screen container
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; // Takes up the full height of the viewport
  background-color: #1a1a2e; // A dark, modern blue/purple
  color: #e0e0e0; // An off-white for text
  text-align: center;
  padding: 0 20px;
`;

const Name = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: #ffffff;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  margin: 10px 0;
  color: #00d1cd; // A bright, contrasting cyan for the title
  font-weight: 400;
  animation: ${fadeIn} 1s ease-out 0.5s;
  animation-fill-mode: backwards;
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 20px 0 30px 0;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 1s;
  animation-fill-mode: backwards;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  animation: ${fadeIn} 1s ease-out 1.5s;
  animation-fill-mode: backwards;
`;

const SocialIcon = styled.a`
  color: #e0e0e0;
  font-size: 2.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #00d1cd; // Highlight color on hover
    transform: scale(1.1);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Name>Chiar Abdi</Name>
      <Title>Software Developer with Full-Stack Experience</Title>
      <Introduction>
        I build clean, interactive, and responsive web applications that provide great user experiences, with hands-on experience developing for companies like Adobe.
      </Introduction>
      <SocialLinks>
        <SocialIcon href="https://github.com/chiarabdy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/chiarabdi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIcon>
      </SocialLinks>
    </HeroContainer>
  );
};

export default Hero;