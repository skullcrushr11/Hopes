import React, { useState } from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const sectionDescriptions = document.querySelectorAll('.section-description');

  sectionDescriptions.forEach(description => {
    let hovered = false;
  
    description.addEventListener('mouseover', () => {
      if (!hovered) {
        description.classList.add('hovered');
        hovered = true;
      }
    });
  });
  

  return (
    <div className="app-container">
      <header className="main-header">
        <img src="/p1.jpg" alt="logo" className="logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>

          </ul>
        </nav>
      </header>

      <section className="about-section">
        <h2 className="section-heading">About Us</h2>
        <p className="section-description spoiler">
        HOPES, the media club of PES College, is a dynamic and creative hub dedicated to shaping the narrative of our college community. With specialized teams in videography, design, operations, logistics, and campaigning, we are committed to fostering engagement, creativity, and innovation across campus. From producing captivating visual content and designing compelling graphics to ensuring seamless operations and orchestrating impactful campaigns, our multi-talented team works tirelessly to elevate the college experience. At HOPES, we embrace the power of storytelling and visual communication to inspire, inform, and connect with our audience, leaving a lasting impression and fostering a sense of pride and unity within our college community. Join us in our mission to amplify voices, spark change, and cultivate a vibrant media culture at PES College.
        </p>
      </section>

      <section className="domains-section">
        <h2 className="section-heading">Our Domains</h2>
        <div className="domain-grid">
          <motion.div
            className="domain-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={toggleDescription}
            onMouseLeave={toggleDescription}
          >
            <img src='https://picsum.photos/600/500' alt="Domain 1" className="domain-image" />
            <h3 className="domain-title">Content</h3>
            <p className={`domain-description ${showDescription ? 'show' : ''}`}>
            Our Content Team creates engaging, informative content across platforms, collaborating closely to ensure alignment with our brand. We value creativity and strive for excellence in crafting compelling narratives. Join us in shaping our brand's voice and identity through impactful storytelling.
            </p>
          </motion.div>

          <motion.div
            className="domain-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={toggleDescription}
            onMouseLeave={toggleDescription}
          >
            <img src='https://picsum.photos/600/501' alt="Domain 2" className="domain-image" />
            <h3 className="domain-title">Videography</h3>
            <p className={`domain-description ${showDescription ? 'show' : ''}`}>
            Our Videography Team is dedicated to producing captivating visual content that tells stories and captures audiences' attention. With a focus on creativity and innovation, we create videos that resonate with our audience and align with our brand's objectives. Join us in bringing ideas to life through the power of visual storytelling.
            </p>
          </motion.div>


        </div>
      </section>

      <section className="domains-section">
        <div className="domain-grid">
          <motion.div
            className="domain-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={toggleDescription}
            onMouseLeave={toggleDescription}
          >
            <img src='https://picsum.photos/600/502' alt="Domain 3" className="domain-image" />
            <h3 className="domain-title">Design</h3>
            <p className={`domain-description ${showDescription ? 'show' : ''}`}>
            The Design Team is at the forefront of shaping our brand's visual identity. With a keen eye for aesthetics and a passion for creativity, we craft compelling designs that communicate our brand message effectively. Join us in transforming ideas into visually stunning experiences that leave a lasting impression.
            </p>
          </motion.div>
          <motion.div
            className="domain-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={toggleDescription}
            onMouseLeave={toggleDescription}
          >
            <img src='https://picsum.photos/601/500' alt="Domain 4" className="domain-image" />
            <h3 className="domain-title">Operations</h3>
            <p className={`domain-description ${showDescription ? 'show' : ''}`}>
            Our Operations Team plays a vital role in ensuring the smooth functioning of our organization. From managing resources to optimizing processes, we work behind the scenes to support all departments and drive efficiency. Join us in making a meaningful impact by keeping our operations running seamlessly.
            </p>
          </motion.div>

  
        </div>
      </section>

      <section className="domains-section">
        <div className="domain-grid">
          <motion.div
            className="domain-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={toggleDescription}
            onMouseLeave={toggleDescription}
          >
            <img src='https://picsum.photos/602/500' alt="Domain 5" className="domain-image" />
            <h3 className="domain-title">Logistics</h3>
            <p className={`domain-description ${showDescription ? 'show' : ''}`}>
            The Logistics Team is responsible for coordinating the movement of goods and services efficiently and effectively. With meticulous planning and attention to detail, we ensure that materials reach their destinations on time and within budget. Join us in managing the logistics puzzle and keeping our operations running smoothly.
            </p>
          </motion.div>

          <motion.div
            className="domain-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={toggleDescription}
            onMouseLeave={toggleDescription}
          >
            <img src='https://picsum.photos/601/501' alt="Domain 6" className="domain-image" />
            <h3 className="domain-title">Campaigning</h3>
            <p className={`domain-description ${showDescription ? 'show' : ''}`}>
            Our Campaigning Team is dedicated to creating impactful campaigns that raise awareness, drive engagement, and achieve results. With a strategic approach and a passion for storytelling, we develop and execute campaigns that resonate with our target audience. Join us in making a difference by driving meaningful change through our campaigns.
            </p>
          </motion.div>

   
        </div>
      </section>

      <footer>
        <div className="copyright">© 2024 HOPES</div>
        <div className="links">
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
