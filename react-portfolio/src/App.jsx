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
        {
          <p>To be, or not to be: that is the question: whether 'tis nobler in the mind to suffer the slings and arrows of
            outrageous fortune, or to take arms against a sea of troubles, and by opposing end them? To die: to sleep; no
            more; and, by a sleep to say we end the heart-ache and the thousand natural shocks that flesh is heir to, 'tis a
            consummation devoutly to be wish'd.</p>
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