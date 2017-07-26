import React, { Component } from 'react';
import axios from 'axios';
import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js';

const API_KEY = 'IBAvDFhDoGtkNVlvz3eT6xiXSuAeigK3SdhbUdDD';

class GetImageForm extends Component {
     constructor(props) {
          super(props)
          this.state = {
               rover: "Curiosity",
               camera: "FHAZ",
               images: [],
               sol: ""
          }
            this.fetchRoverImage = this.fetchRoverImage.bind(this);
     }
     _handleRover = (event) => {
          event.preventDefault();
          this.setState({ rover: event.target.value });
     }

     _handleCamera = (event) => {
          event.preventDefault();
          this.setState({ camera: event.target.value });
     }

     _handlesol = (event) => {
          event.preventDefault();
          this.setState({ sol: event.target.value });
     }

     fetchRoverImage = (event) => {
          event.preventDefault();
          let cam = this.state.camera;
          let rove = this.state.rover;
          let num = this.state.sol;

          let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

          axios.get(imageUrl).then(response => {
               this.setState({ images: response.data.photos })
               console.log(this.state);
          })
     }

     render() {
          return (
               <div className="text-center">
               <form className="pure-form form margin" onClick={this.handleSubmit}>
                    <div>
                    <label className="margin" htmlFor="rover">Rover</label>
                         <select onChange={this._handleRover} id="rover" value={this.state.value}>
                              <option value="Curiosity">Curiosity</option>
                              <option value="Opportunity">Opportunity</option>
                              <option value="Spirit">Spirit</option>
                         </select>
                    </div>
                    <div className="pure-control-group">
                    <label className="margin" htmlFor="camera">Camera Type</label>
                         <select onChange={this._handleCamera} id="rover" value={this.state.value}>
                              <option value="fhas">FHAZ (Front Hazard)</option>
                              <option value="rhaz">RHAZ (Rear Hazard)</option>
                              <option value="navcam">NAVCAM (Navigation Cam)</option>
                         </select>
                    </div>
                    <div className="pure-control-group">
                    <label className="margin" htmlFor="sol">Martian Sol: 1000-2000</label>
                              <input type="number" onChange={this._handleSol} max="2000" min="1000" value={this.state.value}/>
                    </div>
                    <GetImageButton onClick={this.fetchRoverImage}/>
               </form>
               <ImageDisplay data={this.state.images}/>
               </div>
          )
     }
}
export default GetImageForm;
