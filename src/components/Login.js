import {useState, useEffect } from 'react';
//import { Link} from "react-router-dom";
const axios = require('axios');
const Login = (props) => {
	var success = null;

	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}
 	const [userType, setUserType] = useState("");
	const [emailValue, setEmailValue] = useInput({ type: "text", className: "form-control", id: "username" });
 	const [passwordValue, setPasswordValue] = useInput({ type: "password", className: "form-control", id: "password" });

 	const handleLogin = (e) => {
 		e.preventDefault();
 		let values = {userType, emailValue, passwordValue}
 		axios.post("http://localhost:5000/login", values)
 		.then(response => alert(response.data))
 	}

	return (
		<div className="col-md-4 mx-auto mt-5">
			<div>
				<h2 class="mt-3">Login</h2>
				<form>
					<p className="mb-1"> Choose user type: </p>
					<div class="form-check form-check-inline">
					  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setUserType("listener")}/>
					  <label class="form-check-label" for="flexRadioDefault1">Listener</label>
					</div>
					<div class="form-check form-check-inline">
					  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setUserType("artist")}/>
					  <label class="form-check-label" for="flexRadioDefault2">Artist</label>
					</div>
					<div class="mb-3">
				    	<label for="username" class="form-label">Email</label>
				    	{setEmailValue}
				  	</div>
				  	<div class="mb-3">
				    	<label for="password" class="form-label">Password</label>
				    	{setPasswordValue}
				  	</div>
				  	<button type="submit" class="btn btn-primary" onClick={handleLogin}>Login</button>
				</form>
			</div>
		</div>
	)
}

export default Login;