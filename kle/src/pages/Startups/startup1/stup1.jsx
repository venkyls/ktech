import React from 'react';
import './stup1.css';

function Stup1() {
  return (
    <div className='startup-detail-page'>
      <header className='header'>
        <div className='banner'>
          <h1>Startup 1</h1>
          <p>Discover the innovative journey of Startup 1.</p>
        </div>
      </header>

      <section className='info-blocks'>
        <div className='block'>
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='block'>
          <h2>Achievements</h2>
          <p>Quisque vel urna id libero tristique egestas.</p>
        </div>
        <div className='block'>
          <h2>Team</h2>
          <p>Pellentesque habitant morbi tristique senectus et netus.</p>
        </div>
        <div className='block'>
          <h2>Contact</h2>
          <p>Curabitur ac vehicula arcu. Vivamus non ullamcorper ligula.</p>
        </div>
      </section>

      <section className='testimonials'>
        <h2>What People Say</h2>
        <div className='testimonial'>
          <img src='/path/to/profile-pic1.jpg' alt='Profile 1' className='profile-pic' />
          <p><strong>John Doe</strong>: "Startup 1 has been a game-changer in the industry!"</p>
        </div>
        <div className='testimonial'>
          <img src='/path/to/profile-pic2.jpg' alt='Profile 2' className='profile-pic' />
          <p><strong>Jane Smith</strong>: "Exceptional innovation and dedicated team!"</p>
        </div>
        {/* Add more testimonials as needed */}
      </section>

      <section className='big-feature-section'>
        <div className='container flex big-feature-container'>
          <div className='feature-img'>
            <img src='./assets/asset18.png' alt='Feature 1' />
          </div>
          <div className='feature-desc flex'>
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
          </div>
        </div>
      </section>

      <section className='big-feature-section'>
        <div className='container flex big-feature-container' id='second-big-feature'>
          <div className='feature-img'>
            <img src='./assets/asset21.png' alt='Feature 2' />
          </div>
          <div className='feature-desc flex'>
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
          </div>
        </div>
      </section>

      <section className='big-feature-section'>
        <div className='container flex big-feature-container'>
          <div className='feature-img'>
            <img src='./assets/asset24.png' alt='Feature 3' />
          </div>
          <div className='feature-desc flex'>
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stup1;
