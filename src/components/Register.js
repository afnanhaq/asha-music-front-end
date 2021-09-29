import { useState } from 'react';

const axios = require('axios');
const Register = () => {

	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const handleRegister = (e) => {
	 		e.preventDefault();
	 		let values = {};
	 		if (userType === "listener") {
	 			values = {
	 				userType, emailValue, passwordValue, firstNameValue, lastNameValue, dobValue
	 			}
	 		}
	 		else if (userType === "artist") {
	 			values = {
	 				userType, emailValue, passwordValue, firstNameValue, lastNameValue, dobValue, artistNameValue
	 			}
	 		}
	 		else {
	 			alert("Please choose a user type");
	 		}
 		axios.post("http://localhost:5000/register", values)
 		.then(response => alert(response.data))
 	}
 	
 	const [userType, setUserType] = useState("");
 	const [emailValue, setEmailValue] = useInput({ type: "email", className: "form-control", id: "email" });
 	const [passwordValue, setPasswordValue] = useInput({ type: "password", className: "form-control", id: "password" });
 	const [firstNameValue, setFirstNameValue] = useInput({ type: "text", className: "form-control", id: "firstName" });
 	const [lastNameValue, setLastNameValue] = useInput({ type: "text", className: "form-control", id: "lastName" });
 	const [dobValue, setDobValue] = useInput({ type: "date", className: "form-control", id: "dob" });
 	const [artistNameValue, setArtistNameValue] = useInput({ type: "text", className: "form-control", id: "artistName" });

 	const artistnameshowing = (
 		<div class="mb-3">
	    	<label for="dob" class="form-label">Artist Name</label>
	    	{setArtistNameValue}
	  	</div>
 	)

	return (
		<div className="col-md-4 mx-auto mt-5">
			<h2 class="mt-3">Register</h2>
			<form>
			  	<div>
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
				    	<label for="email" class="form-label">Email</label>
				    	{setEmailValue}
				  	</div>
				  	<div class="mb-3">
				    	<label for="Password" class="form-label">Password</label>
				    	{setPasswordValue}
				  	</div>
				  	<div class="mb-3">
				    	<label for="firstName" class="form-label">First name</label>
				    	{setFirstNameValue}
				  	</div>
				  	<div class="mb-3">
				    	<label for="lastName" class="form-label">Last name</label>
				    	{setLastNameValue}
				  	</div>
				  	{userType === "artist" ? artistnameshowing : null}
				  	<div class="mb-3">
				    	<label for="dob" class="form-label">Date of birth</label>
				    	{setDobValue}
				  	</div>

				</div>
			  	<hr />
			  	<button type="submit" class="btn btn-primary" onClick={handleRegister}>Register</button>
			</form>
		</div>
	)
}

export default Register;