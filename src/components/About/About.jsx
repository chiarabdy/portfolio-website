// src/components/About/About.jsx
import React from 'react';
import styled from 'styled-components';
// 1. Import the photo you just added.
import profilePic from '../../assets/images/profile-photo.png'

const AboutSection = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a2e; // Dark blue text color
  margin-bottom: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;

  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%; 
  object-fit: cover; 
  border: 5px solid #00d1cd; 
`;

const AboutText = styled.div`
  text-align: left;
  max-width: 600px;
  color: #333;
  font-size: 1.1rem;
  line-height: 1.7;

  p {
    margin-bottom: 15px;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <SectionTitle>About Me</SectionTitle>
      <ContentWrapper>
        <ProfileImage src={profilePic} alt="Chiar Abdi" />
        <AboutText>
            {/* 3. This is the text we drafted from your CV */}
            <p>
              I'm a developer driven by a deep-seated passion for problem-solving and technology. My journey into tech was fueled by a love for logical challenges, which I first honed while earning my Bachelor's degree in English Literature.
            </p>
            <p>
              That background gave me a unique perspective, blending analytical thinking and strong communication skills—essential for writing clear documentation and collaborating effectively. This path led me to incredible hands-on experiences at **Adobe** and **Archilogic**, and now I am eager to fully re-engage with my passion for software development to build innovative and impactful applications.
            </p>
        </AboutText>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;