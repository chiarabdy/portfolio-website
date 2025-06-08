// src/components/Projects/ProjectCard.jsx
import React from 'react';
import styled from 'styled-components';

const CardImage = styled.img`
  width: 100%;
  /* We removed the fixed height and object-fit to let the image show its true shape */
  display: block; /* This removes any extra space below the image */
  transition: transform 0.4s ease-in-out;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* This is still important to contain the zoom effect */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    /* The card still lifts up */
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

    /* The fully visible image now zooms in slightly */
    ${CardImage} {
      transform: scale(1.05);
    }
  }
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin: 0 0 10px 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  flex-grow: 1;
`;

const TagContainer = styled.div`
  padding-top: 10px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: #e3f2fd;
  color: #0d47a1;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 5px 5px 0;
  font-size: 0.85rem;
  font-weight: 500;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #0079bf;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #00d1cd;
  }
`;

const ProjectCard = ({ project, onImageClick }) => {
  const { title, description, image, tags, liveUrl, repoUrl } = project;
  return (
    <Card>
      <CardImage
        src={image}
        alt={`${title} screenshot`}
        onClick={() => onImageClick(image)}
      />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
        <LinkContainer>
          <StyledLink href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </StyledLink>
          <StyledLink href={repoUrl} target="_blank" rel="noopener noreferrer">
            Source Code
          </StyledLink>
        </LinkContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;