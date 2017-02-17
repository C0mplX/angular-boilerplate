/**
*
* This file holds all the controllers. Simply inject them as a dependenci and you are good to go.
* @version 1.0
*
* @uses require()
*/
require( './home/home' );
require( './login/loginCtrl' );
require( './signup/signupCtrl' );
angular.module( 'controllers', ['home', 'login', 'signup'] );
