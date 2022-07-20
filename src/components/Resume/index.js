import React from 'react';
import { FiDownload } from 'react-icons/fi';
import resume from '../../assets/pdf/resume.pdf';

function Resume() {
  return (
    <section>
      <div className="my-1 mx-auto w-50 text-center">
        <h2 className="shadow">RESUME</h2>
      </div>
      <div className="mx-auto w-90 text-center">
        <div className="pb-30 p-40">
          <h4 className="mb-15 bold">Front-end experience</h4>
          <h5>
            HTML, CSS (Bootstrap, TailwindCSS), JavaScript, React.js, IndexedDB
          </h5>
        </div>
        <div className="p-40">
          <h4 className="mb-15 bold">Back-end experience</h4>
          <h5>
            Node.js, Express.js, MySQL, Sequelize, NoSQL (MongoDB, Mongoose),
            API's (third-party, server-side, RESTful), Templating (Handlebars)
          </h5>
        </div>
        <h5>
          Download Resume
          <a
            className="mx-1"
            href="https://docs.google.com/document/d/1FrEuFi7v861jyVep3Bl1EtRdDeRQxbtLwGofATDTDyo/export?format=pdf"
            download
          >
            <FiDownload />
          </a>
        </h5>
        <iframe
          id="gframe"
          width="100%"
          height="1200px"
          title="resume"
          src={resume}
        />
      </div>
    </section>
  );
}

export default Resume;
