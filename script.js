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

let database = firebase.database();

resetplayers();


// Click on Rock 
$("#rock").on("click",function () {
    console.log("you pick rock")
    // event.preventDefault();
    let choice = "rock";
    if ($("#1").is(":checked")) {
        name = "player1";
        console.log("Player 1");
    }
    else if ($("#2").is(":checked")) {
        name = "player2";
        console.log("player 2")
    }
    else {
        alert("pick a plyaer Numebr")
    }
    var play = {
        name: name,
        choice: choice
    }

    database.ref("/" + name).push(play);
    console.log(play.name);
    console.log(play.choice);

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());
      
        // Store everything into a variable.
        var name = childSnapshot.val().name;
        var choice = childSnapshot.val().choice;
        
      
        // Employee Info
        console.log(name);
        console.log(choice);
    
    });
    // // Firebase watcher + initial loader HINT: .on("value")
    // database.ref().on("value", function (snapshot) {

    //     // Log everything that's coming out of snapshot
    //    // console.log(snapshot.val());
    //     //console.log(snapshot.val().name);
    //     console.log(snapshot.val().player1.choice);
    //     console.log("player 1 above and player 2 below")
    //     console.log(snapshot.val().player2.choice);

    // });
});

$("#paper").on("click", function () {
    console.log("you pick paper")
    choice = "paper";
    if ($("#1").is(":checked")) {
        name = "player1";
        console.log("Player 1");
    }
    else if ($("#2").is(":checked")) {
        name = "player2";
        console.log("player 2")
    }
    else {
        alert("pick a plyaer Numebr")
    }
    database.ref("/" + name).set({
        choice: choice
    })
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function (snapshot) {

        // Log everything that's coming out of snapshot
        console.log(snapshot.val().player1.choice);
        console.log("player 1 above and player 2 below")
        console.log(snapshot.val().player2.choice);
    });
});

$("#scissor").on("click", function () {
    console.log("you pick scissor")
    choice = "scissor";
    if ($("#1").is(":checked")) {
        name = "player1";
        console.log("Player 1");
    }
    else if ($("#2").is(":checked")) {
        name = "player2";
        console.log("player 2")
    }
    else {
        alert("pick a plyaer Numebr")
    }
    database.ref("/" + name).set({
        choice: choice
    })
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function (snapshot) {

        // Log everything that's coming out of snapshot
        console.log(snapshot.val().player1.choice);
        console.log("player 1 above and player 2 below")
        console.log(snapshot.val().player2.choice);
    });
});

// var player1 = "Mary";
// var player2 = "Tom";
// var choice1 = "rock";
// var choice2 = "paper";
// var game=["Mary","rock",0];
// var game1=["tom","paper",1];



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

    // click the reset button
  $("#reset").on("click", resetgame);

    // click the test button
  $("#test").on("click", function(){
    alert("test");

    database.ref().once('value').then(function(snapshot){
        var datanow = snapshot.val();
        console.log(datanow);
        console.log(datanow.user1.playa)
        var player1there = datanow.user1.playa;
        console.log(datanow.user2.play)
   
        /// both ofmy conditional statements are working to test if the data is empty!! yay
        // logic for what happens when ther eis no user1 data

        if(datanow.user1.playa.trim()==''){
        console.log("player1 is empty")
    }

        //logic for what happens when there is no user1 data using Jquery
    if (!$.trim(datanow.user1.playa)){   
        alert("What follows is blank: ");
    }

}); 

    // var data = {
    //     playa : "player1",
    //     play: "rock"
    // }

    // var data2 = {
    //     playa : "player2",
    //     play : "paper"
    // }
        
    //     database.ref("/user2").set(data2)
    //     database.ref().on("child_added", function(childSnapshot) {
    //     var empName2 = childSnapshot.val().play;
    //     console.log(empName2);
    //     }); 

      
    //     database.ref("/user1").set(data)
    //     database.ref().on("child_added", function(childSnapshot) {
    //     var empName = childSnapshot.val().play;
    //     var username = childSnapshot.val().playa;
    //     console.log(empName);
    //     console.log(username);
    //     })
})  // end test 

function checkName(){
    if (!$("#1").is(":checked") && !$("#2").is(":checked")){
        alert("pick a player 1 or player 2 please")
}

function usercheck(){
    if (!$("#1").is(":checked")) {
        name = "player1";
    }
    else if ($("#2").is(":checked")) {
        name = "player2";
    }
    else {
        alert("pick a plyaer Numebr")

    }
}

function resetgame(){
    var data = {
        playa : "",
        play: ""
    }
    var data2 = {
        playa : "",
        play : ""
    }
        database.ref("/user2").set(data2)  
        database.ref("/user1").set(data)       
}