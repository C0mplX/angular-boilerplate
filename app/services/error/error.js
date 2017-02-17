angular.module( 'Error', [] ).service( "Error", [ function() {

    /**
     * A simple service to structure the 
     * Errors coming from a restfull API
     * @param errorMsg
     * @return obj
     */
    this.throwError = function(errorMsg) {

        // Check if there is a parameter 
        if( !errorMsg ) return 'Paramter required';
        return {
            state: true,
            messages: errorMsg
        };

    }


} ] );
