window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData( form );

    // Define what happens on successful data submission
    XHR.addEventListener( "load", function(event) {
      alert( event.target.responseText );
    } );

    // Define what happens in case of error
    XHR.addEventListener( "error", function( event ) {
      alert( 'Oops! Something went wrong.' );
    } );

    // Set up our request
    XHR.open( "POST", "https://example.com/cors.php" );

    // The data sent is what the user provided in the form
    XHR.send( FD );
  }

  // Access the form element...
  const form = document.getElementById( "myForm" );

  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendData();
  } );
} );

var db = require('./db.json');
var villagers = db.villagers;

function charSearch() {
  for (let i = 0; i < villagers.length; i++) {
    var obj = villagers[i];
    console.log(obj.birthday);
  }
}

console.log(charSearch());

module.exports = charSearch;
