import React, {Component} from 'react';
import './css/main.css';
import './css/util.css';
import './verify.css';
import Sketch from "react-p5";
const axios = require('axios');

let video;

export class Verify extends Component {

	constructor(props){
		super(props);
		this.state = {
			verify : false,
			idenity: ' '
		};
	}

	setup(p5='', canvasParentRef='') {
        p5.noCanvas();
        video = p5.createCapture(p5.VIDEO);        
    }

    stop(){
    	const tracks = document.querySelector("video").srcObject.getTracks();
		  	tracks.forEach(function(track) {
    				track.stop();
  			});
    }

    logout(){
    	this.stop();
    	this.props.backhome();
    }

    setup2(){
    	const button = document.getElementById('submit');
        button.addEventListener('click', async event => {
          video.loadPixels();
          console.log(video.canvas);
          const image64 = video.canvas.toDataURL();
          const data = { image64 };
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };
          const response = await axios.post('http://localhost:5000/verify', {'image64':image64});
          console.log(response.data.identity);
          if(response.data.identity){
          	this.stop();
	        this.setState({
	        	verify:true,
	        	idenity: response.data.identity
	        })
          } else {
          	this.stop();
          	alert("Not a registered user!")
          	this.props.backhome();
          }
        });
    }

	render(){

		let verify = (<div>
					<div className="limiter">
						<div className="container-login100">
							<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
								
									<span className="login100-form-title p-b-53">
										Sign In With
									</span>

									<input/>
									<br/><br/>
									<br/><br/>
									<br/><br/>
									<br/><br/>
									<br/><br/>
									<br/><br/>
									<br/><br/>

									<Sketch setup={this.setup} draw={this.draw}/>
									
									 
									<div className="container-login100-form-btn m-t-17">
										<button id="submit" onClick={this.setup2.bind(this)} className="login100-form-btn">
											Sign In
										</button>
									</div>
									<div className="container-login100-form-btn m-t-17">
										<button onClick={this.logout.bind(this)} className="login100-form-btn">
											Back!
										</button>
									</div>
								
							</div>
						</div>
					</div>
					<div id="dropDownSelect1"></div></div>
		)


    	return (<div >
    		{this.state.verify? <div><h1>Welcome, {this.state.idenity}.</h1>
    							<button onClick={this.props.backhome} className="container-login100-form-btn">Logout!</button>
    							</div> : verify }
    		</div>
		)
	}
}
export default Verify;