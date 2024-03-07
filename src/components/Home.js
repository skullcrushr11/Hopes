import React, { useState, useEffect } from 'react';
import './Home.css'; 
import {  Link,} from 'react-router-dom';
import StartupScreen from '../StartupScreen';

function Home() {

  const [showStartupScreen, setShowStartupScreen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowStartupScreen(false);
        }, 7000);
        
        return () => clearTimeout(timer);
    }, []);


  return (

    <>
            {showStartupScreen ? (
                <StartupScreen />
            ) : (
    <div className="app-container">
      <header className="main-header">
      <img src="/p1.jpg" alt="logo" style={{ width: '140px', height: 'auto' }}/>
        <nav>
          <ul className="nav-links">
           
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      </header>

      <section className="section1" >
        <div className="section-content">
          <div className="section-text">
          <h2 class="rewrite">CREATE</h2>
            <p>
            In the digital expanse, content writing is an artful alchemy of language. With quill in hand or fingertips poised, we craft narratives that captivate hearts and minds. Each word paints vivid landscapes, each sentence resonates in the soul.
            </p>
            <br></br>
            <p>
            It's the whispered invitation to explore the unknown, to embrace expression's beauty. In this dance of words, we seek to ignite and connect, leaving an indelible mark upon daring hearts.
            </p>
            <Link to="/hire" className="cta-button"> Gallery of Events </Link>
          </div>
          <div className="section-image">
            <img src={`/images/istockphoto-1416048929-612x612.jpg`} alt="Hire a Freelancer" />
          </div>
        </div>
      </section>

      <section className="section1">
        <div className="section-content">
          <div className="section-image">
            <img src={`${process.env.PUBLIC_URL}/images/photo-1538688423619-a81d3f23454b.avif`} alt="Apply as a Freelancer" />
          </div>
          <div className="section-text">
            <h2>COLLAB</h2>
            <p>
              
In the dynamic landscape of campus activities, our media club serves as a collaborative hub, joining forces with various clubs to document their events. From performances to discussions, we capture the essence of each gathering, celebrating the diversity and creativity thriving within our community. With cameras poised and pens ready, we weave together stories that amplify the voices and visions of our fellow students, creating a dynamic narrative that reflects the spirit of our campus.
            </p>
            <br></br>
            <p>
In the spirit of collaboration, our media club stands as a beacon of unity within the campus community. With open arms and eager minds, we forge partnerships with various clubs, pooling our resources and talents to create unforgettable experiences. Together, we blend creativity and innovation, breathing life into ideas that might otherwise remain dormant. Through this synergy of minds and missions, we amplify our impact, reaching new heights of inspiration and achievement.</p>
            <Link to="/apply" className="cta-button">Collab With Us</Link>
          </div>
        </div>
      </section>

      <section className="section1">
        <div className="section-content">
          <div className="section-text">
            <h2>CAPTURE</h2>
            <p>
            
With lenses focused and pens poised, our media club embodies the art of capturing moments that define campus life. From the spirited cheers at sporting events to the hushed tones of academic lectures, we adeptly seize the essence of each scene, preserving the heartbeat of our community in vivid detail. Through the click of a shutter or the stroke of a keyboard, we encapsulate the emotions, the energy, and the diversity that characterize our campus experience.
            </p>
            <br></br>
            <p>In the realm of documentation, we are more than mere observers; we are storytellers, weaving narratives that transcend time. Every photograph, every written word, is a brushstroke on the canvas of our shared journey, immortalizing the memories and milestones of our college years. With passion and precision, we capture not just events, but the essence of the human spirit, inviting others to relive and cherish the moments that shape our collective identity.</p>
          </div>
          <div className="section-image">
            <img src={`${process.env.PUBLIC_URL}/images/photo-1572021335469-31706a17aaef.avif`} alt="Freelancing Benefits" />
          </div>
        </div>
      </section>

      <footer>
        <div className="copyright">© 2024 HOPES</div>
        <div className="links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>
      </footer>

    </div>
    )}
    </>
  );
}

export default Home;
