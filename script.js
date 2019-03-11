  console.log("Hi")
  // Initialize Firebase

  let keys = {
    FIREBASE: "AIzaSyCWeKH7cIkQUMeHPcB-Gewuzet-DhzjL8Q",
    GOOGLE_MAPS: ""
}

  var config = {
    apiKey: keys.FIREBASE,
    authDomain: "rock-paper-scissor-beee6.firebaseapp.com",
    databaseURL: "https://rock-paper-scissor-beee6.firebaseio.com",
    projectId: "rock-paper-scissor-beee6",
    storageBucket: "rock-paper-scissor-beee6.appspot.com",
    messagingSenderId: "810100283331"
  };
  firebase.initializeApp(config);

  //console.log(firebase);
  //console.log("hi again");
let database = firebase.database();
//console.log(database);

//  Grab name from the user input text field
//var name = document.getElementById("input").value;
//console.log(name);


$("#rock").on("click",function(){
    console.log("you pick rock")
    event.preventDefault();
    if($("#name").val()===""){
        alert("Enter Your Name")
    }
    else{
    name = $("#name").val().trim();
    choice = "rock";
    
    database.ref("/" + name).set({
        name : name,
        choice : choice
    })
    }  // close the else statement
    //var userId = firebase.auth().currentUser.uid;
    //console.log("userid");
    //console.log(userId);


// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot
   console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().choice);
 
});
});  // closes the rock click funtion

$("#paper").on("click",function(){
    console.log("you pick paper")
});

$("#scissor").on("click",function(){
    console.log("you pick scissor")
});

var player1 = "Mary";
var player2 = "Tom";
var choice1 = "rock";
var choice2 = "paper";
var game=["Mary","rock",0];
var game1=["tom","paper",1];



//return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
// var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
// ...
// });
//database.ref("/user").push(game);
//database.ref("/user").push(game1);





    // Change the HTML to reflect
    // $("#name-display").text(snapshot.val().name);
    // $("#email-display").text(snapshot.val().email);
    // $("#age-display").text(snapshot.val().age);
    // $("#comment-display").text(snapshot.val().comment);

    // Handle the errors
 // }, function(errorObject) {
  //  console.log("Errors handled: " + errorObject.code);