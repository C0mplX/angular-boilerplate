describe( "Unit test", function() {
    
    describe( "Testing error service", function() {

        var error = null;

        beforeEach( function() {
            angular.mock.module('app');
        } );

         beforeEach(inject(function(Error) {
            error = Error;
        } ) )

        it('Error service Should be defined', function() {
            expect(error).toBeDefined();
        } );

        it( "throwError function should be defined", function() {
            expect( error.throwError ).toBeDefined();
        } );

        it( "throwEror function should have a parameter", function() {
            var noParam = error.throwError();
            expect(noParam).toEqual("Paramter required");
        } )

        it( "throwEror function should return a obj", function() {
            var errorArray = [
                {
                    msg: 'All good'
                }
            ];

            var hasParam = error.throwError(errorArray);
            expect(hasParam).toEqual(
                {
                    state: true, 
                    messages: errorArray
                } 
            );
        } )

    } )

} )