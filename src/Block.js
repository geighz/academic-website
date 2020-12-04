import React from 'react';
import HrefFormater from './HrefFormater';
import { Document, Page } from 'react-pdf';
import ucarePDF from './ucare.pdf';
import fishPDF from './FishLengthSimulationPaper.pdf';
const Block = (props) => {
  const renderedListLink = props.links.map(link => {
    return <HrefFormater link={link}/>;
  });
  const renderedListMessage = props.message.map(message => {
    return <li>{message}</li>;
  });

  return(
<div>
<h5 className ="ui top attached header">
  {props.header}
</h5>
<div className ="ui attached segment">
  <p>{renderedListMessage}</p>
</div>
<div class="ui attached segment">
  <p>{renderedListLink}</p>
</div>
</div>
);
}

export default Block;
