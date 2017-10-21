import React from 'react'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from './asyncComponent'

const AsyncHomePage = asyncComponent(() => import('../pages/HomePage'))
const AsyncRegisterPage = asyncComponent(() => import('../pages/RegisterPage'))
const AsyncLoginPage = asyncComponent(() => import('../pages/LoginPage'))

const MainRouter = () => (
	<main>
		<Switch>
			<Route path="/" exact component={AsyncHomePage} />
			<Route path="/register" component={AsyncRegisterPage} />
			<Route path="/login" component={AsyncLoginPage} />
		</Switch>
	</main>
)

export default MainRouter
