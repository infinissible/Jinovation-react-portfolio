import React, { useEffect } from 'react';

function Nav() {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about">About Me</a>
        </li>
        <li className="mx-2">
          <a href="#about">Portfolio</a>
        </li>
        <li className="mx-2">
          <a href="#about">Contact</a>
        </li>
        <li className="mx-2">
          <a href="#about">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
