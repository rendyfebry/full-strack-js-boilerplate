
import React from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class Example extends React.Component {
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
					<NavbarBrand href="/">React App</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link to="/" href="/" className="nav-link">Home</Link>
							</NavItem>
							<NavItem>
								<Link to="/login" href="/login" className="nav-link">Login</Link>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}
