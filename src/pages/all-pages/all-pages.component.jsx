import React from 'react';

import './all-pages.styles.scss';

import MyPicture from '../../assets/aquila.jpg';
import Portfolio from '../../assets/portfolio.jpeg';
import ArticleViewer from '../../assets/article-viewer.jpeg';
import Ecommerce from '../../assets/ecommerce.jpeg';
import ToDo from '../../assets/todo.png';
import FaceRecognition from '../../assets/face-recognition.jpeg';
import Quiz from '../../assets/quiz.jpeg';
import Algorithmist from '../../assets/algorithmist.png';
import Alpha from '../../assets/alpha.jpeg';
import Danadams from '../../assets/danadams.png';
import Sleek from '../../assets/sleek.jpeg';
import Piggyvest from '../../assets/piggyvest.jpeg';
import Food from '../../assets/food.jpeg';
import Abu from '../../assets/abu.jpeg'

import {ReactComponent as Twitter} from '../../assets/twitter.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as Github} from '../../assets/github.svg';

export const About = () => {
  return ( 
    <div className='about'>
      <div className='write-up'>
        <h1>About Me</h1>
        <p>I'm a passionate Frontend web developer with over one year of continuous self-development and hands-on experience in coding websites and web applications using modern web technologies.</p>
        <p>I have a niche for design and design concepts so I tend to deliver pixel perfect and fully responsive implementation, leaving my users with the best experience ever.</p>
        <p>I love learning, I love challenging myself and I'm easily inspired and more than willing to follow my fascinations to wherever they take me to.</p>
        <p> My programming experience has been both challenging and fun working on programming projects with the added thrill of being able to solve complex problems using web technologies. You can find me watching movie series when I'm not coding</p>

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
          <p>Let's talk over the mail:</p><a target='_blank noopener noreferrer' href='mailto:aquilaafuadajo@gmail.com'><button>mail me</button></a><br/>
          <a target='_blank noopener noreferrer' href='https://drive.google.com/open?id=10Hgt_qm5Pew_ICMHEcZL8vSMdxVYC7pT'><button>my resume</button></a>
        </div>
        <div className='social'>
          <a target='_blank noopener noreferrer' href='https://twitter.com/_developing_dev'><Twitter className='svg'/></a>
          <a target='_blank noopener noreferrer' href='https://www.linkedin.com/in/emmanuel-afuadajo/'><Linkedin className='svg'/></a>
          <a target='_blank noopener noreferrer' href='https://github.com/aquilaafuadajo/'><Github className='svg'/></a>
        </div>
      </div>
    );
}

export const MyWork = () => { 
  const works = [
    {
      'image-src': Ecommerce,
      'header-text': 'CROWN CLOTHING',
      'project-description': 'Crown Wears is an online clothing ecommerce website built with react and redux. This project uses firebase for authentication and storage and stripe for payments.',
      'live-link': 'https://crown-wears.herokuapp.com',
      'github-link': 'https://github.com/Aquilaafuadajo/ecommerce-shop'
    },
    {
      'image-src': FaceRecognition,
      'header-text': 'FACE RECOGNITION APP',
      'project-description': 'An app that detects the presence and location of human faces with a bound-ing box, and increases in count by the number of face a user has registered.Front-end built with React.js and Back-end built with Node.js and Postgresql.',
      'live-link': 'https://frontend-smartbrain-project.herokuapp.com/',
      'github-link': 'https://github.com/Aquilaafuadajo/frontend-smartbrain-project'
    },
    {
      'image-src': Algorithmist,
      'header-text': 'ALGORITHMIST LANDING PAGE',
      'project-description': "This is a landing page for a coming soon application that captures and store emails to a real-time database. Built with php and mysql",
      'live-link': 'https://algorithmist-landing.herokuapp.com',
      'github-link': 'https://github.com/Aquilaafuadajo/algorithmist'
    },
    {
      'image-src': Quiz,
      'header-text': 'JAVASCRIPT QUIZ APP',
      'project-description': "A javascript quiz application that fetches it's questions from a questions database based on the category and difficulty level a user selects. It also generates a random unique robot profile image for every user. This application was built with vanilla javascript, html and css",
      'live-link': 'https://js-trivia.netlify.app/',
      'github-link': 'https://github.com/Aquilaafuadajo/javascript-quiz-game'
    },
    {
      'image-src': Alpha,
      'header-text': 'ALPHA-LENS PHOTOGRAPHY',
      'project-description': "Alpha-lens is a photographer's portfolio website built with html, css and bootstrap 4",
      'live-link': 'https://alphalens.netlify.app/',
      'github-link': 'https://github.com/Aquilaafuadajo/Photography-template'
    },
    {
      'image-src': Danadams,
      'header-text': 'DANADAMS',
      'project-description': "Danadams is a pixel perfect and fully responsive designer's portfolio website built with html, css and bootstrap 4",
      'live-link': 'https://danadams.netlify.app/',
      'github-link': 'https://github.com/Aquilaafuadajo/designer-portfolio'
    },
    {
      'image-src': Sleek,
      'header-text': 'SLEEK',
      'project-description': "Sleek is a single page fashion website built with html, css, and bootstrap 4",
      'live-link': 'https://fashion-template.netlify.app/',
      'github-link': 'https://github.com/Aquilaafuadajo/Team-Avenger-Envato-Marketing/tree/design-4'
    },
    {
      'image-src': Portfolio,
      'header-text': 'MY PERSONAL PORTFOLIO',
      'project-description': 'As you can see, this is my personal portfolio built with react and pure sass/css',
      'live-link': 'https://devquils.herokuapp.com',
      'github-link': 'https://github.com/Aquilaafuadajo/my-portfolio'
    },
    {
      'image-src': Piggyvest,
      'header-text': 'PIGGYVEST INTEREST CALCULATOR',
      'project-description': "This project was built for Piggyvest, it helps calculates interest rates for customers according plan they chose(e.g flex naira, safe lock, flex dollar). This project was built with javascript, html and css",
      'live-link': 'https://piggyinterestcalculator.netlify.app/',
      'github-link': 'https://github.com/Aquilaafuadajo/piggyvest-interest-calc'
    },
    {
      'image-src': ArticleViewer,
      'header-text': 'STAY UPDATED',
      'project-description': "Stay Updated is a web app that keeps users updated with the latest articles that has just been published. It searches for articles from over 30,000 news sources and blogs. It allows users to sign up for daily reminder of every article published.It's built with React/Redux and Firebase for storage and authentication",
      'live-link': 'https://stayupdated.netlify.com',
      'github-link': 'https://github.com/Aquilaafuadajo/stayupdated'
    },
    {
      'image-src': Food,
      'header-text': 'ZURI',
      'project-description': "ZURI is an open source multi-page website built with javascript, html, css and bootstrap 4. This page is the contribution I made to the project",
      'live-link': 'https://foodgallery.netlify.app/',
      'github-link': 'https://github.com/hngi/Team-Avengers-Envato-Food-1'
    },
    {
      'image-src': Abu,
      'header-text': 'ABU HOTELS',
      'project-description': "ABU is a hotel facilities page website built with javascript, html, css and bootstrap 4. This project is a contribution to an open source project",
      'live-link': 'https://aquils-facilities-page.netlify.app/',
      'github-link': 'https://github.com/Aquilaafuadajo/avengers-stage-2-frontend-thor-2/tree/navbar-facilities'
    },
    {
      'image-src': ToDo,
      'header-text': 'TO-DO APP',
      'project-description': 'This is a to-do app made with pure html, css and vanilla Javascript',
      'live-link': 'https://aquilaafuadajo.github.io/My-To-Do/',
      'github-link': 'https://github.com/Aquilaafuadajo/My-To-Do'
    }
  ]
  
  return ( 
      <div className='my-work'>
        {works.map(project => {
          return <details>
          <summary className='card'>
            <img src={project['image-src']} alt=''/>
            <h3>{project['header-text']}</h3>
          </summary>
          <div>
            <img src={project['image-src']} alt=''/>
            <p><span style={{fontWeight: 'bold'}}>Description:</span> {project['project-description']} <br/>  
            <a target='_blank noopener noreferrer' href={project['live-link']}>View live</a> <br/>
            <a target='_blank noopener noreferrer' href={project['github-link']}>View on github</a>
            </p>
          </div>
        </details>
        })}
      </div>
    );
}

export const MySkill = () => {
  return ( 
      <div className='contact'>
        <div className='skill-description'>
          <h1>MY SKILL</h1>
          <p>My area of my specialization is frontend development (client side of the web).</p>
          <p>HTML, CSS, SASS, Bootstrap, Javascript, building small and medium web apps with React/Redux, animation libraries, and coding interactive layouts.</p>
          <p>I have a strong understanding of git/github workflow</p>
          <p>I also have backend experience using Node.js, PostgreSQL,  NOSQL</p>
          <p>View my <a target='_blank noopener noreferrer' style={{textDecoration: 'underline'}} href='https://drive.google.com/open?id=10Hgt_qm5Pew_ICMHEcZL8vSMdxVYC7pT'>resume</a> for more details on my experience</p>
        </div>
      </div>
    );
}