import React, { useState } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { FiMonitor } from 'react-icons/fi';

function Project() {
  const [projects] = useState([
    {
      name: 'SELF-MANAGEMENT-APP',
      description:
        'A full stack application that manages time efficient by creating projects and associated tasks',
      skills: 'MySQL, Node.js, Express.js, Handlebars, Heroku',
      appLink: 'https://self-management-app.herokuapp.com/',
      repoLink: 'https://github.com/Callank21/Self-Management-App',
      number: 6,
    },
    {
      name: 'GAME DATABASE',
      description:
        'Game platform that allows users to search a game title and provide details',
      skills: 'HTML, CSS, JavaScript',
      appLink: 'https://uhmammoth.github.io/GamePlatforms/',
      repoLink: 'https://github.com/uhMammoth/GamePlatforms',
      number: 5,
    },
    {
      name: 'Weather Dashboard',
      description:
        'A web application that offers a weather forecast in the city searched',
      skills: 'Server-side APIs',
      appLink: 'https://infinissible.github.io/Smart-weather-dashboard/',
      repoLink: 'https://github.com/infinissible/Smart-weather-dashboard',
      number: 4,
    },
    {
      name: 'Work Day Scheduler',
      description: 'A web application that manages work day schedules',
      skills: 'Third-Party APIs',
      appLink: 'https://infinissible.github.io/Amazing-work-day-scheduler/',
      repoLink: 'https://github.com/infinissible/Amazing-work-day-scheduler',
      number: 3,
    },
    {
      name: 'Quizmaker',
      description: 'A web application that creates a quizmaker',
      skills: 'Web APIs',
      appLink: 'https://infinissible.github.io/Quizmaker/',
      repoLink: 'https://github.com/infinissible/Quizmaker',
      number: 2,
    },
    {
      name: 'Password Generator',
      description:
        'A web application that generates a password by selected conditions',
      skills: 'JavaScript',
      appLink: 'https://infinissible.github.io/Ch03-Passwordgenerator/',
      repoLink: 'https://github.com/infinissible/Ch03-Passwordgenerator',
      number: 1,
    },
    {
      name: 'Run Buddy',
      description: 'A web application that displays fitness training services',
      skills: 'HTML/CSS',
      appLink: 'https://infinissible.github.io/run-buddy/',
      repoLink: 'https://github.com/infinissible/run-buddy',
      number: 0,
    },
  ]);

  return (
    <div className="mx-auto">
      <div className="my-1 mx-auto w-50 text-center">
        <h2 className="shadow">PROJECT</h2>
      </div>
      <div className="project flex-row">
        {projects.map((project) => (
          <div key={project.skills} className="relative">
            <img
              src={require(`../../assets/project/${project.number}.jpg`)}
              key={project.number}
              alt={project.description}
            />
            <div key={project.name} className="project-label">
              <h2>{project.name}</h2>
              <br />
              <p>{project.skills}</p>
              <a className="link" href={project.appLink}>
                <FiMonitor />
              </a>
              &nbsp;&nbsp;
              <a className="link" href={project.repoLink}>
                <GoMarkGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
