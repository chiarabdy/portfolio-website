// src/data/projectsData.js

// 1. Import the new project image
import kanbanImage from '../assets/images/kanban-project.png';
import brickBreakerImage from '../assets/images/brickbreaker.png';
import weatherAppImage from '../assets/images/weather-app.png';

export const projectsData = [
  // 1. Interactive Kanban Task Tracker
  {
    id: 1,
    title: 'Interactive Kanban Task Tracker',
    description:
      'A fully interactive task management application built with React. Features include drag-and-drop functionality to organize tasks, dynamic creation and deletion of tasks, and a celebratory confetti effect upon completion.',
    image: kanbanImage,
    tags: ['React', 'Styled-Components', '@hello-pangea/dnd', 'JavaScript'],
    liveUrl: 'https://kanban-app-chiar.vercel.app',
    repoUrl: 'https://github.com/chiarabdy/kanban-task-app', 
  },
  // 2. Brick Breaker Game
  {
    id: 2,
    title: 'Retro Brick Breaker Game',
    description:
      'A classic arcade game built with vanilla JavaScript and HTML5 Canvas to practice core game development concepts like collision detection and rendering loops.',
    image: brickBreakerImage,
    tags: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    liveUrl: 'https://brick-breaker-game-bay.vercel.app/',
    repoUrl: 'https://github.com/chiarabdy/brick-breaker-game',
  },
  // 3. Modern Weather Dashboard
    {
    id: 3,
    title: 'Modern Weather Dashboard',
    description:
      'A clean and responsive weather application built with React and TypeScript. It fetches and displays live weather data from the OpenWeatherMap API for any city in the world.',
    image: weatherAppImage,
    tags: ['React', 'TypeScript', 'Vite', 'Styled-Components', 'Axios'],
    liveUrl: 'https://react-weather-app-liard-seven.vercel.app/', 
    repoUrl: 'https://github.com/chiarabdy/react-weather-app',
  },
];