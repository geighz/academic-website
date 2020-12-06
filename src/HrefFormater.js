import React from 'react';
import PdfOut from './PdfOut';
class HrefFormater extends React.Component{
  render(){
  if(!this.props.link.type){
    return <div></div>;
  }
  else if(this.props.link.type === 'pdf'){
    return(
      <PdfOut link= {this.props.link} />
    )
  }
  else if(this.props.link.type === 'url'){
    return(
    <a href= {this.props.link.link}>
      <div class="ui animated button" tabindex="0">
        <div class="visible content">{this.props.link.desc}</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
      </div>
    </a>
    )
  }
}
}

export default HrefFormater;
