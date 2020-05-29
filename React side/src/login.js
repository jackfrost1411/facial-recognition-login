import React, {Component} from 'react';
import './css/main.css';
import './css/util.css';
import './App.css';
import Sketch from "react-p5";

let video;

export class Signup extends Component {

	constructor(props){
		super(props);
		this.state = {
			signup : false,
			verify : false,
		};
	}

	setup(p5='', canvasParentRef='') {
        p5.noCanvas();
        video = p5.createCapture(p5.VIDEO);
        //video.size(540, 540);
        
    }

    setup2(){
    	const button = document.getElementById('submit');
        button.addEventListener('click', async event => {
          const mood = document.getElementById('mood').value;
          //video.size(540, 540);
          video.loadPixels();
          console.log(video.canvas);
          const image64 = video.canvas.toDataURL();
          const data = { mood, image64 };
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };
          const response = await fetch('http://localhost:3000/api', options);
          //const json = await response.json();
          console.log(response.ok);
        });
    }

	render(){

		let signup = (<div>
					<div className="limiter">
						<div className="container-login100">
							<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
								
									<span className="login100-form-title p-b-53">
										Sign Up With
									</span>
									
									<div className="p-t-31 p-b-9">
										<span className="txt1">
											Username
										</span>
									</div>
									
									<div className="wrap-input100 validate-input" data-validate = "Username is required">
										<input className="input100" type="text" id="mood" name="username" />
										<span className="focus-input100"></span>
									</div>
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
											Sign Up
										</button>
									</div>
								
							</div>
						</div>
					</div>
					<div id="dropDownSelect1"></div></div>
		)


    	return (<div >
    		{ signup }
    		</div>
		)
	}
}
export default Signup;