/* global moment firebase */

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
// Your web app's Firebase configuration

  // Initialize Firebase
  firebase.initializeApp(config);
  
  
  // Create a variable to reference the database.
  var db = firebase.database();
  
  let counter = 0;
  /* --------------------------------------------------------------
  // Link to Firebase Database for viewer tracking
  var con = db.ref('.info/connected')
  var conUsers = db.ref('/users')
  
  con.on("value", function(snap){
    if(snap.val()){
      conUsers.push(true).onDisconnect().remove();
    } 
  }, function(errorObject)
  {
    console.log("The read failed: " + errorObject.code);
  })
  -----------------------------------------------------------------*/

  $('#submit').on('click', function(e){
      
    e.preventDefault();

    counter++;
    
    db.ref().push({
        name: $('#inputName').val(),
        role: $('#inputRole').val(),
        rate: parseInt($("#bidder-price").val().trim()),
        counter: counter,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
  });

  db.ref().on('child_added', function(childSnapshot){
      console.log(childSnapshot.val().counter);
  }, function(errorObject)
  {
    console.log("The read failed: " + errorObject.code);
  })

