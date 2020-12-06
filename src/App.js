import React from 'react';
import Block from './Block';
import Header from './Header';
import {research} from './text';
import {positions} from './text';
import {groups} from './text';
import {conferences} from './text';
import './css/App.css';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class App extends React.Component{

  render(){
    
    return(
      <div className = "ui container">
        <Header />
          <div className="ui two column grid">
            <div className="row">
              <div className="column">
                <div className= "ui big header">Research Projects</div>
                <Block
                  header = {research[0].title}
                  message = {research[0].message}
                  links = {research[0].links}
                  />
                <Block
                  header = {research[1].title}
                  message = {research[1].message}
                  links = {research[1].links}
                  />
                <Block
                  header = {research[2].title}
                  message = {research[2].message}
                  links = {research[2].links}
                />
              </div>
              <div className="column">
                <div className= "ui big header">Undergraduate Positions</div>
                <Block
                  header = {positions[0].title}
                  message = {positions[0].message}
                  links = {positions[0].links}
                />
                <Block
                  header = {positions[1].title}
                  message = {positions[1].message}
                  links = {positions[1].links}
                />
                <Block
                  header = {positions[2].title}
                  message = {positions[2].message}
                  links = {positions[2].links}
                />
                <div className= "ui big header">Conferences Attended</div>
                <Block
                  header = {conferences[0].title}
                  message = {conferences[0].message}
                  links = {conferences[0].links}
                />
              </div>
            </div>
          </div>
          <Block
            header = {groups[0].title}
            message = {groups[0].message}
            links = {groups[0].links}
          />
        </div>
    );
  }
};

export default App;
