
import React from 'react'
import { Link } from 'react-router-dom'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'

import './MainNavbar.css'

class MainNavbar extends React.Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false,
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}

	render() {
		return (
			<div>
				<Navbar color="faded" light expand="md">
					<Link to="/" href="/" className="navbar-brand">React App</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link to="/login" href="/login" className="nav-link">Login</Link>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/rendyfebry/fullstack-js-boilerplate">Github</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

export default MainNavbar
