import React, {Component} from 'react';
import './css/main.css';
import './css/util.css';
//import Background from './images/bg-01.jpg';
export class Signup extends Component {

	constructor(props){
		super(props);
		this.state = {
			signup : false,
			verify : false
		};
	}

	render(){
		let signup = (<div>
					<div className="limiter">
						<div className="container-login100">
							<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
								<form className="login100-form validate-form flex-sb flex-w">
									<span className="login100-form-title p-b-53">
										Sign Up With
									</span>
									
									<div className="p-t-31 p-b-9">
										<span className="txt1">
											Username
										</span>
									</div>
									<div className="wrap-input100 validate-input" data-validate = "Username is required">
										<input className="input100" type="text" name="username" />
										<span className="focus-input100"></span>
									</div>
									
									<div className="p-t-13 p-b-9">
										<span className="txt1">
											Password
										</span>
									</div>
									<div className="wrap-input100 validate-input" data-validate = "Password is required">
										<input className="input100" type="password" name="pass" />
										<span className="focus-input100"></span>
									</div>

									<div className="container-login100-form-btn m-t-17">
										<button className="login100-form-btn">
											Sign In
										</button>
									</div>

									<div className="w-full text-center p-t-55">
										<span className="txt2">
											Not a member?
										</span>

										<a href="#" className="txt2 bo1">
											Sign up now
										</a>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div id="dropDownSelect1"></div></div>
		)

    	return (<div>
    		{ signup }
    		</div>
		)
	}
}
export default Signup;