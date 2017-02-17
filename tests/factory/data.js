
describe('Factory Data test', function() {

    var data;

    beforeEach( function() {
        angular.mock.module( "app" );
    } )

    beforeEach(inject(function(Data) {
        data = Data;
    } ) );
    
    it('Data Factory should be instantiated', function() {
        expect(data).toBeDefined();
    });

    it('Data.get should be defined', function() {
        expect(data.get).toBeDefined();
    });

    it('Data.post should be defined', function() {
        expect(data.post).toBeDefined();
    });

    it('Data.put should be defined', function() {
        expect(data.put).toBeDefined();
    });

    it('Data.delete should be defined', function() {
        expect(data.delete).toBeDefined();
    });

});
    
