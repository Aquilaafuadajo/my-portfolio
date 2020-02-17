import React from 'react';
import {Link} from 'react-router-dom'; 
import {ReactComponent as About} from '../../assets/about.svg';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Skill} from '../../assets/skill.svg';
import {ReactComponent as Work} from '../../assets/work.svg';
import {ReactComponent as Contact} from '../../assets/letter.svg';
import {ReactComponent as Twitter} from '../../assets/twitter.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as Github} from '../../assets/github.svg'; 

import './nav-bar.styles.scss'; 

const Navbar = () => {
  return ( 
      <div className='menu'>
        <div className='mainnav'>
          <Link className='links' to='/'><Home className='svg'/><span>HOME</span></Link>
          <Link className='links' to='/about'><About className='svg'/><span>ABOUT</span></Link>
          <Link className='links' to='/skill'><Skill className='svg'/><span>SKILLS</span></Link>
          <Link className='links' to='/mywork'><Work className='svg'/><span>MYWORK</span></Link>
          <Link className='links' to='/contact'><Contact className='svg'/><span>CONTACT</span></Link>
        </div>
        <div className='social'>
          <a href='https://twitter.com/afuadajo'><Twitter className='svg'/></a>
          <a href='https://www.linkedin.com/in/emmanuel-afuadajo-97121b185/'><Linkedin className='svg'/></a>
          <a href='https://github.com/aquilaafuadajo/'><Github className='svg'/></a>
        </div>
      </div>
    );
}

export default Navbar;