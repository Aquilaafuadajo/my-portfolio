import React from 'react';

import './all-pages.styles.scss';

import MyPicture from '../../assets/aquila.jpg';
import Portfolio from '../../assets/portfolio.png';
import ArticleViewer from '../../assets/article-viewer.png';
import Ecommerce from '../../assets/ecommerce.png';
import FaceRecognition from '../../assets/face-recognition.png';

export const About = () => {
  return ( 
    <div className='about'>
      <div className='write-up'>
        <h1>About Me</h1>
        <p>I'm a passionate Front End developer, a lover of JavaScript with hands-on experience in efficiently coding web applications using modern HTML, CSS, and JavaScript</p>
        <p>My childhood curiosity led to my educational focus in engineering and technology, and over the years I have gained experience in building responsive web applications with JavaScript/react.js. <br/>
        My programming experience has been both challenging and fun working on programming projects with the added thrill of being able to communicate directly with my computer.</p>
        <p>PS: When I'm not coding, I love to watch movie series.</p>
      </div>
      <div className='me'>
        <img src={MyPicture} alt='Me' />
      </div>
    </div>
      
    );
}

export const Contact = () => {
  return ( 
      <div className='contact'>
        <h1>CONTACT</h1>
        <h3>Woah! Let's do business</h3>
        <p>Let's talk over the mail:</p><a href='mailto:aquilaafuadajo@gmail.com'><button>mail me</button></a><br/>
        <a href='https://drive.google.com/open?id=1cMmfXq466hCG6Amab8rlyed2dVl9VS_J'><button>my resume</button></a>
      </div>
    );
}

export const MyWork = () => {
  return ( 
      <div className='my-work'>
        <details>
          <summary className='card'>
            <img src={Ecommerce} alt=''/>
            <h3>CROWN CLOTHING</h3>
          </summary>
          <div>
            <img src={Ecommerce} alt=''/>
            <p>Description: </p>
          </div>
        </details>
        <details>
          <summary className='card'>
            <img src={ArticleViewer} alt=''/>
            <h3>ARTICLE VIEWER</h3>
          </summary>
          <div>
            <img src={ArticleViewer} alt=''/>
            <p>Description:</p>
          </div>
        </details>
        <details>
          <summary className='card'>
            <img src={FaceRecognition} alt=''/>
            <h3>FACE RECOGNITION APP</h3>
          </summary>
          <div>
            <img src={FaceRecognition} alt=''/>
            <p>Description: An app that detects the presence and location of human faces with a bound-
            ing box, and increases in count by the number of face a user has registered.
            Front-end built with React.js and Back-end built with Node.js. <a href='https://frontend-smartbrain-project.herokuapp.com/'>View Project</a>
            </p>
          </div>
        </details>
        <details>
          <summary className='card'>
            <img src={Portfolio} alt=''/>
            <h3>MY PERSONAL PORTFOLIO</h3>
          </summary>
          <div>
            <img src={Portfolio} alt=''/>
            <p>description</p>
          </div>
        </details>
        
      </div>
    );
}

export const MySkill = () => {
  return ( 
      <div className='contact'>
        <div className='skill-description'>
          <h1>MY SKILL</h1>
          <p>The main area of my expertise is front end development (client side of the web).</p>
          <p>HTML, CSS (SASS), JavaScript, NOSql,  building small and medium web apps with React.js, animations, and coding interactive layouts.</p>
          <p>I also have full-stack experience with Node.js, Postgresql</p>
          <p>View my <a style={{textDecoration: 'underline'}} href='https://drive.google.com/open?id=1cMmfXq466hCG6Amab8rlyed2dVl9VS_J'>resume</a> for more details on my experience</p>
        </div>
      </div>
    );
}