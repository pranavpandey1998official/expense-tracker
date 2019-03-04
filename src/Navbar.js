import React from 'react';
import { Link } from 'react-router-dom'

const navStyle = {
	margin: '0 0 20px 0'
};

const Navbar = () => (
	<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" style={navStyle}>
		<Link className="navbar-brand" to="/form">Money Tracker</Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<Link className="nav-link" to="/form">Form<span className="sr-only">(current)</span></Link>
				</li>			
				<li className="nav-item">
					<Link className="nav-link" to="/data">Data</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/contact">Contact</Link>
				</li>
			</ul>
			{/* <form className="form-inline my-2 my-lg-0">
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form> */}
		</div>
	</nav>
);

export default Navbar;