import React from 'react';
import Form from '../form/form'

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
			.then(response => response.json())
			.then(user => {
				if(user){
					this.props.loadUser(user)
					this.props.onRouteChange('home');
				} 
			})
	}	

	displayErrorMessage = () => {
		//placeholder for 'invalid email' error
	}


	render() {
		const { onRouteChange } = this.props;	
		let formFields = [
		    {
		      title: 'Name: ', 
		      classname: 'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100', 
		      type: 'text', 
		      name: 'name', 
		      id: 'name',
		      onChange: this.onNameChange
		    },		    {
		      title: 'Email: ', 
		      classname: 'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100', 
		      type: 'email', 
		      name: 'email', 
		      id: 'email',
		      onChange: this.onEmailChange
		    },
		    {
		      title: 'Password: ', 
		      classname: 'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100', 
		      type: 'password', 
		      name: 'password', 
		      id: 'password',
		      onChange: this.onPasswordChange
		    }
		  ]

		let submitButton = {
			    className: "b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",
			    type: "submit",
			    value: "Sign Up",
			    onclick: this.onSubmitRegister
	  		};

	  	let reRouteButton = {
	  		onclick: () => onRouteChange('signin'),
	  		classname: "f6 link dim black db pointer",
	  		text: 'Existing User? Sign in instead'
	  	}

		return (
			<Form 
					formTitle = 'Register' 
					formID = 'sign_up'
					fields = {formFields} 
					submitButton = {submitButton} 
					errorMessage = {this.displayErrorMessage()}
					altButton = {reRouteButton}/>
		);
	}
}

export default Register

