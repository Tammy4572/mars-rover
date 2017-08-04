import React, { Component } from 'react';

class GetImageButton extends Component {
     constructor(props){
          super(props)
     }
     render(){
          return (
               <button  className="pure-button button-primary margin-left margin" onClick={this.props.onClick}>
                    Get Images
                </button>
          )
     }
}

export default GetImageButton;
