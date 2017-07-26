import React, { Component } from 'react';

class GetImageButton extends Component {
     constructor(props){
          super(props)
     }
     render(){
          return (<button className="pure-button pure-button-primary margin-left margin" onClick={this.props.children}>Get Images</button>)
     }
}

export default GetImageButton;
