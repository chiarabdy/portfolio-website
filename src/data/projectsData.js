// src/data/projectsData.js

// We import the project images here
import kanbanImage from '../assets/images/kanban-project.png';

export const projectsData = [
  {
    id: 1,
    title: 'Interactive Kanban Task Tracker',
    description:
      'A fully interactive task management application built with React. Features include drag-and-drop functionality to organize tasks, dynamic creation and deletion of tasks, and a celebratory confetti effect upon completion.',
    image: kanbanImage,
    tags: ['React', 'Styled-Components', '@hello-pangea/dnd', 'JavaScript'],
    liveUrl: 'https://kanban-task-app-blond.vercel.app/', 
    repoUrl: 'https://github.com/chiarabdy/kanban-task-app',
  },
  // {
  //   id: 2,
  //   title: 'Future Project Title',
  //   description: 'A description of your next amazing project will go here.',
  //   image: '/path/to/future/image.png',
  //   tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  //   liveUrl: '#',
  //   repoUrl: '#',
  // },
];