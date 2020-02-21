import React from 'react';

import './all-pages.styles.scss';

import MyPicture from '../../assets/aquila.jpg';
import Portfolio from '../../assets/portfolio.jpeg';
import ArticleViewer from '../../assets/article-viewer.jpeg';
import Ecommerce from '../../assets/crown-wears.jpeg';
import ToDo from '../../assets/to-do.jpeg';
import FaceRecognition from '../../assets/face-recognition.jpeg';

import {ReactComponent as Twitter} from '../../assets/twitter.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as Github} from '../../assets/github.svg';

export const About = () => {
  return ( 
    <div className='about'>
      <div className='write-up'>
        <h1>About Me</h1>
        <p>I'm a passionate Front End developer, a lover of JavaScript with hands-on experience in efficiently coding web applications using modern HTML, CSS, and JavaScript</p>
        <p>My childhood curiosity led to my educational focus in engineering and technology, and over the years I have gained experience in building responsive web applications with JavaScript/react.js. <br/>
        My programming experience has been both challenging and fun working on programming projects with the added thrill of being able to communicate directly with my computer.</p>
        <p>PS: When I'm not coding, I love to watch movie series.</p>
        <code className='code'>ROTATE SCREEN TO SEE MY PICTURE :) </code>
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
        <div className='upper'>
          <h1>CONTACT</h1>
          <h3>Woah! Let's do business</h3>
          <p>Let's talk over the mail:</p><a href='mailto:aquilaafuadajo@gmail.com'><button>mail me</button></a><br/>
          <a href='https://drive.google.com/open?id=1cMmfXq466hCG6Amab8rlyed2dVl9VS_J'><button>my resume</button></a>
        </div>
        <div className='social'>
          <a href='https://twitter.com/afuadajo'><Twitter className='svg'/></a>
          <a href='https://www.linkedin.com/in/emmanuel-afuadajo-97121b185/'><Linkedin className='svg'/></a>
          <a href='https://github.com/aquilaafuadajo/'><Github className='svg'/></a>
        </div>
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
            <p>Description: Crown Wears is an online clothing ecommerce website built with react and redux. This 
            project uses firebase for authentication and storage and stripe for payments. <a href='https://crown-wears.herokuapp.com'>View project</a> 
            </p>
          </div>
        </details>
        <details>
          <summary className='card'>
            <img src={ArticleViewer} alt=''/>
            <h3>STAY UPDATED</h3>
          </summary>
          <div>
            <img src={ArticleViewer} alt=''/>
            <p>Description: Stay Updated is a web app that keeps users updated with the latest articles that 
            has just been published. It searches for articles from over 30,000 news sources 
            and blogs. It allows users to sign up for daily reminder of every article published.
            It's built with React/Redux and Firebase for storage and authentication <a href='https://stayupdated.netlify.com'>View project</a>
            </p>
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
            <p>Description: As you can see, this is my personal portfolio built with react and pure sass/css</p>
          </div>
        </details>
        <details>
          <summary className='card'>
            <img src={ToDo} alt=''/>
            <h3>To-Do App</h3>
          </summary>
          <div>
            <img src={ToDo} alt=''/>
            <p>Description: This is a to-do app made with pure html, css and vanilla Javascript <a href='https://aquilaafuadajo.github.io/My-To-Do/'>View project</a></p>
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
          <p>My area of my specialization is frontend development (client side of the web).</p>
          <p>HTML, CSS (SASS), Javascript,  building small and medium web apps with React/Redux, animations, and coding interactive layouts.</p>
          <p>I also have backend experience using Node.js, PostgreSQL,  NOSQL</p>
          <p>View my <a style={{textDecoration: 'underline'}} href='https://drive.google.com/open?id=1XgRxb6v3XmM1JNfNVaeN1cPnmO78FcSv'>resume</a> for more details on my experience</p>
        </div>
      </div>
    );
}