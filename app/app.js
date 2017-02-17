require( 'angular/angular' );
require( 'angular-route/angular-route' );
require( 'angular-moment' );
require( './services/error/error' );
require( './factory/data' );
require( './controllers/controllers' );
require( './directives/directives' );

angular.module( 'app', [
  'ngRoute', 
  'controllers', 
  'directives', 
  'angularMoment', 
  'Data',
  'Error' 
  ] )

  /**
  * Config the app
  */
  .config(['$routeProvider','$locationProvider',
  function( $routeProvider, $locationProvider ) {

    $routeProvider.
    when( '/', {
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    } )
    .when( '/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    } )
    .when( '/signup', {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
    } )

    // protected routes
    .when( '/protected', {
        templateUrl: 'templates/protected/home.html'
    } )

    .otherwise( '/login' );

    $locationProvider.html5Mode(true);

  }])

  .run(['$rootScope', '$location', 'Data', function ($rootScope, $location, Data ) {

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

        
        var nextUrl = next.$$route.originalPath;
        

        // Un protected routes should go here.
        if( nextUrl == '/signup'  ) {

        }else {

          // If the user issnot logged in we check if the api token exists
          Data.get('auth').then( function( res ) {

            /**
             * Route the user to the login page if the user is not authenticated
             * or if the endpoint is 404
             */
            if( res.status == 401 || res.status == 404 ) {
              // No access token, denie access
              $location.path('/login');

            }else if( res.success == true ) {
              $location.path('/protected');
            }
          } );
        }
    });

  }]);
