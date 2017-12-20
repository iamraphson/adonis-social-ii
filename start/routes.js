'use strict'

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/logout', 'AuthController.logout').as('logout')
Route.get('/auth/:provider', 'AuthController.redirectToProvider').as('social.login')
Route.get('/authenticated/:provider', 'AuthController.handleProviderCallback').as('social.login.callback')
