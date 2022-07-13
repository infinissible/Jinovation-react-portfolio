import React from 'react';

function Nav() {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="/Jinovation-react-portfolio">About Me</a>
        </li>
        <li className="mx-2">
          <a href="/Jinovation-react-portfolio/project">Project</a>
        </li>
        <li className="mx-2">
          <a href="/Jinovation-react-portfolio/contact">Contact</a>
        </li>
        <li className="mx-2">
          <a href="/Jinovation-react-portfolio/resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
