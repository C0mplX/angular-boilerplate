describe( 'controller test', function() {

    describe( 'Testing signup Ctrl', function() {

        var $controller;
        var $scope;
        var controller;

        beforeEach( function() {
            angular.mock.module('app');
        } );
        beforeEach( function() {
            angular.mock.module('projTemplatesd');
        } );

        beforeEach( inject( function( _$controller_, Data ) {
            $controller     = _$controller_;
            $scope          = {};
            controller      = $controller( 'signupCtrl', {$scope: $scope, Data:Data} );
         } ) );

        it( '$scope.error should be defined', function() {
            expect($scope.error).toBeDefined();
        } );

        it( '$scope.signupUser should be defined', function() {
            expect($scope.signupUser).toBeDefined();
        } );

        it( 'Form submit should trigger $scope.signupUser', function() {

        } );

        it('$scope.signupUser shouls be called', function() {
            spyOn( $scope, 'signupUser' );
            $scope.signupUser();
            expect( $scope.signupUser ).toHaveBeenCalled();
        } );

    } );

} );