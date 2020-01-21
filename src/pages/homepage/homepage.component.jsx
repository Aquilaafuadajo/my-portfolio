import React from 'react';
import {ReactComponent as Person} from '../../assets/person.svg';
import {Link} from 'react-router-dom';

import './homepage.styles.scss';

const Homepage = () => {
  return ( 
      <div className={`homepage page`}>
        <div className='intro'>
          <h1>
            <span>H</span>
            <span>i</span>
            <span>,</span>
            <br/>
            <span>I</span>
            <span>'</span>
            <span>m</span>
            
            <span>A</span>
            <span>q</span>
            <span>u</span>
            <span>i</span>
            <span>l</span>
            <span>a</span>
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
          <Person className='png'/>
        </div>
      </div>
    );
}

export default Homepage;