import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mx-auto w-40 flex-row space-between">
        <div>
          <a href="mailto:infinissible@gmail.com" alt="email">
            <div className="icons8-mail"></div>
          </a>
        </div>
        <div>
          <a href="https://github.com/infinissible">
            <div className="icons8-github"></div>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jinlee0303/">
            <div className="icons8-linkedin-circled"></div>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/SJin0303">
            <div className="icons8-twitter-circled"></div>
          </a>
        </div>
      </div>
      <div className="container">
        Icons by Icons8 | &copy;{new Date().getFullYear()} by Jin
      </div>
    </footer>
  );
};

export default Footer;
