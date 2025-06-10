// src/components/Projects/Projects.jsx
import React from 'react';
import styled from 'styled-components';
import { projectsData } from '../../data/projectsData';
import ProjectCard from './ProjectCard';

// ... (styled-components are unchanged) ...

// 1. Add onImageClick to the props
const Projects = ({ onImageClick }) => {
  return (
    <ProjectsSection>
      <SectionTitle>My Work</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project) => (
          // 2. Pass the function down to each card
          <ProjectCard
            key={project.id}
            project={project}
            onImageClick={onImageClick}
          />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 80px 20px;
  background-color: #f4f5f7; // A light grey background
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #1a1a2e;
  margin-bottom: 50px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  perspective: 1000px; // Added perspective for 3D effect
`;