import { Link, NavLink, Outlet } from "react-router-dom"
import React, { useEffect } from 'react';
import Footer from '../Components/Footer'



const Root = () => {

	return (
	<div className="app">
		<header>

		<div className="header-row">
		    <NavLink to="/Contact" className="header-options"></NavLink>
			<NavLink to="/" className="header-options"></NavLink>
			<NavLink to="/Produkter" className="header-options"></NavLink>
			<NavLink to="/OmOss" className="header-options"></NavLink>
			<NavLink to="/Login" className="header-options"></NavLink>
			<NavLink to="/Profile" className="header-options"></NavLink>
			<NavLink to="/Channels" className="header-options"></NavLink>
            </div>
		</header>

		<main>
			<Outlet />
		</main>
				

		<footer>
			<Footer />
		</footer>

	</div>
	);
}




export default Root