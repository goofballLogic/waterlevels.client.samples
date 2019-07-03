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

    return client.getDayData( "waterlevel.ie", "2012-07-31" );

} ).then( function( data ) {

    console.log( "Data for waterlevel.ie on 31st of July 2012" );
    console.log( data );

} ).then( function() {

    return client.listStations( "waterlevel.ie" );

} ).then( function( stations ) {

    console.log( "Stations for waterlevel.ie" );
    console.log( stations.slice( 0, 10 ) );
    console.log( "... first 10 of", stations.length );

} ).then( function() {

    return client.getStationData( "waterlevel.ie", "Dangan_0000030098" );

} ).then( function( data ) {

    console.log( "Data for waterlevel.ie: Dangan station" );
    console.dir( data, { depth: 4 } );

} ).then( function() {

    var stationGroup = [ "Aasleagh_Bridge_0000032060", "Abington_0000025003", "Aghoo_0000036028" ];
    return client.getStationGroupData( "waterlevel.ie", stationGroup );

} ).then( function( data ) {

    console.log( "Data for waterlevel.ie: Aaslegh Bridge, Abington and Aghoo stations" );
    console.dir( data, { depth: 4 } );

} );

