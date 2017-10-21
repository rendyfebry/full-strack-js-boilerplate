import React from 'react'
import logo from '../assets/logo.svg'

class LoginPage extends React.PureComponent {
	render() {
		return (
			<div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React </h1>
				</header>
				<p className="App-intro">
					You're currently on LoginPage
				</p>
			</div>
		)
	}
}

export default LoginPage