/* global moment firebase */

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyA_lw3hbdf9N03UbPrZ1NXRsFAcOD90GRw",
    authDomain: "timesheet-513c5.firebaseapp.com",
    databaseURL: "https://timesheet-513c5.firebaseio.com",
    projectId: "timesheet-513c5",
    storageBucket: "timesheet-513c5.appspot.com",
    messagingSenderId: "290725788615",
    appId: "1:290725788615:web:989967f6ac223da5cc37e2"
  };
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
