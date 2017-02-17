/**
* A simple production server to run the angular code.
* @version 1.0.0
* @author Ole Martin Skaug
*/
express     = require( "express" );
app         = express();
var http    = require( "http" ).createServer( app );

/**
 * Setup the port to use environment variables 
 * This is usefull when running services like heroku. 
 */
app.set( "port", ( process.env.PORT ) );

/**
 * Setup the static path to the angular files 
 */
app.use( express.static( __dirname + '/app' ) );

/**
 * Setup a base path so all the requests is routed to the index file 
 */
app.get('/*', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
});

/**
 * Setup the http listener
 */
http.listen( app.get( 'port' ), function() {
    console.log( 'server is running ' + process.env.PORT );
} )

