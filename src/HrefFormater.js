import React from 'react';
import { Document, Page } from 'react-pdf';
import ucarePDF from './documents/UCARE.pdf';
import fishPDF from './documents/FishLengthSimulationPaper.pdf';
const HrefFormater = (props) => {
  if(!props.link.link){
    return <div></div>;
  }
  if(props.link.link === 'fishPDF'){
    return(
      <a href= {fishPDF} without rel="noopener noreferrer" target="_blank">
        <div class="ui animated button" tabindex="0">
          <div class="visible content">{props.link.desc}</div>
            <div class="hidden content">
              <i class="right arrow icon"></i>
            </div>
        </div>
      </a>
    )
  }
  if(props.link.link === 'ucarePDF'){
    return(
      <a href= {ucarePDF} without rel="noopener noreferrer" target="_blank">
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
