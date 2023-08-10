import React, { useState } from "react";
import cartLogo from "../images/cart-logo.png";
import companyLogo from "../images/company-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const [isLoggedin, setIsLoggedIn] = useState(false);
	const hamburgerClick = () => {
		setIsActive(!isActive);
	};

	return (
		<div className="header">
			<div className="logo-container">
				<img className="company-logo" src={companyLogo} alt="Company Logo" />
			</div>
			<div className={`nav-items ${isActive ? "active" : ""}`}>
				<ul className="nav-list">
					<li className="nav-link">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-link">
					<Link to="/About/">About</Link>
					</li>
					<li className="nav-link">
					<Link to="/Contact/">Contact</Link>
					</li>
					<li className="nav-link">
						<a href="#">
							<img className="cart-logo" src={cartLogo} alt="Cart" />
						</a>
					</li>
					<button
						className="login-btn btn"
						onClick={() => {
							setIsLoggedIn(!isLoggedin);
						}}>
						{isLoggedin ? "LOGOUT" : "LOGIN"}
					</button>
				</ul>
			</div>
			<div className="hamburger" onClick={hamburgerClick}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
		</div>
	);
};

export default Header;
