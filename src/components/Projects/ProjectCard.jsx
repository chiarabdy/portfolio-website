import React from 'react';
import styled from 'styled-components';

const CardImage = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.4s ease;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
  color: white;
  padding: 40px 20px 20px 20px;
  transform: translateY(100%);
  transition: transform 0.4s ease-in-out;
`;

const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;


  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:hover ${CardOverlay} {
    transform: translateY(0);
  }

  &:hover ${CardImage} {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #00d1cd;
  font-weight: bold;
  &:hover { text-decoration: underline; }
`;

const ProjectCard = ({ project }) => {
  const { title, description, image, liveUrl, repoUrl } = project;
  return (
    <CardWrapper>
      <CardImage src={image} alt={`${title} screenshot`} />
      <CardOverlay>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <LinkContainer>
          <StyledLink href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</StyledLink>
          <StyledLink href={repoUrl} target="_blank" rel="noopener noreferrer">Source Code</StyledLink>
        </LinkContainer>
      </CardOverlay>
    </CardWrapper>
  );
};

export default ProjectCard;