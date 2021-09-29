
import './../App.css';


const Navbar = (props) => {
	const notLoggedIn = (
		<>
	        <li class="nav-item">
	          <a class="nav-link" aria-current="page" onClick={() => props.setPage("Register")}><h2>Register</h2></a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link" onClick={() => props.setPage("Login")}><h2>Login</h2></a>
	        </li>
	    </>
	)

	const loggedIn = (
		<>
	        <li class="nav-item">
	          <a class="nav-link" aria-current="page" onClick={props.handleLogout}><h2>Logout</h2></a>
	        </li>
		</>
	)
	
	
	
	return (
		<nav class="navbar navbar-light navbar-expand-lg bg-primary py-3">
		  	<div class="container-fluid">
		    	<h1 onClick={() => props.setPage("Dashboard")}> ASHA Music </h1>
		  	</div>
		  	<div class="collapse navbar-collapse" id="navbarNav">
		      	<ul class="navbar-nav ml-auto mx-0">
		      	{notLoggedIn}
		      		{/*sessionStorage.getItem('type') ? loggedIn : notLoggedIn*/}
		        </ul>
	    	</div>
		</nav>
	)
}

export default Navbar;