import React from 'react';
import { Document, Page } from 'react-pdf';
import ucarePDF from './ucare.pdf';
import fishPDF from './FishLengthSimulationPaper.pdf';
const HrefFormater = (props) => {
  if(!props.link.link){
    return <div></div>;
  }
  if(props.link.link === 'fishPDF'){
    return(
      <a href= {fishPDF}>
        <div class="ui animated button" tabindex="0">
          <div class="visible content">{props.link.desc}</div>
            <div class="hidden content">
              <i class="right arrow icon"></i>
            </div>
        </div>
      </a>
    )
  }
  return(
  <a href= {props.link.link}>
    <div class="ui animated button" tabindex="0">
      <div class="visible content">{props.link.desc}</div>
        <div class="hidden content">
          <i class="right arrow icon"></i>
        </div>
    </div>
  </a>
  )
}

export default HrefFormater;
