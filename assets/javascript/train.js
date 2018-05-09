var config = {
    apiKey: "AIzaSyA4GZN8adiHdgrruoGNjNhyUEERmbQIPfU",
    authDomain: "homework-db518.firebaseapp.com",
    databaseURL: "https://homework-db518.firebaseio.com",
    projectId: "homework-db518",
    storageBucket: "homework-db518.appspot.com",
    messagingSenderId: "189148284494"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

  var train = "";
  var destination = "";
  var first = "";
  var frequency = 0;

  $('#addBtn').on("click", function(){
    // event.preventDeafault();

 train = $('#train-Name').val().trim();
 destination = $('#destination-Time').val().trim();
 first = $('#first-Time').val().trim();
 frequency = $('#frequency-Input').val().trim();



dataRef.ref().push({

train: train,
destination: destination,
first: first,
frequency: frequency,
dateAdded: firebase.database.ServerValue.TIMESTAMP




});

  

  dataRef.ref().on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().train);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().first);
    console.log(snapshot.val().frequency);

    $("#train-Name").text(snapshot.val().train);
    $("#destination-Time").text(snapshot.val().destination);
    $("#first-Time").text(snapshot.val().first);
    $("#frequency-Input").text(snapshot.val().frequency);






//   });


});
dataRef.ref().on("child_added", function(snapshot) {
    // Change the HTML to reflect
    $("#train-display").text(snapshot.val().train);
    $("#destination-display").text(snapshot.val().destination);
    $("#first-display").text(snapshot.val().first);
    $("#frequency-display").text(snapshot.val().frequency);
  });


});