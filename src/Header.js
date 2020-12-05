import React from 'react';
import OriginalHeadshot from './OriginalHeadshot.jpg'
import './css/Header.css';
import Block from './Block';
import {skills} from './text';
const Header = () =>{
  return(
  <div className="ui sizer vertical segment">
    <div className="ui two column grid">
      <div className = "column">
        <div className="ui huge header">Geigh Zollicoffer</div>
        <div className="ui big header">Contact: gzollicoffer2@huskers.unl.edu</div>
        <div className="ui small header">About</div>
          <p>Hello! My name is Geigh Zollicoffer. I am a recent graduate from
          the University of Nebraska-Lincoln, and I wrote and
          currently host this website.
          I completed my double major in Computer Science and Mathematics with a minor in Music, and
          I am interested in continuing my education in the
          areas of Applied Mathematics and Data Science. Currently, I work as a data scientist at Catch Intelligence in Omaha, Ne, and
          also as a volunteer software engineer for Food for All, a nonprofit organization
          located in the United Kingdom. Outside of academics and work,
          my hobbies include running, NBA basketball, audio engineering, and piano.
          My current side projects include learning how to build an iOS app using
          the programming language Swift, and recording
          podcasts with my friends.
          </p>
      </div>
      <div className = "column">
        <img src={OriginalHeadshot} alt="header" width="375" height="256"/>
        <Block
          header = {skills[0].title}
          message = {skills[0].message}
          links = {skills[0].links}
        />
      </div>
  </div>
  </div>
);
};

export default Header;
