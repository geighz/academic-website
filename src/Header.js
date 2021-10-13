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
        <div className="ui big header">Contact: gzollicoffer3@gatech.edu</div>
        <div className="ui small header">About</div>
          <p>Hello! My name is Geigh Zollicoffer. I am a current PhD student at The Georgia Institute of Technology! I wrote and
          currently host this AWS website, please email me if you find any bugs! AWS can play tricks on me sometimes.
          Anyways, I completed my double major in Computer Science and Mathematics with a minor in Music, and
          I am interested in the
          areas of Applied Mathematics, Machine Learning, Deep Learning, and Optimization.
          Previously, I have worked as a data scientist consultant, 
          a software engineer(paid and volunteer), a cyber security intern, and have done research involving the University of Nebraska, and Yale Univeristy.
          Concerning academics, my experiences are shown below.
          However, outside of academics and work,
          my hobbies include running, NBA basketball, audio engineering, piano, and recording
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
