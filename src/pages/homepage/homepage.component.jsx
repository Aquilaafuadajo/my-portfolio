import React from 'react';

import Programmer from '../../assets/web-dev.png';
import {Link} from 'react-router-dom';

import './homepage.styles.scss';

const Homepage = () => {
  return ( 
      <div className='homepage'>  
        <div className='intro'>
          <h1>
            <span>H</span>
            <span>i</span>
            <span>,</span>
            <br/>
            <span>I</span>
            <span>'</span>
            <span>m</span>
            
            <span>E</span>
            <span>m</span>
            <span>m</span>
            <span>a</span>
            <span>n</span>
            <span>u</span>
            <span>e</span>
            <span>l</span>
            <span>,</span>
            <br/>
            <span>W</span>
            <span>e</span>
            <span>b</span>
            
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span> 
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
            <span>.</span>
          </h1>
          <div className='footer'>
            <h2>Front End Developer/ Freelancer</h2>
            <Link to='/contact'><button>Contact Me</button></Link>
          </div>
        </div>
        <div className='person'>
          <img src={Programmer} alt='programmer'/>
        </div>
      </div>
    );
}

export default Homepage;