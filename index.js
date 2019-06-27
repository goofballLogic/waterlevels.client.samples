var client = require( "waterlevels.client" ).default( process );

client.listProviders().then( function( providers ) {

    console.log( "Providers:" );
    console.log( providers );

} ).then( function() {

    return client.listDays( "waterlevel.ie" )

} ).then( function( days ) {

    console.log( "Data days for waterlevel.ie" );
    console.log( days );

} ).then( function() {

    return client.getData( "waterlevel.ie", "2012-07-31" );

} ).then( function( data ) {

    console.log( "Data for waterlevel.ie on 31st of July 2012" );
    console.log( data );

} ).then( function() {

    return client.listDays( "sepa.org.uk" );

} ).then( function( days ) {

    console.log( "Data days for sepa.org.uk" );
    console.log( days );

} ).then( function() {

    return client.getData( "sepa.org.uk", "2019-01-23" );

} ).then( function( data ) {

    console.log( "Data for sepa.org.uk on 1st of January 2019" );
    console.log( data );

} );

