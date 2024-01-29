import React from 'react';
import Header from '../components/header';
import Project from '../components/Project';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <section id="about">
        <h2>About Me</h2>
        <img src = 'https://mail.google.com/mail/u/0?ui=2&ik=e34a06c97a&attid=0.1&permmsgid=msg-f:1773044523202402413&th=189b1e99906e586d&view=att&disp=safe' width={300} height={300} />
        {
          <p>Hello, my name is Brett Coppens and this is my portfolio.
            Inside you will find a couple projects that I have worked on 
            during my experience at the Northwestern Web Development Bootcamp.
            These show off just some of the things I have learned, including this react 
            website used for this portfolio! I have left my contact information at the bottom
            of the page, please feel free to reach out with any questions or concerns!
          </p>
        }
      </section>
      <section id="projects">
        <h2 id="projectsHeader">Projects:</h2>
        <Project title="Talker" description="Augmentative & Alternative Communication Device." link="https://ai-aac-db2.onrender.com/" />
        <Project title="The Escape Room" description="Multiple choice game where one wrong click, could be your worst nightmare!" link="https://the-escape-room-b6b7539c84ae.herokuapp.com/" />
        <Project title="Lexipal" description="Calculate the relative frequency of any word in the English Language" link="https://chicago-august-20231.github.io/Word-Frequency-Calculator/" />
      </section>
      <section id="contact">
        <h2>Contact</h2>
        {<div>Email: brett.coppens34@gmail.com</div>}
        {<div>Phone: 555-555-5555</div>}
      </section>
      <Footer />
    </div>
  );
};

export default App;