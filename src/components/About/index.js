import React from 'react';
import Jin from '../../assets/picture/jin.png';

function About() {
  return (
    <section className="about mx-auto">
      <div className="my-1 mx-auto w-50 text-center">
        <h2 className="shadow">ABOUT ME</h2>
      </div>
      <div className="profile-card my-5">
        <div>
          <img className="profile-img" src={Jin} alt="profile" />
        </div>
        <div className="my-auto mx-auto">
          <p>
            Seungjin (Jin) Lee <br />
            Jin for short <br />
            Junior full stack web developer <br />
          </p>
        </div>
      </div>
      <div className="profile-text">
        <p>
          Hi, there ! <br />
          <br />I am a full stack web developer for the web and mobile
          application with React.js, SQL and NoSQL databases, RESTful API's, and
          JavaScript. I earned a certificate in full stack development from a
          coding boot camp in the UC Riverside Extension. I am passionate about
          developing apps, with high quality, efficiency, and responsibility to
          end users. My Strengths are in meeting deadlines, learning fast, and
          teamwork. I am so excited to work as a team, and learn new skills to
          build applications for the market in the real world.
        </p>
      </div>
    </section>
  );
}

export default About;
