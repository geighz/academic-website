import React from 'react';
import { Document, Page } from 'react-pdf';
import ucarePDF from './documents/UCARE.pdf';
import fishPDF from './documents/FishLengthSimulationPaper.pdf';
import PdfOut from './subcomponents/PdfOut';
class HrefFormater = (props) = {
  if(!props.link.type){
    return <div></div>;
  }
  else if(props.link.type === 'pdf'){
    return(
      <PdfOut link=props.link />
    )
  }
  else if(props.link.type = 'url'){
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
}

export default HrefFormater;
