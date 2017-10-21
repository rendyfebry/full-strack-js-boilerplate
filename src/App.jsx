import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import MainNavbar from './components/MainNavbar'
import MainRouter from './components/MainRouter'

const App = () => (
	<BrowserRouter>
		<div className="App">
			<MainNavbar />
			<MainRouter />
		</div>
	</BrowserRouter>
)

export default App
