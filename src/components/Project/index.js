import React, { useState } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { FiMonitor } from 'react-icons/fi';

function Project() {
  const [projects] = useState([
    {
      name: 'My-wedding-invitation',
      description:
        'A personal wedding invitation as a single-page application built with Reac.js. It is designed for the mobile-friendly interface including a photo gallery with react-responsive-carousel, an API of NAVER MAP',
      skills:
        'JavaScript, React.js, Node.js, react-responsive-carousel, NAVER Map API, gh-pages',
      appLink: 'https://infinissible.github.io/my-wedding-invitation/',
      repoLink: 'https://github.com/infinissible/my-wedding-invitation',
      number: 9,
    },
    // {
    //   name: 'Python-newsfeed',
    //   description:
    //     'A website where users can post, upvote, and comment on links to news articles. This website is built with Python, Flask, SQLAlchemy, Jinja2, PyMySQL, and Javascript, and deployed to heroku',
    //   skills:
    //     'Python, Flask, SQLAlchemy, Jinja2, PyMySQL, Gunicorn, bcrypt, dotenv, Heroku',
    //   appLink: 'https://python-news-fd.herokuapp.com/',
    //   repoLink: 'https://github.com/infinissible/python-newsfeed',
    //   number: 8,
    // },
    {
      name: 'Freelancr',
      description:
        'A MERN stack single-page application, which is a platform that provides employers with information about freelancers to hire',
      skills:
        'MongoDB, Mongoose, Express.js, React.js, Node.js, GraphQL, Heroku',
      appLink: 'https://freelancr-gig.onrender.com',
      repoLink: 'https://github.com/infinissible/freelancr-gig',
      number: 7,
    },
    // {
    //   name: 'SELF-MANAGEMENT-APP',
    //   description:
    //     'A full stack application that manages time efficient by creating projects and associated tasks',
    //   skills: 'MySQL, Node.js, Express.js, Handlebars, Heroku',
    //   appLink: 'https://self-management-app.herokuapp.com/',
    //   repoLink: 'https://github.com/Callank21/Self-Management-App',
    //   number: 6,
    // },
    {
      name: 'GAME DATABASE',
      description:
        'Game platform that allows users to search a game title and provide details',
      skills: 'HTML, CSS, JavaScript, Tawilwind, jQuery',
      appLink: 'https://uhmammoth.github.io/GamePlatforms/',
      repoLink: 'https://github.com/uhMammoth/GamePlatforms',
      number: 5,
    },
    {
      name: 'Weather Dashboard',
      description:
        'A web application that offers a weather forecast in the city searched',
      skills: 'Server-side APIs, HTML, CSS, JavaScript',
      appLink: 'https://infinissible.github.io/Smart-weather-dashboard/',
      repoLink: 'https://github.com/infinissible/Smart-weather-dashboard',
      number: 4,
    },
    {
      name: 'Work Day Scheduler',
      description: 'A web application that manages work day schedules',
      skills: 'Third-Party APIs, HTML, CSS, JavaScript, jQuery',
      appLink: 'https://infinissible.github.io/Amazing-work-day-scheduler/',
      repoLink: 'https://github.com/infinissible/Amazing-work-day-scheduler',
      number: 3,
    },
    {
      name: 'Quizmaker',
      description: 'A web application that creates a quizmaker',
      skills: 'Web APIs, HTML, CSS, JavaScript',
      appLink: 'https://infinissible.github.io/Quizmaker/',
      repoLink: 'https://github.com/infinissible/Quizmaker',
      number: 2,
    },
    {
      name: 'Password Generator',
      description:
        'A web application that generates a password by selected conditions',
      skills: 'HTML, CSS, JavaScript',
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
    <div className='mx-auto'>
      <div className='my-1 mx-auto w-50 text-center'>
        <h2 className='shadow'>PROJECT</h2>
      </div>
      <div className='project flex-row'>
        {projects.map((project) => (
          <div key={project.skills} id={project.number} className='relative'>
            <img
              src={require(`../../assets/project/${project.number}.jpg`)}
              key={project.number}
              alt={project.description}
            />
            <div key={project.name} className='project-label'>
              <h2>{project.name}</h2>
              <p>{project.skills}</p>
              <a className='link' href={project.appLink}>
                <FiMonitor />
              </a>
              &nbsp;&nbsp;
              <a className='link' href={project.repoLink}>
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
