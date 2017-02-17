angular.module( 'signup', [] ).controller( 'signupCtrl', [ '$scope', '$location', 'Data', 'Error',
function( $scope, $location, Data, Error ) {

    // Set the default error values 
    $scope.error = [];

    /**
     * @function for adding a new user 
     * @param user obj 
     * @uses Data factory
     * @return void
     */
    $scope.signupUser = function( user ) {

        //Reset the error scope
        $scope.error = [];

        Data.post( 'signup', {
            nickname    : user.nickname,
            email       : user.email,
            password    : user.password
        } ).then( function( res ) {

            //check if the repsonse is without errors 
            if( res.success == true ) {

                /**
                 * Signup was completed, route the user to the signup  page
                 * Here you can add a toaster or some message to the user 
                 * that tells them the signup was successfull
                 */
                $location.path( '/login' );

            }

            // Check if the response has errors
            if( res.status != 200 && res.success != true ) {
                
                //Mark error scope
                $scope.error = Error.throwError( res.data.message );

            }

        } )

    }

}]);