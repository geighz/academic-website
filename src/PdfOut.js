import React from 'react';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class PdfOut extends React.Component{
  state = {fileUrl: ''}
  componentDidMount(){
    Storage.get(this.props.link.link)
    .then(data => {
      this.setState({
        fileUrl: data
      })
    })
    .catch(err => {
      console.log('Error getting file.')
    })
    }
    render(){
      return(
        <a href= {this.state.fileUrl} without rel="noopener noreferrer" target="_blank">
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
export default PdfOut;
