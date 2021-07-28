import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import { Navbar, Nav } from "react-bootstrap"
import Home from './routes/quadrticBezierCurve/index';
import Cubic from './routes/cubicBezierCurve/index';
class App extends Component {
	render() {
		return (
			<HashRouter basename="/">
				<div>
					<Navbar className="navbarcss" fixed="top" expand="lg" variant="dark">

						<Navbar.Brand href="/">TEAM 1</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">

							<Nav className="mr-auto">

								<Link className="linkText" to="/">Quadratic</Link>
								<Link className="linkText" to="/about">Cubic</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<hr />
					<div className='body-section'>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={Cubic} />
					</div>
					<div className="foot">

						<text>Copyright © 2021 DSU Computer Graphics Mini Project.</text>

					</div>
				</div>

			</HashRouter>
		);
	}
}




export default App;