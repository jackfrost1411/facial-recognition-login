import React, {Component} from 'react';
import './App.css';
import './css/main.css';
import './css/util.css';
import {Signup} from './signup.js';
import {Verify} from './verify.js';
export class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			signup : false,
			verify : false
		};
		this.backhome = this.backhome.bind(this);
	}
	backhome(){
		this.setState({
			signup: false,
			verify: false
		})
	}
	signup(){
		this.setState({
			signup: true,
			verify: false
		})
	}
	verify(){
		this.setState({
			signup: false,
			verify: true
		})
	}
	render(){
		let home = (
				<div>
					<div className="limiter">
						<div className="container-login100">
							<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
								<form className="login100-form validate-form flex-sb flex-w">
									<span className="login100-form-title p-b-53">
										Sign In Or Up :)
									</span>
									<div className="container-login100-form-btn m-t-17">
										<button onClick={this.verify.bind(this)} className="login100-form-btn">
											Sign In 
										</button>
									</div>
									<div className="container-login100-form-btn m-t-17">
										<button onClick={this.signup.bind(this)} className="login100-form-btn">
											Sign Up
										</button>
									</div>
									<div className="w-full text-center p-t-55">
										<span className="txt2">
										</span>
										<a href="#" className="txt2 bo1">
										</a>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div id="dropDownSelect1"></div></div>)

    	return (
    		<div>
    		{!this.state.signup && !this.state.verify ? home : ''}
    		{this.state.signup ? <Signup backhome={this.backhome}/> : ''}
    		{this.state.verify? <Verify backhome={this.backhome}/> : ''}
    		</div>
		)
	}
}
export default App;