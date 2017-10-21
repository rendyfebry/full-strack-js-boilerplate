import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import MainNavbar from './components/MainNavbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

import './App.css'

const PageRouter = () => (
	<main>
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/login" component={LoginPage} />
		</Switch>
	</main>
)

const App = () => (
	<BrowserRouter>
		<div className="App">
			<MainNavbar />
			<PageRouter />
		</div>
	</BrowserRouter>
)

export default App
