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
  var tMinutesTillTrain;
  var nextTrain;
    // Assumptions

  $('#addBtn').on("click", function(event){
    event.preventDefault();

// ('currentTime').text('#mins-display');
 train = $('#train-Name').val().trim();
 destination = $('#destination-Time').val().trim();
 first = $('#first-Time').val().trim();
 frequency = $('#frequency-Input').val().trim();



var tFrequency = parseInt(frequency);

// Time is 3:30 AM
var firstTime = first;

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
nextTrain = moment(nextTrain).format("hh:mm")

  // debugger;


dataRef.ref().push({

  train: train,
  destination: destination,
  first: first,
  frequency: frequency,
  tMinutesTillTrain: tMinutesTillTrain,
  nextTrain: nextTrain,

  dateAdded: firebase.database.ServerValue.TIMESTAMP
  
  });


});
dataRef.ref().on("child_added", function(snapshot) {
    
$('#trainBody').append("<tr><td>" + snapshot.val().train + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().frequency + "</td><td>" + snapshot.val().tMinutesTillTrain + "</td><td>" + snapshot.val().nextTrain + "</td></tr>")

});
