import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Particles from 'react-particles-js';

import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import MyWork from './pages/my-work/my-work.component';
import MySkill from './pages/skill/skill.component';
import Homepage from './pages/homepage/homepage.component';

import Navbar from './components/navbar/nav-bar.component';
import HamburgerMenu from './components/hamburger-menu/HamburgerMenu';

import './App.css';


const params={
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#4c95af",
        blur: 5
      }
    }
  },
  interactivity: {
    events: {
        onhover: {
            enable: true,
            mode: "repulse"
        }
    }
}
}

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={params} />
      <HamburgerMenu className='hide'/>
      <div className='nav-bar'>
        <Navbar />
      </div>
      <div className='routes'>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/skill' component={MySkill}></Route>
        <Route exact path='/mywork' component={MyWork}></Route>
        <Route exact path='/contact' component={Contact}></Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
