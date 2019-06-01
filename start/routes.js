'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', "AuthController.authenticate");
Route.resource('mensalidade', "MensalidadeController").apiOnly();
Route.get('/mensalidade/mensalidadePaga/:id', "MensalidadeController.mensalidadePaga");
Route.get('/mensalidade/mensalidadeApagar/:id', "MensalidadeController.mensalidadeApagar");
Route.get('/boleto', "BoletoController.index");
Route.post('/dadosBoleto/:id', "BoletoController.dadosBoleto");
Route.get('/requerimento', "RequerimentoController.index");
Route.post('/boleto/envioemail/:id', "BoletoController.envioEmail");

